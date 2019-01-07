var friends = [
    {
      name: "andrew",
      photo: "test@example.com",
      scores: [
          "1",
          "4",
          "2",
          "5",
          "2",
          "1",
          "3",
          "7",
          "5",
          "2"
        ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;