var wms_layers = [];


    var projection_ModeloDigitaldeSuperficiesLiDAR_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_ModeloDigitaldeSuperficiesLiDAR_0 = projection_ModeloDigitaldeSuperficiesLiDAR_0.getExtent();
    var size_ModeloDigitaldeSuperficiesLiDAR_0 = ol.extent.getWidth(projectionExtent_ModeloDigitaldeSuperficiesLiDAR_0) / 256;
    var resolutions_ModeloDigitaldeSuperficiesLiDAR_0 = new Array(14);
    var matrixIds_ModeloDigitaldeSuperficiesLiDAR_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_ModeloDigitaldeSuperficiesLiDAR_0[z] = size_ModeloDigitaldeSuperficiesLiDAR_0 / Math.pow(2, z);
        matrixIds_ModeloDigitaldeSuperficiesLiDAR_0[z] = z;
    }
    var lyr_ModeloDigitaldeSuperficiesLiDAR_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://wmts-mapa-lidar.idee.es/lidar",
    attributions: ' ',
                                "layer": "EL.GridCoverageDSM",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_ModeloDigitaldeSuperficiesLiDAR_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_ModeloDigitaldeSuperficiesLiDAR_0),
                resolutions: resolutions_ModeloDigitaldeSuperficiesLiDAR_0,
                matrixIds: matrixIds_ModeloDigitaldeSuperficiesLiDAR_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Modelo Digital de Superficies LiDAR",
                            opacity: 1.0,
                            
                            
                          });
var lyr_Sombreado_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/mdt",
    attributions: ' ',
                              params: {
                                "LAYERS": "sombreado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Sombreado",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Sombreado_1, 0]);

    var projection_ModeloDigitaldeSuperficiesLiDAR_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_ModeloDigitaldeSuperficiesLiDAR_2 = projection_ModeloDigitaldeSuperficiesLiDAR_2.getExtent();
    var size_ModeloDigitaldeSuperficiesLiDAR_2 = ol.extent.getWidth(projectionExtent_ModeloDigitaldeSuperficiesLiDAR_2) / 256;
    var resolutions_ModeloDigitaldeSuperficiesLiDAR_2 = new Array(14);
    var matrixIds_ModeloDigitaldeSuperficiesLiDAR_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_ModeloDigitaldeSuperficiesLiDAR_2[z] = size_ModeloDigitaldeSuperficiesLiDAR_2 / Math.pow(2, z);
        matrixIds_ModeloDigitaldeSuperficiesLiDAR_2[z] = z;
    }
    var lyr_ModeloDigitaldeSuperficiesLiDAR_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://wmts-mapa-lidar.idee.es/lidar",
    attributions: ' ',
                                "layer": "EL.GridCoverageDSM",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_ModeloDigitaldeSuperficiesLiDAR_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_ModeloDigitaldeSuperficiesLiDAR_2),
                resolutions: resolutions_ModeloDigitaldeSuperficiesLiDAR_2,
                matrixIds: matrixIds_ModeloDigitaldeSuperficiesLiDAR_2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Modelo Digital de Superficies LiDAR",
                            opacity: 1.0,
                            
                            
                          });
var lyr_Sombreado_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/mdt",
    attributions: ' ',
                              params: {
                                "LAYERS": "sombreado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Sombreado",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Sombreado_3, 0]);
var lyr_VueloamericanoSerieB19561957_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "AMS_1956-1957",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vuelo americano (Serie B, 1956-1957)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VueloamericanoSerieB19561957_4, 0]);
var lyr_VueloInterministerial19731986_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "Interministerial_1973-1986",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vuelo Interministerial (1973-1986)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VueloInterministerial19731986_5, 0]);
var lyr_VueloNacional19811986_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "Nacional_1981-1986",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vuelo Nacional (1981-1986)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VueloNacional19811986_6, 0]);
var lyr_OLISTAT19971998_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "OLISTAT",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "OLISTAT (1997-1998)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OLISTAT19971998_7, 0]);
var lyr_SIGPAC19972003_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "SIGPAC",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "SIGPAC (1997-2003)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SIGPAC19972003_8, 0]);
var lyr_2004_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2004",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2004",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2004_9, 0]);
var lyr_2005_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2005",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2005",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2005_10, 0]);
var lyr_2006_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2006",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2006",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2006_11, 0]);
var lyr_2007_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2007",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2007",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2007_12, 0]);
var lyr_2008_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2008",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2008",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2008_13, 0]);
var lyr_2009_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2009",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2009",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2009_14, 0]);
var lyr_2010_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2010",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2010",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2010_15, 0]);
var lyr_2011_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2011",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2011",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2011_16, 0]);
var lyr_2012_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2012",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2012",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2012_17, 0]);
var lyr_2013_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2013",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2013",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2013_18, 0]);
var lyr_2014_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2014",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2014",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2014_19, 0]);
var lyr_2015_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2015",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2015",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2015_20, 0]);
var lyr_2016_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2016",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2016",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2016_21, 0]);
var lyr_2017_22 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms/pnoa-historico",
    attributions: ' ',
                              params: {
                                "LAYERS": "PNOA2017",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2017",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2017_22, 0]);
var lyr_Ortoimagenmximaactualidad_23 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen máxima actualidad",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagenmximaactualidad_23, 0]);

        var lyr_GoogleHybrid_24 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_25 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Callejero_26 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/ign-base",
    attributions: ' ',
                              params: {
                                "LAYERS": "IGNBaseTodo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Callejero",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Callejero_26, 0]);
var lyr_Lmiteadministrativo_27 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/unidades-administrativas",
    attributions: ' ',
                              params: {
                                "LAYERS": "AU.AdministrativeBoundary",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Límite administrativo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lmiteadministrativo_27, 0]);
