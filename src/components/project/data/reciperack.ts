export const reciperack = {
  title: "RECIPERACK",
  summary:
    "In the application's current state, reciperack serves two purposes: to provide a hub to store, edit, and follow your favorite online recipes, and to provide a tool that permits the organisation of a user's food week using these collected recipes via a meal calendar.",
  motivations: [
    "The motivation to build reciperack stems from my love of cooking and frequent navigation of online recipes. Common in many of these types of sites is a sub-optimal user experience that seem to favor pop-ups and advertisements which obstruct half the page and cause these bizarre loading patterns that lead to you losing your place on the page.",
    "Equipped with this experience, I sensed an opportunity to build something that offered an alternative experience while solving a different problem: recipe decentralization! Often my favorite recipes are spread across so many different sites, and if I haven't saved them somewhere, some favorites can end up getting forgotten about - disappointing when you get a craving for those lost recipes.",
    "With a little bit of copy-and-paste action (as you'll discover below), reciperack allows a user to centralize their favorite recipes all in one place and delivers an ad-free UI that formats instructions and ingredients to make following along easier. No longer will it take forever to find and navigate your most beloved recipes, and say goodbye to meal-time indecision!",
  ],
  features: [
    {
      title: "ONLINE RECIPE CENTRALIZATION",
      paras: [
        "First and foremost, reciperack is an application made for keeping your favorite online recipes in one place. In order to do this effectively, I needed some way to extract the information from the target recipe, process it, and present the data in a format that was easy to follow. Asking users to copy-paste the pertinent recipe information (title, ingredients, steps, source URL) into a series of form inputs was the chosen solution.",
        "From here, the implementation factors in the native new-lines present in the ingredients and steps strings copied from the source recipe, so that when the time comes to display the information on the client, they retain their formatting. Repeat this process for all your online recipes and lo-and-behold: you have a recipe hub!",
        "Clicking on any of the recipe titles takes you to a \"detail\" page, where you can view the recipe steps, ingredients, and notes without any of the obstruction we're all used to by now from the source websites. You can even toggle ingredients, so that when you're following along with the recipe it is abundantly clear which ingredients you've already used, almost acting as a progress bar for the completion of your recipe.",
      ],
    },
    {
      title: "WEEKLY MEAL PLANS",
      paras: [
        "In the spirit of staying organised and expediting surprisingly quite time-intensive things like deciding what to have for dinner and when, the weekly meal planning feature was built.",
        "",
        "",
        "",
      ],
    },
  ],
  local: false, // project is deployed, not run locally
  link: "https://reciperack.vercel.app/",
  repo: "https://github.com/j-mcQueen/reciperack",
};
