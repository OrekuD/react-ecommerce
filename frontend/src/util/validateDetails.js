const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const validateDetails = (newUser, data) => {
  const { password, confirmPassword, email, fullname = " " } = data;

  if (!password || !email) {
    return {
      isValid: false,
      message: "Password and email fields cannot be empty",
    };
  }

  if (!regex.test(email)) {
    return {
      isValid: false,
      message: "Invalid email address",
    };
  }

  if (password.length <= 6) {
    return {
      isValid: false,
      message: "Passwords must be above 6 characters",
    };
  }

  if (newUser && confirmPassword !== password) {
    return {
      isValid: false,
      message: "Passwords do not match",
    };
  }

  return { isValid: true, message: "Valid details" };
};
