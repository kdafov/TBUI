# STATUS: On hold
***The support for this project is currently ON HOLD.***

# The Better User Interface by KDafov

Hi there! After creating hundreds of components repeatedly, I developed templates for each to boost efficiency and reusability. This package includes a collection of responsive, styled, and production-ready components with basic functionality. You're welcome to contribute by adding new components and/or improving the design of existing ones - just grab the repo from GitHub and let me know so I can incorporate your ideas into the package!

# Get started

In order to get started install the NPM package using `npm install kdafov-tbui`; This will add the components into your project.

To use a component, import the package to your project at the top of the file and add it to your code:

```
import { ComponentName } from  "kdafov-tbui";

export default function App() {
	return (
		<>
			/* ...other code */
			<ComponentName props={props} />
			/* ...other code */
		</>
	);
}
```

> **Warning:** This package is using TypeScript.

# @forms

The components under **@forms** are components that are typically used within HTML Forms. This includes but is **not limited** to \<input>, \<form>, \<button>, \<select>.

## \<BasicInput />

Component to handle input for **text**, **password**, and **email**.

```
import { BasicInput } from  "kdafov-tbui";

<BasicInput
	label="Enter your email"
	type="text"
	placeholder="email@domain.com"
/>
```

List of all possible attributes that can be used as **props** to the **BasicInput** component.

| Attribute        | Description                                      | Value (s)                                                    |
| ---------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| **label**        | The label that describes the input               | string (**_required_**)                                      |
| **type**         | The type of input                                | string (**_text_**, **_password_**, or **_email_**)          |
| **placeholder**  | The placeholder text of the input                | string (_optional_)                                          |
| **autocomplete** | Whether the input should allow autofill of input | boolean (_optional_) [Default: **false**]                    |
| **style**        | The design of the widget                         | string (_optional_) [Values: **noBorder**, **bottomBorder**] |

![image](https://github.com/user-attachments/assets/2359d97e-3b11-4e47-be48-d86e514428b3)