var lyr_Parcelas_28 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/wms/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PARCELA",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Parcelas",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Parcelas_28, 0]);
var lyr_Unidadadministrativa_29 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/unidades-administrativas",
    attributions: ' ',
                              params: {
                                "LAYERS": "AU.AdministrativeUnit",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Unidad administrativa",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Unidadadministrativa_29, 0]);
var lyr_Catastro_30 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_30, 0]);
var lyr_ZonasGEODE_31 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Zonas GEODE",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ZonasGEODE_31, 0]);
var lyr_Rtulosunidades_32 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "9",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Rótulos unidades",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Rtulosunidades_32, 0]);
var lyr_Recintosgeologa_33 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Recintos geología",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Recintosgeologa_33, 0]);
var lyr_Lineasauxiliares_34 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "8",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lineas auxiliares",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lineasauxiliares_34, 0]);
var lyr_Indiciosminerales_35 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "7",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Indicios minerales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Indiciosminerales_35, 0]);
var lyr_Ejes_36 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "5",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ejes",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ejes_36, 0]);
var lyr_CuaternarioRecintos_37 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cuaternario - Recintos ",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CuaternarioRecintos_37, 0]);
var lyr_CuaternarioLineasauxiliares_38 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cuaternario - Lineas auxiliares",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CuaternarioLineasauxiliares_38, 0]);
var lyr_Contactos_39 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Contactos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Contactos_39, 0]);
var lyr_Buzamientos_40 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "6",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Buzamientos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Buzamientos_40, 0]);
var lyr_Lmiteadministrativo_41 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/unidades-administrativas",
    attributions: ' ',
                              params: {
                                "LAYERS": "AU.AdministrativeBoundary",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Límite administrativo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lmiteadministrativo_41, 0]);
var lyr_Parcelas_42 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/wms/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PARCELA",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Parcelas",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Parcelas_42, 0]);
var lyr_Unidadadministrativa_43 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/unidades-administrativas",
    attributions: ' ',
                              params: {
                                "LAYERS": "AU.AdministrativeUnit",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Unidad administrativa",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Unidadadministrativa_43, 0]);
var lyr_Catastro_44 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_44, 0]);
var lyr_ZonasGEODE_45 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Zonas GEODE",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ZonasGEODE_45, 0]);
var lyr_Rtulosunidades_46 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "9",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Rótulos unidades",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Rtulosunidades_46, 0]);
var lyr_Recintosgeologa_47 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Recintos geología",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Recintosgeologa_47, 0]);
var lyr_Lineasauxiliares_48 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "8",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lineas auxiliares",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lineasauxiliares_48, 0]);
var lyr_Indiciosminerales_49 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "7",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Indicios minerales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Indiciosminerales_49, 0]);
var lyr_Ejes_50 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "5",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ejes",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ejes_50, 0]);
var lyr_CuaternarioRecintos_51 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cuaternario - Recintos ",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CuaternarioRecintos_51, 0]);
var lyr_CuaternarioLineasauxiliares_52 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cuaternario - Lineas auxiliares",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CuaternarioLineasauxiliares_52, 0]);
var lyr_Contactos_53 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Contactos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Contactos_53, 0]);
var lyr_Buzamientos_54 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geode_50/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "6",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Buzamientos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Buzamientos_54, 0]);
var lyr_MapaForestaldeEspaa_55 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/MFE/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "LC.LandCoverSurfaces",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mapa Forestal de España",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MapaForestaldeEspaa_55, 0]);
var lyr_ClasifclimticadeJPapadakis_56 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Agricultura/CaractAgroClimaticas/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Clasificaci%C3%B3n%20clim%C3%A1ticos",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Clasif. climática de J. Papadakis",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ClasifclimticadeJPapadakis_56, 0]);
var lyr_DatacionesC14archivoAntonioGilman_57 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idearqueologia.org/idearq/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "idearq_c14",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Dataciones C14 (archivo Antonio Gilman)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DatacionesC14archivoAntonioGilman_57, 0]);
var lyr_CorpusdePinturaRupestreLevantinaCPRL_58 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idearqueologia.org/idearq/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "idearq_cprl",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Corpus de Pintura Rupestre Levantina (CPRL)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CorpusdePinturaRupestreLevantinaCPRL_58, 0]);
var lyr_Capabasedeyacimientosarqueolgicos_59 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idearqueologia.org/idearq/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "idearq_base",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Capa base de yacimientos arqueológicos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Capabasedeyacimientosarqueolgicos_59, 0]);
var lyr_Anlisisdeistopos_60 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idearqueologia.org/idearq/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "idearq_dimp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Análisis de isótopos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Anlisisdeistopos_60, 0]);
var lyr_ModeloDigitaldelTerrenodelasARPSIs_61 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "EL.GridCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Modelo Digital del Terreno de las ARPSIs",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ModeloDigitaldelTerrenodelasARPSIs_61, 0]);
var lyr_MarinaT500aos_62 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.MarinaT500",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Marina T = 500 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MarinaT500aos_62, 0]);
var lyr_MarinaT100aos_63 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.MarinaT100",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Marina T = 100 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MarinaT100aos_63, 0]);
var lyr_FluvialT500aos_64 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.FluvialT500",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fluvial T = 500 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT500aos_64, 0]);
var lyr_FluvialT100aos_65 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fluvial T = 100 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT100aos_65, 0]);
var lyr_FluvialT10aos_66 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.FluvialT10",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fluvial T = 10 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT10aos_66, 0]);
var lyr_CaucesconDPHcartogrfico_67 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/agua/DPHCartografico/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "AM.FloodUnitOfManagement",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cauces con DPH cartográfico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CaucesconDPHcartogrfico_67, 0]);
var lyr_Redhidrogrfica_68 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.Network",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Red hidrográfica",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Redhidrogrfica_68, 0]);
var lyr_Puntosdeintershidrogrfico_69 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.HydroPointOfInterest",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Puntos de interés hidrográfico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Puntosdeintershidrogrfico_69, 0]);
var lyr_Objetosartificiales_70 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.ManMadeObject",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Objetos artificiales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Objetosartificiales_70, 0]);
var lyr_Masasdeagua_71 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.Waterbodies",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Masas de agua",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Masasdeagua_71, 0]);
var lyr_Lmitetierraagua_72 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.LandWaterBoundary",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Límite tierra-agua",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lmitetierraagua_72, 0]);
var lyr_Humedales_73 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.Wetland",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Humedales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Humedales_73, 0]);
var lyr_Cuencasdecaptacin_74 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.Catchments",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cuencas de captación",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Cuencasdecaptacin_74, 0]);

        var lyr_Openstreetmaptracks_75 = new ol.layer.Tile({
            'title': 'Openstreetmap tracks',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://gps-a.tile.openstreetmap.org/lines/{z}/{x}/{y}.png'
            })
        });
