"use client";
import React, { useState, useMemo } from 'react';

// Type definitions for cheat sheet data
interface Topic {
  code: string;
  use: string;
}

interface Section {
  [topicName: string]: Topic;
}

interface Language {
  color: string;
  bgColor: string;
  borderColor: string;
  sections: {
    [sectionName: string]: Section;
  };
}

interface CheatSheets {
  [language: string]: Language;
}

// Simple SVG icons to replace lucide-react
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Comprehensive cheat sheet data
const cheatSheets: CheatSheets = {
  Python: {
    color: 'from-blue-600 to-green-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    sections: {
      'Basic Syntax': {
        'Variables & Types': {
          code: `# Variables (dynamic typing)
name = "John"          # string
age = 25              # int
height = 5.9          # float
is_student = True     # boolean
items = [1, 2, 3]     # list
coords = (10, 20)     # tuple
person = {"name": "John"}  # dict`,
          use: 'Store and manipulate different types of data. Python automatically infers types.'
        },
        'Control Flow': {
          code: `# If statements
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")

# Loops
for i in range(5):
    print(i)

for item in items:
    print(item)

while condition:
    # do something
    break`,
          use: 'Control program execution flow with conditions and loops.'
        },
        'Operators': {
          code: `# Arithmetic
+ - * / // % **

# Comparison  
== != < > <= >= 

# Logical
and or not

# Membership
in, not in

# Identity
is, is not`,
          use: 'Perform operations on variables and test conditions.'
        }
      },
      'Functions': {
        'Function Definition': {
          code: `# Basic function
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Lambda function
square = lambda x: x ** 2

# Function with *args and **kwargs
def flexible_func(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

# Decorators
def timer(func):
    def wrapper(*args, **kwargs):
        # timing logic
        return func(*args, **kwargs)
    return wrapper

@timer
def my_function():
    pass`,
          use: 'Organize code into reusable blocks. Use decorators for cross-cutting concerns.'
        }
      },
      'Data Structures': {
        'Lists': {
          code: `# Creation and operations
numbers = [1, 2, 3, 4, 5]
numbers.append(6)        # Add to end
numbers.insert(0, 0)     # Insert at index
numbers.remove(3)        # Remove value
popped = numbers.pop()   # Remove and return last
numbers.extend([7, 8])   # Add multiple items

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in numbers if x % 2 == 0]`,
          use: 'Store ordered, mutable collections. Use for sequences that need frequent modification.'
        },
        'Dictionaries': {
          code: `# Creation and operations
person = {"name": "John", "age": 30}
person["city"] = "NYC"         # Add key-value
age = person.get("age", 0)     # Safe access
person.update({"job": "Dev"})  # Add multiple

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}

# Useful methods
keys = person.keys()
values = person.values()
items = person.items()`,
          use: 'Store key-value pairs for fast lookups. Use when you need to associate data.'
        },
        'Sets': {
          code: `# Creation and operations
unique_nums = {1, 2, 3, 4, 5}
unique_nums.add(6)
unique_nums.remove(1)
unique_nums.discard(10)  # Won't error if not found

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2         # {1, 2, 3, 4, 5}
intersection = set1 & set2  # {3}
difference = set1 - set2    # {1, 2}`,
          use: 'Store unique values and perform mathematical set operations efficiently.'
        },
        'Collections Module': {
          code: `from collections import defaultdict, Counter, deque

# defaultdict - never raises KeyError
dd = defaultdict(list)
dd['key'].append('value')

# Counter - count hashable objects
counter = Counter(['a', 'b', 'a', 'c', 'b'])
# Counter({'a': 2, 'b': 2, 'c': 1})

# deque - double-ended queue
dq = deque([1, 2, 3])
dq.appendleft(0)  # Add to left
dq.append(4)      # Add to right`,
          use: 'Specialized data structures for specific use cases like counting, queues, and default values.'
        }
      },
      'Input/Output': {
        'Console I/O': {
          code: `# Output
print("Hello, World!")
print(f"Name: {name}, Age: {age}")
print("Values:", 1, 2, 3, sep=", ", end="\\n")

# Input
name = input("Enter your name: ")
age = int(input("Enter your age: "))

# Formatted output
print(f"Pi is approximately {3.14159:.2f}")
print("Score: {:>10}".format(score))`,
          use: 'Interact with users through console input/output and format displayed data.'
        }
      },
      'File I/O': {
        'Reading Files': {
          code: `# Read entire file
with open('file.txt', 'r') as f:
    content = f.read()

# Read line by line
with open('file.txt', 'r') as f:
    for line in f:
        print(line.strip())

# Read all lines into list
with open('file.txt', 'r') as f:
    lines = f.readlines()

# JSON files
import json
with open('data.json', 'r') as f:
    data = json.load(f)`,
          use: 'Read data from files. Use context managers (with) for automatic file closing.'
        },
        'Writing Files': {
          code: `# Write to file
with open('output.txt', 'w') as f:
    f.write("Hello, World!\\n")
    f.writelines(["Line 1\\n", "Line 2\\n"])

# Append to file
with open('log.txt', 'a') as f:
    f.write("New log entry\\n")

# Write JSON
import json
data = {"name": "John", "age": 30}
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)`,
          use: 'Save data to files. Use different modes: "w" (write), "a" (append), "r+" (read/write).'
        }
      },
      'Random Numbers': {
        'Random Module': {
          code: `import random

# Random float between 0 and 1
rand_float = random.random()

# Random integer in range
rand_int = random.randint(1, 10)  # 1 to 10 inclusive
rand_range = random.randrange(0, 10, 2)  # 0,2,4,6,8

# Random choice from sequence
color = random.choice(['red', 'blue', 'green'])
colors = random.choices(['r', 'g', 'b'], k=5)  # With replacement
sample = random.sample([1,2,3,4,5], 3)  # Without replacement

# Shuffle list in place
random.shuffle(my_list)

# Set seed for reproducibility
random.seed(42)`,
          use: 'Generate random numbers for simulations, games, sampling, and testing.'
        }
      },
      'Error Handling': {
        'Try/Except': {
          code: `# Basic exception handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError as e:
    print(f"Value error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("No errors occurred")
finally:
    print("This always runs")

# Raising exceptions
if age < 0:
    raise ValueError("Age cannot be negative")`,
          use: 'Handle errors gracefully and provide meaningful error messages to users.'
        }
      }
    }
  },
  JavaScript: {
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    sections: {
      'Basic Syntax': {
        'Variables & Types': {
          code: `// Variable declarations
let name = "John";           // mutable
const age = 25;             // immutable
var oldStyle = "avoid";      // function-scoped

// Types
let str = "Hello";          // string
let num = 42;               // number
let bool = true;            // boolean
let arr = [1, 2, 3];        // array
let obj = {key: "value"};   // object
let nothing = null;         // null
let undefined_var;          // undefined

// Template literals
let message = \`Hello, \${name}! You are \${age} years old.\`;`,
          use: 'Store and manipulate data. Use const by default, let when reassignment needed.'
        },
        'Control Flow': {
          code: `// If statements
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teen");
} else {
    console.log("Child");
}

// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";

// Switch
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    default:
        console.log("Another day");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (const item of array) {
    console.log(item);
}

while (condition) {
    // do something
}`,
          use: 'Control program flow with conditions, loops, and logical branching.'
        }
      },
      'Functions': {
        'Function Types': {
          code: `// Function declaration
function greet(name, greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

// Function expression
const square = function(x) {
    return x * x;
};

// Arrow functions
const add = (a, b) => a + b;
const multiply = (a, b) => {
    return a * b;
};

// Higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);

// Async functions
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}`,
          use: 'Create reusable code blocks. Use arrow functions for callbacks and short functions.'
        }
      },
      'Data Structures': {
        'Arrays': {
          code: `// Creation and basic operations
const arr = [1, 2, 3, 4, 5];
arr.push(6);              // Add to end
arr.unshift(0);           // Add to beginning
const last = arr.pop();   // Remove from end
const first = arr.shift(); // Remove from beginning

// Array methods
const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const found = arr.find(x => x > 3);
const index = arr.findIndex(x => x === 3);
const exists = arr.includes(3);

// Destructuring
const [first, second, ...rest] = arr;

// Spread operator
const newArr = [...arr, 6, 7, 8];`,
          use: 'Store ordered collections with powerful built-in methods for data manipulation.'
        },
        'Objects': {
          code: `// Object creation
const person = {
    name: "John",
    age: 30,
    city: "NYC"
};

// Property access
console.log(person.name);
console.log(person["age"]);

// Adding/modifying properties
person.job = "Developer";
person["salary"] = 70000;

// Object methods
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

// Destructuring
const {name, age, ...otherProps} = person;

// Object spread
const updatedPerson = {...person, age: 31};`,
          use: 'Store key-value pairs and create structured data with properties and methods.'
        },
        'Maps and Sets': {
          code: `// Map - key-value pairs with any key type
const map = new Map();
map.set("name", "John");
map.set(1, "one");
map.set(true, "boolean key");

console.log(map.get("name"));
console.log(map.has(1));
map.delete(true);

// Iterate
for (const [key, value] of map) {
    console.log(key, value);
}

// Set - unique values
const set = new Set([1, 2, 3, 3, 4]);
set.add(5);
set.delete(1);
console.log(set.has(2));

// Convert to array
const uniqueArray = [...set];`,
          use: 'Use Map for key-value pairs with non-string keys. Use Set for unique collections.'
        }
      },
      'Input/Output': {
        'Console & DOM': {
          code: `// Console output
console.log("Hello, World!");
console.error("This is an error");
console.warn("This is a warning");
console.table([{name: "John", age: 30}]);

// User input (browser)
const name = prompt("Enter your name:");
const confirmed = confirm("Are you sure?");

// DOM manipulation
const element = document.getElementById("myId");
const elements = document.querySelectorAll(".myClass");

element.textContent = "New text";
element.innerHTML = "<b>Bold text</b>";
element.addEventListener("click", () => {
    console.log("Clicked!");
});`,
          use: 'Output data to console and interact with web page elements in the browser.'
        }
      },
      'File I/O': {
        'File Operations': {
          code: `// Reading files (browser)
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        const content = e.target.result;
        console.log(content);
    };
    
    reader.readAsText(file);
});

// Fetch API for HTTP requests
async function loadData() {
    try {
        const response = await fetch('/data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Download data as file
function downloadData(data, filename) {
    const blob = new Blob([JSON.stringify(data)], 
        {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}`,
          use: 'Handle file operations in browser environment and communicate with servers.'
        }
      },
      'Random Numbers': {
        'Math.random()': {
          code: `// Random float between 0 and 1
const random = Math.random();

// Random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random element from array
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Shuffle array
function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// Random boolean
const randomBool = Math.random() < 0.5;

// UUID generation (simple)
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}`,
          use: 'Generate random numbers for games, simulations, unique IDs, and randomized behavior.'
        }
      },
      'Error Handling': {
        'Try/Catch': {
          code: `// Basic error handling
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Cleanup code here");
}

// Async error handling
async function asyncFunction() {
    try {
        const data = await fetch('/api/data');
        return await data.json();
    } catch (error) {
        throw new Error(\`Failed to fetch: \${error.message}\`);
    }
}

// Custom errors
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// Promise error handling
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));`,
          use: 'Handle errors gracefully in both synchronous and asynchronous code.'
        }
      }
    }
  },
  Java: {
    color: 'from-red-600 to-orange-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    sections: {
      'Basic Syntax': {
        'Variables & Types': {
          code: `// Primitive types
int age = 25;
double height = 5.9;
boolean isStudent = true;
char grade = 'A';
long population = 7800000000L;
float price = 9.99f;

// Reference types
String name = "John";
int[] numbers = {1, 2, 3, 4, 5};
ArrayList<String> list = new ArrayList<>();

// Constants
final int MAX_SIZE = 100;
final String COMPANY_NAME = "TechCorp";

// Type casting
int intValue = (int) 3.14;
double doubleValue = intValue;  // Automatic casting`,
          use: 'Declare strongly-typed variables. Use primitives for performance, objects for functionality.'
        },
        'Control Flow': {
          code: `// If statements
if (age >= 18) {
    System.out.println("Adult");
} else if (age >= 13) {
    System.out.println("Teen");
} else {
    System.out.println("Child");
}

// Switch statement
switch (grade) {
    case 'A':
        System.out.println("Excellent");
        break;
    case 'B':
        System.out.println("Good");
        break;
    default:
        System.out.println("Keep trying");
}

// Loops
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

for (String item : list) {
    System.out.println(item);
}

while (condition) {
    // do something
}`,
          use: 'Control program execution with structured conditional and loop statements.'
        }
      },
      'Functions': {
        'Methods': {
          code: `public class Calculator {
    // Static method
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Instance method
    public double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }
    
    // Method overloading
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public double multiply(double a, double b) {
        return a * b;
    }
    
    // Varargs
    public int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
}

// Lambda expressions (Java 8+)
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(n -> System.out.println(n));
List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());`,
          use: 'Organize code into reusable methods. Use static methods for utilities, instance methods for object behavior.'
        }
      },
      'Data Structures': {
        'Collections Framework': {
          code: `import java.util.*;

// ArrayList - dynamic array
List<String> list = new ArrayList<>();
list.add("item1");
list.add("item2");
list.remove(0);
String first = list.get(0);

// LinkedList - doubly-linked list
LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.addFirst(1);
linkedList.addLast(2);

// HashMap - key-value pairs
Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
Integer apples = map.get("apple");
boolean hasKey = map.containsKey("apple");

// HashSet - unique elements
Set<String> set = new HashSet<>();
set.add("unique1");
set.add("unique2");
boolean contains = set.contains("unique1");

// TreeMap/TreeSet - sorted collections
TreeMap<String, Integer> sortedMap = new TreeMap<>();
TreeSet<Integer> sortedSet = new TreeSet<>();`,
          use: 'Choose collections based on needs: ArrayList for indexed access, HashMap for fast lookup, TreeSet for sorted unique items.'
        },
        'Arrays': {
          code: `// Array declaration and initialization
int[] numbers = new int[5];
int[] values = {1, 2, 3, 4, 5};
String[] names = new String[]{"John", "Jane"};

// 2D arrays
int[][] matrix = new int[3][3];
int[][] grid = {{1, 2}, {3, 4}};

// Array operations
System.out.println(Arrays.toString(values));
Arrays.sort(values);
int index = Arrays.binarySearch(values, 3);
int[] copy = Arrays.copyOf(values, values.length);

// Enhanced for loop
for (int value : values) {
    System.out.println(value);
}`,
          use: 'Use arrays for fixed-size collections of same-type elements with fast indexed access.'
        }
      },
      'Input/Output': {
        'Console I/O': {
          code: `import java.util.Scanner;

// Output
System.out.println("Hello, World!");
System.out.printf("Name: %s, Age: %d%n", name, age);

// Input using Scanner
Scanner scanner = new Scanner(System.in);
System.out.print("Enter your name: ");
String name = scanner.nextLine();
System.out.print("Enter your age: ");
int age = scanner.nextInt();

// Format output
double pi = 3.14159;
System.out.printf("Pi: %.2f%n", pi);
String formatted = String.format("Score: %d/100", score);

// Close scanner
scanner.close();`,
          use: 'Handle console input/output for user interaction and debugging.'
        }
      },
      'File I/O': {
        'File Operations': {
          code: `import java.io.*;
import java.nio.file.*;
import java.util.List;

// Reading files (modern way)
try {
    String content = Files.readString(Paths.get("file.txt"));
    List<String> lines = Files.readAllLines(Paths.get("file.txt"));
} catch (IOException e) {
    e.printStackTrace();
}

// Writing files
try {
    Files.writeString(Paths.get("output.txt"), "Hello, World!");
    List<String> lines = Arrays.asList("Line 1", "Line 2");
    Files.write(Paths.get("output.txt"), lines);
} catch (IOException e) {
    e.printStackTrace();
}

// Using BufferedReader/Writer for large files
try (BufferedReader reader = Files.newBufferedReader(Paths.get("large.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}`,
          use: 'Read and write files efficiently. Use Files class for simple operations, BufferedReader/Writer for large files.'
        }
      },
      'Random Numbers': {
        'Random Class': {
          code: `import java.util.Random;

// Create Random instance
Random random = new Random();
Random seededRandom = new Random(42);  // With seed

// Generate different types
int randomInt = random.nextInt();           // Any int
int boundedInt = random.nextInt(100);       // 0 to 99
double randomDouble = random.nextDouble();   // 0.0 to 1.0
boolean randomBoolean = random.nextBoolean();

// Random in range
int min = 10, max = 50;
int randomInRange = random.nextInt(max - min + 1) + min;

// Random from array
String[] colors = {"red", "green", "blue"};
String randomColor = colors[random.nextInt(colors.length)];

// Shuffle collection
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
Collections.shuffle(list);
Collections.shuffle(list, random);  // With specific Random`,
          use: 'Generate random numbers for testing, simulations, games, and sampling operations.'
        }
      },
      'Error Handling': {
        'Exception Handling': {
          code: `// Try-catch-finally
try {
    int result = divide(10, 0);
} catch (ArithmeticException e) {
    System.err.println("Cannot divide by zero: " + e.getMessage());
} catch (Exception e) {
    System.err.println("Unexpected error: " + e.getMessage());
} finally {
    System.out.println("Cleanup code here");
}

// Throwing exceptions
public int divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("Division by zero");
    }
    return a / b;
}

// Custom exceptions
public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

// Try-with-resources (Java 7+)
try (Scanner scanner = new Scanner(System.in)) {
    String input = scanner.nextLine();
} catch (Exception e) {
    e.printStackTrace();
}`,
          use: 'Handle errors gracefully with try-catch blocks and create custom exceptions for specific error conditions.'
        }
      }
    }
  },
  'C++': {
    color: 'from-blue-700 to-purple-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    sections: {
      'Basic Syntax': {
        'Variables & Types': {
          code: `#include <iostream>
#include <string>
#include <vector>

// Basic types
int age = 25;
double height = 5.9;
bool isStudent = true;
char grade = 'A';
std::string name = "John";

// Arrays
int numbers[5] = {1, 2, 3, 4, 5};
int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Pointers and references
int value = 42;
int* ptr = &value;        // Pointer
int& ref = value;         // Reference

// Constants
const int MAX_SIZE = 100;
constexpr double PI = 3.14159;

// Auto keyword (C++11)
auto x = 10;              // int
auto y = 3.14;            // double`,
          use: 'Declare strongly-typed variables with manual memory management capabilities.'
        },
        'Control Flow': {
          code: `// If statements
if (age >= 18) {
    std::cout << "Adult\\n";
} else if (age >= 13) {
    std::cout << "Teen\\n";
} else {
    std::cout << "Child\\n";
}

// Switch statement
switch (grade) {
    case 'A':
        std::cout << "Excellent\\n";
        break;
    case 'B':
        std::cout << "Good\\n";
        break;
    default:
        std::cout << "Keep trying\\n";
}

// Loops
for (int i = 0; i < 5; ++i) {
    std::cout << i << " ";
}

// Range-based for loop (C++11)
std::vector<int> vec = {1, 2, 3, 4, 5};
for (const auto& element : vec) {
    std::cout << element << " ";
}

while (condition) {
    // do something
}`,
          use: 'Control program flow with efficient conditional and loop constructs.'
        }
      },
      'Functions': {
        'Function Definition': {
          code: `#include <iostream>
#include <algorithm>
#include <functional>

// Basic function
int add(int a, int b) {
    return a + b;
}

// Function overloading
double add(double a, double b) {
    return a + b;
}

// Default parameters
void greet(const std::string& name, const std::string& greeting = "Hello") {
    std::cout << greeting << ", " << name << "!\\n";
}

// Pass by reference
void increment(int& value) {
    ++value;
}

// Function templates
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Lambda functions (C++11)
auto square = [](int x) { return x * x; };
auto add_lambda = [](int a, int b) -> int { return a + b; };

// Using lambdas with STL
std::vector<int> numbers = {1, 2, 3, 4, 5};
std::for_each(numbers.begin(), numbers.end(), [](int n) {
    std::cout << n * 2 << " ";
});`,
          use: 'Create reusable code blocks with strong type safety and performance optimization.'
        }
      },
      'Data Structures': {
        'STL Containers': {
          code: `#include <vector>
#include <map>
#include <set>
#include <queue>
#include <stack>
#include <unordered_map>

// Vector - dynamic array
std::vector<int> vec = {1, 2, 3, 4, 5};
vec.push_back(6);
vec.pop_back();
int first = vec[0];
int size = vec.size();

// Map - sorted key-value pairs
std::map<std::string, int> grades;
grades["Alice"] = 95;
grades["Bob"] = 87;
auto it = grades.find("Alice");

// Unordered_map - hash table
std::unordered_map<std::string, int> fast_lookup;
fast_lookup["key"] = 42;

// Set - sorted unique elements
std::set<int> unique_numbers = {3, 1, 4, 1, 5};
unique_numbers.insert(2);

// Queue and Stack
std::queue<int> q;
q.push(1);
int front = q.front();
q.pop();

std::stack<int> s;
s.push(1);
int top = s.top();
s.pop();

// Priority queue (max heap by default)
std::priority_queue<int> pq;
pq.push(3);
pq.push(1);
int max_element = pq.top();`,
          use: 'Use STL containers for efficient data storage and manipulation with optimized algorithms.'
        },
        'Arrays and Pointers': {
          code: `// Static arrays
int arr[5] = {1, 2, 3, 4, 5};
int size = sizeof(arr) / sizeof(arr[0]);

// Dynamic arrays
int n = 10;
int* dynamic_arr = new int[n];
// Initialize
for (int i = 0; i < n; ++i) {
    dynamic_arr[i] = i * i;
}
delete[] dynamic_arr;  // Don't forget to free memory!

// Smart pointers (C++11)
#include <memory>
std::unique_ptr<int> ptr1 = std::make_unique<int>(42);
std::shared_ptr<int> ptr2 = std::make_shared<int>(84);
std::weak_ptr<int> weak = ptr2;

// 2D dynamic array
int rows = 3, cols = 4;
int** matrix = new int*[rows];
for (int i = 0; i < rows; ++i) {
    matrix[i] = new int[cols];
}
// Use matrix[i][j]
// Cleanup
for (int i = 0; i < rows; ++i) {
    delete[] matrix[i];
}
delete[] matrix;`,
          use: 'Use arrays for fixed-size data, smart pointers for automatic memory management.'
        }
      },
      'Input/Output': {
        'Stream I/O': {
          code: `#include <iostream>
#include <iomanip>
#include <sstream>

// Basic output
std::cout << "Hello, World!" << std::endl;
std::cout << "Name: " << name << ", Age: " << age << "\\n";

// Basic input
std::string name;
int age;
std::cout << "Enter your name: ";
std::getline(std::cin, name);
std::cout << "Enter your age: ";
std::cin >> age;

// Formatted output
double pi = 3.14159;
std::cout << std::fixed << std::setprecision(2) << pi << std::endl;
std::cout << std::setw(10) << std::right << "Score" << std::endl;

// String streams
std::stringstream ss;
ss << "Value: " << 42;
std::string result = ss.str();

// Parse from string
std::stringstream parse("123 456");
int a, b;
parse >> a >> b;`,
          use: 'Handle console I/O with type safety and powerful formatting capabilities.'
        }
      },
      'File I/O': {
        'File Streams': {
          code: `#include <fstream>
#include <iostream>
#include <string>

// Reading from file
std::ifstream infile("input.txt");
if (infile.is_open()) {
    std::string line;
    while (std::getline(infile, line)) {
        std::cout << line << std::endl;
    }
    infile.close();
}

// Writing to file
std::ofstream outfile("output.txt");
if (outfile.is_open()) {
    outfile << "Hello, World!" << std::endl;
    outfile << "Number: " << 42 << std::endl;
    outfile.close();
}

// Append to file
std::ofstream appendfile("log.txt", std::ios::app);
if (appendfile.is_open()) {
    appendfile << "New log entry" << std::endl;
    appendfile.close();
}

// Reading binary file
std::ifstream binfile("data.bin", std::ios::binary);
if (binfile.is_open()) {
    int value;
    binfile.read(reinterpret_cast<char*>(&value), sizeof(value));
    binfile.close();
}`,
          use: 'Read and write files efficiently with precise control over file operations.'
        }
      },
      'Random Numbers': {
        'Random Library': {
          code: `#include <random>
#include <iostream>

// Create random number generator
std::random_device rd;
std::mt19937 gen(rd());

// Or with seed
std::mt19937 seeded_gen(42);

// Different distributions
std::uniform_int_distribution<> int_dist(1, 6);        // Dice roll
std::uniform_real_distribution<> real_dist(0.0, 1.0);  // 0 to 1
std::normal_distribution<> normal_dist(0.0, 1.0);      // Mean=0, StdDev=1

// Generate random numbers
int dice_roll = int_dist(gen);
double random_real = real_dist(gen);
double normal_value = normal_dist(gen);

// Random boolean
std::bernoulli_distribution bool_dist(0.5);  // 50% probability
bool random_bool = bool_dist(gen);

// Shuffle array/vector
std::vector<int> vec = {1, 2, 3, 4, 5};
std::shuffle(vec.begin(), vec.end(), gen);

// Random choice from container
int random_index = int_dist(gen) % vec.size();
int random_element = vec[random_index];`,
          use: 'Generate high-quality random numbers with proper statistical distributions.'
        }
      },
      'Error Handling': {
        'Exception Handling': {
          code: `#include <stdexcept>
#include <iostream>

// Basic try-catch
try {
    int result = divide(10, 0);
} catch (const std::runtime_error& e) {
    std::cerr << "Runtime error: " << e.what() << std::endl;
} catch (const std::exception& e) {
    std::cerr << "Standard exception: " << e.what() << std::endl;
} catch (...) {
    std::cerr << "Unknown exception" << std::endl;
}

// Function that throws
int divide(int a, int b) {
    if (b == 0) {
        throw std::runtime_error("Division by zero");
    }
    return a / b;
}

// Custom exception
class CustomException : public std::exception {
public:
    const char* what() const noexcept override {
        return "Custom exception occurred";
    }
};

// RAII for resource management
class FileWrapper {
    std::FILE* file;
public:
    FileWrapper(const char* filename) : file(std::fopen(filename, "r")) {
        if (!file) throw std::runtime_error("Cannot open file");
    }
    ~FileWrapper() { if (file) std::fclose(file); }
    std::FILE* get() { return file; }
};`,
          use: 'Handle errors with exceptions and use RAII for automatic resource management.'
        }
      }
    }
  },
  SQL: {
    color: 'from-green-600 to-blue-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    sections: {
      'Basic Syntax': {
        'Data Types': {
          code: `-- Common data types
INT, INTEGER                -- Whole numbers
DECIMAL(10,2), NUMERIC     -- Exact decimal numbers
FLOAT, REAL, DOUBLE        -- Approximate decimal numbers
VARCHAR(255), TEXT         -- Variable-length strings
CHAR(10)                   -- Fixed-length strings
DATE                       -- Date values (YYYY-MM-DD)
TIME                       -- Time values (HH:MM:SS)
DATETIME, TIMESTAMP        -- Date and time combined
BOOLEAN                    -- True/false values
BLOB                       -- Binary large objects

-- Example table creation
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    age INT CHECK (age >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
          use: 'Define appropriate data types for columns to ensure data integrity and optimize storage.'
        },
        'Basic Queries': {
          code: `-- SELECT statements
SELECT * FROM users;
SELECT name, email FROM users;
SELECT name AS full_name, age FROM users;

-- WHERE clause
SELECT * FROM users WHERE age > 18;
SELECT * FROM users WHERE name LIKE 'John%';
SELECT * FROM users WHERE age BETWEEN 18 AND 65;
SELECT * FROM users WHERE city IN ('NYC', 'LA', 'Chicago');

-- ORDER BY
SELECT * FROM users ORDER BY age DESC;
SELECT * FROM users ORDER BY name ASC, age DESC;

-- LIMIT/OFFSET (pagination)
SELECT * FROM users LIMIT 10;
SELECT * FROM users LIMIT 10 OFFSET 20;

-- DISTINCT
SELECT DISTINCT city FROM users;`,
          use: 'Retrieve specific data from tables with filtering, sorting, and limiting results.'
        }
      },
      'Functions': {
        'Aggregate Functions': {
          code: `-- Basic aggregates
SELECT COUNT(*) FROM users;
SELECT COUNT(DISTINCT city) FROM users;
SELECT AVG(age), MIN(age), MAX(age) FROM users;
SELECT SUM(salary) FROM employees;

-- GROUP BY
SELECT city, COUNT(*) as user_count 
FROM users 
GROUP BY city;

SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;

-- String functions
SELECT UPPER(name), LOWER(email) FROM users;
SELECT CONCAT(first_name, ' ', last_name) as full_name FROM users;
SELECT LENGTH(name), SUBSTRING(name, 1, 3) FROM users;

-- Date functions
SELECT DATE(created_at), YEAR(created_at) FROM users;
SELECT NOW(), CURDATE(), CURTIME();
SELECT DATEDIFF(NOW(), created_at) as days_since FROM users;`,
          use: 'Perform calculations and transformations on data, group results, and manipulate strings/dates.'
        },
        'Window Functions': {
          code: `-- Ranking functions
SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num,
       RANK() OVER (ORDER BY salary DESC) as rank_val,
       DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;

-- Partition by department
SELECT name, department, salary,
       AVG(salary) OVER (PARTITION BY department) as dept_avg,
       salary - AVG(salary) OVER (PARTITION BY department) as diff_from_avg
FROM employees;

-- Moving averages
SELECT date, sales,
       AVG(sales) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg
FROM daily_sales;

-- Lead and lag
SELECT date, sales,
       LAG(sales, 1) OVER (ORDER BY date) as prev_sales,
       LEAD(sales, 1) OVER (ORDER BY date) as next_sales
FROM daily_sales;`,
          use: 'Perform advanced analytics with ranking, running totals, and comparisons within result sets.'
        }
      },
      'Data Structures': {
        'Table Design': {
          code: `-- Primary and foreign keys
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dept_id INT,
    salary DECIMAL(10,2),
    hire_date DATE,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- Indexes for performance
CREATE INDEX idx_emp_last_name ON employees(last_name);
CREATE INDEX idx_emp_dept_salary ON employees(dept_id, salary);

-- Composite primary key
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    PRIMARY KEY (order_id, product_id)
);`,
          use: 'Design normalized tables with proper relationships, constraints, and indexes for data integrity and performance.'
        },
        'Joins': {
          code: `-- INNER JOIN - only matching records
SELECT e.first_name, e.last_name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN - all records from left table
SELECT e.first_name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;

-- RIGHT JOIN - all records from right table
SELECT e.first_name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;

-- FULL OUTER JOIN - all records from both tables
SELECT e.first_name, d.dept_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id;

-- Self join
SELECT e1.first_name as employee, e2.first_name as manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.emp_id;

-- Multiple joins
SELECT o.order_date, c.customer_name, p.product_name
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;`,
          use: 'Combine data from multiple tables to create comprehensive result sets for analysis and reporting.'
        }
      },
      'Data Manipulation': {
        'INSERT, UPDATE, DELETE': {
          code: `-- INSERT statements
INSERT INTO users (name, email, age) 
VALUES ('John Doe', 'john@example.com', 30);

INSERT INTO users (name, email, age) VALUES 
('Jane Smith', 'jane@example.com', 25),
('Bob Johnson', 'bob@example.com', 35);

-- INSERT from SELECT
INSERT INTO archived_users (name, email, age)
SELECT name, email, age FROM users WHERE active = 0;

-- UPDATE statements
UPDATE users SET age = 31 WHERE name = 'John Doe';
UPDATE users SET age = age + 1 WHERE city = 'NYC';

-- UPDATE with JOIN
UPDATE employees e
JOIN departments d ON e.dept_id = d.dept_id
SET e.salary = e.salary * 1.1
WHERE d.dept_name = 'Engineering';

-- DELETE statements
DELETE FROM users WHERE age < 18;
DELETE FROM users WHERE created_at < '2020-01-01';

-- DELETE with JOIN
DELETE e FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'Discontinued';`,
          use: 'Modify table data by inserting new records, updating existing ones, and removing unwanted data.'
        }
      },
      'Advanced Queries': {
        'Subqueries': {
          code: `-- Scalar subquery
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- EXISTS subquery
SELECT name FROM employees e
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.employee_id = e.emp_id
);

-- IN subquery
SELECT name FROM employees
WHERE dept_id IN (
    SELECT dept_id FROM departments WHERE budget > 100000
);

-- Correlated subquery
SELECT e1.name, e1.salary
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id
);

