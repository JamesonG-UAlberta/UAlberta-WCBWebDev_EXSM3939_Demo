# Exercises

1. Create a component that contains a button. When the user clicks the button, the button's colours will invert (white text on black background). When the user clicks the button again, it will return to its normal form. 
*HINT: Use a CSS class to assign styles.*

        <InvertingButton />
2. Create a component with a simple adding machine. It will contain a paragraph (containing the text 0) and 3 buttons (1, 10, 100). When one of the buttons is clicked, add that value to the number in the paragraph. 
*HINT: For concise code (reused across buttons), reference ColourThingy.js.*

        <AddingMachine />
3. Create a component that will accept a property called name, and greet the user by their name.

        <GreetUser name="John" />
    >Hello, John!
4. Create a component that generates a mad lib (custom written) using properties passed in.

        <MadLib name="Jane" place="Edmonton" food="soup" verb="running" feeling="sad" />
5. Create a component that accepts a course name and grade percentage via inputs. When submitted, it adds the values to a table (trimmed text). The table should have headings and a running average at the bottom. All numeric values should be rounded to the nearest tenth.

    **BONUS:** Add a third field for weight / grade points, and factor that into the average calculation.

        <GradeChart />

    | Course      | Grade       |
    | ----------- | ----------- |
    | English     | 86.5        |
    | Math        | 90.2        |
    | **Average** | 88.4        |