var lyr_VasPecuarias_76 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/ViasPecuarias/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "V%C3%ADas%20Pecuarias",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vías Pecuarias",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VasPecuarias_76, 0]);
var lyr_TNRailTransportNetworkRailwayLink_77 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayLink",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayLink_77, 0]);
var lyr_TNRailTransportNetworkRailwayNode_78 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayNode",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayNode",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayNode_78, 0]);
var lyr_TNRailTransportNetworkRailwayStationNode_79 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayStationNode",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayStationNode",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayStationNode_79, 0]);
var lyr_Enlacedecarretera_80 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RoadTransportNetwork.RoadLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Enlace de carretera",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Enlacedecarretera_80, 0]);
var lyr_Enlaceferroviario_81 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Enlace ferroviario",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Enlaceferroviario_81, 0]);
var lyr_readeestacinferroviaria_82 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayStationArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de estación ferroviaria",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeestacinferroviaria_82, 0]);
var lyr_readepista_83 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.RunwayArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de pista",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readepista_83, 0]);
var lyr_readeplataforma_84 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.ApronArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de plataforma",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeplataforma_84, 0]);
var lyr_readeserviciodecarretera_85 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RoadTransportNetwork.RoadServiceArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de servicio de carretera",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeserviciodecarretera_85, 0]);
var lyr_reaportuaria_86 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.WaterTransportNetwork.PortArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área portuaria",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_reaportuaria_86, 0]);
var lyr_readeaerdromo_87 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.AerodromeArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de aeródromo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeaerdromo_87, 0]);
var lyr_readeplataforma_88 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.ApronArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de plataforma",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeplataforma_88, 0]);
var lyr_Usosdesueloexistentes_89 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/ocupacion-suelo",
    attributions: ' ',
                              params: {
                                "LAYERS": "LU.ExistingLandUse",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Usos de suelo existentes",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Usosdesueloexistentes_89, 0]);
var lyr_SuperficiesdeCubiertaterrestre_90 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/ocupacion-suelo",
    attributions: ' ',
                              params: {
                                "LAYERS": "LC.LandCoverSurfaces",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Superficies de Cubierta terrestre",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SuperficiesdeCubiertaterrestre_90, 0]);
var lyr_IBAS_91 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/IBAS/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "%C3%81reas%20Importantes%20para%20la%20Conservaci%C3%B3n%20de%20las%20Aves%20y%20la%20Biodiversidad%20(IBA)",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "IBAS",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_IBAS_91, 0]);
var lyr_RedNatura2000_92 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/RedNatura/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Red Natura 2000",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RedNatura2000_92, 0]);
var lyr_EspaciosNaturalesProtegidos_93 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/ENP/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Espacios Naturales Protegidos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EspaciosNaturalesProtegidos_93, 0]);
var lyr_HumedalesRamsar_94 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/RAMSAR/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Humedales Ramsar",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HumedalesRamsar_94, 0]);
var lyr_Titularidaddelosmontes_95 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/PropiedadMontes/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "AM.ForestManagementArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Titularidad de los montes",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Titularidaddelosmontes_95, 0]);
var lyr_Distribucindeespecies_96 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/SD_EIDOS/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "SD.SpeciesDistribution",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Distribución de especies",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Distribucindeespecies_96, 0]);
var lyr_Humedales_97 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/Humedales/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Humedales",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Humedales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Humedales_97, 0]);
var lyr_AtlasdelosPaisajesdeEspaa_98 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/Paisaje/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Atlas%20de%20los%20Paisajes%20de%20Espa%C3%B1a",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Atlas de los Paisajes de España",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AtlasdelosPaisajesdeEspaa_98, 0]);
var lyr_ReservasdelaBiosferaMaB_99 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/MAB/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Reservas de la Biosfera (MaB)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ReservasdelaBiosferaMaB_99, 0]);
var lyr_RegionesBiogeogrficas_100 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/RegionesBiogeograficas/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "BR.Bio-geographicalRegion",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Regiones Biogeográficas",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RegionesBiogeogrficas_100, 0]);
var lyr_CatlogodeMontesdeUtilidadPblica_101 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.magrama.es/sig/Biodiversidad/PropiedadMontes_UP/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "AM.ForestManagementArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Catálogo de Montes de Utilidad Pública",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CatlogodeMontesdeUtilidadPblica_101, 0]);
var lyr_LugaresIntersGeolgico_102 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/BasesDatos/IGME_IELIG/MapServer/WmsServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lugares Interés Geológico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LugaresIntersGeolgico_102, 0]);
var lyr_LugaresIntersGeolgico_103 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/BasesDatos/IGME_IELIG/MapServer/WmsServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lugares Interés Geológico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LugaresIntersGeolgico_103, 0]);
var lyr_DatacionesC14archivoAntonioGilman_104 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idearqueologia.org/idearq/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "idearq_c14",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Dataciones C14 (archivo Antonio Gilman)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DatacionesC14archivoAntonioGilman_104, 0]);
var lyr_CorpusdePinturaRupestreLevantinaCPRL_105 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idearqueologia.org/idearq/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "idearq_cprl",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Corpus de Pintura Rupestre Levantina (CPRL)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CorpusdePinturaRupestreLevantinaCPRL_105, 0]);
var lyr_Capabasedeyacimientosarqueolgicos_106 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idearqueologia.org/idearq/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "idearq_base",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Capa base de yacimientos arqueológicos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Capabasedeyacimientosarqueolgicos_106, 0]);
var lyr_Anlisisdeistopos_107 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idearqueologia.org/idearq/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "idearq_dimp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Análisis de isótopos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Anlisisdeistopos_107, 0]);
var lyr_ModeloDigitaldelTerrenodelasARPSIs_108 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "EL.GridCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Modelo Digital del Terreno de las ARPSIs",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ModeloDigitaldelTerrenodelasARPSIs_108, 0]);
var lyr_MarinaT500aos_109 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.MarinaT500",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Marina T = 500 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MarinaT500aos_109, 0]);
var lyr_MarinaT100aos_110 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.MarinaT100",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Marina T = 100 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MarinaT100aos_110, 0]);
var lyr_FluvialT500aos_111 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.FluvialT500",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fluvial T = 500 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT500aos_111, 0]);
var lyr_FluvialT100aos_112 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fluvial T = 100 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT100aos_112, 0]);
var lyr_FluvialT10aos_113 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
    attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.FluvialT10",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fluvial T = 10 años",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT10aos_113, 0]);
