-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 01 Février 2018 à 01:21
-- Version du serveur :  10.1.30-MariaDB-0ubuntu0.17.10.1
-- Version de PHP :  7.1.11-0ubuntu0.17.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test2`
--

-- --------------------------------------------------------

--
-- Structure de la table `countries`
--

CREATE TABLE `countries` (
  `id` int(6) NOT NULL,
  `codinter` char(3) NOT NULL DEFAULT '',
  `codfra` char(2) NOT NULL DEFAULT '',
  `countryname` varchar(250) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `countries`
--

INSERT INTO `countries` (`id`, `codinter`, `codfra`, `countryname`) VALUES
(1, 'AFG', 'AF', 'AFGHANISTAN'),
(2, 'ZAF', 'ZA', 'AFRIQUE DU SUD'),
(3, 'ALA', 'AX', 'ALAND, ILES'),
(4, 'ALB', 'AL', 'ALBANIE'),
(5, 'DZA', 'DZ', 'ALGERIE '),
(6, 'DEU', 'DE', 'ALLEMAGNE'),
(7, 'AND', 'AD', 'ANDORRE'),
(8, 'AGO', 'AO', 'ANGOLA'),
(9, 'AIA', 'AI', 'ANGUILLA'),
(10, 'ATA', 'AQ', 'ANTARCTIQUE'),
(11, 'ATG', 'AG', 'ANTIGUA-ET-BARBUDA'),
(12, 'ANT', 'AN', 'ANTILLES NEERLANDAISES '),
(13, 'SAU', 'SA', 'ARABIE SAOUDITE'),
(14, 'ARG', 'AR', 'ARGENTINE'),
(15, 'ARM', 'AM', 'ARMENIE'),
(16, 'ABW', 'AW', 'ARUBA'),
(17, 'AUS', 'AU', 'AUSTRALIE'),
(18, 'AUT', 'AT', 'AUTRICHE'),
(19, 'AZE', 'AZ', 'AZERBAIDJAN'),
(20, 'BHS', 'BS', 'BAHAMAS'),
(21, 'BHR', 'BH', 'BAHREIN'),
(22, 'BGD', 'BD', 'BANGLADESH'),
(23, 'BRB', 'BB', 'BARBADE'),
(24, 'BLR', 'BY', 'BELARUS'),
(25, 'BEL', 'BE', 'BELGIQUE'),
(26, 'BLZ', 'BZ', 'BELIZE'),
(27, 'BEN', 'BJ', 'BENIN '),
(28, 'BMU', 'BM', 'BERMUDES'),
(29, 'BTN', 'BT', 'BHOUTAN'),
(30, 'BOL', 'BO', 'BOLIVIE'),
(31, 'BIH', 'BA', 'BOSNIE-HERZEGOVINE '),
(32, 'BWA', 'BW', 'BOTSWANA'),
(33, 'BVT', 'BV', 'BOUVET, ILE '),
(34, 'BRA', 'BR', 'BRESIL '),
(35, 'BRN', 'BN', 'BRUNEI DARUSSALAM '),
(36, 'BGR', 'BG', 'BULGARIE'),
(37, 'BFA', 'BF', 'BURKINA FASO'),
(38, 'BDI', 'BI', 'BURUNDI'),
(39, 'CYM', 'KY', 'CAIMANES, ILES '),
(40, 'KHM', 'KH', 'CAMBODGE'),
(41, 'CMR', 'CM', 'CAMEROUN'),
(42, 'CAN', 'CA', 'CANADA'),
(43, 'CPV', 'CV', 'CAP-VERT'),
(44, 'CAF', 'CF', 'CENTRAFRICAINE, REPUBLIQUE '),
(45, 'CHL', 'CL', 'CHILI'),
(46, 'CHN', 'CN', 'CHINE'),
(47, 'CXR', 'CX', 'CHRISTMAS, ILE '),
(48, 'CYP', 'CY', 'CHYPRE'),
(49, 'CCK', 'CC', 'COCOS (KEELING), ILES '),
(50, 'COL', 'CO', 'COLOMBIE'),
(51, 'COM', 'KM', 'COMORES'),
(52, 'COG', 'CG', 'CONGO'),
(53, 'COD', 'CD', 'CONGO, LA REPUBLIQUE DEMOCRATIQUE DU '),
(54, 'COK', 'CK', 'COOK, ILES'),
(55, 'KOR', 'KR', 'COREE, REPUBLIQUE DE '),
(56, 'PRK', 'KP', 'COREE, REPUBLIQUE POPULAIRE DEMOCRATIQUE DE '),
(57, 'CRI', 'CR', 'COSTA RICA'),
(58, 'CIV', 'CI', 'COTE D\'IVOIRE '),
(59, 'HRV', 'HR', 'CROATIE'),
(60, 'CUB', 'CU', 'CUBA'),
(61, 'DNK', 'DK', 'DANEMARK'),
(62, 'DJI', 'DJ', 'DJIBOUTI'),
(63, 'DOM', 'DO', 'DOMINICAINE, REPUBLIQUE'),
(64, 'DMA', 'DM', 'DOMINIQUE'),
(65, 'EGY', 'EG', 'EGYPTE '),
(66, 'SLV', 'SV', 'EL SALVADOR'),
(67, 'ARE', 'AE', 'EMIRATS ARABES UNIS'),
(68, 'ECU', 'EC', 'EQUATEUR '),
(69, 'ERI', 'ER', 'ERYTHREE'),
(70, 'ESP', 'ES', 'ESPAGNE'),
(71, 'EST', 'EE', 'ESTONIE'),
(72, 'USA', 'US', 'Etats-Unis'),
(73, 'ETH', 'ET', 'ETHIOPIE'),
(74, 'FLK', 'FK', 'FALKLAND, ILES (MALVINAS) '),
(75, 'FRO', 'FO', 'FEROE, ILES '),
(76, 'FJI', 'FJ', 'FIDJI'),
(77, 'FIN', 'FI', 'FINLANDE'),
(78, 'FRA', 'FR', 'France '),
(79, 'GAB', 'GA', 'GABON'),
(80, 'GMB', 'GM', 'GAMBIE'),
(81, 'GEO', 'GE', 'GEORGIE'),
(82, 'SGS', 'GS', 'GEORGIE DU SUD ET LES ILES SANDWICH DU SUD'),
(83, 'GHA', 'GH', 'GHANA'),
(84, 'GIB', 'GI', 'GIBRALTAR'),
(85, 'GRC', 'GR', 'GRECE '),
(86, 'GRD', 'GD', 'GRENADE'),
(87, 'GRL', 'GL', 'GROENLAND'),
(88, 'GLP', 'GP', 'GUADELOUPE'),
(89, 'GUM', 'GU', 'GUAM'),
(90, 'GTM', 'GT', 'GUATEMALA'),
(91, 'GGY', 'GG', 'GUERNESEY'),
(92, 'GIN', 'GN', 'GUINEE '),
(93, 'GNB', 'GW', 'GUINEE BISSAU '),
(94, 'GNQ', 'GQ', 'GUINEE EQUATORIALE '),
(95, 'GUY', 'GY', 'GUYANA'),
(96, 'GUF', 'GF', 'GUYANE FRANCAISE '),
(97, 'HTI', 'HT', 'HAITI '),
(98, 'HMD', 'HM', 'HEARD, ILE ET MCDONALD, ILES'),
(99, 'HND', 'HN', 'HONDURAS'),
(100, 'HKG', 'HK', 'HONG KONG'),
(101, 'HUN', 'HU', 'HONGRIE'),
(102, 'IMN', 'IM', 'ILE DE MAN '),
(103, 'UMI', 'UM', 'ILES MINEURES ELOIGNEES DES ETATS-UNIS '),
(104, 'VGB', 'VG', 'ILES VIERGES BRITANNIQUES'),
(105, 'VIR', 'VI', 'ILES VIERGES DES ETATS-UNIS '),
(106, 'IND', 'IN', 'INDE'),
(107, 'IDN', 'ID', 'INDONESIE '),
(108, 'IRN', 'IR', 'IRAN, REPUBLIQUE ISLAMIQUE D\' '),
(109, 'IRQ', 'IQ', 'IRAQ'),
(110, 'IRL', 'IE', 'IRLANDE'),
(111, 'ISL', 'IS', 'ISLANDE'),
(112, 'ISR', 'IL', 'ISRAEL '),
(113, 'ITA', 'IT', 'ITALIE'),
(114, 'JAM', 'JM', 'JAMAIQUE '),
(115, 'JPN', 'JP', 'JAPON'),
(116, 'JEY', 'JE', 'JERSEY'),
(117, 'JOR', 'JO', 'JORDANIE'),
(118, 'KAZ', 'KZ', 'KAZAKHSTAN'),
(119, 'KEN', 'KE', 'KENYA'),
(120, 'KGZ', 'KG', 'KIRGHIZISTAN'),
(121, 'KIR', 'KI', 'KIRIBATI'),
(122, 'KWT', 'KW', 'KOWEIT '),
(123, 'LAO', 'LA', 'LAOS, REPUBLIQUE DEMOCRATIQUE POPULAIRE'),
(124, 'LSO', 'LS', 'LESOTHO'),
(125, 'LVA', 'LV', 'LETTONIE'),
(126, 'LBN', 'LB', 'LIBAN'),
(127, 'LBR', 'LR', 'LIBERIA '),
(128, 'LBY', 'LY', 'LIBYENNE, JAMAHIRIYA ARABE'),
(129, 'LIE', 'LI', 'LIECHTENSTEIN'),
(130, 'LTU', 'LT', 'LITUANIE'),
(131, 'LUX', 'LU', 'LUXEMBOURG'),
(132, 'MAC', 'MO', 'MACAO'),
(133, 'MKD', 'MK', 'MACEDOINE, L\'EX-REPUBLIQUE YOUGOSLAVE DE '),
(134, 'MDG', 'MG', 'MADAGASCAR'),
(135, 'MYS', 'MY', 'MALAISIE'),
(136, 'MWI', 'MW', 'MALAWI'),
(137, 'MDV', 'MV', 'MALDIVES'),
(138, 'MLI', 'ML', 'MALI'),
(139, 'MLT', 'MT', 'MALTE'),
(140, 'MNP', 'MP', 'MARIANNES DU NORD, ILES'),
(141, 'MAR', 'MA', 'MAROC'),
(142, 'MHL', 'MH', 'MARSHALL, ILES'),
(143, 'MTQ', 'MQ', 'MARTINIQUE'),
(144, 'MUS', 'MU', 'MAURICE'),
(145, 'MRT', 'MR', 'MAURITANIE'),
(146, 'MYT', 'YT', 'MAYOTTE'),
(147, 'MEX', 'MX', 'MEXIQUE'),
(148, 'FSM', 'FM', 'MICRONESIE, ETATS FEDERES DE '),
(149, 'MDA', 'MD', 'MOLDOVA'),
(150, 'MCO', 'MC', 'MONACO'),
(151, 'MNG', 'MN', 'MONGOLIE'),
(152, 'MNE', 'ME', 'MONTENEGRO'),
(153, 'MSR', 'MS', 'MONTSERRAT'),
(154, 'MOZ', 'MZ', 'MOZAMBIQUE'),
(155, 'MMR', 'MM', 'MYANMAR'),
(156, 'NAM', 'NA', 'NAMIBIE'),
(157, 'NRU', 'NR', 'NAURU'),
(158, 'NPL', 'NP', 'NEPAL '),
(159, 'NIC', 'NI', 'NICARAGUA'),
(160, 'NER', 'NE', 'NIGER'),
(161, 'NGA', 'NG', 'NIGERIA '),
(162, 'NIU', 'NU', 'NIUE '),
(163, 'NFK', 'NF', 'NORFOLK, ILE '),
(164, 'NOR', 'NO', 'NORVEGE '),
(165, 'NCL', 'NC', 'NOUVELLE-CALEDONIE'),
(166, 'NZL', 'NZ', 'NOUVELLE-ZELANDE '),
(167, 'IOT', 'IO', 'OCEAN INDIEN, TERRITOIRE BRITANNIQUE DE L\' '),
(168, 'OMN', 'OM', 'OMAN'),
(169, 'UGA', 'UG', 'OUGANDA'),
(170, 'UZB', 'UZ', 'OUZBEKISTAN '),
(171, 'PAK', 'PK', 'PAKISTAN'),
(172, 'PLW', 'PW', 'PALAOS'),
(173, 'PSE', 'PS', 'PALESTINIEN OCCUPE, TERRITOIRE'),
(174, 'PAN', 'PA', 'PANAMA'),
(175, 'PNG', 'PG', 'PAPOUASIE-NOUVELLE-GUINEE '),
(176, 'PRY', 'PY', 'PARAGUAY'),
(177, 'NLD', 'NL', 'PAYS-BAS'),
(178, 'PER', 'PE', 'PEROU '),
(179, 'PHL', 'PH', 'PHILIPPINES'),
(180, 'PCN', 'PN', 'PITCAIRN'),
(181, 'POL', 'PL', 'POLOGNE'),
(182, 'PYF', 'PF', 'POLYNESIE FRANCAISE '),
(183, 'PRI', 'PR', 'PORTO RICO'),
(184, 'PRT', 'PT', 'PORTUGAL'),
(185, 'QAT', 'QA', 'QATAR'),
(186, 'REU', 'RE', 'REUNION '),
(187, 'ROU', 'RO', 'ROUMANIE'),
(188, 'GBR', 'GB', 'ROYAUME-UNI'),
(189, 'RUS', 'RU', 'RUSSIE, FEDERATION DE '),
(190, 'RWA', 'RW', 'RWANDA'),
(191, 'ESH', 'EH', 'SAHARA OCCIDENTAL'),
(192, 'BLM', 'BL', 'SAINT-BARTHELEMY'),
(193, 'KNA', 'KN', 'SAINT-KITTS-ET-NEVIS'),
(194, 'SMR', 'SM', 'SAINT-MARIN'),
(195, 'MAF', 'MF', 'SAINT-MARTIN (PARTIE FRANCAISE) '),
(196, 'SPM', 'PM', 'SAINT-PIERRE-ET-MIQUELON'),
(197, 'VAT', 'VA', 'SAINT-SIEGE (ETAT DE LA CITE DU VATICAN)'),
(198, 'VCT', 'VC', 'SAINT-VINCENT-ET-LES GRENADINES'),
(199, 'SHN', 'SH', 'SAINTE-HELENE'),
(200, 'LCA', 'LC', 'SAINTE-LUCIE'),
(201, 'SLB', 'SB', 'SALOMON, ILES '),
(202, 'WSM', 'WS', 'SAMOA'),
(203, 'ASM', 'AS', 'SAMOA AMERICAINES '),
(204, 'STP', 'ST', 'SAO TOME-ET-PRINCIPE '),
(205, 'SEN', 'SN', 'SENEGAL '),
(206, 'SRB', 'RS', 'SERBIE'),
(207, 'SYC', 'SC', 'SEYCHELLES'),
(208, 'SLE', 'SL', 'SIERRA LEONE'),
(209, 'SGP', 'SG', 'SINGAPOUR'),
(210, 'SVK', 'SK', 'SLOVAQUIE'),
(211, 'SVN', 'SI', 'SLOVENIE'),
(212, 'SOM', 'SO', 'SOMALIE'),
(213, 'SDN', 'SD', 'SOUDAN'),
(214, 'LKA', 'LK', 'SRI LANKA'),
(215, 'SWE', 'SE', 'SUEDE '),
(216, 'CHE', 'CH', 'SUISSE'),
(217, 'SUR', 'SR', 'SURINAME'),
(218, 'SJM', 'SJ', 'SVALBARD ET ILE JAN MAYEN '),
(219, 'SWZ', 'SZ', 'SWAZILAND'),
(220, 'SYR', 'SY', 'SYRIENNE, REPUBLIQUE ARABE '),
(221, 'TJK', 'TJ', 'TADJIKISTAN'),
(222, 'TWN', 'TW', 'TA�WAN, PROVINCE DE CHINE'),
(223, 'TZA', 'TZ', 'TANZANIE, REPUBLIQUE UNIE DE'),
(224, 'TCD', 'TD', 'TCHAD'),
(225, 'CZE', 'CZ', 'TCHEQUE, REPUBLIQUE '),
(226, 'ATF', 'TF', 'TERRES AUSTRALES FRANCAISES'),
(227, 'THA', 'TH', 'THAILANDE'),
(228, 'TLS', 'TL', 'TIMOR-LESTE'),
(229, 'TGO', 'TG', 'TOGO'),
(230, 'TKL', 'TK', 'TOKELAU'),
(231, 'TON', 'TO', 'TONGA'),
(232, 'TTO', 'TT', 'TRINITE-ET-TOBAGO '),
(233, 'TUN', 'TN', 'TUNISIE'),
(234, 'TKM', 'TM', 'TURKMENISTAN '),
(235, 'TCA', 'TC', 'TURKS ET CAIQUES, ILES'),
(236, 'TUR', 'TR', 'TURQUIE'),
(237, 'TUV', 'TV', 'TUVALU'),
(238, 'UKR', 'UA', 'UKRAINE'),
(239, 'URY', 'UY', 'URUGUAY'),
(240, 'VUT', 'VU', 'VANUATU'),
(241, 'VEN', 'VE', 'VENEZUELA'),
(242, 'VNM', 'VN', 'VIET NAM'),
(243, 'WLF', 'WF', 'WALLIS-ET-FUTUNA'),
(244, 'YEM', 'YE', 'YEMEN '),
(245, 'ZMB', 'ZM', 'ZAMBIE'),
(246, 'ZWE', 'ZW', 'ZIMBABWE');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
