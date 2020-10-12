module.exports = {
    mongoURI: "mongodb://localhost:27017/TestDB",
    secretOrKey: "secret"
  };


//   @Module({
//     imports: [MongooseModule.forRoot('mongodb://localhost:27017/TestDB', { useNewUrlParser: true }), UserModule, BookingModule,],
//     controllers: [AppController],
//     providers: [AppService],
//   })