var lyr_CaucesconDPHcartogrfico_114 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/agua/DPHCartografico/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "AM.FloodUnitOfManagement",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cauces con DPH cartográfico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CaucesconDPHcartogrfico_114, 0]);
var lyr_Redhidrogrfica_115 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.Network",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Red hidrográfica",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Redhidrogrfica_115, 0]);
var lyr_Puntosdeintershidrogrfico_116 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.HydroPointOfInterest",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Puntos de interés hidrográfico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Puntosdeintershidrogrfico_116, 0]);
var lyr_Objetosartificiales_117 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.ManMadeObject",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Objetos artificiales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Objetosartificiales_117, 0]);
var lyr_Masasdeagua_118 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.Waterbodies",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Masas de agua",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Masasdeagua_118, 0]);
var lyr_Lmitetierraagua_119 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.LandWaterBoundary",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Límite tierra-agua",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lmitetierraagua_119, 0]);
var lyr_Humedales_120 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.Wetland",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Humedales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Humedales_120, 0]);
var lyr_Cuencasdecaptacin_121 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/hidrografia",
    attributions: ' ',
                              params: {
                                "LAYERS": "HY.PhysicalWaters.Catchments",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cuencas de captación",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Cuencasdecaptacin_121, 0]);

        var lyr_Openstreetmaptracks_122 = new ol.layer.Tile({
            'title': 'Openstreetmap tracks',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://gps-a.tile.openstreetmap.org/lines/{z}/{x}/{y}.png'
            })
        });
