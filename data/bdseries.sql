

-- --------------------------------------------------------

--
-- Structure de la table `bdseries`
--

CREATE TABLE `bdseries` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `titre` varchar(30) NOT NULL DEFAULT '',
  `auteur` varchar(80) NOT NULL DEFAULT '',
  `editeur` varchar(80) NOT NULL DEFAULT '',
  `site` varchar(80) NOT NULL DEFAULT '',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `bdseries`
--

INSERT INTO `bdseries` (`id`, `titre`, `auteur`, `editeur`) VALUES
(1, 'Garulfo', 'Ayroles, Maïorana, Leprévost', 'Delcourt'),
(2, 'Horologiom', 'Fabrice Lebeault', 'Delcourt'),
(3, 'Le château des étoiles', 'Alex Alice', 'Rue De Sevres'),
(4, 'Le voyage extraordinaire', 'Camboni, Filippi', 'Vents d"Ouest'),
(5, 'Travis', 'Christophe Quet, Fred Duval ', 'Delcourt'),
(6, 'Sillage', 'Philippe Buchet, Jean-David Morvan', 'Delcourt' )
;

