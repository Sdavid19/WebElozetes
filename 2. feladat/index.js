const express = require("express");
const hbs = require('express-handlebars');
const path = require("path")

const genresRoutes = require('./routes/genresRoutes');
const albumRoutes = require('./routes/albumRoutes');
const artistRoutes = require('./routes/artistRoutes');
const customerRoutes = require('./routes/customerRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const invoiceItemRoutes = require('./routes/invoiceItemRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const mediaTypeRoutes = require('./routes/mediaTypeRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const playlistTrackRoutes = require('./routes/playlistTrackRoutes');
const TrackRoutes = require('./routes/trackRoutes');

const app = express();

app.use(express.json());

const partialsPath = path.join(__dirname, "views/partials")
app.engine('handlebars', hbs.engine({defaultLayout: false, partialsDir: partialsPath, runtimeOptions: {allowedProtoMethods: true, allowProtoMethodsByDefault: true, allowedProtoProperties: true, allowProtoPropertiesByDefault: true}}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/genres', genresRoutes);
app.use('/albums', albumRoutes);
app.use('/artists', artistRoutes);
app.use('/customers', customerRoutes);
app.use('/employees', employeeRoutes);
app.use('/invoiceitems', invoiceItemRoutes);
app.use('/invoices', invoiceRoutes);
app.use('/mediatypes', mediaTypeRoutes);
app.use('/playlists', playlistRoutes);
app.use('/playlisttracks', playlistTrackRoutes);
app.use('/tracks', TrackRoutes);

app.get("/", (req, res) => {
    res.render("mainView");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
