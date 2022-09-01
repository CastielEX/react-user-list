const FilterTaskList = ({ filterValueSelected }: any) => {
  const TaskStatus = [
    {
      title: "All tasks",
      value: "all",
    },

    {
      title: "Only done tasks",
      value: "true",
    },
    {
      title: "Only false tasks",
      value: "false",
    },
  ];

  return (
    <div className="container text-left mb-3">
      <select onChange={(event) => filterValueSelected(event.target.value)}>
        {TaskStatus.map((status: any) => (
          <option value={status.value} label={status.title}></option>
        ))}
      </select>
      {/* <select
        name="isAvailable"
        onChange={(event) => filterValueSelected(event.target.value)}
      >
        <option value="all">All tasks</option>
        <option value="true">Only done tasks</option>
        <option value="false">Only false tasks</option>
      </select> */}
    </div>
  );
};

export default FilterTaskList;
