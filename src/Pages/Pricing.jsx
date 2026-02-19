import { 
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton
} from "@mui/material";

import { Check, ExpandMore as ExpandMoreIcon, ArrowBackIosNew as ArrowBackIosNewIcon, ArrowForwardIos as ArrowForwardIosIcon } from "@mui/icons-material";

import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

import { useState } from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { 
  
   
  getPopularPosts,
 
} from "../../blog";
const pricingPlans = [
  {
    title: "Free",
    price: "Free",
    period: "FOREVER",
    features: [
      { text: "Components-driven system" },
      { text: "Sales-boosting landing pages" },
      { text: "Awesome Feather icons pack" },
    ],
    buttonText: "Try for free",
    buttonVariant: "outlined",
  },
  {
    title: "Individual",
    price: "$24",
    period: "MONTH",

    features: [
      { text: "Components-driven system", color: "#FFA500" },
      { text: "Sales-boosting landing pages", color: "#FFA500" },
      { text: "Awesome Feather icons pack", color: "#FFA500" },
      { text: "Themed into 3 different styles", color: "#FFA500" },
      { text: "Will help to learn Figma", color: "#FFA500" },
    ],
    buttonText: "Regular license",
    buttonVariant: "contained",
  },
  {
    title: "Corporate",
    price: "$12",
    period: "EDITOR",
    features: [
      { text: "Components-driven system", color: "#4DD0E1" },
      { text: "Sales-boosting landing pages", color: "#4DD0E1" },
      { text: "Awesome Feather icons pack", color: "#4DD0E1" },
      { text: "Themed into 3 different styles", color: "#4DD0E1" },
    ],
    buttonText: "Extended license",
    buttonVariant: "outlined",
  },
];

export default function Pricing() {
 
  const popularPosts = getPopularPosts(2);
const testimonials = [
  {
    name: "Bulkin Simons",
    image: "/Home.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sarah Ahmed",
    image: "/Home.png",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    name: "John Mark",
    image: "/Home.png",
    text: "Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    name: "Mona Ali",
    image: "/Home.png",
    text: "Duis aute irure dolor in reprehenderit.",
  },
];

const [startIndex, setStartIndex] = useState(0);

const visibleCards = 3;

const nextSlide = () => {
  if (startIndex + visibleCards < testimonials.length) {
    setStartIndex(startIndex + 1);
  }
};

const prevSlide = () => {
  if (startIndex > 0) {
    setStartIndex(startIndex - 1);
  }
};


  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)",
        minHeight: "100vh",
        
      }}
    >
      <NavBar />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8, mt: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "3rem" },
              fontWeight: 700,
              color: "#49BBBD",
            }}
          >
            Affordable pricing
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            overflow: "visible",
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                border: "1px solid #E0E0E0",
                boxShadow:
                  index === 1
                    ? "0 15px 45px rgba(23, 162, 184, 0.2)"
                    : "0 4px 12px rgba(0, 0, 0, 0.06)",
                transform: index === 1 ? "scale(1.05)" : "scale(1)",
                transition: "0.3s ease",
                zIndex: index === 1 ? 2 : 1,
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              {plan.badge && (
                <Box
                  sx={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Chip
                    label={plan.badge}
                    sx={{
                      backgroundColor: "#FFF",
                      border: "2px solid #999",
                      color: "#666",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                    }}
                  />
                </Box>
              )}

              <CardContent sx={{ flexGrow: 1, pt: plan.badge ? 5 : 4 }}>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#17A2B8",
                    fontWeight: 600,
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {plan.title}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      display: "inline",
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#999",
                      fontWeight: 600,
                      display: "inline",
                      ml: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    / {plan.period}
                  </Typography>
                </Box>

                <List sx={{ p: 0, mb: 3 }}>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i} sx={{ p: 0, mb: 1.5 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: feature.color
                              ? `${feature.color}22`
                              : "#E0E0E0",
                            color: feature.color || "#999",
                          }}
                        >
                          <Check sx={{ fontSize: 16 }} />
                        </Box>
                      </ListItemIcon>

                      <ListItemText primary={feature.text} />
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant={plan.buttonVariant}
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: "10px",
                    backgroundColor:
                      plan.buttonVariant === "contained"
                        ? "#17A2B8"
                        : "transparent",
                    color:
                      plan.buttonVariant === "contained" ? "#fff" : "#17A2B8",
                    border: "2px solid #17A2B8",
                    "&:hover": {
                      backgroundColor:
                        plan.buttonVariant === "contained"
                          ? "#138496"
                          : "#E0F7FA",
                    },
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
      <Box
  sx={{
    mt: 10,
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <Box
    sx={{
      width: '90%',
      backgroundColor: '#252641',
      borderRadius: '24px',
      py: { xs: 6, md: 8 },
      px: 4,
      textAlign: 'center',
      color: '#fff',
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: '1.5rem', md: '2rem' },
        fontWeight: 600,
        mb: 2,
      }}
    >
      Online coaching lessons for remote learning.
    </Typography>

    <Typography
      sx={{
        maxWidth: '600px',
        mx: 'auto',
        mb: 4,
        color: '#D1D1D1',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Typography>

    <Button
      variant="contained"
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: '10px',
        backgroundColor: '#49BBBD',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: '#3aa5a7',
        },
      }}
    >
      Start learning now
    </Button>
  </Box>
