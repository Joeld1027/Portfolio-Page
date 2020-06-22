import React from 'react';
import Typed from 'typed.js';

class TypedComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isDone: false,
		};
	}

	componentDidMount() {
		const settingState = () => {
			this.setState(() => {
				return { isDone: true };
			});
		};
		const unSettingState = () => {
			this.setState(() => {
				return { isDone: false };
			});
		};
		// If you want to pass more options as props, simply add
		// your desired props to this destructuring assignment.
		const strings = [
			' Hi there!',
			'need help with a site?',
			"I'll make your site stand out from the competition",
			'contact me, ',
		];

		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: strings,
			typeSpeed: 40,
			backSpeed: 5,
			backDelay: 700,
			startDelay: 400,
			onBegin: function () {
				unSettingState();
			},
			onComplete: function (self) {
				settingState();
				setTimeout(function () {
					handleReset();
				}, 2000);
			},
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
		const handleReset = () => {
			this.typed.reset();
		};
	}

	componentWillUnmount() {
		// Make sure to destroy Typed instance on unmounting
		// to prevent memory leaks
		this.typed.destroy();
	}

	render() {
		return (
			<div className='type-wrap'>
				<span
					className='type-element'
					style={{ whiteSpace: 'pre' }}
					ref={(el) => {
						this.el = el;
					}}
				/>
				<br />

				<span
					className={`animated-span ${
						this.state.isDone ? 'after-span' : ''
					}`}
				>
					I'm your developer.
				</span>
			</div>
		);
	}
}

export default TypedComponent;
