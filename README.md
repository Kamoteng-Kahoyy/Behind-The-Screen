# How to run

Install Node.js and npm: Tailwind CSS requires Node.js and npm (which comes with Node.js). You can download Node.js from the official website. After installing, you can check the versions by running node -v and npm -v in your terminal.

Initialize a new project: Navigate to your project directory in the terminal and run npm init -y to create a new package.json file.

Install Tailwind CSS: Run npm install tailwindcss to install Tailwind CSS.

Create a Tailwind configuration file: Run npx tailwindcss init to create a tailwind.config.js file. This file is where you can customize your installation.

Create your CSS file: Create a new CSS file in your src directory (you may need to create this directory). At the top of this file, add the following lines:

Process your CSS with Tailwind: Run the following command to process your CSS file with Tailwind:

Replace input.css and style.css with your actual input and output file names.

Link the processed CSS file in your HTML: In your HTML file, add a link to the processed CSS file:

Open your HTML file in a browser: You can now open your HTML file in a browser to see the result. If you've set up the --watch flag in the Tailwind command, any changes you make to your CSS file will automatically be processed, and you can see them by refreshing your browser.