function ActivityList() {
  const activities = ['CODE-IT', 'Prometheus'];

  return (
    <section>
      <h3>ACTIVITIES</h3>

      <div>
        {activities.map((activity, index) => (
          <span key={activity}>
            {activity}
            {index < activities.length - 1 && ' · '}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ActivityList;