

const SmallCustomtable = ({ columns = [], data = [] }) => {
  const fontFamily = ''; // Customize font family if needed

  return (
    <div className="w-full bg-white">
      <div className="overflow-x-auto"> {/* Allow horizontal scrolling */}
        <table className="min-w-full bg-white table-bordered">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className="px-4 py-2 border-b text-left text-sm leading-loose"
                  style={{ fontWeight: '400', width: column.width }} // Set column width here
                  scope="col"
                >
                  {column.Header}
                </th>
              ))}           
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center px-4 py-2 border-b">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 border-b">
                  {columns.map((column) => (
                    <td
                      key={column.accessor}
                      className="px-4 py-2 text-sm leading-normal"
                      style={{ fontFamily, fontWeight: '500', lineHeight: '15.6px', width: column.width }} // Customize styles here
                    >
                      {column.render ? column.render(item) : item[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SmallCustomtable;