-- Common Table Expressions (CTE)
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 80000
),
dept_stats AS (
    SELECT dept_id, COUNT(*) as emp_count
    FROM high_earners
    GROUP BY dept_id
)
SELECT d.dept_name, ds.emp_count
FROM dept_stats ds
JOIN departments d ON ds.dept_id = d.dept_id;`,
          use: 'Create complex queries with nested logic for advanced data analysis and filtering.'
        },
        'Stored Procedures': {
          code: `-- Basic stored procedure
DELIMITER //
CREATE PROCEDURE GetEmployeesByDept(IN dept_name VARCHAR(100))
BEGIN
    SELECT e.first_name, e.last_name, e.salary
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
    WHERE d.dept_name = dept_name;
END //
DELIMITER ;

-- Call the procedure
CALL GetEmployeesByDept('Engineering');

-- Procedure with output parameter
DELIMITER //
CREATE PROCEDURE GetEmployeeCount(
    IN dept_name VARCHAR(100),
    OUT emp_count INT
)
BEGIN
    SELECT COUNT(*) INTO emp_count
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
    WHERE d.dept_name = dept_name;
END //
DELIMITER ;

-- Call with output
CALL GetEmployeeCount('Sales', @count);
SELECT @count;

-- Function
DELIMITER //
CREATE FUNCTION CalculateBonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
READS SQL DATA
DETERMINISTIC
BEGIN
    RETURN salary * 0.10;
