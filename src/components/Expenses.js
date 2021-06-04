import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div className='expences'>
            <ExpenseItem
                title={props.expensesProps[0].title}
                amount={props.expensesProps[0].amount}
                date={props.expensesProps[0].date}
            />

            <ExpenseItem
                title={props.expensesProps[1].title}
                amount={props.expensesProps[1].amount}
                date={props.expensesProps[1].date}
            />

            <ExpenseItem
                title={props.expensesProps[2].title}
                amount={props.expensesProps[2].amount}
                date={props.expensesProps[2].date}
            />

            <ExpenseItem
                title={props.expensesProps[3].title}
                amount={props.expensesProps[3].amount}
                date={props.expensesProps[3].date}
            />
        </div>
    );

}

export default Expenses;