## Contributions

### What we’re looking for

The Handbook gives developers examples to work off of that both cover common or interesting use cases, and also progressively explain more complex detail. Our goal is to move beyond a simple introductory example, and demonstrate concepts that are more widely applicable, as well as some caveats to the approach.


If you’re interested in contributing, please initiate collaboration by filing an issue under the tag handbook idea with your concept so that we can help guide you to a successful pull request. After your idea has been approved, please follow the template below as much as possible. Some sections are required, and some are optional. Following the numerical order is strongly suggested, but not required.

Recipes should generally:

> - Solve a specific, common problem
> - Start with the simplest possible example
> - Introduce complexities one at a time
> - Link to other docs, rather than re-explaining concepts
> - Describe the problem, rather than assuming familiarity
> - Explain the process, rather than just the end result
> - Explain the pros and cons of your strategy, including when it is and isn’t appropriate
> - Mention alternative solutions, if relevant, but leave in-depth explorations to a separate recipe

We request that you follow the template below. We understand, however, that there are times when you may necessarily need to deviate for clarity or flow. Either way, all recipes should at some point discuss the nuance of the choice made using this pattern, preferably in the form of the alternative patterns section.

#### Base Example

> *Required*

1. Articulate the problem in a sentence or two.
1. Explain the simplest possible solution in a sentence or two.
1. Show a small code sample.
1. Explain what this accomplishes in a sentence.

#### Details about the Value

> *Required*

1. Address common questions that one might have while looking at the example. (Blockquotes are great for this)
1. Show examples of common missteps and how they can be avoided.
1. Show very simple code samples of good and bad patterns.
1. Discuss why this may be a compelling pattern. Links for reference are not required but encouraged.

#### Real-World Example

> *Required*

Demonstrate the code that would power a common or interesting use case, either by:

1. Walking through a few terse examples of setup, or
1. Embedding a codepen/jsfiddle example

If you choose to do the latter, you should still talk through what it is and does.

#### Additional Context

> *Optional*

It’s extremely helpful to write a bit about this pattern, where else it would apply, why it works well, and run through a bit of code as you do so or give people further reading materials here.

#### When To Avoid This Pattern

> *Optional*

This section is not required, but heavily recommended. It won’t make sense to write it for something very simple such as toggling classes based on state change, but for more advanced patterns like mixins it’s vital. The answer to most questions about development is `“It depends!”`, this section embraces that. Here, we’ll take an honest look at when the pattern is useful and when it should be avoided, or when something else makes more sense.

#### Alternative Patterns

> *Required*

This section is required when you’ve provided the section above about avoidance. It’s important to explore other methods so that people told that something is an antipattern in certain situations are not left wondering. In doing so, consider that the web is a big tent and that many people have different codebase structures and are solving different goals. Is the app large or small? Are they integrating Vue into an existing project, or are they building from scratch? Are their users only trying to achieve one goal or many? Is there a lot of asynchronous data? All of these concerns will impact alternative implementations. A good handbok recipe gives developers this context.


### Thank you

---

It takes time to contribute to documentation, and if you spend the time to submit a PR to this section of our docs, you do so with our gratitude.

---
