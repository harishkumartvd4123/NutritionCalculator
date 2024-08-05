const nutrientData = 
        {
            "apple": { calories: 52, protein: 0.3, fat: 0.2, carbs: 14 },
            "banana": { calories: 89, protein: 1.1, fat: 0.3, carbs: 23 },
            "carrot": { calories: 41, protein: 0.9, fat: 0.2, carbs: 10 },
            "orange": { calories: 73,protein: 1.3,fat: 0.2,carbs: 16.5},
            "mango": { calories: 99,protein: 1.4,fat: 0.6,carbs: 24.7},
            "carrot": { calories: 25,protein: 0.5,fat: 0,carbs: 6},
            "beetroot": { calories: 58,protein: 2.2,fat: 0.2,carbs: 13},

    
        };

        let totalNutrition = 
        {
            calories: 0,
            protein: 0,
            fat: 0,
            carbs: 0
        };

        function addIngredient() 
        {
            const ingredient = document.getElementById("ingredient").value.toLowerCase();
            const quantity = parseFloat(document.getElementById("quantity").value);

            if (!ingredient || isNaN(quantity) || quantity <= 0) 
            {
                alert("Please enter a valid ingredient and quantity.");
                return;
            }

            const nutrientInfo = nutrientData[ingredient];
            if (!nutrientInfo) 
            {
                alert("Ingredient not found.");
                return;
            }

            const nutrition = 
            {
                calories: nutrientInfo.calories * (quantity / 100),
                protein: nutrientInfo.protein * (quantity / 100),
                fat: nutrientInfo.fat * (quantity / 100),
                carbs: nutrientInfo.carbs * (quantity / 100)
            };

            totalNutrition.calories += nutrition.calories;
            totalNutrition.protein += nutrition.protein;
            totalNutrition.fat += nutrition.fat;
            totalNutrition.carbs += nutrition.carbs;

            updateIngredientList(ingredient, quantity, nutrition);
            updateTotalNutrition();
        }

        function updateIngredientList(ingredient, quantity, nutrition) 
        {
            const ingredientsList = document.getElementById("ingredients");
            const listItem = document.createElement("li");
            listItem.textContent = `${ingredient} (${quantity}g): Calories ${nutrition.calories.toFixed(2)}, Protein ${nutrition.protein.toFixed(2)}g, Fat ${nutrition.fat.toFixed(2)}g, Carbs ${nutrition.carbs.toFixed(2)}g`;
            ingredientsList.appendChild(listItem);
        }

        function updateTotalNutrition() 
        {
            document.getElementById("total-calories").textContent = `Calories: ${totalNutrition.calories.toFixed(2)}`;
            document.getElementById("total-protein").textContent = `Protein: ${totalNutrition.protein.toFixed(2)}g`;
            document.getElementById("total-fat").textContent = `Fat: ${totalNutrition.fat.toFixed(2)}g`;
            document.getElementById("total-carbs").textContent = `Carbohydrates: ${totalNutrition.carbs.toFixed(2)}g`;
        }