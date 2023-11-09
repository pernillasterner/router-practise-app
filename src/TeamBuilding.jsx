import { useEffect, useState } from "react";

export const TeamBuilding = () => {
  const [activities, setActivities] = useState({});
  const api = "http://www.boredapi.com/api/activity?type=recreational";

  const fetchActivities = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setActivities(() => data);
    } catch (error) {
      console.error("Error Message:", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <section>
      <h1>Find team building activities!</h1>
      <p>{activities.activity}</p>
      <button onClick={fetchActivities}>Generate a new activity!</button>
    </section>
  );
};