var lyr_VasPecuarias_123 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/ViasPecuarias/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "V%C3%ADas%20Pecuarias",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vías Pecuarias",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VasPecuarias_123, 0]);
var lyr_TNRailTransportNetworkRailwayLink_124 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayLink",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayLink_124, 0]);
var lyr_TNRailTransportNetworkRailwayNode_125 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayNode",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayNode",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayNode_125, 0]);
var lyr_TNRailTransportNetworkRailwayStationNode_126 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayStationNode",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayStationNode",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayStationNode_126, 0]);
var lyr_Enlacedecarretera_127 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RoadTransportNetwork.RoadLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Enlace de carretera",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Enlacedecarretera_127, 0]);
var lyr_Enlaceferroviario_128 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Enlace ferroviario",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Enlaceferroviario_128, 0]);
var lyr_readeestacinferroviaria_129 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayStationArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de estación ferroviaria",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeestacinferroviaria_129, 0]);
var lyr_readepista_130 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.RunwayArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de pista",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readepista_130, 0]);
var lyr_readeplataforma_131 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.ApronArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de plataforma",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeplataforma_131, 0]);
var lyr_readeserviciodecarretera_132 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RoadTransportNetwork.RoadServiceArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de servicio de carretera",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeserviciodecarretera_132, 0]);
var lyr_reaportuaria_133 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.WaterTransportNetwork.PortArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área portuaria",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_reaportuaria_133, 0]);
var lyr_readeaerdromo_134 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.AerodromeArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de aeródromo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeaerdromo_134, 0]);
var lyr_readeplataforma_135 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.ApronArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de plataforma",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeplataforma_135, 0]);
var lyr_TNRailTransportNetworkRailwayLink_136 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayLink",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayLink_136, 0]);
var lyr_TNRailTransportNetworkRailwayNode_137 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayNode",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayNode",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayNode_137, 0]);
var lyr_TNRailTransportNetworkRailwayStationNode_138 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideadif.adif.es/services/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayStationNode",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "TN.RailTransportNetwork.RailwayStationNode",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TNRailTransportNetworkRailwayStationNode_138, 0]);
var lyr_Enlacedecarretera_139 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RoadTransportNetwork.RoadLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Enlace de carretera",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Enlacedecarretera_139, 0]);
var lyr_Enlaceferroviario_140 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayLink",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Enlace ferroviario",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Enlaceferroviario_140, 0]);
var lyr_readeestacinferroviaria_141 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RailTransportNetwork.RailwayStationArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de estación ferroviaria",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeestacinferroviaria_141, 0]);
var lyr_readepista_142 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.RunwayArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de pista",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readepista_142, 0]);
var lyr_readeplataforma_143 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.ApronArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de plataforma",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeplataforma_143, 0]);
var lyr_readeserviciodecarretera_144 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.RoadTransportNetwork.RoadServiceArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de servicio de carretera",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeserviciodecarretera_144, 0]);
var lyr_reaportuaria_145 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.WaterTransportNetwork.PortArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área portuaria",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_reaportuaria_145, 0]);
var lyr_readeaerdromo_146 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.AerodromeArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de aeródromo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeaerdromo_146, 0]);
var lyr_readeplataforma_147 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/transportes?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "TN.AirTransportNetwork.ApronArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Área de plataforma",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_readeplataforma_147, 0]);
var lyr_Usosdesueloexistentes_148 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/ocupacion-suelo",
    attributions: ' ',
                              params: {
                                "LAYERS": "LU.ExistingLandUse",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Usos de suelo existentes",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Usosdesueloexistentes_148, 0]);
var lyr_SuperficiesdeCubiertaterrestre_149 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://servicios.idee.es/wms-inspire/ocupacion-suelo",
    attributions: ' ',
                              params: {
                                "LAYERS": "LC.LandCoverSurfaces",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Superficies de Cubierta terrestre",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SuperficiesdeCubiertaterrestre_149, 0]);
var lyr_IBAS_150 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/IBAS/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "%C3%81reas%20Importantes%20para%20la%20Conservaci%C3%B3n%20de%20las%20Aves%20y%20la%20Biodiversidad%20(IBA)",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "IBAS",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_IBAS_150, 0]);
var lyr_RedNatura2000_151 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/RedNatura/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Red Natura 2000",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RedNatura2000_151, 0]);
var lyr_EspaciosNaturalesProtegidos_152 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/ENP/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Espacios Naturales Protegidos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EspaciosNaturalesProtegidos_152, 0]);
var lyr_HumedalesRamsar_153 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/RAMSAR/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Humedales Ramsar",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HumedalesRamsar_153, 0]);
var lyr_Titularidaddelosmontes_154 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/PropiedadMontes/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "AM.ForestManagementArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Titularidad de los montes",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Titularidaddelosmontes_154, 0]);
var lyr_Distribucindeespecies_155 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/SD_EIDOS/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "SD.SpeciesDistribution",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Distribución de especies",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Distribucindeespecies_155, 0]);
var lyr_Humedales_156 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/Humedales/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Humedales",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Humedales",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Humedales_156, 0]);
var lyr_AtlasdelosPaisajesdeEspaa_157 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/Paisaje/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Atlas%20de%20los%20Paisajes%20de%20Espa%C3%B1a",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Atlas de los Paisajes de España",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AtlasdelosPaisajesdeEspaa_157, 0]);
var lyr_ReservasdelaBiosferaMaB_158 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/MAB/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Reservas de la Biosfera (MaB)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ReservasdelaBiosferaMaB_158, 0]);
var lyr_RegionesBiogeogrficas_159 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.mapama.gob.es/sig/Biodiversidad/RegionesBiogeograficas/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "BR.Bio-geographicalRegion",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Regiones Biogeográficas",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RegionesBiogeogrficas_159, 0]);
var lyr_CatlogodeMontesdeUtilidadPblica_160 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.magrama.es/sig/Biodiversidad/PropiedadMontes_UP/wms.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "AM.ForestManagementArea",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Catálogo de Montes de Utilidad Pública",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CatlogodeMontesdeUtilidadPblica_160, 0]);
var lyr_LugaresIntersGeolgico_161 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/BasesDatos/IGME_IELIG/MapServer/WmsServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lugares Interés Geológico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LugaresIntersGeolgico_161, 0]);
var lyr_LugaresIntersGeolgico_162 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapas.igme.es/gis/services/BasesDatos/IGME_IELIG/MapServer/WmsServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lugares Interés Geológico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LugaresIntersGeolgico_162, 0]);
var group_Espaciosprotegidos = new ol.layer.Group({
                                layers: [lyr_IBAS_150,lyr_RedNatura2000_151,lyr_EspaciosNaturalesProtegidos_152,lyr_HumedalesRamsar_153,lyr_Titularidaddelosmontes_154,lyr_Distribucindeespecies_155,lyr_Humedales_156,lyr_AtlasdelosPaisajesdeEspaa_157,lyr_ReservasdelaBiosferaMaB_158,lyr_RegionesBiogeogrficas_159,lyr_CatlogodeMontesdeUtilidadPblica_160,lyr_LugaresIntersGeolgico_161,lyr_LugaresIntersGeolgico_162,],
                                title: "Espacios protegidos"});
var group_Ocupacinsuelo = new ol.layer.Group({
                                layers: [lyr_Usosdesueloexistentes_148,lyr_SuperficiesdeCubiertaterrestre_149,],
                                title: "Ocupación suelo "});