END //
DELIMITER ;

-- Use function
SELECT name, salary, CalculateBonus(salary) as bonus
FROM employees;`,
          use: 'Create reusable database code for complex operations, business logic, and data processing.'
        }
      }
    }
  }
};

export default function CheatSheets() {
  const [activeLanguage, setActiveLanguage] = useState<keyof CheatSheets>('Python');
  const [activeSection, setActiveSection] = useState<string>('Basic Syntax');
  const [searchTerm, setSearchTerm] = useState('');

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      // Simple feedback - you could implement a toast notification here
      alert('Code copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  // Filter sections based on search term
  const filteredSections = useMemo(() => {
    if (!searchTerm) return Object.entries(cheatSheets[activeLanguage].sections);
    
    return Object.entries(cheatSheets[activeLanguage].sections).filter(
      ([sectionName, topics]) =>
        sectionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.keys(topics).some((topic) =>
          topic.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [activeLanguage, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <CodeIcon />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Comprehensive Programming Cheat Sheets</h1>
                <p className="text-gray-600">Complete reference for essential programming concepts</p>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Language Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Languages</h3>
              <div className="space-y-2">
                {Object.keys(cheatSheets).map((language) => (
                  <button
                    key={language}
                    onClick={() => {
                      setActiveLanguage(language as keyof CheatSheets);
                      setActiveSection(Object.keys(cheatSheets[language as keyof CheatSheets].sections)[0]);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeLanguage === language
                        ? `bg-gradient-to-r ${cheatSheets[language].color} text-white shadow-lg`
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <DatabaseIcon />
                      <span className="font-medium">{language}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Section Navigation */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Sections</h4>
                <div className="space-y-1">
                  {Object.keys(cheatSheets[activeLanguage].sections).map((section) => (
                    <button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-all ${
                        activeSection === section
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Language Header */}
              <div className={`bg-gradient-to-r ${cheatSheets[activeLanguage].color} p-6 text-white`}>
                <h2 className="text-2xl font-bold mb-2">{activeLanguage}</h2>
                <p className="text-white/90">
                  {activeLanguage === 'Python' && 'General-purpose language with clear syntax and extensive libraries'}
                  {activeLanguage === 'JavaScript' && 'Dynamic language for web development and modern applications'}
                  {activeLanguage === 'Java' && 'Object-oriented language for enterprise and cross-platform applications'}
                  {activeLanguage === 'C++' && 'Systems programming language with high performance and control'}
                  {activeLanguage === 'SQL' && 'Declarative language for managing and querying relational databases'}
                </p>
              </div>

              {/* Topics */}
              <div className="p-6">
                {filteredSections.length === 0 ? (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 text-gray-400 mx-auto mb-4">
                      <SearchIcon />
                    </div>
                    <p className="text-gray-500 text-lg">
                      No topics found matching &quot;<strong>{searchTerm}</strong>&quot;
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {filteredSections.map(([sectionName, topics]) => (
                      <div key={sectionName}>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                          {sectionName}
                        </h3>
                        <div className="space-y-6">
                          {Object.entries(topics).map(([topicName, topicData]) => (
                            <div
                              key={topicName}
                              className={`border rounded-lg p-5 ${cheatSheets[activeLanguage].borderColor} ${cheatSheets[activeLanguage].bgColor}`}
                            >
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="text-lg font-semibold text-gray-900">{topicName}</h4>
                                <button
                                  onClick={() => copyToClipboard(topicData.code)}
                                  className="p-2 text-gray-500 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                                  title="Copy code"
                                >
                                  <CopyIcon />
                                </button>
                              </div>

                              <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                                <pre className="text-green-400 text-sm font-mono whitespace-pre">
                                  <code>{topicData.code}</code>
                                </pre>
                              </div>

                              <div className="flex items-start space-x-3">
                                <div className="bg-blue-100 p-2 rounded-lg mt-0.5">
                                  <ZapIcon />
                                </div>
                                <div>
                                  <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong>When to use:</strong> {topicData.use}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Reference Cards */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <ZapIcon />
                  <h4 className="font-semibold text-gray-900">Time Complexity</h4>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>O(1) - Constant time</div>
                  <div>O(log n) - Logarithmic</div>
                  <div>O(n) - Linear time</div>
                  <div>O(n²) - Quadratic time</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <DatabaseIcon />
                  <h4 className="font-semibold text-gray-900">Data Structure Guide</h4>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>Arrays: Fast indexed access</div>
                  <div>Hash Tables: O(1) lookups</div>
                  <div>Trees: Hierarchical data</div>
                  <div>Graphs: Network relationships</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md border border-purple-200">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircleIcon />
                  <h4 className="font-semibold text-gray-900">Best Practices</h4>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>Write clear, readable code</div>
                  <div>Handle errors gracefully</div>
                  <div>Use meaningful variable names</div>
                  <div>Comment complex logic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Comprehensive Programming Cheat Sheets - Essential reference for developers</p>
        </div>
      </footer>
    </div>
  );
}