function ActivityList() {
  const activities = ['CODE-IT', 'Prometheus'];

  return (
    <section>
      <h3>ACTIVITIES</h3>

      <div className="tag-list">
        {activities.map((activity) => (
          <span className="tag" key={activity}>
            {activity}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ActivityList;