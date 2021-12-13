export default function Archive() {
  const items = [
    { description: "Vie roskat", date: "2021-12-07", tag: "Kotityöt" },
    { description: "Vie roskat", date: "2021-12-07", tag: "Kotityöt" },
    { description: "Vie roskat", date: "2021-12-07", tag: "Kotityöt" },
  ];

  return (
    <main>
      <h1>ARCHIVED TASKS</h1>

      <div>
        <div className="item-list">
          {items.map((item) => (
            <div className="item-container">
              <div className="item-name">
                <span id="span-date">{item.date} </span>
                <span id="span-desc">{item.description} </span>
                <span id="span-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
