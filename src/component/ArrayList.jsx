
import Button from './Button';

export const ArrayList = ({ arrList }) => {
    console.log(arrList);

    return (
        <div>
            <ul>{arrList.map((arr, i) => (
                <li key={i}>{arr}</li>
            ))}</ul>

            <Button text={'Add List'} colorVariable={'red'} />
        </div>

    )
}
