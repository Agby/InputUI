ass UIPractice extends React.Component {
	static propTypes = {
    title: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
		showError: React.PropTypes.bool,
		ErrorMsg: React.PropTypes.string,
		tips: React.PropTypes.string,
  };
	static defaultProps = {
   	title: 'Title',
		placeholder: 'placeholder',
		defaultValue: '',
		showError: false,
		ErrorMsg: 'errror message',
		tips: 'tips message here.',
  };
  constructor(props) {
		super(props)
		this.state = {
			isFocusing: false,
			value: props.defaultValue || '',
	  }
	}
	handleFocus() {
		this.setState({isFocusing: true})
	}
	handleBlur() {
		this.setState({isFocusing: false})
	}
	handleChange(e) {
		this.setState({value: e.target.value})
	}
	render() {
		const { tips , title, placeholder} = this.props
		const { isFocusing, value } = this.state
		let focus = isFocusing ? 'focus' : ''
		let phClass = 'ph'
		if (value != null && value.length > 0) {
			if (!isFocusing)
				focus = 'focus'
		} else if (isFocusing) {
			phClass = 'ph show'
		}
		return (
			<div className='input-field'>
				<div className={`text-area ${focus}`}>
					<div className={`title ${focus}`}>
						{title}
					</div>
					<input 
						className='input-area' 
						onFocus={this.handleFocus.bind(this)}
						onBlur={this.handleBlur.bind(this)}
						onChange={this.handleChange.bind(this)}
						value={this.state.value}
					/>
					<div className={phClass}>
						{placeholder}
					</div>
					<div className={`under-line ${isFocusing ? 'focus' : ''}`} />
					<div className={`tips ${isFocusing ? 'focus' : ''}`}>
						{tips}
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<UIPractice/>, document.getElementById('app'));

