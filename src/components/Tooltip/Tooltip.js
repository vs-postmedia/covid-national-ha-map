import Helper from '../../helper-functions';
import './Tooltip.css';

const Tooltip = (props) => {
	return `
		<div>
			<h3>${props.health_region}</h3>
			<p class="prov-name">${props.province}</p>

			<p>There have been a total of <strong>${Helper.numberWithCommas(props.cumulative_cases)} cases</strong> and <strong>${Helper.numberWithCommas(props.cumulative_deaths)} deaths</strong> from the the coronavirus in this health region.</p>
		</div>
	`;
};

export default Tooltip;