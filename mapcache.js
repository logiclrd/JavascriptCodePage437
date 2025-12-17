function MapCache(convert)
{
	var mapCache = this;

	const _cache = {};
	var _preCache = {};
	var _preCacheSize = 0;
	var _recent = {};
	var _recentSize = 0;

	mapCache.TemporaryCacheLimit = 20;

	mapCache.InvalidateKey =
		function(str)
		{
			if (str in _cache) delete _cache[str];

			if (str in _preCache)
			{
				delete _preCache[str];
				_preCacheSize--;
			}

			if (str in _recent)
			{
				delete _recent[str];
				_recentSize--;
			}
		};

	mapCache.Map =
	  function(str)
		{
			var mapped;

			// Is the mapping in the permanent cache?
			if (Object.hasOwn(_cache, str))
				return _cache[str];

			// Is the mapping in the pre-cache? If so, promote to permanent.
			if (Object.hasOwn(_preCache, str))
			{
				mapped = _preCache[str];

				_cache[str] = mapped;
				delete _preCache[str];
				_preCacheSize--;

				return mapped;
			}

			// Has the mapping been seen once before? If so, promote to pre-cache.
			if (Object.hasOwn(_recent, str))
			{
				// Clear the pre-cache if it grows too large.
				if (_preCacheSize >= mapCache.TemporaryCacheLimit)
				{
					_preCache = {};
					_preCacheSize = 0;
				}

				mapped = _recent[str];

				_preCache[str] = mapped;
				_preCacheSize++;
				delete _recent[str];
				_recentSize--;

				return mapped;
			}

			// No? Perform the mapping.
			mapped = convert(str);

			// Clear recent memory if it grows too large.
			if (_recentSize >= mapCache.TemporaryCacheLimit)
			{
				_recent = {};
				_recentSize = 0;
			}

			// Remember that we did it.
			_recent[str] = mapped;
			_recentSize++;

			return mapped;
		};

	mapCache.GetCacheStatistics =
		function ()
		{
			var stats =
				{
					Recent: _recentSize,
					PreCache: _preCacheSize,
					Cached: Object.keys(_cache).length,
				};

			return stats;
		};

	return mapCache;
}
