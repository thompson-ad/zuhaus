const Airtable = require("airtable");

exports.handler = function (event, context, callback) {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

  // THIS FUNCTION FORMATS AND SENDS YOUR RESPONSE BACK TO YOUR FRONT-END
  const send = (body) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    });
  };

  const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
    AIRTABLE_BASE_ID
  );

  const workouts = [];
  const data = [];

  base("workouts")
    .select({
      view: "Grid view",
    })
    .firstPage(function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        data.push(record.fields);
      });
      workouts.push({ title: "Week 1", data });
      send(workouts);
    });
};
