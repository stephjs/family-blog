const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const { endpoint } = require('./secret');

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

mongoose.connect(endpoint, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to mongoose');
});

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
