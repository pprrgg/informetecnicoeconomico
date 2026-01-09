import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Dialog,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleFilled from "@mui/icons-material/PlayCircleFilled";

const InicioSection = () => {
  const [open, setOpen] = useState(false);

  const abrirVideo = () => setOpen(true);
  const cerrarVideo = () => setOpen(false);

  return (
    <>
      {/* HERO SECTION */}
      <Box
        id="inicio"
        sx={{
          background: `
            linear-gradient(rgba(13, 71, 161, 0.85), rgba(21, 101, 192, 0.55)),
            url(img//1.png)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: { xs: 8, sm: 10, md: 12, lg: 15 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          {/* Logo ETE */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >


              {/* E derecha volteada */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1,
                  position: "relative",
                  right: 13,
                  transform: "scaleY(1.4)",
                  letterSpacing: "-0.2em",   // ❗ Acerca las letras
                }}
              >
                ITE
              </Typography>

            </Box>
          </Box>

          {/* Título grande */}
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
              mb: 0,
              fontFamily: "'Playfair Display', serif",
              fontStretch: "condensed",
              letterSpacing: "-0.0585em",
              fontWeight: 900,
              lineHeight: 1.1,
              // textTransform: "uppercase",
              textAlign: "center",
              width: "100%",
              display: {
                xs: "block",
                sm: "flex",
              },
              justifyContent: "center",
              gap: "0.35rem",
            }}
          >
            Informe Técnico Económico
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="warning"
              size="large"
              onClick={abrirVideo}
              sx={{
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                fontWeight: 700,
                display: "flex",
                gap: 1,
              }}
              startIcon={<PlayCircleFilled />}
            >
              Demo
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* VIDEO MODAL */}
      <Dialog
        fullScreen
        open={open}
        onClose={cerrarVideo}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={cerrarVideo}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "white",
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.4)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: "2rem" }} />
        </IconButton>

        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <video
            src="video/1.mp4"
            controls
            autoPlay
            style={{ width: "100%", maxHeight: "100vh" }}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default InicioSection;
