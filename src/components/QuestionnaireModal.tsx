import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
  onComplete: () => void;
}

const ageRanges = ['20-30', '30-40', '40-50', '50-60', '60+'];

const helpTopics = [
  { id: 'emotional', label: 'Creating positive habits' },
  { id: 'relationships', label: 'Becoming Anxiety & Stress free' },
  { id: 'identity', label: 'Build confidence' },
  { id: 'personal-growth', label: 'Creating positive mindset' },
  { id: 'life-purpose', label: 'Emotional Intelligence' },
  { id: 'meditation', label: 'Create new beliefs' },
  { id: 'meditation', label: 'Find your purpose' },
  { id: 'meditation', label: 'Mindfulness & Inner peace' },
  { id: 'meditation', label: 'Create meaningful relationships' },
];

const dynamicQuestions: Record<string, string[]> = {
  emotional: [
    'What specific emotional challenges are you currently facing?',
    'How would you rate your current stress levels on a scale of 1-10?',
  ],
  relationships: [
    'What type of relationship support are you seeking?',
    'What challenges are you experiencing in your relationships?',
  ],
  identity: [
    'What aspects of your identity are you exploring?',
    'How comfortable do you feel expressing your authentic self?',
  ],
  'personal-growth': [
    'What areas of personal growth are most important to you right now?',
    'What obstacles are preventing you from reaching your potential?',
  ],
  'life-purpose': [
    'How clear are you about your life purpose and direction?',
    'What would make your life feel more meaningful?',
  ],
  meditation: [
    'What is your experience level with meditation and mindfulness?',
    'What would you like to achieve through meditation practice?',
  ],
};

const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  isOpen,
  onClose,
  userEmail,
  onComplete,
}) => {
  const [step, setStep] = useState(1);
  const [ageRange, setAgeRange] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId) ? prev.filter((t) => t !== topicId) : [...prev, topicId]
    );
  };

  const handleNext = () => {
    if (step === 1 && ageRange && selectedTopics.length > 0) {
      setStep(2);
    }
  };

  const getQuestionsForSelectedTopics = () => {
    const questions: Array<{ topic: string; question: string; key: string }> = [];
    selectedTopics.forEach((topic) => {
      const topicQuestions = dynamicQuestions[topic] || [];
      topicQuestions.forEach((question, index) => {
        questions.push({
          topic,
          question,
          key: `${topic}-${index}`,
        });
      });
    });
    return questions;
  };

 

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'user_questionnaires'), {
        user_email: userEmail,
        age_range: ageRange,
        help_topics: selectedTopics,
        created_at: new Date(),
      });

      onComplete();
      onClose();
    } catch (error) {
      console.error('Error saving questionnaire:', error);
      alert('Failed to save questionnaire. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const questions = getQuestionsForSelectedTopics();

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50/95 via-white/95 to-slate-50/95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-blue-100">
        <div className="bg-gradient-to-r from-blue-600 to-slate-700 px-8 py-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {step === 1 ? "Welcome! Let's Get to Know You" : 'Tell Us More About Your Journey'}
            </h2>
          </div>
          <p className="text-blue-50 text-sm ml-14">
            {step === 1 ? 'Help us personalize your experience' : 'Your insights matter to us'}
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <div
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                step === 1 ? 'bg-white' : 'bg-white/30'
              }`}
            />
            <div
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                step === 2 ? 'bg-white' : 'bg-white/30'
              }`}
            />
          </div>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
          {step === 1 && (
            <div className="space-y-8">
              {/* Age Range */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100">
                <label className="block text-xl font-bold text-gray-900 mb-2 flex items-center space-x-2">
                  <span className="text-2xl">🎂</span>
                  <span>Please select your age group</span>
                </label>
                <p className="text-sm text-gray-600 mb-5">
                  This helps us tailor our guidance to your life stage
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {ageRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setAgeRange(range)}
                      className={`py-4 px-5 rounded-xl border-2 transition-all duration-300 font-semibold transform hover:scale-105 shadow-sm ${
                        ageRange === range
                          ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-gray-700'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Help Topics */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-100">
                <label className="block text-xl font-bold text-gray-900 mb-2 flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-rose-500" />
                  <span>What are you seeking help with?</span>
                </label>
                <p className="text-sm text-gray-600 mb-5">
                  Select all areas where you'd like support (multiple selections encouraged)
                </p>
                <div className="space-y-3">
                  {helpTopics.map((topic) => (
                    <label
                      key={topic.label}
                      className={`flex items-center space-x-4 p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedTopics.includes(topic.id)
                          ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedTopics.includes(topic.label)}
                        onChange={() => handleTopicToggle(topic.label)}
                        className="h-6 w-6 text-blue-600 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                      />
                      <span className={`text-base font-semibold flex-1 ${
                        selectedTopics.includes(topic.label) ? 'text-blue-900' : 'text-gray-700'
                      }`}>
                        {topic.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!ageRange || selectedTopics.length === 0}
                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-slate-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 shadow-lg"
              >
                <span>Continue</span>
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireModal;
