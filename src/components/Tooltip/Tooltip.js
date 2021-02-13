import Helper from '../../helper-functions';
import './Tooltip.css';

const Tooltip = (props) => {
	console.log(props)
	return `
		<div>
			<h3>${props.esri_name}</h3>

			<p>There have been a total of ${Helper.numberWithCommas(props.cumulative_cases)} cases and ${Helper.numberWithCommas(props.cumulative_deaths)} deaths from the the coronavirus.</p>
		</div>
	`;
};

export default Tooltip;