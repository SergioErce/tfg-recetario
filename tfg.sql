-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-05-2024 a las 19:30:00
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tfg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escandallos`
--

CREATE TABLE `escandallos` (
  `id` int(11) NOT NULL,
  `ingrediente` varchar(500) NOT NULL,
  `cantidad` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `escandallos`
--

INSERT INTO `escandallos` (`id`, `ingrediente`, `cantidad`) VALUES
(1, '1,2,3,4,5', '0.3,0.1,0.1,0.1,0.02'),
(2, '3,5,6,7,8,9,10,11', '0.1,0.02,0.6,0.1,0.16,0.7,0.1,0.05'),
(3, '3,5,9,11,12,13,14,15', '0.1, 0.03,1,0.025,0.4,0.05,0.05,0.15'),
(4, '7,8,13,16', '0.1,0.16,0.05,0.4'),
(5, '6,17,18,19', '0.15,0.1,0.07,0.05'),
(6, '20', '0.25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`id`, `nombre`, `precio`) VALUES
(1, 'tallarines de arroz', 6.2),
(2, 'zanahoria', 1.09),
(3, 'cebolla', 2.75),
(4, 'pimiento', 1.99),
(5, 'ajo', 5.84),
(6, 'patata', 2.55),
(7, 'harina', 0.65),
(8, 'huevo', 3.95),
(9, 'caldo de verduras', 1.05),
(10, 'vino blanco', 1.95),
(11, 'aceite de oliva', 9.79),
(12, 'arroz', 2.69),
(13, 'limón', 2.1),
(14, 'queso parmesano', 25.99),
(15, 'guisante', 1.59),
(16, 'calamar', 12.89),
(17, 'alcachofa', 5.98),
(18, 'jamón serrano', 17.75),
(19, 'queso manchego', 36),
(20, 'atun', 39.95);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `ingredientes` varchar(500) NOT NULL,
  `elaboracion` varchar(1500) NOT NULL,
  `user` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`id`, `nombre`, `ingredientes`, `elaboracion`, `user`) VALUES
(1, 'Tallarines al wok', '300 g de tallarines de arroz,\r\n2 zanahorias,\r\n1 cebolla,\r\n1 pimiento rojo,\r\n2 dientes de ajo,\r\n1 cdta.	de jengibre,\r\n2 cdas.	de aceite de sésamo,\r\n3 cdas.	de salsa de soja,\r\n2 cebolletas', 'Cuece los tallarines de arroz según las instrucciones del paquete, escúrrelos, acláralos con agua fría y resérvalos;\r\nPela las zanahorias y la cebolla y córtalas en tiras finas. Lava los pimientos y córtalos en tiras finas. Pela y pica finamente el ajo. Lava y ralla finamente el jengibre;\r\nCalienta el aceite de sésamo en un wok a fuego medio-alto y sofríe la cebolla y el ajo unos 2 minutos;\r\nAñade las zanahorias y los pimientos y sofríe durante unos 5-7 minutos;\r\nAñade los fideos a la sartén. Añade la salsa de soja, el jengibre, el Sazonador Chino y sal y pimienta al gusto. Saltea todo bien y deja freír unos 5 minutos;\r\nLava y limpia las cebolletas y córtalas en aros finos;\r\nCubre los fideos fritos con las cebolletas y, si quieres, un poco de aceite de guindilla para darle un toque picante', 'sergio'),
(2, 'Patatas a la importancia', '4 patatas medianas,\r\n2 dientes de ajo,\r\n1 cebolla,\r\nharina (para rebozar),\r\n2 huevos,\r\n700 ml de caldo de verduras,\r\n100 ml de vino blanco,\r\nperejil fresco,\r\naceite de oliva,\r\nsal y pimienta al gusto', 'Pela las patatas y córtalas en rodajas de aproximadamente 1 cm de grosor;\r\nSazona las rodajas de patata con sal, pimienta y el Sazonador para Patatas;\r\nPasa las rodajas de patata por un poco de harina;\r\nBate los huevos en un plato y pasa las rodajas de patata por el huevo batido;\r\nFríe las rodajas de patata en aceite de oliva caliente hasta que estén doradas por ambos lados. Retira y reserva en un plato con papel absorbente;\r\nEn la misma sartén (quita el exceso de aceite si fuera necesario), sofríe el ajo y la cebolla picados hasta que estén transparentes. Desglasa con vino y deja cocinar unos minutos;\r\nAñade las patatas fritas y cubrir con caldo de verduras. La cantidad de caldo debe ser suficiente para casi cubrir las patatas;\r\nCocinar a fuego medio-bajo, tapado, durante unos 20 minutos o hasta que las patatas estén tiernas;\r\nAñadir perejil fresco picado antes de servir.', 'pablo'),
(3, 'Risotto al limón', '1 l caldo de verduras,\r\n1 cebolla,\r\n3 dientes de ajo,\r\n1 cda. de aceite de oliva,\r\n400 g de arroz arborio,\r\n120 ml de vino blanco,\r\n1 limón ecológico,\r\n50 g de queso parmesano,\r\n150 g de guisantes,\r\ncebollino fresco', 'En una cacerola, lleva el caldo de verduras a ebullición a fuego medio y mantenlo caliente;\r\nPela y pica finamente la cebolla y el ajo. Calienta el aceite de oliva en una sartén honda o cazuela a fuego medio. Añade la cebolla y el ajo y sofríelos durante 2-3 minutos;\r\nAñade el arroz a la sartén, remuévelo y tuéstalo durante unos 2 minutos, removiendo constantemente;\r\nDesglasa con el vino blanco y cuece a fuego lento hasta que el arroz haya absorbido completamente el vino;\r\nReduce el fuego a medio-bajo. Añade un poco de caldo y remueve, cuando se haya absorbido, vuelve a echar caldo y remueve de vez en cuando. Repite el proceso hasta que el arroz esté al dente, unos 20-25 minutos;\r\nMientras tanto, corta el limón por la mitad y sofríe las mitades por el lado cortado en una sartén durante unos 3-4 minutos hasta que estén ligeramente caramelizadas;\r\nRalla la cáscara con un rallador fino y exprime el zumo de limón;\r\nCuando el risotto esté casi listo, añade la ralladura y el zumo de limón, el parmesano, los guisantes y el Sazonador para Arroz. Vuelve a remover para que los ingredientes se integren;\r\nTapa la cazuela y deja reposar el risotto unos 5 minutos;\r\nDecora el risotto de limón con cebollino fresco y sírvelo caliente.', 'sergio'),
(4, 'Calamares en freidora de aire', '100 g de harina de trigo,\r\n3 tubos de calamar,\r\n2 huevos,\r\nlimón', 'Lava los tubos de calamar, sécalos bien y córtalos en aros de unos 2 cm de grosor. Sazona los aros de calamar con el Sazonador Ajo y Perejil de modo que queden bien impregnados;\r\nA continuación, pasa los aros primero por el huevo batido y luego por la harina. Retira el exceso de harina de los aros;\r\nColoca los calamares rebozados en la cesta de la freidora de aire, asegurándote de que no se superpongan para que se cocinen de manera uniforme;\r\nRocía un poco de aceite en spray sobre los calamares;\r\nCocina en la freidora de aire a 180 °C durante 10 minutos o hasta que estén dorados y crujientes. A mitad de la cocción, saca la cesta y agita suavemente para asegurar que los calamares se doren uniformemente;\r\nSirve caliente acompañado de limón y tu salsa favorita, por ejemplo, alioli.', 'daniel'),
(5, 'Patata asada con alcachofas y jamón', '1 patata grande,\r\n2 corazones de alcachofas,\r\n2 lonchas de jamón serrano,\r\n50 g de queso manchego', 'Precalienta el horno a 200 °C con función ventilador;\r\nLava la patata y pínchala con un tenedor. Colócala en una bandeja de horno y hornéala durante unos 45-60 minutos hasta que estén bien cocidas;\r\nMientras se hornean las patatas, prepara el relleno. Para ello, mezcla los corazones de alcachofa picados con jamón serrano en lonchas y queso manchego rallado en un bol. Echa por encima un chorrito de aceite y nuestro Sazonador Ajo y Perejil;\r\nEn cuanto la patata esté lista, ábrela y abre un hueco en el medio con ayuda de un tenedor. Espolvorea unas pizcas de nuestro Sazonador para Patatas Asadas e introduce la mezcla de alcachofa, jamón y queso dentro;\r\nMete las patatas rellenas en el horno durante 10-15 minutos más.', 'pablo'),
(6, 'Tataki de atún', '250 g de atún fresco,\r\n1 cda. de aceite de sésamo,\r\n1⁄2 cda. de jengibre rallado,\r\n2 cdas. de salsa de soja,\r\n1 cda. de vinagre de arroz,\r\n1 puñado de semillas de sésamo', 'Mezcla el aceite de sésamo, el jengibre rallado, la salsa de soja, el vinagre de arroz y el Sazonador Asia en un bol para preparar la marinada del atún;\r\nColoca el filete de atún fresco y la marinada en una bolsa de congelación y asegúrate de que el filete quede completamente cubierto. Déjalo marinar durante al menos 10 minutos;\r\nMientras tanto, pela y corta en dados los mangos y los aguacates y ponlos en un bol;\r\nCorta la guindilla roja y el cebollino en aros muy finos y añádelos al bol;\r\nExprime el zumo de lima sobre los ingredientes del bol y sazona con sal al gusto;\r\nMezcla suavemente todos los ingredientes de la ensalada hasta que estén bien combinados;\r\nCalienta una sartén a fuego medio-alto;\r\nUna vez que la sartén esté caliente, coloca el filete de atún marinado en la sartén y dora durante aproximadamente ½ minuto por cada lado hasta que los bordes estén ligeramente dorados;\r\nCon unas pinzas, retira con cuidado el filete de atún de la sartén y deja enfriar. Es importante que el interior permanezca dorado. Decora la superficie con una capa de semillas de sésamo negro. A continuación, corta el atún en rodajas finas.', 'daniel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `user` varchar(25) NOT NULL,
  `pass` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`user`, `pass`) VALUES
('admin', 'admin'),
('daniel', '1234'),
('pablo', '1234'),
('sergio', '1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `escandallos`
--
ALTER TABLE `escandallos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `escandallos`
--
ALTER TABLE `escandallos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