var group_RedesdeTransportedereferencia = new ol.layer.Group({
                                layers: [lyr_Enlacedecarretera_139,lyr_Enlaceferroviario_140,lyr_readeestacinferroviaria_141,lyr_readepista_142,lyr_readeplataforma_143,lyr_readeserviciodecarretera_144,lyr_reaportuaria_145,lyr_readeaerdromo_146,lyr_readeplataforma_147,],
                                title: "Redes de Transporte de referencia"});
var group_ADIF = new ol.layer.Group({
                                layers: [lyr_TNRailTransportNetworkRailwayLink_136,lyr_TNRailTransportNetworkRailwayNode_137,lyr_TNRailTransportNetworkRailwayStationNode_138,],
                                title: "ADIF"});
var group_Transporte = new ol.layer.Group({
                                layers: [lyr_Openstreetmaptracks_122,lyr_VasPecuarias_123,lyr_TNRailTransportNetworkRailwayLink_136,lyr_TNRailTransportNetworkRailwayNode_137,lyr_TNRailTransportNetworkRailwayStationNode_138,lyr_Enlacedecarretera_139,lyr_Enlaceferroviario_140,lyr_readeestacinferroviaria_141,lyr_readepista_142,lyr_readeplataforma_143,lyr_readeserviciodecarretera_144,lyr_reaportuaria_145,lyr_readeaerdromo_146,lyr_readeplataforma_147,],
                                title: "Transporte"});
var group_Hidrografa = new ol.layer.Group({
                                layers: [lyr_CaucesconDPHcartogrfico_114,lyr_Redhidrogrfica_115,lyr_Puntosdeintershidrogrfico_116,lyr_Objetosartificiales_117,lyr_Masasdeagua_118,lyr_Lmitetierraagua_119,lyr_Humedales_120,lyr_Cuencasdecaptacin_121,],
                                title: "Hidrografía"});
var group_PeligrosidadInundacin = new ol.layer.Group({
                                layers: [lyr_ModeloDigitaldelTerrenodelasARPSIs_108,lyr_MarinaT500aos_109,lyr_MarinaT100aos_110,lyr_FluvialT500aos_111,lyr_FluvialT100aos_112,lyr_FluvialT10aos_113,],
                                title: "Peligrosidad Inundación"});
var group_IDEARC = new ol.layer.Group({
                                layers: [lyr_DatacionesC14archivoAntonioGilman_104,lyr_CorpusdePinturaRupestreLevantinaCPRL_105,lyr_Capabasedeyacimientosarqueolgicos_106,lyr_Anlisisdeistopos_107,],
                                title: "IDEARC"});
var group_Temtica = new ol.layer.Group({
                                layers: [lyr_Lmiteadministrativo_41,lyr_Parcelas_42,lyr_Unidadadministrativa_43,lyr_Catastro_44,lyr_ZonasGEODE_45,lyr_Rtulosunidades_46,lyr_Recintosgeologa_47,lyr_Lineasauxiliares_48,lyr_Indiciosminerales_49,lyr_Ejes_50,lyr_CuaternarioRecintos_51,lyr_CuaternarioLineasauxiliares_52,lyr_Contactos_53,lyr_Buzamientos_54,lyr_MapaForestaldeEspaa_55,lyr_ClasifclimticadeJPapadakis_56,lyr_DatacionesC14archivoAntonioGilman_104,lyr_CorpusdePinturaRupestreLevantinaCPRL_105,lyr_Capabasedeyacimientosarqueolgicos_106,lyr_Anlisisdeistopos_107,lyr_ModeloDigitaldelTerrenodelasARPSIs_108,lyr_MarinaT500aos_109,lyr_MarinaT100aos_110,lyr_FluvialT500aos_111,lyr_FluvialT100aos_112,lyr_FluvialT10aos_113,lyr_CaucesconDPHcartogrfico_114,lyr_Redhidrogrfica_115,lyr_Puntosdeintershidrogrfico_116,lyr_Objetosartificiales_117,lyr_Masasdeagua_118,lyr_Lmitetierraagua_119,lyr_Humedales_120,lyr_Cuencasdecaptacin_121,lyr_Openstreetmaptracks_122,lyr_VasPecuarias_123,lyr_TNRailTransportNetworkRailwayLink_136,lyr_TNRailTransportNetworkRailwayNode_137,lyr_TNRailTransportNetworkRailwayStationNode_138,lyr_Enlacedecarretera_139,lyr_Enlaceferroviario_140,lyr_readeestacinferroviaria_141,lyr_readepista_142,lyr_readeplataforma_143,lyr_readeserviciodecarretera_144,lyr_reaportuaria_145,lyr_readeaerdromo_146,lyr_readeplataforma_147,lyr_Usosdesueloexistentes_148,lyr_SuperficiesdeCubiertaterrestre_149,lyr_IBAS_150,lyr_RedNatura2000_151,lyr_EspaciosNaturalesProtegidos_152,lyr_HumedalesRamsar_153,lyr_Titularidaddelosmontes_154,lyr_Distribucindeespecies_155,lyr_Humedales_156,lyr_AtlasdelosPaisajesdeEspaa_157,lyr_ReservasdelaBiosferaMaB_158,lyr_RegionesBiogeogrficas_159,lyr_CatlogodeMontesdeUtilidadPblica_160,lyr_LugaresIntersGeolgico_161,lyr_LugaresIntersGeolgico_162,],
                                title: "Temática"});
var group_MapaGeolgico = new ol.layer.Group({
                                layers: [lyr_ZonasGEODE_45,lyr_Rtulosunidades_46,lyr_Recintosgeologa_47,lyr_Lineasauxiliares_48,lyr_Indiciosminerales_49,lyr_Ejes_50,lyr_CuaternarioRecintos_51,lyr_CuaternarioLineasauxiliares_52,lyr_Contactos_53,lyr_Buzamientos_54,],
                                title: "Mapa Geológico"});
