// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        messageAlert: {
          wait: "wait your email is processed",
          success: "successfully...",
        },
        header: {
          home: "home",
          about: "about us",
          medicalTests: "medical tests",
          offers: "offers",
          homeVisit: "home visit",
          language: "العربيـة",
        },
        home: {
          hero: {
            special: "Because you are one of the family",
            main: "Get a membership now and enjoy a 50% discount on all tests",
            description:
              "Our laboratories are considered one of the leading medical laboratories in the field of medical analysis, and we always aim to provide a high-level and high-quality medical service in Egypt.",
            off: "OFF",
            LE: "L.E",
            test: "tests",
            parameters: "parameters",
          },
          examinations: {
            mainTitle: "Qlab laboratories services",
            subTitle1: "Rest assured that your",
            subTitle2: "health is safe at Qlab",
            description:
              "Comprehensive and important examinations for all ages starting from ",
            price: "300 pounds",
            examinationsCards: {
              priceTitle: "price",
              includesTitle: "includes",
              more: "more info",
              examination1: {
                type: "Test",
                title: "CBC blood count",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination2: {
                type: "Tests",
                title: "Liver function",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination3: {
                type: "Tests",
                title: "Kidney function",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination4: {
                type: "Tests",
                title: "Profile Lipid",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination5: {
                type: "Test",
                title: "IRON analysis in the blood",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination6: {
                type: "Test",
                title: "Vitamin D",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination7: {
                type: "Test",
                title: "B12 Vitamin",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination8: {
                type: "Test",
                title: "acid folic",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination9: {
                type: "Test",
                title: "Sugar",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination10: {
                type: "Test",
                title: "Cumulative sugar",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination11: {
                type: "Tests",
                title: "Hepatitis C virus",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination12: {
                type: "Test",
                title: "HIV results",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination13: {
                type: "Tests",
                title: "Thyroid hormone",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination14: {
                type: "Tests FSH, LH",
                title: "and Prolactin hormones",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination15: {
                type: "Test",
                title: "Testosterone",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination16: {
                type: "Tests tumor markers",
                title: "in the blood",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
              examination17: {
                type: "Tests",
                title: "Profile Coagulation",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "test",
              },
              examination18: {
                type: "Tests",
                title: "Profile Allergy blood",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "parameter",
              },
            },
            link: "Would you like to explore all our healthcare and screening offers?",
            click: "click here",
          },
          statistics: {
            patinets: {
              number: "200K",
              description: "Patients diagnosed in Q-Lab Laboratory",
            },
            clientSatisifications: {
              number: "100%",
              description: "Client Satisfaction has been achieved by q-lab",
            },
            kindsOfTests: {
              number: "850+",
              description:
                "Kinds of tests are available here in the laboratory",
            },
            research: {
              number: "50K",
              description: "Amazing research has been conducted by us",
            },
          },
          advantages: {
            title:
              "We provide high-quality laboratory research in Qlab laboratories",
            description:
              "Our laboratories are considered among the leading medical laboratories in the field of medical analysis, and we always aim to provide world-class, high-quality medical service in Egypt... based on our commitment to participate in improving the public health of society.",
            topics: {
              topic1: "Speed and accuracy",
              topic2: "An integrated laboratory",
            },
          },
          packages: {
            mainTitle: "High-quality laboratory services",
            subTitle1: "Special offers packages",
            subTitle2: "in our laboratories",
            description:
              "Our mission is to provide the highest level of quality, accuracy and speed in performing medical analyzes through the latest technologies and devices approved by the FDA.",
            packagesCards: {
              priceTitle: "price",
              includesTitle: "includes",
              more: "more info",
              package1: {
                type: "package for adults",
                title: "Comprehensive screening test",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "complete blood count - lipid profile",
                  d2: "liver function - kidney function",
                  d3: "random blood sugar - cumulative sugar",
                  d4: "hepatitis B and C viruses",
                },
                testNumber: 90,
                testType: "test",
              },
              package2: {
                type: "package for children",
                title: "Comprehensive examination",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Blood picture - liver functions",
                  d2: "kidney functions - urine",
                  d3: "stool - iron",
                  d4: "iron stores",
                },
                testNumber: 50,
                testType: "parameter",
              },
              package3: {
                type: "package for diabetics",
                title: "Regular examination every 3 months",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Cumulative sugar",
                  d2: "fasting sugar",
                  d3: "breakfast sugar",
                  d4: "fasting sugar",
                },
                testNumber: 90,
                testType: "test",
              },
              package4: {
                type: "package for diabetics",
                title: "Periodic examination annually",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Cumulative sugar - liver functions",
                  d2: "kidney functions",
                  d3: "microalbumin",
                  d4: "lipid profile",
                },
                testNumber: 50,
                testType: "parameter",
              },
              package5: {
                type: "package for men and women",
                title: "Hair loss package",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Blood picture - iron",
                  d2: "iron stores - zinc",
                  d3: "vitamin 12",
                  d4: "thyroid hormone (TSH)",
                },
                testNumber: 90,
                testType: "test",
              },
              package6: {
                type: "package for women",
                title: "Pregnancy follow-up journy",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Blood picture - random sugar",
                  d2: "blood type",
                  d3: "Rhesus factor",
                  d4: "complete urine",
                },
                testNumber: 50,
                testType: "parameter",
              },
              package7: {
                type: "package for men and women",
                title: "Pre-diet analysis",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Blood picture - insulin resistance",
                  d2: "vitamin D - thyroid gland",
                  d3: "lipid profile",
                  d4: "cumulative sugar",
                },
                testNumber: 50,
                testType: "parameter",
              },
              package8: {
                type: "package for all",
                title: "before fasting the month of Ramadan",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Random sugar - liver functions",
                  d2: "kidney functions - lipid profile",
                  d3: "blood picture",
                  d4: "cumulative sugar (for diabetics only)",
                },
                testNumber: 90,
                testType: "test",
              },
              package9: {
                type: "package for men and women",
                title: "Basic food allergy testing",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Blood picture - liver function",
                  d2: "kidney function - lipid profile",
                  d3: "vitamin D - random sugar",
                  d4: "thyroid gland - testosterone",
                },
                testNumber: 50,
                testType: "parameter",
              },
              package10: {
                type: "package for women",
                title: "health package, age less than 50 years",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Blood picture - calcium",
                  d2: "vitamin D - sugar",
                  d3: "cholesterol - triglycerides",
                  d4: "iron - iron stores - TSH",
                },
                testNumber: 90,
                testType: "test",
              },
              package11: {
                type: "package for women",
                title: "health package, age over 50 years",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Blood picture - calcium - vitamin D",
                  d2: "sugar - cholesterol - triglycerides - CEA",
                  d3: " Liver functions - iron stores - iron - TSH",
                  d4: "kidney functions - CA15.3 - CA125 - CA19.9",
                },
                testNumber: 50,
                testType: "parameter",
              },
              package12: {
                type: "package",
                title: "Tumor analysis package for men",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "PSA",
                  d2: "AFP",
                  d3: "CEA",
                  d4: "CA19.9",
                },
                testNumber: 90,
                testType: "test",
              },
              package13: {
                type: "package for all",
                title: "Thyroid hormone monitoring",
                oldPrice: "$500",
                newPrice: "$300",
                description: { d1: "TSH", d2: "FT3", d3: "FT4", d4: "FT4" },
                testNumber: 90,
                testType: "test",
              },

              package14: {
                type: "package for all",
                title: "Basic food allergy testing package",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Food Detective",
                  d2: "tests ",
                  d3: "for 60",
                  d4: "types of food",
                },
                testNumber: 90,
                testType: "test",
              },
              package15: {
                type: "package for all",
                title: "Comprehensive food allergy testing",
                oldPrice: "$500",
                newPrice: "$300",
                description: {
                  d1: "Food Print",
                  d2: "tests ",
                  d3: "for 220",
                  d4: "types of food",
                },
                testNumber: 90,
                testType: "test",
              },
            },
            link: "Would you like to explore all our healthcare and screening offers?",
            click: "click here",
          },
          awards: {
            subTitle: "Versatile Laboratory Service Provider",
            mainTitle: "We Have Got Prestigious Awards For Our Work",
            overWorld: {
              number: "20",
              title: "Awards From All Over the world",
            },
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab fuga quaerat molestiae voluptatem, ipsam, aliquid nesciunt sunt, cum reiciendis accusantium veritatis repellat temporibus consequuntur aspernatur itaque delectus maiores nemo Lorem ipsum dolor .",
          },
          book: {
            title: "now you can book your home visit with Qlab ",
            link: "book now",
            formData: {
              serviceName: "Service Name",
              Name: "Name",
              phone: "phone",
              email: "email",
              time: "time",
            },
          },
        },
        about: {
          subTitle: "Why Choose QLab’s Proposal ?",
          mainTitle: "We Guarantee Quality for Timely Results",
          description:
            "The main goal of the quality assurance program in Q-Labs is to provide high-quality results in a timely manner to our clients. Analysis performance is monitored during external and internal programs.",
          values: {
            title: "values",
            value1: {
              title: "Patient-Centered Care",
              description:
                "In all their accomplishments, QLab Medical Laboratories are guided by the needs of its patients.",
            },
            value2: {
              title: "Continuous Learning",
              description:
                "In all their accomplishments, QLab Medical Laboratories are guided by the needs of its patients.",
            },
            value3: {
              title: "Communication",
              description:
                "QLab Medical Laboratories strive to acquire and understand relevant information, and shares it clearly and effectively.",
            },
            value4: {
              title: "Relationships",
              description:
                "QLab Medical Laboratories develop and strengthen collaborative relationships with all of their customers, including their patients, their families, their employees, volunteers, medical staff, and their business partners.",
            },
            value5: {
              title: "Human Resources",
              description:
                "QLab Medical Laboratories support the professional and personal growth of their employees in their pursuit of the laboratory’s mission.",
            },
            value6: {
              title: "Organizational Ethics",
              description:
                "QLab Medical Laboratories are steered by ethical values that emphasize integrity, honesty, fairness, dignity, and respect for all individuals.",
            },
            value7: {
              title: "Superior Performance",
              description:
                "QLab Medical Laboratories strive for superior performance in all their activities, to preserve the laboratories’ clinical, organizational and financial strength.",
            },
          },
        },
        footer: {
          subscribe: {
            title1: "for latest update",
            title2: "subscribe to our newsletter",
            button: "subscribe",
          },
          quickLinks: {
            title: "quick links",
          },
          contactUS: {
            title: "contact us",
            location:
              "El-kawther, above samir & aly stationery, hurghada, egypt",
          },
          openingHours: {
            title: "opening hours",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday",
            closed: "closed",
          },
        },
        homeVisit: {
          title: "Now you can book your home visit with Qlab",
          book: {
            subTitle1: "BOOK AN",
            subTitle2: "Appointment",
          },
        },
        branches: {
          title: "Addresses of all our branches",
          address: "Our Address",
          contactInformation: "Contact Information",
          openingHour: "Opening Hour",
          allBranches: {
            branch1: {
              addressTitle: "Hurghada Mubarak 2 above Samir Library and Ali",
              email: "info@qlab-eg.com",
              phone: "01122240120",
            },
            branch2: {
              addressTitle: "Hurghada, Dahar, above Spinneys supermarket",
              email: "info@qlab-eg.com",
              phone: "01111652872",
            },
            branch3: {
              addressTitle:
                "Giza, October 6, Central Spine, Al-Abaza Mall, next to Al-Tawheed and Al-Nour",
              email: "info@qlab-eg.com",
              phone: "01111652943",
            },
            branch4: {
              addressTitle:
                "Cairo, Helmeyat El-Zaytoun, Ibn Al-Hakam Street, Al-Marmar Tower, in front of Donia El-Gambari, next to WE branch",
              email: "info@qlab-eg.com",
              phone: "01111652983",
            },
            branch5: {
              addressTitle:
                "Qalyubia, 10th of Ramadan Street, next to Taqa gas station, in front of Bin Abdul Aziz",
              email: "info@qlab-eg.com",
              phone: "01111652913",
            },
          },
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam veritatis natus id doloremque dicta. Nam voluptatibus minima nostrum. Soluta ullam incidunt officia cum nobis nam! Dolores eius est illum quos.",
      },
    },
    ar: {
      translation: {
        messageAlert: {
          wait: "انتظر حتى يتم ارسال رسالتك",
          success: "تم الارسال بنجاح...",
        },
        header: {
          home: "الرئيسية",
          about: "عن المعمل",
          medicalTests: "التحاليل",
          offers: "العروض",
          homeVisit: "الزيارة المنزلية",
          language: "English",
        },
        home: {
          hero: {
            special: "علشان انت واحد من العيلة",
            main: "احصل على العضوية الآن واستمتع بخصم 50% على جميع التحالــــيـل",
            description:
              "تعتبر معاملنا من المعامل الطبية الرائدة في مجال التحليل الطبية, ونهدف دائما إلى تقديم خدمة طبية عالية المستوى وفائقة الجودة على ارض مصر",
            off: "خصم",
            LE: "ج.م",
            test: "اختبارات",
            parameters: "حدود",
          },
          examinations: {
            mainTitle: "خدمات معامل كيولاب",
            subTitle1: "اطمن صحتك فى أمان",
            subTitle2: "فى معامل كيولاب",
            description: "فحوصات شاملة وهامة لجميع الأعمار تبدأ من ",
            price: "300 جنيه",
            examinationsCards: {
              priceTitle: "السعر",
              includesTitle: "يحتوي على",
              more: "للمزيد",
              examination1: {
                type: "تحاليل",
                title: "صورة دم كاملة CBC ",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination2: {
                type: "تحاليل",
                title: "وظائف الكبد ",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination3: {
                type: "تحاليل",
                title: "وظائف الكلى",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination4: {
                type: "تحاليل",
                title: "Profile Lipid",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination5: {
                type: "تحليل",
                title: "IRON في الدم",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination6: {
                type: "تحليل",
                title: "فيتامين D",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination7: {
                type: "تحليل",
                title: "B12 Vitamin",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination8: {
                type: "تحليل",
                title: "acid folic",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination9: {
                type: "تحليل",
                title: "السكر",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination10: {
                type: "تحليل",
                title: "السكر التراكمي",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination11: {
                type: "تحاليل",
                title: "فيروسات الكبد الوبائي",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination12: {
                type: "تحليل",
                title: "النتائج فيروس نقص المناعة",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination13: {
                type: "تحاليل",
                title: "هرمونات الغدة الدرقية ",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination14: {
                type: "تحاليل",
                title: "هرمونات FSH,LH&Prolactin",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination15: {
                type: "تحليل",
                title: "هرمون التيستوستيرون",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination16: {
                type: "تحاليل",
                title: "دالالت األورام في الدم",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
              examination17: {
                type: "تحاليل",
                title: "Profile Coagulation",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 90,
                testType: "اختبار",
              },
              examination18: {
                type: "تحاليل",
                title: "Profile Allergy في الدم",
                oldPrice: "500 جنيه",
                newPrice: "300 جنيه",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in animi obcaecati itaque! Culpa eligendi ad reiciendis voluptate commodi sit tempore",
                testNumber: 50,
                testType: "مُدخل",
              },
            },
            link: "هل ترغب في استكشاف جميع عروض الرعاية الصحية والفحوصات لدينا؟",
            click: "انقر هنا",
          },
          statistics: {
            patinets: {
              number: "200K",
              description: "المرضى الذين تم تشخيصهم في معامل كيولاب",
            },
            clientSatisifications: {
              number: "100%",
              description: "لقد تم تحقيق رضا العملاء من خلال معامل كيولاب ",
            },
            kindsOfTests: {
              number: "750+",
              description: "أنواع الاختبارات المتوفرة لدينا في معامل كيولاب ",
            },
            research: {
              number: "50K",
              description: "لقد تم إجراء ابحاث مذهل لدي معامل كيولاب",
            },
          },
          advantages: {
            title: "نحن نقدم أبحاث مختبرية عالية الجـودة فى معـامل كيـولاب",
            description:
              "تعتبر معاملنا من المعامل الطبية الرائدة في مجال التحاليل الطبية، ونهدف دائما إلى تقديم خدمة طبية عالمية المستوى وفائقة الجودة على أرض مصر.. وذلك إنطلاقاً من إلتزامنا بالمشاركة لتحسين الصحة العامة للمجتمع.",
            topics: {
              topic1: "سرعة ودقة لنتائج التحاليل",
              topic2: "معمل متكامل في كل فرع",
            },
          },
          packages: {
            mainTitle: "خدمات معملية فائقة الجودة",
            subTitle1: "باقات العروض المميزة",
            subTitle2: "فى معاملنا",
            description:
              "مهمتنا هى توفير أعلى مستوى من الجوده والدقة والسرعة فى أداء التحاليل الطبية من خلال احدث التقنيات والأجهزة المعتمده من FDA",
            packagesCards: {
              priceTitle: "السعر",
              includesTitle: "يحتوي على",
              more: "للمزيد",
              package1: {
                type: "باقة",
                title: "تحاليل الفحص الشامل للكبار",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "صورة دم كاملة - ملف دهون",
                  d2: "وظائف كبد - وظائف كلى",
                  d3: "سكرعشوائى - فيروسات الكبد الوبائى",
                  d4: "B,C سكر تراكمى",
                },
                testNumber: 90,
                testType: "اختبار",
              },
              package2: {
                type: "باقة",
                title: "الفحص الشامل للأطفال",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "صورة دم - وظاائف كبد",
                  d2: " وظائف كلى - بول",
                  d3: "براز - حديد",
                  d4: "مخزون حديد",
                },
                testNumber: 50,
                testType: "مُدخل",
              },
              package3: {
                type: "باقة الفحص الدورى",
                title: "لمرضى السكر كل 3 شهور",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "سكر تراكمى",
                  d2: "سكر صايم",
                  d3: "سكر فاطر",
                  d4: "سكر فاطر",
                },
                testNumber: 90,
                testType: "اختبار",
              },
              package4: {
                type: "باقة الفحص الدورى",
                title: "لمرضى السكر سنويا",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "سكر تراكمى - وظائف كبد",
                  d2: "وظائف كلى",
                  d3: "ميكرو البومين",
                  d4: "ملف دهون",
                },
                testNumber: 50,
                testType: "مُدخل",
              },
              package5: {
                type: "باقة للسيدات والرجال",
                title: "لتساقط الشعر",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "صورة دم - حديد",
                  d2: "مخزون حديد - زنك",
                  d3: "فيتامين 12",
                  d4: "هرمون الغدة الدرقية TSH",
                },
                testNumber: 90,
                testType: "اختبار",
              },
              package6: {
                type: "باقة للسيدات",
                title: "لمتابعة الحمل",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "صورة دم - سكر عشوائى",
                  d2: "فصيلة الدم",
                  d3: "عامل الريسس",
                  d4: "بول كامل",
                },
                testNumber: 50,
                testType: "مُدخل",
              },
              package7: {
                type: "باقة للسيدات والرجال",
                title: "لتحاليل ما قبل الدايت",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "صورة دم - مقاومة انسولين",
                  d2: "فيتامين د - الغدة الدرقية",
                  d3: "ملف دهون",
                  d4: "سكر تراكمى",
                },
                testNumber: 50,
                testType: "مُدخل",
              },
              package8: {
                type: "باقة للسيدات والرجال",
                title: "لتحاليل ما قبل صيام شهر رمضان",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "سكر عشوائى - وظائف كبد",
                  d2: "وظائف كلى - ملف دهون",
                  d3: "صورة دم",
                  d4: "سكر تراكمى ( لمرضى السكر فقط )",
                },
                testNumber: 90,
                testType: "اختبار",
              },
              package9: {
                type: "باقة للسيدات والرجال",
                title: "لتحاليل اللياقة البدنية",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "صورة دم - وظائف كبد",
                  d2: "وظائف كلى - ملف دهون",
                  d3: "فيتامين د - سكر عشوائى",
                  d4: "غدة درقية - تيستوستيرون",
                },
                testNumber: 50,
                testType: "مُدخل",
              },
              package10: {
                type: "باقة للسيدات",
                title: "لصحة المرأة لسن اقل من 50 عام",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "صورة دم - كالسيوم",
                  d2: "فتامين د - سكر",
                  d3: "كوليسترول - دهون ثلاثية",
                  d4: "حديد - مخزون حديد - TSH",
                },
                testNumber: 90,
                testType: "اختبار",
              },
              package11: {
                type: "باقة للسيدات",
                title: "لصحة المرأة لسن اكبر من 50 عام",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "صورصورة دم - كالسيوم - فتامين د",
                  d2: "سكر  - كوليسترول - دهون ثلاثية - حديد",
                  d3: " مخزون حديد - TSH - وظائف كبد - وظائف كلى",
                  d4: "CA15.3 - CEA - CA125 - CA19.9",
                },
                testNumber: 50,
                testType: "مُدخل",
              },
              package12: {
                type: "باقة للرجال",
                title: "لتحاليل دلالات الأورام",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: { d1: "PSA", d2: "AFP", d3: "CEA", d4: "CA19.9" },
                testNumber: 90,
                testType: "اختبار",
              },
              package13: {
                type: "باقة للسيدات والرجال",
                title: "لمتابعة هرمونات الغدة الدرقية ",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: { d1: "TSH", d2: "FT3", d3: "FT4", d4: "FT4" },
                testNumber: 90,
                testType: "اختبار",
              },
              package14: {
                type: "باقة للسيدات والرجال",
                title: "لتحاليل حساسية الاطعمة الاساسية",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "Food Detective",
                  d2: "اختبار ",
                  d3: "ل 60",
                  d4: "نوع من المواد الغذائية",
                },
                testNumber: 50,
                testType: "مُدخل",
              },
              package15: {
                type: "باقة للجميع",
                title: "لتحاليل حساسية الاطعمة الشاملة",
                oldPrice: "500 L.E",
                newPrice: "300 L.E",
                description: {
                  d1: "Food print",
                  d2: "اختبار ",
                  d3: "ل 220",
                  d4: "نوع من المواد الغذائية",
                },
                testNumber: 90,
                testType: "اختبار",
              },
            },
            link: "هل ترغب في استكشاف جميع عروض الرعاية الصحية والفحوصات لدينا؟",
            click: "انقر هنا",
          },
          awards: {
            subTitle: "مزود خدمات مختبرية متعدد الاستخدامات",
            mainTitle: "لقد حصلنا على جوائز مرموقة لعملنا",
            overWorld: {
              number: "20",
              title: "جوائز من جميع أنحاء العالم",
            },
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab fuga quaerat molestiae voluptatem, ipsam, aliquid nesciunt sunt, cum reiciendis accusantium veritatis repellat temporibus consequuntur aspernatur itaque delectus maiores nemo Lorem ipsum dolor .",
          },
          book: {
            title: "دلوقتي تقدر تحجز زيارتك المنزلية مع معامل كيولاب",
            link: "احجز الآن",
            formData: {
              serviceName: "نوع الخدمة",
              Name: "الاسم",
              phone: "رقم الهاتف",
              email: "البريد الالكتروني",
              time: "التوقيت",
            },
          },
        },
        about: {
          subTitle: "لماذا تختار معامل كيولاب ؟",
          mainTitle: "نحن نضمن الجودة للنتائج وفى وقت قياسى",
          description:
            "يعد الهدف الرئيسي لبرنامج ضمان الجودة في معامل كيو لاب هو تقديم نتائج عالية الجودة في الوقت المناسب لعملاءنا, ويتم رصد أداء التحليل خلال البرامج الخارجية والداخلية.",
          values: {
            title: "قيمُنا",
            value1: {
              title: "تمحور الرعاية حول المريض",
              description:
                "تسترشد معامل كيولاب باحتياجات المريض لتحقيق أهداف الخدمة المعملية.",
            },
            value2: {
              title: "التعلم المستمر",
              description:
                "تسترشد معامل كيولاب باحتياجات المريض لتحقيق أهداف الخدمة المعملية.",
            },
            value3: {
              title: "التواصل",
              description:
                "تسعي معامل كيولاب الطبية نسعى جاهدة لاكتساب وفهم المعلومات ذات الصلة، والأسهام بشكل واضح وفعال مع المجتمع.",
            },
            value4: {
              title: "العلاقات",
              description:
                "تعمل مختبرات كيولاب الطبية على تطوير وتقوية العلاقات التعاونية مع جميع عملائها ، بما في ذلك المرضى وعائلاتهم. و أيضا مع موظفوهم والطاقم الطبي وشركائهم التجاريين.",
            },
            value5: {
              title: "الموارد البشرية",
              description:
                "تدعم معامل كيولاب النمو المهني والشخصي لموظفيها لأداء مهامهم الوظيفية.",
            },
            value6: {
              title: "القيم المهنية للمؤسسة",
              description:
                "تؤكد القيم الأساسية لمعامل كيولاب علي النزاهة والأمانة والكرامة والاحترام لجميع الأفراد.",
            },
            value7: {
              title: "الأداء المتميز",
              description:
                "تسعى معامل كيولاب للحصول على أداء متفوق في جميع أنشطتها، للحفاظ على القوة الاكلينكية والتنظيمية والمالية.",
            },
          },
        },
        footer: {
          subscribe: {
            title1: "لآخر تحديث",
            title2: "اشترك في نشرتنا الإخبارية",
            button: "اشترك",
          },
          quickLinks: {
            title: "روابط سريعة",
          },
          contactUS: {
            title: "تواصل معنا",
            location: "الكوثر، فوق مكتبة سمير وعلي، الغردقة، مصر",
          },
          openingHours: {
            title: "اوقات العمل",
            monday: "الاثنين",
            tuesday: "الثلاثاء",
            wednesday: "الاربعاء",
            thursday: "الخميس",
            friday: "الجمعة",
            saturday: "السبت",
            sunday: "الاحد",
            closed: "مغلق",
          },
        },
        homeVisit: {
          title: "دلوقتي تقدر تحجز زيارتك المنزلية مع معامل كيولاب",
          book: {
            subTitle1: "احجز",
            subTitle2: "ميعاد",
          },
        },
        branches: {
          title: "عناوين جميع الفروع لدينا",
          address: "عنوان الفرع",
          contactInformation: "معلومات الاتصال",
          openingHour: "ساعات العمل",
          allBranches: {
            branch1: {
              addressTitle: "الغردقة مبارك 2 فوق مكتبة سمير و على",
              email: "info@qlab-eg.com",
              phone: "01122240120",
            },
            branch2: {
              addressTitle: "الغردقة، الدهار، فوق سوبر ماركت سبينيس",
              email: "info@qlab-eg.com",
              phone: "01111652872",
            },
            branch3: {
              addressTitle:
                "الجيزة 6 أكتوبر المحور المركزي الأباظية مول بجوار التوحيد والنور",
              email: "info@qlab-eg.com",
              phone: "01111652943",
            },
            branch4: {
              addressTitle:
                "القاهرة حلمية الزيتون شارع ابن الحكم برج المرمر امام دنيا الجمبري بجوار فرع WE",
              email: "info@qlab-eg.com",
              phone: "01111652983",
            },
            branch5: {
              addressTitle:
                "القليوبية شارع العاشر من رمضان بجوار بنزينة طاقة أمام بن عبد العزيز",
              email: "info@qlab-eg.com",
              phone: "01111652913",
            },
          },
        },
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
