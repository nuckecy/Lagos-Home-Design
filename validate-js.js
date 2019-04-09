$(document).ready(function() {
    // $('#test-form').bootstrapValidator({
    //     //submitButtons: '#postForm',
    //     // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    //     feedbackIcons: {
    //         valid: 'glyphicon glyphicon-ok',
    //         invalid: 'glyphicon glyphicon-remove',
    //         validating: 'glyphicon glyphicon-refresh'
    //     },        
    //     fields: {
    //         coachfn: {
    //          message: 'The First Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Your First Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 3,
    //                     max: 30,
    //                     message: 'The first name must be more than 1 and less than 30 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'The first name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         coachln: {
    //             message: 'Last Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Your Last Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 3,
    //                     max: 30,
    //                     message: 'Last Name must be more than 1 and less than 30 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Last Names can only consist of alphabetical characters'
    //                 },
    //             }
    //         },
    //         coachm: {
    //             message: 'Mobile Number is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Mobile Number is required'
    //                 },
    //                 stringLength: {
    //                     min: 11,
    //                     max: 11,
    //                     message: 'Mobile Number must be a valid GSM Number'
    //                 },
    //                 regexp: {
    //                     regexp: /^(\d{11})$/,
    //                     message: 'Mobile Number can only consist of numbers'
    //                 },
    //             }
    //         },
    //         coachea: {
    //             validators: {
    //                 notEmpty: {
    //                     message: 'The Email Address is required'
    //                 },
    //                 emailAddress: {
    //                     message: 'The Email Address is not a valid'
    //                 }
    //             }
    //         },
    //         teamname: {
    //             message: 'Team Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Your Team Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 3,
    //                     max: 30,
    //                     message: 'Team Name must be more than 1 and less than 30 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Team Names can only consist of alphabetical characters'
    //                 },
    //             }
    //         },
    //         teamaddr: {
    //             message: 'Contact Address is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Contact Address is required'
    //                 },
    //                 stringLength: {
    //                     min: 10,
    //                     max: 50,
    //                     message: 'Contact Address must be at least 10 characters long '
    //                 },
    //                 regexp: {
    //                     regexp: /[0-9 ,][\d ][A-z -]+/,
    //                     message: 'Contact Address cannot contain special characters'
    //                 },
    //             }
    //         },

    //         // Player 1 =======================================================================
    //         playerfn1: {
    //             message: 'Player 1 Full Name is not valid',
    //                validators: {
    //                    notEmpty: {
    //                        message: 'Player 1 Full Name is required'
    //                    },
    //                    stringLength: {
    //                        min: 2,
    //                        max: 100,
    //                        message: 'Player 1 Full Name must be more than 2 characters long'
    //                    },
    //                    regexp: {
    //                        regexp: /^[A-z -]+$/,
    //                        message: 'Player 1 Full Name can only accept alphabetical input'
    //                    },
    //                }
    //         },
    //         playermn1: {
    //         message: 'Player 1 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 1 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 1 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 1 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem1: {
    //         message: 'Player 1 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 1 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 1 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 
            
    //         // Player 2 =======================================================================
    //         playerfn2: {
    //             message: 'Player 2 Full Name is not valid',
    //                validators: {
    //                    notEmpty: {
    //                        message: 'Player 2 Full Name is required'
    //                    },
    //                    stringLength: {
    //                        min: 2,
    //                        max: 100,
    //                        message: 'Player 2 Full Name must be more than 2 characters long'
    //                    },
    //                    regexp: {
    //                        regexp: /^[A-z -]+$/,
    //                        message: 'Player 2 Full Name can only accept alphabetical input'
    //                    },
    //                }
    //         },
    //         playermn2: {
    //         message: 'Player 2 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 2 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 2 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 2 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem2: {
    //         message: 'Player 2 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 2 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 2 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 3 =======================================================================
    //         playerfn3: {
    //             message: 'Player 3 Full Name is not valid',
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Player 3 Full Name is required'
    //                     },
    //                     stringLength: {
    //                         min: 2,
    //                         max: 100,
    //                         message: 'Player 3 Full Name must be more than 2 characters long'
    //                     },
    //                     regexp: {
    //                         regexp: /^[A-z -]+$/,
    //                         message: 'Player 3 Full Name can only accept alphabetical input'
    //                     },
    //                 }
    //         },
    //         playermn3: {
    //         message: 'Player 3 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 3 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 3 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 3 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem3: {
    //         message: 'Player 3 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 3 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 3 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 4 =======================================================================
    //         playerfn4: {
    //             message: 'Player 4 Full Name is not valid',
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Player 4 Full Name is required'
    //                     },
    //                     stringLength: {
    //                         min: 2,
    //                         max: 100,
    //                         message: 'Player 4 Full Name must be more than 2 characters long'
    //                     },
    //                     regexp: {
    //                         regexp: /^[A-z -]+$/,
    //                         message: 'Player 4 Full Name can only accept alphabetical input'
    //                     },
    //                 }
    //         },
    //         playermn4: {
    //         message: 'Player 4 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 4 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 4 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 4 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem4: {
    //         message: 'Player 4 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 4 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 4 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 5 =======================================================================
    //         playerfn5: {
    //         message: 'Player 5 Full Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Player 5 Full Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 2,
    //                     max: 100,
    //                     message: 'Player 5 Full Name must be more than 2 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Player 5 Full Name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         playermn5: {
    //         message: 'Player 5 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 5 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 5 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 5 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem5: {
    //         message: 'Player 5 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 5 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 5 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 6 =======================================================================
    //         playerfn6: {
    //             message: 'Player 6 Full Name is not valid',
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Player 6 Full Name is required'
    //                     },
    //                     stringLength: {
    //                         min: 2,
    //                         max: 100,
    //                         message: 'Player 6 Full Name must be more than 2 characters long'
    //                     },
    //                     regexp: {
    //                         regexp: /^[A-z -]+$/,
    //                         message: 'Player 6 Full Name can only accept alphabetical input'
    //                     },
    //                 }
    //         },
    //         playermn6: {
    //         message: 'Player 6 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 6 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 6 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 6 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem6: {
    //         message: 'Player 6 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 6 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 6 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 7 =======================================================================
    //         playerfn7: {
    //         message: 'Player 7 Full Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Player 7 Full Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 2,
    //                     max: 100,
    //                     message: 'Player 7 Full Name must be more than 2 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Player 7 Full Name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         playermn7: {
    //         message: 'Player 7 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 7 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 7 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 7 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem7: {
    //         message: 'Player 7 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 7 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 7 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //===========================================================================

    //         // Player 8 =======================================================================
    //         playerfn8: {
    //             message: 'Player 8 Full Name is not valid',
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Player 8 Full Name is required'
    //                     },
    //                     stringLength: {
    //                         min: 2,
    //                         max: 100,
    //                         message: 'Player 8 Full Name must be more than 2 characters long'
    //                     },
    //                     regexp: {
    //                         regexp: /^[A-z -]+$/,
    //                         message: 'Player 8 Full Name can only accept alphabetical input'
    //                     },
    //                 }
    //         },
    //         playermn8: {
    //         message: 'Player 8 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 8 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 8 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 8 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem8: {
    //         message: 'Player 8 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 8 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 8 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //===========================================================================

    //         // Player 9 =======================================================================
    //         playerfn9: {
    //             message: 'Player 9 Full Name is not valid',
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Player 9 Full Name is required'
    //                     },
    //                     stringLength: {
    //                         min: 2,
    //                         max: 100,
    //                         message: 'Player 9 Full Name must be more than 2 characters long'
    //                     },
    //                     regexp: {
    //                         regexp: /^[A-z -]+$/,
    //                         message: 'Player 9 Full Name can only accept alphabetical input'
    //                     },
    //                 }
    //         },
    //         playermn9: {
    //         message: 'Player 9 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 9 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 9 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 9 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem9: {
    //         message: 'Player 9 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 9 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 9 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //===========================================================================

    //         // Player 10 =======================================================================
    //         playerfn10: {
    //         message: 'Player 10 Full Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Player 10 Full Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 2,
    //                     max: 100,
    //                     message: 'Player 10 Full Name must be more than 2 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Player 10 Full Name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         playermn10: {
    //         message: 'Player 10 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 10 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 10 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 10 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem10: {
    //         message: 'Player 10 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 10 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 10 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //===========================================================================

    //         // Player 11 =======================================================================
    //         playerfn11: {
    //             message: 'Player 11 Full Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Player 11 Full Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 2,
    //                     max: 100,
    //                     message: 'Player 11 Full Name must be more than 2 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Player 11 Full Name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         playermn11: {
    //         message: 'Player 11 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 11 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 11 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 11 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem11: {
    //         message: 'Player 11 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 11 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 11 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 12 =======================================================================
    //         playerfn12: {
    //             message: 'Player 12 Full Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Player 12 Full Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 2,
    //                     max: 100,
    //                     message: 'Player 12 Full Name must be more than 2 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Player 12 Full Name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         playermn12: {
    //         message: 'Player 12 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 12 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 12 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 12 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem12: {
    //         message: 'Player 12 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 12 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 12 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 13 =======================================================================
    //         playerfn13: {
    //         message: 'Player 13 Full Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Player 13 Full Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 2,
    //                     max: 100,
    //                     message: 'Player 13 Full Name must be more than 2 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Player 13 Full Name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         playermn13: {
    //         message: 'Player 13 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 13 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 13 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 13 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem13: {
    //         message: 'Player 13 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 13 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 13 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 14 =======================================================================
    //         playerfn14: {
    //         message: 'Player 14 Full Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Player 14 Full Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 2,
    //                     max: 100,
    //                     message: 'Player 14 Full Name must be more than 2 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Player 14 Full Name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         playermn14: {
    //         message: 'Player 14 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 14 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 14 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 14 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem14: {
    //         message: 'Player 14 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 14 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 14 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //         // Player 15 =======================================================================
    //         playerfn15: {
    //         message: 'Player 15 Full Name is not valid',
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Player 15 Full Name is required'
    //                 },
    //                 stringLength: {
    //                     min: 2,
    //                     max: 100,
    //                     message: 'Player 15 Full Name must be more than 2 characters long'
    //                 },
    //                 regexp: {
    //                     regexp: /^[A-z -]+$/,
    //                     message: 'Player 15 Full Name can only accept alphabetical input'
    //                 },
    //             }
    //         },
    //         playermn15: {
    //         message: 'Player 15 Mobile Number is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 15 Mobile Number is required'
    //             },
    //             stringLength: {
    //                 min: 11,
    //                 max: 11,
    //                 message: 'Player 15 Mobile Number must be a valid GSM Number'
    //             },
    //             regexp: {
    //                 regexp: /^(\d{11})$/,
    //                 message: 'Player 15 Mobile Number can only consist of numbers'
    //             },
    //         }
    //         },
    //         playerem15: {
    //         message: 'Player 15 Email Address is not valid',
    //         validators: {
    //             notEmpty: {
    //                 message: 'Player 15 Email Address is required'
    //             },
    //             emailAddress: {
    //                 message: 'Player 15 Email Address is not a valid'
    //             }
    //         }
    //         },
    //         //=========================================================================== 

    //     }
    // })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbxtn3GrFfezrswcPQdZbSS7msNxZXKXzrZXRUrXG8unML3Xzs4/exec';
        var redirectUrl = 'success.html';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.get(url, $form.serialize(), function(data) {
            jqxhr.crossDomain = true;
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
            });
    });
});