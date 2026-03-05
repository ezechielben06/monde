'use server';
/**
 * @fileOverview An AI wellness recommender tool that analyzes user data to provide personalized daily recommendations.
 *
 * - aiWellnessRecommenderTool - A function that generates personalized wellness recommendations.
 * - AiWellnessRecommenderToolInput - The input type for the aiWellnessRecommenderTool function.
 * - AiWellnessRecommenderToolOutput - The return type for the aiWellnessRecommenderTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiWellnessRecommenderToolInputSchema = z.object({
  userPreferences: z
    .string()
    .describe(
      'User preferences regarding wellness activities, diet, and personal development. Examples: "prefers yoga over running", "vegetarian diet", "likes guided meditation", "wants to improve public speaking skills".'
    ),
  userGoals: z
    .string()
    .describe(
      'User\'s current wellness goals. Examples: "lose 5kg", "build muscle", "reduce stress", "improve sleep quality", "enhance focus", "learn to cook healthy meals".'
    ),
  recentProgress: z
    .string()
    .describe(
      'Summary of user\'s recent progress and challenges. Examples: "successfully completed 3 workouts this week, ate healthy for 5 days, meditated daily. Struggled with late-night snacking.", "feeling more energetic but finding it hard to stick to a consistent sleep schedule."'
    ),
  currentDate: z
    .string()
    .describe(
      'The current date in a human-readable format, e.g., "Monday, October 26, 2023".'
    ),
});
export type AiWellnessRecommenderToolInput = z.infer<
  typeof AiWellnessRecommenderToolInputSchema
>;

const RecommendationItemSchema = z.object({
  type: z
    .enum(['activity', 'recipe', 'mindfulness_exercise', 'coaching_insight'])
    .describe('The type of recommendation.'),
  title: z.string().describe('A concise title for the recommendation.'),
  description: z.string().describe('A brief description of the recommendation.'),
  details:
    z.string().optional().describe('Optional detailed instructions or information related to the recommendation (e.g., ingredients, steps, duration).'),
});

const AiWellnessRecommenderToolOutputSchema = z.object({
  recommendations:
    z.array(RecommendationItemSchema).describe('An array of personalized wellness recommendations.'),
  overallInsight:
    z.string().optional().describe('An optional overall insight or encouraging message based on the user\'s input.'),
});
export type AiWellnessRecommenderToolOutput = z.infer<
  typeof AiWellnessRecommenderToolOutputSchema
>;

export async function aiWellnessRecommenderTool(
  input: Omit<AiWellnessRecommenderToolInput, 'currentDate'>
): Promise<AiWellnessRecommenderToolOutput> {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return aiWellnessRecommenderToolFlow({...input, currentDate});
}

const aiWellnessRecommenderPrompt = ai.definePrompt({
  name: 'aiWellnessRecommenderPrompt',
  input: {schema: AiWellnessRecommenderToolInputSchema},
  output: {schema: AiWellnessRecommenderToolOutputSchema},
  prompt: `You are an AI wellness coach. Your goal is to provide daily personalized recommendations to help users achieve their wellness goals.

Current Date: {{{currentDate}}}

User Profile:
- Preferences: {{{userPreferences}}}
- Goals: {{{userGoals}}}
- Recent Progress/Challenges: {{{recentProgress}}}

Based on the information above, generate a list of 3-5 personalized recommendations. Each recommendation should be of a specific type (activity, recipe, mindfulness_exercise, coaching_insight) and include a title, description, and optional detailed instructions. Also, provide an optional overall insight or encouraging message.

Ensure the recommendations are actionable, relevant to the user's goals and progress, and aligned with their preferences. If the user has a specific challenge mentioned in their recent progress, try to address it with a recommendation.

Example of a good recommendation:
{
  "recommendations": [
    {
      "type": "activity",
      "title": "Morning Power Walk (30 min)",
      "description": "Start your day with a brisk 30-minute power walk to boost metabolism and improve mood.",
      "details": "Find a scenic route in your neighborhood. Focus on maintaining a steady pace where you can still hold a conversation but feel slightly breathless. Listen to an uplifting podcast or music."
    },
    {
      "type": "recipe",
      "title": "Quick Berry Smoothie",
      "description": "A refreshing and nutrient-packed smoothie perfect for breakfast or a post-workout snack.",
      "details": "Ingredients: 1 cup mixed berries, 1/2 banana, 1/2 cup Greek yogurt, 1/4 cup almond milk, 1 tbsp chia seeds. Blend all until smooth."
    },
    {
      "type": "mindfulness_exercise",
      "title": "5-Minute Gratitude Journaling",
      "description": "Dedicate five minutes to reflect on things you are grateful for to foster a positive mindset.",
      "details": "Find a quiet spot. Write down at least three things you are genuinely grateful for today, no matter how small. Focus on the feelings associated with each item."
    },
    {
      "type": "coaching_insight",
      "title": "Consistency Over Intensity",
      "description": "Remember that small, consistent efforts yield greater long-term results than sporadic, intense bursts. Celebrate your small wins!",
      "details": "Instead of aiming for perfection, focus on showing up daily, even if it's just for 15 minutes. This builds momentum and makes your wellness journey sustainable."
    }
  ],
  "overallInsight": "Your dedication is paying off! Keep focusing on building those consistent habits, and don't forget to celebrate your progress, big or small. You're doing great!"
}
`,
});

const aiWellnessRecommenderToolFlow = ai.defineFlow(
  {
    name: 'aiWellnessRecommenderToolFlow',
    inputSchema: AiWellnessRecommenderToolInputSchema,
    outputSchema: AiWellnessRecommenderToolOutputSchema,
  },
  async input => {
    const {output} = await aiWellnessRecommenderPrompt(input);
    return output!;
  }
);
