export default function Archive() {
  // Example array
  const items = [
    { description: "Vie roskat", date: "2021-12-07", tag: "kotityöt" },
    { description: "Tee projektia", date: "2021-12-08", tag: "koulu" },
    { description: "Käy kaupassa", date: "2021-12-10", tag: "kotityöt" },
    { description: "Lue kirjaa", date: "2021-12-08", tag: "vapaa-aika" },
  ];

  return (
    <main>
      <h1>ARCHIVED TASKS</h1>

      <div>
        <div className="item-list">
          {items.map((item) => (
            <div className="item-container">
              <div>
                <span id="span-desc">{item.description} </span>
                <span id="span-date">{item.date} </span>
                <span id="span-tag">
                  {"#"}
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
