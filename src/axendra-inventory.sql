CREATE TABLE `negocio` (
  `id_negocio` int PRIMARY KEY AUTO_INCREMENT,
  `nombre_negocio` varchar(100),
  `nombre` varchar(20),
  `apellidos` varchar(100),
  `telefono` varchar(20),
  `cargo` varchar(100),
  `email` varchar(100),
  `password` varchar(8),
  `created_at` timestamp DEFAULT (now())
);

CREATE TABLE `usuario` (
  `id_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(100),
  `password` varchar(8),
  `fk_negocio` int
);

CREATE TABLE `producto` (
  `id_producto` int PRIMARY KEY AUTO_INCREMENT,
  `codigo_producto` varchar(20),
  `descripcion_producto` varchar(100),
  `precio_producto` float,
  `entrada` int,
  `stock` int,
  `fecha_ingreso` timestamp DEFAULT (now()),
  `fk_usuario` int
);

CREATE TABLE `ventas` (
  `id_venta` int PRIMARY KEY AUTO_INCREMENT,
  `fk_producto` int,
  `precio_venta` float,
  `cantidad_venta` int,
  `utilidad_venta` float,
  `fecha_venta` timestamp DEFAULT (now())
);

CREATE TABLE `reporteContable` (
  `id_reporte` int PRIMARY KEY AUTO_INCREMENT,
  `saldo_inicial` float,
  `utilidad_diaria` float,
  `perdida_diaria` float,
  `ingreso` float,
  `egreso` float,
  `fk_venta` int,
  `fk_producto` int
);

ALTER TABLE `usuario` ADD FOREIGN KEY (`fk_negocio`) REFERENCES `negocio` (`id_negocio`);

ALTER TABLE `producto` ADD FOREIGN KEY (`fk_usuario`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `ventas` ADD FOREIGN KEY (`fk_producto`) REFERENCES `producto` (`id_producto`);
