module.exports = {
   gameOptions: {
      reply_markup: JSON.stringify({
         inline_keyboard: [
            [{ text: `1`, callback_data: `1` }, { text: `2`, callback_data: `2` }, { text: `3`, callback_data: `3` }],
            [{ text: `4`, callback_data: `4` }, { text: `5`, callback_data: `5` }, { text: `6`, callback_data: `6` }],
            [{ text: `7`, callback_data: `7` }, { text: `8`, callback_data: `8` }, { text: `9`, callback_data: `9` }],
            [{ text: `0`, callback_data: `0` }]
         ]
      })
   },

   againOptions: {
      reply_markup: JSON.stringify({
         inline_keyboard: [
            [{ text: `Играть ещё раз`, callback_data: `/again` }],
         ]
      })
   },

   genderOptions: {
      reply_markup: JSON.stringify({
         inline_keyboard: [
            [{ text: `Мужик`, callback_data: `m` }, { text: `Девушка`, callback_data: `f` }],
         ]
      })
   },

   complimentsOptions: {
      reply_markup: JSON.stringify({
         complimentsMass:
            [{ text: `Неповторимая`, callback_data: `a` }, { text: `Милая`, callback_data: `b` },
            { text: `Нежная`, callback_data: `c` }, { text: `Заботливая`, callback_data: `d` },
            { text: `Яркая`, callback_data: `f` },]
      })
   },


}