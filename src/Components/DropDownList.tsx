const FilterTaskList = ({ filterValueSelected }: any) => {
  const taskStatus = [
    {
      title: "All tasks",
      value: "all",
    },

    {
      title: "Only done tasks",
      value: "true",
    },
    {
      title: "Only in progress tasks",
      value: "false",
    },
  ];

  return (
    <div className="container text-left mb-3">
      <select onChange={(event) => filterValueSelected(event.target.value)}>
        {taskStatus.map((status: any) => (
          <option value={status.value} label={status.title}></option>
        ))}
      </select>
    </div>
  );
};

export default FilterTaskList;
