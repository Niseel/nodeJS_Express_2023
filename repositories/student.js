// Repos -> tuong tac xuong DB

const getAllStudents = async ({ page, size, searchString }) => {
  console.log(
    "Get All Student in Student Repository with paging: " +
      page +
      " - " +
      size +
      " - " +
      searchString
  );
};

// languages: "English, Vietnamese, Japanese, Chinese"
const insertStudent = async ({
  name,
  email,
  languages,
  gender,
  phoneNumber,
  address,
}) => {
  // validation value already done in Controller
  console.log(`
    Insert Student in Student Repository With 
    Name ${name},
    Email: ${email}, 
    Language: ${languages}, 
    Gender: ${gender},
    Phone Number: ${phoneNumber},
    Address: ${address},
  `);
};

export default {
  getAllStudents,
  insertStudent,
};
