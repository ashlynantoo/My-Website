const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_TOKEN })
  .base(process.env.VITE_AIRTABLE_BASE_ID)
  .table(process.env.VITE_AIRTABLE_TABLE_ID);

export const handler = async (event, context, callback) => {
  try {
    const response = await airtable.list({ maxRecords: 100 });
    const projects = response.records
      .map((project) => {
        const { id, fields } = project;
        const {
          name,
          description,
          image,
          skills,
          websiteLink,
          githubLink,
          order,
        } = fields;
        const img = image[0].url;

        return {
          id,
          name,
          description,
          img,
          skills,
          websiteLink,
          githubLink,
          order,
        };
      })
      .sort((a, b) => {
        return a.order - b.order;
      });

    return {
      statusCode: 200,
      body: JSON.stringify(projects),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