var group_Unidadesadministrativas = new ol.layer.Group({
                                layers: [lyr_Lmiteadministrativo_41,lyr_Parcelas_42,lyr_Unidadadministrativa_43,lyr_Catastro_44,],
                                title: "Unidades administrativas"});
var group_Fondos = new ol.layer.Group({
                                layers: [lyr_ModeloDigitaldeSuperficiesLiDAR_2,lyr_Sombreado_3,lyr_VueloamericanoSerieB19561957_4,lyr_VueloInterministerial19731986_5,lyr_VueloNacional19811986_6,lyr_OLISTAT19971998_7,lyr_SIGPAC19972003_8,lyr_2004_9,lyr_2005_10,lyr_2006_11,lyr_2007_12,lyr_2008_13,lyr_2009_14,lyr_2010_15,lyr_2011_16,lyr_2012_17,lyr_2013_18,lyr_2014_19,lyr_2015_20,lyr_2016_21,lyr_2017_22,lyr_Ortoimagenmximaactualidad_23,lyr_GoogleHybrid_24,lyr_OSMStandard_25,lyr_Callejero_26,],
                                title: "Fondos"});
var group_MDT = new ol.layer.Group({
                                layers: [lyr_ModeloDigitaldeSuperficiesLiDAR_2,lyr_Sombreado_3,],
                                title: "MDT"});

