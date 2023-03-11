const ctrlWrapper = ctrl => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  return func;
}

module.exports = ctrlWrapper;

// helpers/ctrlWrapper.js

// const ctrlWrapper = (ctrlFn) => {
//   return (req, res, next) => {
//     Promise.resolve(ctrlFn(req, res, next)).catch(next);
//   };
// };

// module.exports = ctrlWrapper;
