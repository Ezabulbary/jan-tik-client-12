import React from 'react';

const Blogs = () => {
    return (
        <div className='p-20'>
            <p className='text-xl font-bold'>Q-1. How will you improve the performance of a React Application?</p>
            <p className='pb-10 text-justify'>Make sure components only get the props they need to get the most out of React rendering. It will help you to keep track of your CPU use and avoid rendering unnecessary features. The goal is to create a working component that will gather all props and redistribute them to other components.</p>

            <p className='text-xl font-bold'>Q-2. What are the different ways to manage a state in a React application?</p>
            <p className='pb-10 text-justify'>
                The first tool you should use to handle state in your components is useState.

                Any acceptable data value, including primitive and object values, can be accepted. Its setter method can also be used as a callback function for other components (without needing optimizations like useCallback).

                Another method is to useReducer, which may be used for both local and global state. Under the hood, it's quite similar to useState, only it accepts a reducer instead of simply an initial state.

                The advantage of using useReducer over using useState is that it has a built-in ability to conduct a variety of various state actions using the reducer function, making it more dynamic overall.
            </p>

            <p className='text-xl font-bold'>Q-3. How does prototypical inheritance work?</p>
            <p className='pb-10 text-justify'>
                Prototypal Inheritance is a javascript feature that allows you to add methods and attributes to objects. It's a technique that allows one object to inherit the attributes and methods of another. We used to use <span className='text-orange-500'>Object.getPrototypeOf</span> and <span className='text-orange-500'>Object.setPrototypeOf</span> to get and set the [[Prototype]] of an object.
            </p>

            <p className='text-xl font-bold'>Q-4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
            <p className='pb-10 text-justify'></p>

            <p className='text-xl font-bold'>Q-5. You have an array of products.Each product has a name, price, description, etc.How will you implement a search to find products by name?</p>
            <p className='pb-10 text-justify'>
                <div className="mockup-code">
                    <pre data-prefix="">
                        <code>
                            productsCollection.find(query).project(name: 1)
                        </code>
                    </pre>
                </div>
            </p>

            <p className='text-xl font-bold'>Q-6. What is a unit test?Why should write unit tests?</p>
            <p className='pb-10 text-justify'>
                Unit testing is a sort of software testing that examines individual software units or components. The goal is to ensure that each unit of software code works as intended. Developers carry out unit testing throughout the development (coding) phase of an application. Unit tests isolate a part of code and ensure that it is accurate. A particular function, method, process, module, or object might be considered a unit.
                <br /><br />
                Because software developers sometimes strive to save time by performing minimum unit testing, this is a misconception because insufficient unit testing leads to high-cost defect correction during System Testing, Integration Testing, and even Beta Testing after the program has been constructed. It saves time and money in the long run if thorough unit testing is done early in the development process.
            </p>
        </div>
    );
};

export default Blogs;