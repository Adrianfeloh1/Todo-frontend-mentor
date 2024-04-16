import PropTypes from "prop-types";

export const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
   return (
      <section className=" flex justify-between rounded-b-md bg-white dark:bg-gray-800 p-4 text-sm text-gray-400">         
         <span>{computedItemsLeft} items left</span>
         <button onClick={clearCompleted}>Clear Completed</button>
      </section>
   );
};

TodoComputed.propTypes = {
   computedItemsLeft: PropTypes.number.isRequired,
   clearCompleted: PropTypes.func.isRequired
};