lyr_ModeloDigitaldeSuperficiesLiDAR_0.setVisible(false);lyr_Sombreado_1.setVisible(false);lyr_ModeloDigitaldeSuperficiesLiDAR_2.setVisible(false);lyr_Sombreado_3.setVisible(false);lyr_VueloamericanoSerieB19561957_4.setVisible(false);lyr_VueloInterministerial19731986_5.setVisible(false);lyr_VueloNacional19811986_6.setVisible(false);lyr_OLISTAT19971998_7.setVisible(false);lyr_SIGPAC19972003_8.setVisible(false);lyr_2004_9.setVisible(false);lyr_2005_10.setVisible(false);lyr_2006_11.setVisible(false);lyr_2007_12.setVisible(false);lyr_2008_13.setVisible(false);lyr_2009_14.setVisible(false);lyr_2010_15.setVisible(false);lyr_2011_16.setVisible(false);lyr_2012_17.setVisible(false);lyr_2013_18.setVisible(false);lyr_2014_19.setVisible(false);lyr_2015_20.setVisible(false);lyr_2016_21.setVisible(false);lyr_2017_22.setVisible(false);lyr_Ortoimagenmximaactualidad_23.setVisible(false);lyr_GoogleHybrid_24.setVisible(false);lyr_OSMStandard_25.setVisible(false);lyr_Callejero_26.setVisible(false);lyr_Lmiteadministrativo_27.setVisible(false);lyr_Parcelas_28.setVisible(false);lyr_Unidadadministrativa_29.setVisible(false);lyr_Catastro_30.setVisible(false);lyr_ZonasGEODE_31.setVisible(false);lyr_Rtulosunidades_32.setVisible(false);lyr_Recintosgeologa_33.setVisible(false);lyr_Lineasauxiliares_34.setVisible(false);lyr_Indiciosminerales_35.setVisible(false);lyr_Ejes_36.setVisible(false);lyr_CuaternarioRecintos_37.setVisible(false);lyr_CuaternarioLineasauxiliares_38.setVisible(false);lyr_Contactos_39.setVisible(false);lyr_Buzamientos_40.setVisible(false);lyr_Lmiteadministrativo_41.setVisible(false);lyr_Parcelas_42.setVisible(false);lyr_Unidadadministrativa_43.setVisible(false);lyr_Catastro_44.setVisible(false);lyr_ZonasGEODE_45.setVisible(false);lyr_Rtulosunidades_46.setVisible(false);lyr_Recintosgeologa_47.setVisible(false);lyr_Lineasauxiliares_48.setVisible(false);lyr_Indiciosminerales_49.setVisible(false);lyr_Ejes_50.setVisible(false);lyr_CuaternarioRecintos_51.setVisible(false);lyr_CuaternarioLineasauxiliares_52.setVisible(false);lyr_Contactos_53.setVisible(false);lyr_Buzamientos_54.setVisible(false);lyr_MapaForestaldeEspaa_55.setVisible(false);lyr_ClasifclimticadeJPapadakis_56.setVisible(false);lyr_DatacionesC14archivoAntonioGilman_57.setVisible(false);lyr_CorpusdePinturaRupestreLevantinaCPRL_58.setVisible(false);lyr_Capabasedeyacimientosarqueolgicos_59.setVisible(false);lyr_Anlisisdeistopos_60.setVisible(false);lyr_ModeloDigitaldelTerrenodelasARPSIs_61.setVisible(false);lyr_MarinaT500aos_62.setVisible(false);lyr_MarinaT100aos_63.setVisible(false);lyr_FluvialT500aos_64.setVisible(false);lyr_FluvialT100aos_65.setVisible(false);lyr_FluvialT10aos_66.setVisible(false);lyr_CaucesconDPHcartogrfico_67.setVisible(false);lyr_Redhidrogrfica_68.setVisible(false);lyr_Puntosdeintershidrogrfico_69.setVisible(false);lyr_Objetosartificiales_70.setVisible(false);lyr_Masasdeagua_71.setVisible(false);lyr_Lmitetierraagua_72.setVisible(false);lyr_Humedales_73.setVisible(false);lyr_Cuencasdecaptacin_74.setVisible(false);lyr_Openstreetmaptracks_75.setVisible(false);lyr_VasPecuarias_76.setVisible(false);lyr_TNRailTransportNetworkRailwayLink_77.setVisible(false);lyr_TNRailTransportNetworkRailwayNode_78.setVisible(false);lyr_TNRailTransportNetworkRailwayStationNode_79.setVisible(false);lyr_Enlacedecarretera_80.setVisible(false);lyr_Enlaceferroviario_81.setVisible(false);lyr_readeestacinferroviaria_82.setVisible(false);lyr_readepista_83.setVisible(false);lyr_readeplataforma_84.setVisible(false);lyr_readeserviciodecarretera_85.setVisible(false);lyr_reaportuaria_86.setVisible(false);lyr_readeaerdromo_87.setVisible(false);lyr_readeplataforma_88.setVisible(false);lyr_Usosdesueloexistentes_89.setVisible(false);lyr_SuperficiesdeCubiertaterrestre_90.setVisible(false);lyr_IBAS_91.setVisible(false);lyr_RedNatura2000_92.setVisible(false);lyr_EspaciosNaturalesProtegidos_93.setVisible(false);lyr_HumedalesRamsar_94.setVisible(false);lyr_Titularidaddelosmontes_95.setVisible(false);lyr_Distribucindeespecies_96.setVisible(false);lyr_Humedales_97.setVisible(false);lyr_AtlasdelosPaisajesdeEspaa_98.setVisible(false);lyr_ReservasdelaBiosferaMaB_99.setVisible(false);lyr_RegionesBiogeogrficas_100.setVisible(false);lyr_CatlogodeMontesdeUtilidadPblica_101.setVisible(false);lyr_LugaresIntersGeolgico_102.setVisible(false);lyr_LugaresIntersGeolgico_103.setVisible(false);lyr_DatacionesC14archivoAntonioGilman_104.setVisible(false);lyr_CorpusdePinturaRupestreLevantinaCPRL_105.setVisible(false);lyr_Capabasedeyacimientosarqueolgicos_106.setVisible(false);lyr_Anlisisdeistopos_107.setVisible(false);lyr_ModeloDigitaldelTerrenodelasARPSIs_108.setVisible(false);lyr_MarinaT500aos_109.setVisible(false);lyr_MarinaT100aos_110.setVisible(false);lyr_FluvialT500aos_111.setVisible(false);lyr_FluvialT100aos_112.setVisible(false);lyr_FluvialT10aos_113.setVisible(false);lyr_CaucesconDPHcartogrfico_114.setVisible(false);lyr_Redhidrogrfica_115.setVisible(false);lyr_Puntosdeintershidrogrfico_116.setVisible(false);lyr_Objetosartificiales_117.setVisible(false);lyr_Masasdeagua_118.setVisible(false);lyr_Lmitetierraagua_119.setVisible(false);lyr_Humedales_120.setVisible(false);lyr_Cuencasdecaptacin_121.setVisible(false);lyr_Openstreetmaptracks_122.setVisible(false);lyr_VasPecuarias_123.setVisible(false);lyr_TNRailTransportNetworkRailwayLink_124.setVisible(false);lyr_TNRailTransportNetworkRailwayNode_125.setVisible(false);lyr_TNRailTransportNetworkRailwayStationNode_126.setVisible(false);lyr_Enlacedecarretera_127.setVisible(false);lyr_Enlaceferroviario_128.setVisible(false);lyr_readeestacinferroviaria_129.setVisible(false);lyr_readepista_130.setVisible(false);lyr_readeplataforma_131.setVisible(false);lyr_readeserviciodecarretera_132.setVisible(false);lyr_reaportuaria_133.setVisible(false);lyr_readeaerdromo_134.setVisible(false);lyr_readeplataforma_135.setVisible(false);lyr_TNRailTransportNetworkRailwayLink_136.setVisible(false);lyr_TNRailTransportNetworkRailwayNode_137.setVisible(false);lyr_TNRailTransportNetworkRailwayStationNode_138.setVisible(false);lyr_Enlacedecarretera_139.setVisible(false);lyr_Enlaceferroviario_140.setVisible(false);lyr_readeestacinferroviaria_141.setVisible(false);lyr_readepista_142.setVisible(false);lyr_readeplataforma_143.setVisible(false);lyr_readeserviciodecarretera_144.setVisible(false);lyr_reaportuaria_145.setVisible(false);lyr_readeaerdromo_146.setVisible(false);lyr_readeplataforma_147.setVisible(false);lyr_Usosdesueloexistentes_148.setVisible(false);lyr_SuperficiesdeCubiertaterrestre_149.setVisible(false);lyr_IBAS_150.setVisible(false);lyr_RedNatura2000_151.setVisible(false);lyr_EspaciosNaturalesProtegidos_152.setVisible(false);lyr_HumedalesRamsar_153.setVisible(false);lyr_Titularidaddelosmontes_154.setVisible(false);lyr_Distribucindeespecies_155.setVisible(false);lyr_Humedales_156.setVisible(false);lyr_AtlasdelosPaisajesdeEspaa_157.setVisible(false);lyr_ReservasdelaBiosferaMaB_158.setVisible(false);lyr_RegionesBiogeogrficas_159.setVisible(false);lyr_CatlogodeMontesdeUtilidadPblica_160.setVisible(false);lyr_LugaresIntersGeolgico_161.setVisible(false);lyr_LugaresIntersGeolgico_162.setVisible(false);
var layersList = [group_MDT,group_Fondos,group_Unidadesadministrativas,group_MapaGeolgico,group_Temtica];
