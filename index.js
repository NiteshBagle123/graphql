import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('GrapghQL is Amazing');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`GraphQL is running on port:${port}`);
})