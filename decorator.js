class Coffee {
    cost() {
        return 5;
    }

    description() {
        return "Café simple";
    }

    type() {
        return "";
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.decoratedCoffee = coffee;
    }

    cost() {
        return this.decoratedCoffee.cost() + 1;
    }

    description() {
        return this.decoratedCoffee.description() + ", leche";
    }

    type() {
        return this.decoratedCoffee.type() + " milk";
    }
}

class SugarDecorator {
    constructor(coffee) {
        this.decoratedCoffee = coffee;
    }

    cost() {
        return this.decoratedCoffee.cost() + 0.5;
    }

    description() {
        return this.decoratedCoffee.description() + ", azúcar";
    }

    type() {
        return this.decoratedCoffee.type() + " sugar";
    }
}

class ChocolateDecorator {
    constructor(coffee) {
        this.decoratedCoffee = coffee;
    }

    cost() {
        return this.decoratedCoffee.cost() + 1.5;
    }

    description() {
        return this.decoratedCoffee.description() + ", chocolate";
    }

    type() {
        return this.decoratedCoffee.type() + " chocolate";
    }
}

class CreamDecorator {
    constructor(coffee) {
        this.decoratedCoffee = coffee;
    }

    cost() {
        return this.decoratedCoffee.cost() + 2;
    }

    description() {
        return this.decoratedCoffee.description() + ", crema";
    }

    type() {
        return this.decoratedCoffee.type() + " cream";
    }
}

// Inicializar café
let myCoffee = new Coffee();

const originalCoffee = new Coffee(); // Para reiniciar

// Función para actualizar la visualización
function updateOutput() {
    const output = document.getElementById("output");
    output.classList.add("fade");
    setTimeout(() => {
        output.innerHTML = `
            <p>Descripción: ${myCoffee.description()}</p>
            <p>Costo: $${myCoffee.cost().toFixed(2)}</p>
        `;
        output.classList.remove("fade");
    }, 300);

    // Actualizar animación de la taza
    const coffeeElement = document.querySelector(".coffee");
    coffeeElement.style.height = "100%"; // Simular que la taza está llena
    coffeeElement.className = "coffee" + myCoffee.type(); // Actualizar tipo de café
}

// Event Listeners para los botones
document.getElementById("addMilk").addEventListener("click", () => {
    myCoffee = new MilkDecorator(myCoffee);
    updateOutput();
});

document.getElementById("addSugar").addEventListener("click", () => {
    myCoffee = new SugarDecorator(myCoffee);
    updateOutput();
});

document.getElementById("addChocolate").addEventListener("click", () => {
    myCoffee = new ChocolateDecorator(myCoffee);
    updateOutput();
});

document.getElementById("addCream").addEventListener("click", () => {
    myCoffee = new CreamDecorator(myCoffee);
    updateOutput();
});

document.getElementById("reset").addEventListener("click", () => {
    myCoffee = originalCoffee;
    updateOutput();
});

// Inicializar la visualización
updateOutput();