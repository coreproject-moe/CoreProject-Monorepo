from builder.sitemap import SitemapBuilder


def test_character_sitemap_builder():
    builder = SitemapBuilder("https://myanimelist.net/sitemap/index.xml")
    data = builder.build(filter="character")
    assert "https://myanimelist.net/character/1/Spike_Spiegel" in data
    assert "https://myanimelist.net/character/5/Ichigo_Kurosaki" in data
    assert "https://myanimelist.net/character/144103/Kokona_no_Obaachan" in data
