import "./DropDown.scss";

type DropDownProps = {
	label: string;
	id: string;
	options: string[];
};
const DropDown = ({ label, id, options }: DropDownProps) => {
	return (
		<>
			<label htmlFor={id}>{label} </label>
			<select id={id}>
				{options.map((option, i) => (
					<option key={option + i}>{option}</option>
				))}
			</select>
		</>
	);
};

export default DropDown;