</Box>
<Box sx={{ mt: 12 ,ml: 4, mr: 4}}>
  <Typography
    sx={{
      textAlign: 'center',
      fontSize: { xs: '1.5rem', md: '2rem' },
      fontWeight: 700,
      mb: 6,
    }}
  >
    Online coaching lessons for remote learning
  </Typography>

  {[1, 2, 3, 4, 5].map((item, index) => (
    <Accordion
      key={index}
      sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #E0E0E0',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ py: 1 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#49BBBD',
              mr: 2,
            }}
          />
          <Typography sx={{ fontWeight: 500 }}>
            Lorem ipsum dolor sit amet
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Typography sx={{ color: '#777', fontSize: '0.9rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </AccordionDetails>
    </Accordion>
  ))}
</Box>
<Box
  sx={{
    mt: 12,
    py: 10,
    mb: 12,
    backgroundColor: "#9DCCFF55",
    position: "relative",
  }}
>
  <Container maxWidth="lg">
    <Typography
      sx={{
        fontSize: "1.8rem",
        fontWeight: 700,
        mb: 6,
      }}
    >
      What our students have to say
    </Typography>

    
    <IconButton
      onClick={prevSlide}
      sx={{
        position: "absolute",
        left: 30,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#49BBBD",
        color: "#fff",
        "&:hover": { backgroundColor: "#3aa5a7" },
      }}
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>

    
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(3, 1fr)",
        },
        gap: 4,
        px: 8,
      }}
    >
      {testimonials
        .slice(startIndex, startIndex + visibleCards)
        .map((item, index) => (
          <Card
            key={index}
            sx={{
              p: 3,
              borderRadius: "10px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              textAlign: "center",
              transition: "0.3s",
              width: "100%",
              minHeight: "270px",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <Box
              component="img"
              src={item.image}
              sx={{
                width: 100,
                height: 100,
                margin: "0 auto 16px auto",
                objectFit: "cover",
                mb: 2,
                border: "4px solid #fff",
                boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              }}
            />

            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              {item.name}
            </Typography>

            <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
              {item.text}
            </Typography>
          </Card>
        ))}
    </Box>

    
    <IconButton
      onClick={nextSlide}
      sx={{
        position: "absolute",
        right: 30,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#49BBBD",
        color: "#fff",
        "&:hover": { backgroundColor: "#3aa5a7" },
      }}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </Container>
</Box>
 <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh'}}>
      <Container sx={{ width:'100%' }}>
        {/* Header Banner */}
        <Paper
          sx={{
            bgcolor: '#1a1e3f',
            color: 'white',
            p: 3,
            borderRadius: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 6,
            height:120,
           
            
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            APP is available for free
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#0ea5e9',
                color: 'white',
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                px: 3,
                '&:hover': {
                  bgcolor: '#0284c7',
                },
              }}
              startIcon={<AndroidIcon />}
            >
              Android APP
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#14b8a6',
                color: 'white',
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                px: 3,
                '&:hover': {
                  bgcolor: '#0d9488',
                },
              }}
              startIcon={<AppleIcon />}
            >
              iOS APP
            </Button>
          </Box>
        </Paper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
  {popularPosts.map((post) => (
    <div
      key={post.id}
      className="bg-white rounded-lg shadow-sm overflow-hidden 
                 hover:scale-105 transition duration-300
                 flex flex-col h-full"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-60 object-cover"
      />

   
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          {post.title}
        </h3>

        <div className="flex items-center mb-3">
          <span className="text-sm text-gray-600 mr-3">{post.date}</span>
          <span className="text-sm text-gray-600">{post.readTime}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 flex-1">
          {post.excerpt}
        </p>

      
        <div className="flex justify-end">
          <Button
            sx={{
              backgroundColor: "#49BBBD",
              color: "white",
              borderRadius: "8px",
              px: 3,
              transition: "0.3s ease",
              "&:hover": {
                backgroundColor: "#3aa7a9",
                transform: "translateY(-4px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
              }
            }}
          >
            Apply A Teacher
          </Button>
        </div>
      </div>
    </div>
  ))}
</div>

      </Container>
    </Box>


<Footer/>
    </Box>
  );
}
