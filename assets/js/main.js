/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
	'use strict';
	'object' == typeof module && 'object' == typeof module.exports
		? (module.exports = e.document
				? t(e, !0)
				: function (e) {
						if (!e.document)
							throw new Error(
								'jQuery requires a window with a document'
							);
						return t(e);
				  })
		: t(e);
})('undefined' != typeof window ? window : this, function (ie, e) {
	'use strict';
	var oe = [],
		r = Object.getPrototypeOf,
		ae = oe.slice,
		g = oe.flat
			? function (e) {
					return oe.flat.call(e);
			  }
			: function (e) {
					return oe.concat.apply([], e);
			  },
		s = oe.push,
		se = oe.indexOf,
		n = {},
		i = n.toString,
		ue = n.hasOwnProperty,
		o = ue.toString,
		a = o.call(Object),
		le = {},
		v = function (e) {
			return (
				'function' == typeof e &&
				'number' != typeof e.nodeType &&
				'function' != typeof e.item
			);
		},
		y = function (e) {
			return null != e && e === e.window;
		},
		C = ie.document,
		u = { type: !0, src: !0, nonce: !0, noModule: !0 };
	function m(e, t, n) {
		var r,
			i,
			o = (n = n || C).createElement('script');
		if (((o.text = e), t))
			for (r in u)
				(i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
					o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o);
	}
	function x(e) {
		return null == e
			? e + ''
			: 'object' == typeof e || 'function' == typeof e
			? n[i.call(e)] || 'object'
			: typeof e;
	}
	var t = '3.7.1',
		l = /HTML$/i,
		ce = function (e, t) {
			return new ce.fn.init(e, t);
		};
	function c(e) {
		var t = !!e && 'length' in e && e.length,
			n = x(e);
		return (
			!v(e) &&
			!y(e) &&
			('array' === n ||
				0 === t ||
				('number' == typeof t && 0 < t && t - 1 in e))
		);
	}
	function fe(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	}
	(ce.fn = ce.prototype =
		{
			jquery: t,
			constructor: ce,
			length: 0,
			toArray: function () {
				return ae.call(this);
			},
			get: function (e) {
				return null == e
					? ae.call(this)
					: e < 0
					? this[e + this.length]
					: this[e];
			},
			pushStack: function (e) {
				var t = ce.merge(this.constructor(), e);
				return (t.prevObject = this), t;
			},
			each: function (e) {
				return ce.each(this, e);
			},
			map: function (n) {
				return this.pushStack(
					ce.map(this, function (e, t) {
						return n.call(e, t, e);
					})
				);
			},
			slice: function () {
				return this.pushStack(ae.apply(this, arguments));
			},
			first: function () {
				return this.eq(0);
			},
			last: function () {
				return this.eq(-1);
			},
			even: function () {
				return this.pushStack(
					ce.grep(this, function (e, t) {
						return (t + 1) % 2;
					})
				);
			},
			odd: function () {
				return this.pushStack(
					ce.grep(this, function (e, t) {
						return t % 2;
					})
				);
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= n && n < t ? [this[n]] : []);
			},
			end: function () {
				return this.prevObject || this.constructor();
			},
			push: s,
			sort: oe.sort,
			splice: oe.splice,
		}),
		(ce.extend = ce.fn.extend =
			function () {
				var e,
					t,
					n,
					r,
					i,
					o,
					a = arguments[0] || {},
					s = 1,
					u = arguments.length,
					l = !1;
				for (
					'boolean' == typeof a &&
						((l = a), (a = arguments[s] || {}), s++),
						'object' == typeof a || v(a) || (a = {}),
						s === u && ((a = this), s--);
					s < u;
					s++
				)
					if (null != (e = arguments[s]))
						for (t in e)
							(r = e[t]),
								'__proto__' !== t &&
									a !== r &&
									(l &&
									r &&
									(ce.isPlainObject(r) ||
										(i = Array.isArray(r)))
										? ((n = a[t]),
										  (o =
												i && !Array.isArray(n)
													? []
													: i || ce.isPlainObject(n)
													? n
													: {}),
										  (i = !1),
										  (a[t] = ce.extend(l, o, r)))
										: void 0 !== r && (a[t] = r));
				return a;
			}),
		ce.extend({
			expando: 'jQuery' + (t + Math.random()).replace(/\D/g, ''),
			isReady: !0,
			error: function (e) {
				throw new Error(e);
			},
			noop: function () {},
			isPlainObject: function (e) {
				var t, n;
				return (
					!(!e || '[object Object]' !== i.call(e)) &&
					(!(t = r(e)) ||
						('function' ==
							typeof (n =
								ue.call(t, 'constructor') && t.constructor) &&
							o.call(n) === a))
				);
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0;
			},
			globalEval: function (e, t, n) {
				m(e, { nonce: t && t.nonce }, n);
			},
			each: function (e, t) {
				var n,
					r = 0;
				if (c(e)) {
					for (n = e.length; r < n; r++)
						if (!1 === t.call(e[r], r, e[r])) break;
				} else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
				return e;
			},
			text: function (e) {
				var t,
					n = '',
					r = 0,
					i = e.nodeType;
				if (!i) while ((t = e[r++])) n += ce.text(t);
				return 1 === i || 11 === i
					? e.textContent
					: 9 === i
					? e.documentElement.textContent
					: 3 === i || 4 === i
					? e.nodeValue
					: n;
			},
			makeArray: function (e, t) {
				var n = t || [];
				return (
					null != e &&
						(c(Object(e))
							? ce.merge(n, 'string' == typeof e ? [e] : e)
							: s.call(n, e)),
					n
				);
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : se.call(t, e, n);
			},
			isXMLDoc: function (e) {
				var t = e && e.namespaceURI,
					n = e && (e.ownerDocument || e).documentElement;
				return !l.test(t || (n && n.nodeName) || 'HTML');
			},
			merge: function (e, t) {
				for (var n = +t.length, r = 0, i = e.length; r < n; r++)
					e[i++] = t[r];
				return (e.length = i), e;
			},
			grep: function (e, t, n) {
				for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
					!t(e[i], i) !== a && r.push(e[i]);
				return r;
			},
			map: function (e, t, n) {
				var r,
					i,
					o = 0,
					a = [];
				if (c(e))
					for (r = e.length; o < r; o++)
						null != (i = t(e[o], o, n)) && a.push(i);
				else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
				return g(a);
			},
			guid: 1,
			support: le,
		}),
		'function' == typeof Symbol &&
			(ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
		ce.each(
			'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
				' '
			),
			function (e, t) {
				n['[object ' + t + ']'] = t.toLowerCase();
			}
		);
	var pe = oe.pop,
		de = oe.sort,
		he = oe.splice,
		ge = '[\\x20\\t\\r\\n\\f]',
		ve = new RegExp(
			'^' + ge + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ge + '+$',
			'g'
		);
	ce.contains = function (e, t) {
		var n = t && t.parentNode;
		return (
			e === n ||
			!(
				!n ||
				1 !== n.nodeType ||
				!(e.contains
					? e.contains(n)
					: e.compareDocumentPosition &&
					  16 & e.compareDocumentPosition(n))
			)
		);
	};
	var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
	function p(e, t) {
		return t
			? '\0' === e
				? '\ufffd'
				: e.slice(0, -1) +
				  '\\' +
				  e.charCodeAt(e.length - 1).toString(16) +
				  ' '
			: '\\' + e;
	}
	ce.escapeSelector = function (e) {
		return (e + '').replace(f, p);
	};
	var ye = C,
		me = s;
	!(function () {
		var e,
			b,
			w,
			o,
			a,
			T,
			r,
			C,
			d,
			i,
			k = me,
			S = ce.expando,
			E = 0,
			n = 0,
			s = W(),
			c = W(),
			u = W(),
			h = W(),
			l = function (e, t) {
				return e === t && (a = !0), 0;
			},
			f =
				'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
			t =
				'(?:\\\\[\\da-fA-F]{1,6}' +
				ge +
				'?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
			p =
				'\\[' +
				ge +
				'*(' +
				t +
				')(?:' +
				ge +
				'*([*^$|!~]?=)' +
				ge +
				'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
				t +
				'))|)' +
				ge +
				'*\\]',
			g =
				':(' +
				t +
				')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
				p +
				')*)|.*)\\)|)',
			v = new RegExp(ge + '+', 'g'),
			y = new RegExp('^' + ge + '*,' + ge + '*'),
			m = new RegExp('^' + ge + '*([>+~]|' + ge + ')' + ge + '*'),
			x = new RegExp(ge + '|>'),
			j = new RegExp(g),
			A = new RegExp('^' + t + '$'),
			D = {
				ID: new RegExp('^#(' + t + ')'),
				CLASS: new RegExp('^\\.(' + t + ')'),
				TAG: new RegExp('^(' + t + '|[*])'),
				ATTR: new RegExp('^' + p),
				PSEUDO: new RegExp('^' + g),
				CHILD: new RegExp(
					'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
						ge +
						'*(even|odd|(([+-]|)(\\d*)n|)' +
						ge +
						'*(?:([+-]|)' +
						ge +
						'*(\\d+)|))' +
						ge +
						'*\\)|)',
					'i'
				),
				bool: new RegExp('^(?:' + f + ')$', 'i'),
				needsContext: new RegExp(
					'^' +
						ge +
						'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
						ge +
						'*((?:-\\d)?\\d*)' +
						ge +
						'*\\)|)(?=[^-]|$)',
					'i'
				),
			},
			N = /^(?:input|select|textarea|button)$/i,
			q = /^h\d$/i,
			L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			H = /[+~]/,
			O = new RegExp(
				'\\\\[\\da-fA-F]{1,6}' + ge + '?|\\\\([^\\r\\n\\f])',
				'g'
			),
			P = function (e, t) {
				var n = '0x' + e.slice(1) - 65536;
				return (
					t ||
					(n < 0
						? String.fromCharCode(n + 65536)
						: String.fromCharCode(
								(n >> 10) | 55296,
								(1023 & n) | 56320
						  ))
				);
			},
			M = function () {
				V();
			},
			R = J(
				function (e) {
					return !0 === e.disabled && fe(e, 'fieldset');
				},
				{ dir: 'parentNode', next: 'legend' }
			);
		try {
			k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
				oe[ye.childNodes.length].nodeType;
		} catch (e) {
			k = {
				apply: function (e, t) {
					me.apply(e, ae.call(t));
				},
				call: function (e) {
					me.apply(e, ae.call(arguments, 1));
				},
			};
		}
		function I(t, e, n, r) {
			var i,
				o,
				a,
				s,
				u,
				l,
				c,
				f = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (
				((n = n || []),
				'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
			)
				return n;
			if (!r && (V(e), (e = e || T), C)) {
				if (11 !== p && (u = L.exec(t)))
					if ((i = u[1])) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return k.call(n, a), n;
						} else if (
							f &&
							(a = f.getElementById(i)) &&
							I.contains(e, a) &&
							a.id === i
						)
							return k.call(n, a), n;
					} else {
						if (u[2])
							return k.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && e.getElementsByClassName)
							return k.apply(n, e.getElementsByClassName(i)), n;
					}
				if (!(h[t + ' '] || (d && d.test(t)))) {
					if (
						((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))
					) {
						((f = (H.test(t) && U(e.parentNode)) || e) == e &&
							le.scope) ||
							((s = e.getAttribute('id'))
								? (s = ce.escapeSelector(s))
								: e.setAttribute('id', (s = S))),
							(o = (l = Y(t)).length);
						while (o--)
							l[o] = (s ? '#' + s : ':scope') + ' ' + Q(l[o]);
						c = l.join(',');
					}
					try {
						return k.apply(n, f.querySelectorAll(c)), n;
					} catch (e) {
						h(t, !0);
					} finally {
						s === S && e.removeAttribute('id');
					}
				}
			}
			return re(t.replace(ve, '$1'), e, n, r);
		}
		function W() {
			var r = [];
			return function e(t, n) {
				return (
					r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
					(e[t + ' '] = n)
				);
			};
		}
		function F(e) {
			return (e[S] = !0), e;
		}
		function $(e) {
			var t = T.createElement('fieldset');
			try {
				return !!e(t);
			} catch (e) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), (t = null);
			}
		}
		function B(t) {
			return function (e) {
				return fe(e, 'input') && e.type === t;
			};
		}
		function _(t) {
			return function (e) {
				return (fe(e, 'input') || fe(e, 'button')) && e.type === t;
			};
		}
		function z(t) {
			return function (e) {
				return 'form' in e
					? e.parentNode && !1 === e.disabled
						? 'label' in e
							? 'label' in e.parentNode
								? e.parentNode.disabled === t
								: e.disabled === t
							: e.isDisabled === t ||
							  (e.isDisabled !== !t && R(e) === t)
						: e.disabled === t
					: 'label' in e && e.disabled === t;
			};
		}
		function X(a) {
			return F(function (o) {
				return (
					(o = +o),
					F(function (e, t) {
						var n,
							r = a([], e.length, o),
							i = r.length;
						while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
					})
				);
			});
		}
		function U(e) {
			return e && 'undefined' != typeof e.getElementsByTagName && e;
		}
		function V(e) {
			var t,
				n = e ? e.ownerDocument || e : ye;
			return (
				n != T &&
					9 === n.nodeType &&
					n.documentElement &&
					((r = (T = n).documentElement),
					(C = !ce.isXMLDoc(T)),
					(i =
						r.matches ||
						r.webkitMatchesSelector ||
						r.msMatchesSelector),
					r.msMatchesSelector &&
						ye != T &&
						(t = T.defaultView) &&
						t.top !== t &&
						t.addEventListener('unload', M),
					(le.getById = $(function (e) {
						return (
							(r.appendChild(e).id = ce.expando),
							!T.getElementsByName ||
								!T.getElementsByName(ce.expando).length
						);
					})),
					(le.disconnectedMatch = $(function (e) {
						return i.call(e, '*');
					})),
					(le.scope = $(function () {
						return T.querySelectorAll(':scope');
					})),
					(le.cssHas = $(function () {
						try {
							return T.querySelector(':has(*,:jqfake)'), !1;
						} catch (e) {
							return !0;
						}
					})),
					le.getById
						? ((b.filter.ID = function (e) {
								var t = e.replace(O, P);
								return function (e) {
									return e.getAttribute('id') === t;
								};
						  }),
						  (b.find.ID = function (e, t) {
								if (
									'undefined' != typeof t.getElementById &&
									C
								) {
									var n = t.getElementById(e);
									return n ? [n] : [];
								}
						  }))
						: ((b.filter.ID = function (e) {
								var n = e.replace(O, P);
								return function (e) {
									var t =
										'undefined' !=
											typeof e.getAttributeNode &&
										e.getAttributeNode('id');
									return t && t.value === n;
								};
						  }),
						  (b.find.ID = function (e, t) {
								if (
									'undefined' != typeof t.getElementById &&
									C
								) {
									var n,
										r,
										i,
										o = t.getElementById(e);
									if (o) {
										if (
											(n = o.getAttributeNode('id')) &&
											n.value === e
										)
											return [o];
										(i = t.getElementsByName(e)), (r = 0);
										while ((o = i[r++]))
											if (
												(n =
													o.getAttributeNode('id')) &&
												n.value === e
											)
												return [o];
									}
									return [];
								}
						  })),
					(b.find.TAG = function (e, t) {
						return 'undefined' != typeof t.getElementsByTagName
							? t.getElementsByTagName(e)
							: t.querySelectorAll(e);
					}),
					(b.find.CLASS = function (e, t) {
						if ('undefined' != typeof t.getElementsByClassName && C)
							return t.getElementsByClassName(e);
					}),
					(d = []),
					$(function (e) {
						var t;
						(r.appendChild(e).innerHTML =
							"<a id='" +
							S +
							"' href='' disabled='disabled'></a><select id='" +
							S +
							"-\r\\' disabled='disabled'><option selected=''></option></select>"),
							e.querySelectorAll('[selected]').length ||
								d.push('\\[' + ge + '*(?:value|' + f + ')'),
							e.querySelectorAll('[id~=' + S + '-]').length ||
								d.push('~='),
							e.querySelectorAll('a#' + S + '+*').length ||
								d.push('.#.+[+~]'),
							e.querySelectorAll(':checked').length ||
								d.push(':checked'),
							(t = T.createElement('input')).setAttribute(
								'type',
								'hidden'
							),
							e.appendChild(t).setAttribute('name', 'D'),
							(r.appendChild(e).disabled = !0),
							2 !== e.querySelectorAll(':disabled').length &&
								d.push(':enabled', ':disabled'),
							(t = T.createElement('input')).setAttribute(
								'name',
								''
							),
							e.appendChild(t),
							e.querySelectorAll("[name='']").length ||
								d.push(
									'\\[' +
										ge +
										'*name' +
										ge +
										'*=' +
										ge +
										'*(?:\'\'|"")'
								);
					}),
					le.cssHas || d.push(':has'),
					(d = d.length && new RegExp(d.join('|'))),
					(l = function (e, t) {
						if (e === t) return (a = !0), 0;
						var n =
							!e.compareDocumentPosition -
							!t.compareDocumentPosition;
						return (
							n ||
							(1 &
								(n =
									(e.ownerDocument || e) ==
									(t.ownerDocument || t)
										? e.compareDocumentPosition(t)
										: 1) ||
							(!le.sortDetached &&
								t.compareDocumentPosition(e) === n)
								? e === T ||
								  (e.ownerDocument == ye && I.contains(ye, e))
									? -1
									: t === T ||
									  (t.ownerDocument == ye &&
											I.contains(ye, t))
									? 1
									: o
									? se.call(o, e) - se.call(o, t)
									: 0
								: 4 & n
								? -1
								: 1)
						);
					})),
				T
			);
		}
		for (e in ((I.matches = function (e, t) {
			return I(e, null, null, t);
		}),
		(I.matchesSelector = function (e, t) {
			if ((V(e), C && !h[t + ' '] && (!d || !d.test(t))))
				try {
					var n = i.call(e, t);
					if (
						n ||
						le.disconnectedMatch ||
						(e.document && 11 !== e.document.nodeType)
					)
						return n;
				} catch (e) {
					h(t, !0);
				}
			return 0 < I(t, T, null, [e]).length;
		}),
		(I.contains = function (e, t) {
			return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
		}),
		(I.attr = function (e, t) {
			(e.ownerDocument || e) != T && V(e);
			var n = b.attrHandle[t.toLowerCase()],
				r =
					n && ue.call(b.attrHandle, t.toLowerCase())
						? n(e, t, !C)
						: void 0;
			return void 0 !== r ? r : e.getAttribute(t);
		}),
		(I.error = function (e) {
			throw new Error('Syntax error, unrecognized expression: ' + e);
		}),
		(ce.uniqueSort = function (e) {
			var t,
				n = [],
				r = 0,
				i = 0;
			if (
				((a = !le.sortStable),
				(o = !le.sortStable && ae.call(e, 0)),
				de.call(e, l),
				a)
			) {
				while ((t = e[i++])) t === e[i] && (r = n.push(i));
				while (r--) he.call(e, n[r], 1);
			}
			return (o = null), e;
		}),
		(ce.fn.uniqueSort = function () {
			return this.pushStack(ce.uniqueSort(ae.apply(this)));
		}),
		((b = ce.expr =
			{
				cacheLength: 50,
				createPseudo: F,
				match: D,
				attrHandle: {},
				find: {},
				relative: {
					'>': { dir: 'parentNode', first: !0 },
					' ': { dir: 'parentNode' },
					'+': { dir: 'previousSibling', first: !0 },
					'~': { dir: 'previousSibling' },
				},
				preFilter: {
					ATTR: function (e) {
						return (
							(e[1] = e[1].replace(O, P)),
							(e[3] = (e[3] || e[4] || e[5] || '').replace(O, P)),
							'~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
							e.slice(0, 4)
						);
					},
					CHILD: function (e) {
						return (
							(e[1] = e[1].toLowerCase()),
							'nth' === e[1].slice(0, 3)
								? (e[3] || I.error(e[0]),
								  (e[4] = +(e[4]
										? e[5] + (e[6] || 1)
										: 2 *
										  ('even' === e[3] || 'odd' === e[3]))),
								  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
								: e[3] && I.error(e[0]),
							e
						);
					},
					PSEUDO: function (e) {
						var t,
							n = !e[6] && e[2];
						return D.CHILD.test(e[0])
							? null
							: (e[3]
									? (e[2] = e[4] || e[5] || '')
									: n &&
									  j.test(n) &&
									  (t = Y(n, !0)) &&
									  (t =
											n.indexOf(')', n.length - t) -
											n.length) &&
									  ((e[0] = e[0].slice(0, t)),
									  (e[2] = n.slice(0, t))),
							  e.slice(0, 3));
					},
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(O, P).toLowerCase();
						return '*' === e
							? function () {
									return !0;
							  }
							: function (e) {
									return fe(e, t);
							  };
					},
					CLASS: function (e) {
						var t = s[e + ' '];
						return (
							t ||
							((t = new RegExp(
								'(^|' + ge + ')' + e + '(' + ge + '|$)'
							)) &&
								s(e, function (e) {
									return t.test(
										('string' == typeof e.className &&
											e.className) ||
											('undefined' !=
												typeof e.getAttribute &&
												e.getAttribute('class')) ||
											''
									);
								}))
						);
					},
					ATTR: function (n, r, i) {
						return function (e) {
							var t = I.attr(e, n);
							return null == t
								? '!=' === r
								: !r ||
										((t += ''),
										'=' === r
											? t === i
											: '!=' === r
											? t !== i
											: '^=' === r
											? i && 0 === t.indexOf(i)
											: '*=' === r
											? i && -1 < t.indexOf(i)
											: '$=' === r
											? i && t.slice(-i.length) === i
											: '~=' === r
											? -1 <
											  (
													' ' +
													t.replace(v, ' ') +
													' '
											  ).indexOf(i)
											: '|=' === r &&
											  (t === i ||
													t.slice(0, i.length + 1) ===
														i + '-'));
						};
					},
					CHILD: function (d, e, t, h, g) {
						var v = 'nth' !== d.slice(0, 3),
							y = 'last' !== d.slice(-4),
							m = 'of-type' === e;
						return 1 === h && 0 === g
							? function (e) {
									return !!e.parentNode;
							  }
							: function (e, t, n) {
									var r,
										i,
										o,
										a,
										s,
										u =
											v !== y
												? 'nextSibling'
												: 'previousSibling',
										l = e.parentNode,
										c = m && e.nodeName.toLowerCase(),
										f = !n && !m,
										p = !1;
									if (l) {
										if (v) {
											while (u) {
												o = e;
												while ((o = o[u]))
													if (
														m
															? fe(o, c)
															: 1 === o.nodeType
													)
														return !1;
												s = u =
													'only' === d &&
													!s &&
													'nextSibling';
											}
											return !0;
										}
										if (
											((s = [
												y ? l.firstChild : l.lastChild,
											]),
											y && f)
										) {
											(p =
												(a =
													(r =
														(i =
															l[S] ||
															(l[S] = {}))[d] ||
														[])[0] === E && r[1]) &&
												r[2]),
												(o = a && l.childNodes[a]);
											while (
												(o =
													(++a && o && o[u]) ||
													(p = a = 0) ||
													s.pop())
											)
												if (
													1 === o.nodeType &&
													++p &&
													o === e
												) {
													i[d] = [E, a, p];
													break;
												}
										} else if (
											(f &&
												(p = a =
													(r =
														(i =
															e[S] ||
															(e[S] = {}))[d] ||
														[])[0] === E && r[1]),
											!1 === p)
										)
											while (
												(o =
													(++a && o && o[u]) ||
													(p = a = 0) ||
													s.pop())
											)
												if (
													(m
														? fe(o, c)
														: 1 === o.nodeType) &&
													++p &&
													(f &&
														((i =
															o[S] ||
															(o[S] = {}))[d] = [
															E,
															p,
														]),
													o === e)
												)
													break;
										return (
											(p -= g) === h ||
											(p % h == 0 && 0 <= p / h)
										);
									}
							  };
					},
					PSEUDO: function (e, o) {
						var t,
							a =
								b.pseudos[e] ||
								b.setFilters[e.toLowerCase()] ||
								I.error('unsupported pseudo: ' + e);
						return a[S]
							? a(o)
							: 1 < a.length
							? ((t = [e, e, '', o]),
							  b.setFilters.hasOwnProperty(e.toLowerCase())
									? F(function (e, t) {
											var n,
												r = a(e, o),
												i = r.length;
											while (i--)
												e[(n = se.call(e, r[i]))] = !(t[
													n
												] = r[i]);
									  })
									: function (e) {
											return a(e, 0, t);
									  })
							: a;
					},
				},
				pseudos: {
					not: F(function (e) {
						var r = [],
							i = [],
							s = ne(e.replace(ve, '$1'));
						return s[S]
							? F(function (e, t, n, r) {
									var i,
										o = s(e, null, r, []),
										a = e.length;
									while (a--)
										(i = o[a]) && (e[a] = !(t[a] = i));
							  })
							: function (e, t, n) {
									return (
										(r[0] = e),
										s(r, null, n, i),
										(r[0] = null),
										!i.pop()
									);
							  };
					}),
					has: F(function (t) {
						return function (e) {
							return 0 < I(t, e).length;
						};
					}),
					contains: F(function (t) {
						return (
							(t = t.replace(O, P)),
							function (e) {
								return (
									-1 <
									(e.textContent || ce.text(e)).indexOf(t)
								);
							}
						);
					}),
					lang: F(function (n) {
						return (
							A.test(n || '') ||
								I.error('unsupported lang: ' + n),
							(n = n.replace(O, P).toLowerCase()),
							function (e) {
								var t;
								do {
									if (
										(t = C
											? e.lang
											: e.getAttribute('xml:lang') ||
											  e.getAttribute('lang'))
									)
										return (
											(t = t.toLowerCase()) === n ||
											0 === t.indexOf(n + '-')
										);
								} while (
									(e = e.parentNode) &&
									1 === e.nodeType
								);
								return !1;
							}
						);
					}),
					target: function (e) {
						var t = ie.location && ie.location.hash;
						return t && t.slice(1) === e.id;
					},
					root: function (e) {
						return e === r;
					},
					focus: function (e) {
						return (
							e ===
								(function () {
									try {
										return T.activeElement;
									} catch (e) {}
								})() &&
							T.hasFocus() &&
							!!(e.type || e.href || ~e.tabIndex)
						);
					},
					enabled: z(!1),
					disabled: z(!0),
					checked: function (e) {
						return (
							(fe(e, 'input') && !!e.checked) ||
							(fe(e, 'option') && !!e.selected)
						);
					},
					selected: function (e) {
						return (
							e.parentNode && e.parentNode.selectedIndex,
							!0 === e.selected
						);
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0;
					},
					parent: function (e) {
						return !b.pseudos.empty(e);
					},
					header: function (e) {
						return q.test(e.nodeName);
					},
					input: function (e) {
						return N.test(e.nodeName);
					},
					button: function (e) {
						return (
							(fe(e, 'input') && 'button' === e.type) ||
							fe(e, 'button')
						);
					},
					text: function (e) {
						var t;
						return (
							fe(e, 'input') &&
							'text' === e.type &&
							(null == (t = e.getAttribute('type')) ||
								'text' === t.toLowerCase())
						);
					},
					first: X(function () {
						return [0];
					}),
					last: X(function (e, t) {
						return [t - 1];
					}),
					eq: X(function (e, t, n) {
						return [n < 0 ? n + t : n];
					}),
					even: X(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e;
					}),
					odd: X(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e;
					}),
					lt: X(function (e, t, n) {
						var r;
						for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
							e.push(r);
						return e;
					}),
					gt: X(function (e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
						return e;
					}),
				},
			}).pseudos.nth = b.pseudos.eq),
		{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
			b.pseudos[e] = B(e);
		for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
		function G() {}
		function Y(e, t) {
			var n,
				r,
				i,
				o,
				a,
				s,
				u,
				l = c[e + ' '];
			if (l) return t ? 0 : l.slice(0);
			(a = e), (s = []), (u = b.preFilter);
			while (a) {
				for (o in ((n && !(r = y.exec(a))) ||
					(r && (a = a.slice(r[0].length) || a), s.push((i = []))),
				(n = !1),
				(r = m.exec(a)) &&
					((n = r.shift()),
					i.push({ value: n, type: r[0].replace(ve, ' ') }),
					(a = a.slice(n.length))),
				b.filter))
					!(r = D[o].exec(a)) ||
						(u[o] && !(r = u[o](r))) ||
						((n = r.shift()),
						i.push({ value: n, type: o, matches: r }),
						(a = a.slice(n.length)));
				if (!n) break;
			}
			return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
		}
		function Q(e) {
			for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
			return r;
		}
		function J(a, e, t) {
			var s = e.dir,
				u = e.next,
				l = u || s,
				c = t && 'parentNode' === l,
				f = n++;
			return e.first
				? function (e, t, n) {
						while ((e = e[s]))
							if (1 === e.nodeType || c) return a(e, t, n);
						return !1;
				  }
				: function (e, t, n) {
						var r,
							i,
							o = [E, f];
						if (n) {
							while ((e = e[s]))
								if ((1 === e.nodeType || c) && a(e, t, n))
									return !0;
						} else
							while ((e = e[s]))
								if (1 === e.nodeType || c)
									if (
										((i = e[S] || (e[S] = {})),
										u && fe(e, u))
									)
										e = e[s] || e;
									else {
										if (
											(r = i[l]) &&
											r[0] === E &&
											r[1] === f
										)
											return (o[2] = r[2]);
										if (((i[l] = o)[2] = a(e, t, n)))
											return !0;
									}
						return !1;
				  };
		}
		function K(i) {
			return 1 < i.length
				? function (e, t, n) {
						var r = i.length;
						while (r--) if (!i[r](e, t, n)) return !1;
						return !0;
				  }
				: i[0];
		}
		function Z(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
				(o = e[s]) &&
					((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
			return a;
		}
		function ee(d, h, g, v, y, e) {
			return (
				v && !v[S] && (v = ee(v)),
				y && !y[S] && (y = ee(y, e)),
				F(function (e, t, n, r) {
					var i,
						o,
						a,
						s,
						u = [],
						l = [],
						c = t.length,
						f =
							e ||
							(function (e, t, n) {
								for (var r = 0, i = t.length; r < i; r++)
									I(e, t[r], n);
								return n;
							})(h || '*', n.nodeType ? [n] : n, []),
						p = !d || (!e && h) ? f : Z(f, u, d, n, r);
					if (
						(g
							? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r)
							: (s = p),
						v)
					) {
						(i = Z(s, l)), v(i, [], n, r), (o = i.length);
						while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
					}
					if (e) {
						if (y || d) {
							if (y) {
								(i = []), (o = s.length);
								while (o--) (a = s[o]) && i.push((p[o] = a));
								y(null, (s = []), i, r);
							}
							o = s.length;
							while (o--)
								(a = s[o]) &&
									-1 < (i = y ? se.call(e, a) : u[o]) &&
									(e[i] = !(t[i] = a));
						}
					} else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
				})
			);
		}
		function te(e) {
			for (
				var i,
					t,
					n,
					r = e.length,
					o = b.relative[e[0].type],
					a = o || b.relative[' '],
					s = o ? 1 : 0,
					u = J(
						function (e) {
							return e === i;
						},
						a,
						!0
					),
					l = J(
						function (e) {
							return -1 < se.call(i, e);
						},
						a,
						!0
					),
					c = [
						function (e, t, n) {
							var r =
								(!o && (n || t != w)) ||
								((i = t).nodeType ? u(e, t, n) : l(e, t, n));
							return (i = null), r;
						},
					];
				s < r;
				s++
			)
				if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
				else {
					if (
						(t = b.filter[e[s].type].apply(null, e[s].matches))[S]
					) {
						for (n = ++s; n < r; n++)
							if (b.relative[e[n].type]) break;
						return ee(
							1 < s && K(c),
							1 < s &&
								Q(
									e.slice(0, s - 1).concat({
										value: ' ' === e[s - 2].type ? '*' : '',
									})
								).replace(ve, '$1'),
							t,
							s < n && te(e.slice(s, n)),
							n < r && te((e = e.slice(n))),
							n < r && Q(e)
						);
					}
					c.push(t);
				}
			return K(c);
		}
		function ne(e, t) {
			var n,
				v,
				y,
				m,
				x,
				r,
				i = [],
				o = [],
				a = u[e + ' '];
			if (!a) {
				t || (t = Y(e)), (n = t.length);
				while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
				(a = u(
					e,
					((v = o),
					(m = 0 < (y = i).length),
					(x = 0 < v.length),
					(r = function (e, t, n, r, i) {
						var o,
							a,
							s,
							u = 0,
							l = '0',
							c = e && [],
							f = [],
							p = w,
							d = e || (x && b.find.TAG('*', i)),
							h = (E += null == p ? 1 : Math.random() || 0.1),
							g = d.length;
						for (
							i && (w = t == T || t || i);
							l !== g && null != (o = d[l]);
							l++
						) {
							if (x && o) {
								(a = 0),
									t ||
										o.ownerDocument == T ||
										(V(o), (n = !C));
								while ((s = v[a++]))
									if (s(o, t || T, n)) {
										k.call(r, o);
										break;
									}
								i && (E = h);
							}
							m && ((o = !s && o) && u--, e && c.push(o));
						}
						if (((u += l), m && l !== u)) {
							a = 0;
							while ((s = y[a++])) s(c, f, t, n);
							if (e) {
								if (0 < u)
									while (l--)
										c[l] || f[l] || (f[l] = pe.call(r));
								f = Z(f);
							}
							k.apply(r, f),
								i &&
									!e &&
									0 < f.length &&
									1 < u + y.length &&
									ce.uniqueSort(r);
						}
						return i && ((E = h), (w = p)), c;
					}),
					m ? F(r) : r)
				)).selector = e;
			}
			return a;
		}
		function re(e, t, n, r) {
			var i,
				o,
				a,
				s,
				u,
				l = 'function' == typeof e && e,
				c = !r && Y((e = l.selector || e));
			if (((n = n || []), 1 === c.length)) {
				if (
					2 < (o = c[0] = c[0].slice(0)).length &&
					'ID' === (a = o[0]).type &&
					9 === t.nodeType &&
					C &&
					b.relative[o[1].type]
				) {
					if (
						!(t = (b.find.ID(a.matches[0].replace(O, P), t) ||
							[])[0])
					)
						return n;
					l && (t = t.parentNode),
						(e = e.slice(o.shift().value.length));
				}
				i = D.needsContext.test(e) ? 0 : o.length;
				while (i--) {
					if (((a = o[i]), b.relative[(s = a.type)])) break;
					if (
						(u = b.find[s]) &&
						(r = u(
							a.matches[0].replace(O, P),
							(H.test(o[0].type) && U(t.parentNode)) || t
						))
					) {
						if ((o.splice(i, 1), !(e = r.length && Q(o))))
							return k.apply(n, r), n;
						break;
					}
				}
			}
			return (
				(l || ne(e, c))(
					r,
					t,
					!C,
					n,
					!t || (H.test(e) && U(t.parentNode)) || t
				),
				n
			);
		}
		(G.prototype = b.filters = b.pseudos),
			(b.setFilters = new G()),
			(le.sortStable = S.split('').sort(l).join('') === S),
			V(),
			(le.sortDetached = $(function (e) {
				return (
					1 & e.compareDocumentPosition(T.createElement('fieldset'))
				);
			})),
			(ce.find = I),
			(ce.expr[':'] = ce.expr.pseudos),
			(ce.unique = ce.uniqueSort),
			(I.compile = ne),
			(I.select = re),
			(I.setDocument = V),
			(I.tokenize = Y),
			(I.escape = ce.escapeSelector),
			(I.getText = ce.text),
			(I.isXML = ce.isXMLDoc),
			(I.selectors = ce.expr),
			(I.support = ce.support),
			(I.uniqueSort = ce.uniqueSort);
	})();
	var d = function (e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && ce(e).is(n)) break;
					r.push(e);
				}
			return r;
		},
		h = function (e, t) {
			for (var n = []; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e);
			return n;
		},
		b = ce.expr.match.needsContext,
		w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function T(e, n, r) {
		return v(n)
			? ce.grep(e, function (e, t) {
					return !!n.call(e, t, e) !== r;
			  })
			: n.nodeType
			? ce.grep(e, function (e) {
					return (e === n) !== r;
			  })
			: 'string' != typeof n
			? ce.grep(e, function (e) {
					return -1 < se.call(n, e) !== r;
			  })
			: ce.filter(n, e, r);
	}
	(ce.filter = function (e, t, n) {
		var r = t[0];
		return (
			n && (e = ':not(' + e + ')'),
			1 === t.length && 1 === r.nodeType
				? ce.find.matchesSelector(r, e)
					? [r]
					: []
				: ce.find.matches(
						e,
						ce.grep(t, function (e) {
							return 1 === e.nodeType;
						})
				  )
		);
	}),
		ce.fn.extend({
			find: function (e) {
				var t,
					n,
					r = this.length,
					i = this;
				if ('string' != typeof e)
					return this.pushStack(
						ce(e).filter(function () {
							for (t = 0; t < r; t++)
								if (ce.contains(i[t], this)) return !0;
						})
					);
				for (n = this.pushStack([]), t = 0; t < r; t++)
					ce.find(e, i[t], n);
				return 1 < r ? ce.uniqueSort(n) : n;
			},
			filter: function (e) {
				return this.pushStack(T(this, e || [], !1));
			},
			not: function (e) {
				return this.pushStack(T(this, e || [], !0));
			},
			is: function (e) {
				return !!T(
					this,
					'string' == typeof e && b.test(e) ? ce(e) : e || [],
					!1
				).length;
			},
		});
	var k,
		S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	((ce.fn.init = function (e, t, n) {
		var r, i;
		if (!e) return this;
		if (((n = n || k), 'string' == typeof e)) {
			if (
				!(r =
					'<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
						? [null, e, null]
						: S.exec(e)) ||
				(!r[1] && t)
			)
				return !t || t.jquery
					? (t || n).find(e)
					: this.constructor(t).find(e);
			if (r[1]) {
				if (
					((t = t instanceof ce ? t[0] : t),
					ce.merge(
						this,
						ce.parseHTML(
							r[1],
							t && t.nodeType ? t.ownerDocument || t : C,
							!0
						)
					),
					w.test(r[1]) && ce.isPlainObject(t))
				)
					for (r in t)
						v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this;
			}
			return (
				(i = C.getElementById(r[2])) &&
					((this[0] = i), (this.length = 1)),
				this
			);
		}
		return e.nodeType
			? ((this[0] = e), (this.length = 1), this)
			: v(e)
			? void 0 !== n.ready
				? n.ready(e)
				: e(ce)
			: ce.makeArray(e, this);
	}).prototype = ce.fn),
		(k = ce(C));
	var E = /^(?:parents|prev(?:Until|All))/,
		j = { children: !0, contents: !0, next: !0, prev: !0 };
	function A(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e;
	}
	ce.fn.extend({
		has: function (e) {
			var t = ce(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++)
					if (ce.contains(this, t[e])) return !0;
			});
		},
		closest: function (e, t) {
			var n,
				r = 0,
				i = this.length,
				o = [],
				a = 'string' != typeof e && ce(e);
			if (!b.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (
							n.nodeType < 11 &&
							(a
								? -1 < a.index(n)
								: 1 === n.nodeType &&
								  ce.find.matchesSelector(n, e))
						) {
							o.push(n);
							break;
						}
			return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
		},
		index: function (e) {
			return e
				? 'string' == typeof e
					? se.call(ce(e), this[0])
					: se.call(this, e.jquery ? e[0] : e)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1;
		},
		add: function (e, t) {
			return this.pushStack(
				ce.uniqueSort(ce.merge(this.get(), ce(e, t)))
			);
		},
		addBack: function (e) {
			return this.add(
				null == e ? this.prevObject : this.prevObject.filter(e)
			);
		},
	}),
		ce.each(
			{
				parent: function (e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null;
				},
				parents: function (e) {
					return d(e, 'parentNode');
				},
				parentsUntil: function (e, t, n) {
					return d(e, 'parentNode', n);
				},
				next: function (e) {
					return A(e, 'nextSibling');
				},
				prev: function (e) {
					return A(e, 'previousSibling');
				},
				nextAll: function (e) {
					return d(e, 'nextSibling');
				},
				prevAll: function (e) {
					return d(e, 'previousSibling');
				},
				nextUntil: function (e, t, n) {
					return d(e, 'nextSibling', n);
				},
				prevUntil: function (e, t, n) {
					return d(e, 'previousSibling', n);
				},
				siblings: function (e) {
					return h((e.parentNode || {}).firstChild, e);
				},
				children: function (e) {
					return h(e.firstChild);
				},
				contents: function (e) {
					return null != e.contentDocument && r(e.contentDocument)
						? e.contentDocument
						: (fe(e, 'template') && (e = e.content || e),
						  ce.merge([], e.childNodes));
				},
			},
			function (r, i) {
				ce.fn[r] = function (e, t) {
					var n = ce.map(this, i, e);
					return (
						'Until' !== r.slice(-5) && (t = e),
						t && 'string' == typeof t && (n = ce.filter(t, n)),
						1 < this.length &&
							(j[r] || ce.uniqueSort(n),
							E.test(r) && n.reverse()),
						this.pushStack(n)
					);
				};
			}
		);
	var D = /[^\x20\t\r\n\f]+/g;
	function N(e) {
		return e;
	}
	function q(e) {
		throw e;
	}
	function L(e, t, n, r) {
		var i;
		try {
			e && v((i = e.promise))
				? i.call(e).done(t).fail(n)
				: e && v((i = e.then))
				? i.call(e, t, n)
				: t.apply(void 0, [e].slice(r));
		} catch (e) {
			n.apply(void 0, [e]);
		}
	}
	(ce.Callbacks = function (r) {
		var e, n;
		r =
			'string' == typeof r
				? ((e = r),
				  (n = {}),
				  ce.each(e.match(D) || [], function (e, t) {
						n[t] = !0;
				  }),
				  n)
				: ce.extend({}, r);
		var i,
			t,
			o,
			a,
			s = [],
			u = [],
			l = -1,
			c = function () {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift();
					while (++l < s.length)
						!1 === s[l].apply(t[0], t[1]) &&
							r.stopOnFalse &&
							((l = s.length), (t = !1));
				}
				r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
			},
			f = {
				add: function () {
					return (
						s &&
							(t && !i && ((l = s.length - 1), u.push(t)),
							(function n(e) {
								ce.each(e, function (e, t) {
									v(t)
										? (r.unique && f.has(t)) || s.push(t)
										: t &&
										  t.length &&
										  'string' !== x(t) &&
										  n(t);
								});
							})(arguments),
							t && !i && c()),
						this
					);
				},
				remove: function () {
					return (
						ce.each(arguments, function (e, t) {
							var n;
							while (-1 < (n = ce.inArray(t, s, n)))
								s.splice(n, 1), n <= l && l--;
						}),
						this
					);
				},
				has: function (e) {
					return e ? -1 < ce.inArray(e, s) : 0 < s.length;
				},
				empty: function () {
					return s && (s = []), this;
				},
				disable: function () {
					return (a = u = []), (s = t = ''), this;
				},
				disabled: function () {
					return !s;
				},
				lock: function () {
					return (a = u = []), t || i || (s = t = ''), this;
				},
				locked: function () {
					return !!a;
				},
				fireWith: function (e, t) {
					return (
						a ||
							((t = [e, (t = t || []).slice ? t.slice() : t]),
							u.push(t),
							i || c()),
						this
					);
				},
				fire: function () {
					return f.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!o;
				},
			};
		return f;
	}),
		ce.extend({
			Deferred: function (e) {
				var o = [
						[
							'notify',
							'progress',
							ce.Callbacks('memory'),
							ce.Callbacks('memory'),
							2,
						],
						[
							'resolve',
							'done',
							ce.Callbacks('once memory'),
							ce.Callbacks('once memory'),
							0,
							'resolved',
						],
						[
							'reject',
							'fail',
							ce.Callbacks('once memory'),
							ce.Callbacks('once memory'),
							1,
							'rejected',
						],
					],
					i = 'pending',
					a = {
						state: function () {
							return i;
						},
						always: function () {
							return s.done(arguments).fail(arguments), this;
						},
						catch: function (e) {
							return a.then(null, e);
						},
						pipe: function () {
							var i = arguments;
							return ce
								.Deferred(function (r) {
									ce.each(o, function (e, t) {
										var n = v(i[t[4]]) && i[t[4]];
										s[t[1]](function () {
											var e =
												n && n.apply(this, arguments);
											e && v(e.promise)
												? e
														.promise()
														.progress(r.notify)
														.done(r.resolve)
														.fail(r.reject)
												: r[t[0] + 'With'](
														this,
														n ? [e] : arguments
												  );
										});
									}),
										(i = null);
								})
								.promise();
						},
						then: function (t, n, r) {
							var u = 0;
							function l(i, o, a, s) {
								return function () {
									var n = this,
										r = arguments,
										e = function () {
											var e, t;
											if (!(i < u)) {
												if (
													(e = a.apply(n, r)) ===
													o.promise()
												)
													throw new TypeError(
														'Thenable self-resolution'
													);
												(t =
													e &&
													('object' == typeof e ||
														'function' ==
															typeof e) &&
													e.then),
													v(t)
														? s
															? t.call(
																	e,
																	l(
																		u,
																		o,
																		N,
																		s
																	),
																	l(
																		u,
																		o,
																		q,
																		s
																	)
															  )
															: (u++,
															  t.call(
																	e,
																	l(
																		u,
																		o,
																		N,
																		s
																	),
																	l(
																		u,
																		o,
																		q,
																		s
																	),
																	l(
																		u,
																		o,
																		N,
																		o.notifyWith
																	)
															  ))
														: (a !== N &&
																((n = void 0),
																(r = [e])),
														  (s || o.resolveWith)(
																n,
																r
														  ));
											}
										},
										t = s
											? e
											: function () {
													try {
														e();
													} catch (e) {
														ce.Deferred
															.exceptionHook &&
															ce.Deferred.exceptionHook(
																e,
																t.error
															),
															u <= i + 1 &&
																(a !== q &&
																	((n =
																		void 0),
																	(r = [e])),
																o.rejectWith(
																	n,
																	r
																));
													}
											  };
									i
										? t()
										: (ce.Deferred.getErrorHook
												? (t.error =
														ce.Deferred.getErrorHook())
												: ce.Deferred.getStackHook &&
												  (t.error =
														ce.Deferred.getStackHook()),
										  ie.setTimeout(t));
								};
							}
							return ce
								.Deferred(function (e) {
									o[0][3].add(
										l(0, e, v(r) ? r : N, e.notifyWith)
									),
										o[1][3].add(l(0, e, v(t) ? t : N)),
										o[2][3].add(l(0, e, v(n) ? n : q));
								})
								.promise();
						},
						promise: function (e) {
							return null != e ? ce.extend(e, a) : a;
						},
					},
					s = {};
				return (
					ce.each(o, function (e, t) {
						var n = t[2],
							r = t[5];
						(a[t[1]] = n.add),
							r &&
								n.add(
									function () {
										i = r;
									},
									o[3 - e][2].disable,
									o[3 - e][3].disable,
									o[0][2].lock,
									o[0][3].lock
								),
							n.add(t[3].fire),
							(s[t[0]] = function () {
								return (
									s[t[0] + 'With'](
										this === s ? void 0 : this,
										arguments
									),
									this
								);
							}),
							(s[t[0] + 'With'] = n.fireWith);
					}),
					a.promise(s),
					e && e.call(s, s),
					s
				);
			},
			when: function (e) {
				var n = arguments.length,
					t = n,
					r = Array(t),
					i = ae.call(arguments),
					o = ce.Deferred(),
					a = function (t) {
						return function (e) {
							(r[t] = this),
								(i[t] =
									1 < arguments.length
										? ae.call(arguments)
										: e),
								--n || o.resolveWith(r, i);
						};
					};
				if (
					n <= 1 &&
					(L(e, o.done(a(t)).resolve, o.reject, !n),
					'pending' === o.state() || v(i[t] && i[t].then))
				)
					return o.then();
				while (t--) L(i[t], a(t), o.reject);
				return o.promise();
			},
		});
	var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	(ce.Deferred.exceptionHook = function (e, t) {
		ie.console &&
			ie.console.warn &&
			e &&
			H.test(e.name) &&
			ie.console.warn(
				'jQuery.Deferred exception: ' + e.message,
				e.stack,
				t
			);
	}),
		(ce.readyException = function (e) {
			ie.setTimeout(function () {
				throw e;
			});
		});
	var O = ce.Deferred();
	function P() {
		C.removeEventListener('DOMContentLoaded', P),
			ie.removeEventListener('load', P),
			ce.ready();
	}
	(ce.fn.ready = function (e) {
		return (
			O.then(e)['catch'](function (e) {
				ce.readyException(e);
			}),
			this
		);
	}),
		ce.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(!0 === e ? --ce.readyWait : ce.isReady) ||
					((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
					O.resolveWith(C, [ce]);
			},
		}),
		(ce.ready.then = O.then),
		'complete' === C.readyState ||
		('loading' !== C.readyState && !C.documentElement.doScroll)
			? ie.setTimeout(ce.ready)
			: (C.addEventListener('DOMContentLoaded', P),
			  ie.addEventListener('load', P));
	var M = function (e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ('object' === x(n))
				for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
			else if (
				void 0 !== r &&
				((i = !0),
				v(r) || (a = !0),
				l &&
					(a
						? (t.call(e, r), (t = null))
						: ((l = t),
						  (t = function (e, t, n) {
								return l.call(ce(e), n);
						  }))),
				t)
			)
				for (; s < u; s++)
					t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
		},
		R = /^-ms-/,
		I = /-([a-z])/g;
	function W(e, t) {
		return t.toUpperCase();
	}
	function F(e) {
		return e.replace(R, 'ms-').replace(I, W);
	}
	var $ = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
	};
	function B() {
		this.expando = ce.expando + B.uid++;
	}
	(B.uid = 1),
		(B.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return (
					t ||
						((t = {}),
						$(e) &&
							(e.nodeType
								? (e[this.expando] = t)
								: Object.defineProperty(e, this.expando, {
										value: t,
										configurable: !0,
								  }))),
					t
				);
			},
			set: function (e, t, n) {
				var r,
					i = this.cache(e);
				if ('string' == typeof t) i[F(t)] = n;
				else for (r in t) i[F(r)] = t[r];
				return i;
			},
			get: function (e, t) {
				return void 0 === t
					? this.cache(e)
					: e[this.expando] && e[this.expando][F(t)];
			},
			access: function (e, t, n) {
				return void 0 === t ||
					(t && 'string' == typeof t && void 0 === n)
					? this.get(e, t)
					: (this.set(e, t, n), void 0 !== n ? n : t);
			},
			remove: function (e, t) {
				var n,
					r = e[this.expando];
				if (void 0 !== r) {
					if (void 0 !== t) {
						n = (t = Array.isArray(t)
							? t.map(F)
							: (t = F(t)) in r
							? [t]
							: t.match(D) || []).length;
						while (n--) delete r[t[n]];
					}
					(void 0 === t || ce.isEmptyObject(r)) &&
						(e.nodeType
							? (e[this.expando] = void 0)
							: delete e[this.expando]);
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !ce.isEmptyObject(t);
			},
		});
	var _ = new B(),
		z = new B(),
		X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		U = /[A-Z]/g;
	function V(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (
				((r = 'data-' + t.replace(U, '-$&').toLowerCase()),
				'string' == typeof (n = e.getAttribute(r)))
			) {
				try {
					n =
						'true' === (i = n) ||
						('false' !== i &&
							('null' === i
								? null
								: i === +i + ''
								? +i
								: X.test(i)
								? JSON.parse(i)
								: i));
				} catch (e) {}
				z.set(e, t, n);
			} else n = void 0;
		return n;
	}
	ce.extend({
		hasData: function (e) {
			return z.hasData(e) || _.hasData(e);
		},
		data: function (e, t, n) {
			return z.access(e, t, n);
		},
		removeData: function (e, t) {
			z.remove(e, t);
		},
		_data: function (e, t, n) {
			return _.access(e, t, n);
		},
		_removeData: function (e, t) {
			_.remove(e, t);
		},
	}),
		ce.fn.extend({
			data: function (n, e) {
				var t,
					r,
					i,
					o = this[0],
					a = o && o.attributes;
				if (void 0 === n) {
					if (
						this.length &&
						((i = z.get(o)),
						1 === o.nodeType && !_.get(o, 'hasDataAttrs'))
					) {
						t = a.length;
						while (t--)
							a[t] &&
								0 === (r = a[t].name).indexOf('data-') &&
								((r = F(r.slice(5))), V(o, r, i[r]));
						_.set(o, 'hasDataAttrs', !0);
					}
					return i;
				}
				return 'object' == typeof n
					? this.each(function () {
							z.set(this, n);
					  })
					: M(
							this,
							function (e) {
								var t;
								if (o && void 0 === e)
									return void 0 !== (t = z.get(o, n))
										? t
										: void 0 !== (t = V(o, n))
										? t
										: void 0;
								this.each(function () {
									z.set(this, n, e);
								});
							},
							null,
							e,
							1 < arguments.length,
							null,
							!0
					  );
			},
			removeData: function (e) {
				return this.each(function () {
					z.remove(this, e);
				});
			},
		}),
		ce.extend({
			queue: function (e, t, n) {
				var r;
				if (e)
					return (
						(t = (t || 'fx') + 'queue'),
						(r = _.get(e, t)),
						n &&
							(!r || Array.isArray(n)
								? (r = _.access(e, t, ce.makeArray(n)))
								: r.push(n)),
						r || []
					);
			},
			dequeue: function (e, t) {
				t = t || 'fx';
				var n = ce.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = ce._queueHooks(e, t);
				'inprogress' === i && ((i = n.shift()), r--),
					i &&
						('fx' === t && n.unshift('inprogress'),
						delete o.stop,
						i.call(
							e,
							function () {
								ce.dequeue(e, t);
							},
							o
						)),
					!r && o && o.empty.fire();
			},
			_queueHooks: function (e, t) {
				var n = t + 'queueHooks';
				return (
					_.get(e, n) ||
					_.access(e, n, {
						empty: ce.Callbacks('once memory').add(function () {
							_.remove(e, [t + 'queue', n]);
						}),
					})
				);
			},
		}),
		ce.fn.extend({
			queue: function (t, n) {
				var e = 2;
				return (
					'string' != typeof t && ((n = t), (t = 'fx'), e--),
					arguments.length < e
						? ce.queue(this[0], t)
						: void 0 === n
						? this
						: this.each(function () {
								var e = ce.queue(this, t, n);
								ce._queueHooks(this, t),
									'fx' === t &&
										'inprogress' !== e[0] &&
										ce.dequeue(this, t);
						  })
				);
			},
			dequeue: function (e) {
				return this.each(function () {
					ce.dequeue(this, e);
				});
			},
			clearQueue: function (e) {
				return this.queue(e || 'fx', []);
			},
			promise: function (e, t) {
				var n,
					r = 1,
					i = ce.Deferred(),
					o = this,
					a = this.length,
					s = function () {
						--r || i.resolveWith(o, [o]);
					};
				'string' != typeof e && ((t = e), (e = void 0)),
					(e = e || 'fx');
				while (a--)
					(n = _.get(o[a], e + 'queueHooks')) &&
						n.empty &&
						(r++, n.empty.add(s));
				return s(), i.promise(t);
			},
		});
	var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Y = new RegExp('^(?:([+-])=|)(' + G + ')([a-z%]*)$', 'i'),
		Q = ['Top', 'Right', 'Bottom', 'Left'],
		J = C.documentElement,
		K = function (e) {
			return ce.contains(e.ownerDocument, e);
		},
		Z = { composed: !0 };
	J.getRootNode &&
		(K = function (e) {
			return (
				ce.contains(e.ownerDocument, e) ||
				e.getRootNode(Z) === e.ownerDocument
			);
		});
	var ee = function (e, t) {
		return (
			'none' === (e = t || e).style.display ||
			('' === e.style.display && K(e) && 'none' === ce.css(e, 'display'))
		);
	};
	function te(e, t, n, r) {
		var i,
			o,
			a = 20,
			s = r
				? function () {
						return r.cur();
				  }
				: function () {
						return ce.css(e, t, '');
				  },
			u = s(),
			l = (n && n[3]) || (ce.cssNumber[t] ? '' : 'px'),
			c =
				e.nodeType &&
				(ce.cssNumber[t] || ('px' !== l && +u)) &&
				Y.exec(ce.css(e, t));
		if (c && c[3] !== l) {
			(u /= 2), (l = l || c[3]), (c = +u || 1);
			while (a--)
				ce.style(e, t, c + l),
					(1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
					(c /= o);
			(c *= 2), ce.style(e, t, c + l), (n = n || []);
		}
		return (
			n &&
				((c = +c || +u || 0),
				(i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
				r && ((r.unit = l), (r.start = c), (r.end = i))),
			i
		);
	}
	var ne = {};
	function re(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
			(r = e[c]).style &&
				((n = r.style.display),
				t
					? ('none' === n &&
							((l[c] = _.get(r, 'display') || null),
							l[c] || (r.style.display = '')),
					  '' === r.style.display &&
							ee(r) &&
							(l[c] =
								((u = a = o = void 0),
								(a = (i = r).ownerDocument),
								(s = i.nodeName),
								(u = ne[s]) ||
									((o = a.body.appendChild(
										a.createElement(s)
									)),
									(u = ce.css(o, 'display')),
									o.parentNode.removeChild(o),
									'none' === u && (u = 'block'),
									(ne[s] = u)))))
					: 'none' !== n &&
					  ((l[c] = 'none'), _.set(r, 'display', n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e;
	}
	ce.fn.extend({
		show: function () {
			return re(this, !0);
		},
		hide: function () {
			return re(this);
		},
		toggle: function (e) {
			return 'boolean' == typeof e
				? e
					? this.show()
					: this.hide()
				: this.each(function () {
						ee(this) ? ce(this).show() : ce(this).hide();
				  });
		},
	});
	var xe,
		be,
		we = /^(?:checkbox|radio)$/i,
		Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		Ce = /^$|^module$|\/(?:java|ecma)script/i;
	(xe = C.createDocumentFragment().appendChild(C.createElement('div'))),
		(be = C.createElement('input')).setAttribute('type', 'radio'),
		be.setAttribute('checked', 'checked'),
		be.setAttribute('name', 't'),
		xe.appendChild(be),
		(le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
		(xe.innerHTML = '<textarea>x</textarea>'),
		(le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
		(xe.innerHTML = '<option></option>'),
		(le.option = !!xe.lastChild);
	var ke = {
		thead: [1, '<table>', '</table>'],
		col: [2, '<table><colgroup>', '</colgroup></table>'],
		tr: [2, '<table><tbody>', '</tbody></table>'],
		td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
		_default: [0, '', ''],
	};
	function Se(e, t) {
		var n;
		return (
			(n =
				'undefined' != typeof e.getElementsByTagName
					? e.getElementsByTagName(t || '*')
					: 'undefined' != typeof e.querySelectorAll
					? e.querySelectorAll(t || '*')
					: []),
			void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
		);
	}
	function Ee(e, t) {
		for (var n = 0, r = e.length; n < r; n++)
			_.set(e[n], 'globalEval', !t || _.get(t[n], 'globalEval'));
	}
	(ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
		(ke.th = ke.td),
		le.option ||
			(ke.optgroup = ke.option =
				[1, "<select multiple='multiple'>", '</select>']);
	var je = /<|&#?\w+;/;
	function Ae(e, t, n, r, i) {
		for (
			var o,
				a,
				s,
				u,
				l,
				c,
				f = t.createDocumentFragment(),
				p = [],
				d = 0,
				h = e.length;
			d < h;
			d++
		)
			if ((o = e[d]) || 0 === o)
				if ('object' === x(o)) ce.merge(p, o.nodeType ? [o] : o);
				else if (je.test(o)) {
					(a = a || f.appendChild(t.createElement('div'))),
						(s = (Te.exec(o) || ['', ''])[1].toLowerCase()),
						(u = ke[s] || ke._default),
						(a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
						(c = u[0]);
					while (c--) a = a.lastChild;
					ce.merge(p, a.childNodes),
						((a = f.firstChild).textContent = '');
				} else p.push(t.createTextNode(o));
		(f.textContent = ''), (d = 0);
		while ((o = p[d++]))
			if (r && -1 < ce.inArray(o, r)) i && i.push(o);
			else if (
				((l = K(o)),
				(a = Se(f.appendChild(o), 'script')),
				l && Ee(a),
				n)
			) {
				c = 0;
				while ((o = a[c++])) Ce.test(o.type || '') && n.push(o);
			}
		return f;
	}
	var De = /^([^.]*)(?:\.(.+)|)/;
	function Ne() {
		return !0;
	}
	function qe() {
		return !1;
	}
	function Le(e, t, n, r, i, o) {
		var a, s;
		if ('object' == typeof t) {
			for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
				Le(e, s, n, r, t[s], o);
			return e;
		}
		if (
			(null == r && null == i
				? ((i = n), (r = n = void 0))
				: null == i &&
				  ('string' == typeof n
						? ((i = r), (r = void 0))
						: ((i = r), (r = n), (n = void 0))),
			!1 === i)
		)
			i = qe;
		else if (!i) return e;
		return (
			1 === o &&
				((a = i),
				((i = function (e) {
					return ce().off(e), a.apply(this, arguments);
				}).guid = a.guid || (a.guid = ce.guid++))),
			e.each(function () {
				ce.event.add(this, t, i, r, n);
			})
		);
	}
	function He(e, r, t) {
		t
			? (_.set(e, r, !1),
			  ce.event.add(e, r, {
					namespace: !1,
					handler: function (e) {
						var t,
							n = _.get(this, r);
						if (1 & e.isTrigger && this[r]) {
							if (n)
								(ce.event.special[r] || {}).delegateType &&
									e.stopPropagation();
							else if (
								((n = ae.call(arguments)),
								_.set(this, r, n),
								this[r](),
								(t = _.get(this, r)),
								_.set(this, r, !1),
								n !== t)
							)
								return (
									e.stopImmediatePropagation(),
									e.preventDefault(),
									t
								);
						} else
							n &&
								(_.set(
									this,
									r,
									ce.event.trigger(n[0], n.slice(1), this)
								),
								e.stopPropagation(),
								(e.isImmediatePropagationStopped = Ne));
					},
			  }))
			: void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
	}
	(ce.event = {
		global: {},
		add: function (t, e, n, r, i) {
			var o,
				a,
				s,
				u,
				l,
				c,
				f,
				p,
				d,
				h,
				g,
				v = _.get(t);
			if ($(t)) {
				n.handler && ((n = (o = n).handler), (i = o.selector)),
					i && ce.find.matchesSelector(J, i),
					n.guid || (n.guid = ce.guid++),
					(u = v.events) || (u = v.events = Object.create(null)),
					(a = v.handle) ||
						(a = v.handle =
							function (e) {
								return 'undefined' != typeof ce &&
									ce.event.triggered !== e.type
									? ce.event.dispatch.apply(t, arguments)
									: void 0;
							}),
					(l = (e = (e || '').match(D) || ['']).length);
				while (l--)
					(d = g = (s = De.exec(e[l]) || [])[1]),
						(h = (s[2] || '').split('.').sort()),
						d &&
							((f = ce.event.special[d] || {}),
							(d = (i ? f.delegateType : f.bindType) || d),
							(f = ce.event.special[d] || {}),
							(c = ce.extend(
								{
									type: d,
									origType: g,
									data: r,
									handler: n,
									guid: n.guid,
									selector: i,
									needsContext:
										i && ce.expr.match.needsContext.test(i),
									namespace: h.join('.'),
								},
								o
							)),
							(p = u[d]) ||
								(((p = u[d] = []).delegateCount = 0),
								(f.setup && !1 !== f.setup.call(t, r, h, a)) ||
									(t.addEventListener &&
										t.addEventListener(d, a))),
							f.add &&
								(f.add.call(t, c),
								c.handler.guid || (c.handler.guid = n.guid)),
							i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
							(ce.event.global[d] = !0));
			}
		},
		remove: function (e, t, n, r, i) {
			var o,
				a,
				s,
				u,
				l,
				c,
				f,
				p,
				d,
				h,
				g,
				v = _.hasData(e) && _.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || '').match(D) || ['']).length;
				while (l--)
					if (
						((d = g = (s = De.exec(t[l]) || [])[1]),
						(h = (s[2] || '').split('.').sort()),
						d)
					) {
						(f = ce.event.special[d] || {}),
							(p =
								u[
									(d = (r ? f.delegateType : f.bindType) || d)
								] || []),
							(s =
								s[2] &&
								new RegExp(
									'(^|\\.)' +
										h.join('\\.(?:.*\\.|)') +
										'(\\.|$)'
								)),
							(a = o = p.length);
						while (o--)
							(c = p[o]),
								(!i && g !== c.origType) ||
									(n && n.guid !== c.guid) ||
									(s && !s.test(c.namespace)) ||
									(r &&
										r !== c.selector &&
										('**' !== r || !c.selector)) ||
									(p.splice(o, 1),
									c.selector && p.delegateCount--,
									f.remove && f.remove.call(e, c));
						a &&
							!p.length &&
							((f.teardown &&
								!1 !== f.teardown.call(e, h, v.handle)) ||
								ce.removeEvent(e, d, v.handle),
							delete u[d]);
					} else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
				ce.isEmptyObject(u) && _.remove(e, 'handle events');
			}
		},
		dispatch: function (e) {
			var t,
				n,
				r,
				i,
				o,
				a,
				s = new Array(arguments.length),
				u = ce.event.fix(e),
				l =
					(_.get(this, 'events') || Object.create(null))[u.type] ||
					[],
				c = ce.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++)
				s[t] = arguments[t];
			if (
				((u.delegateTarget = this),
				!c.preDispatch || !1 !== c.preDispatch.call(this, u))
			) {
				(a = ce.event.handlers.call(this, u, l)), (t = 0);
				while ((i = a[t++]) && !u.isPropagationStopped()) {
					(u.currentTarget = i.elem), (n = 0);
					while (
						(o = i.handlers[n++]) &&
						!u.isImmediatePropagationStopped()
					)
						(u.rnamespace &&
							!1 !== o.namespace &&
							!u.rnamespace.test(o.namespace)) ||
							((u.handleObj = o),
							(u.data = o.data),
							void 0 !==
								(r = (
									(ce.event.special[o.origType] || {})
										.handle || o.handler
								).apply(i.elem, s)) &&
								!1 === (u.result = r) &&
								(u.preventDefault(), u.stopPropagation()));
				}
				return c.postDispatch && c.postDispatch.call(this, u), u.result;
			}
		},
		handlers: function (e, t) {
			var n,
				r,
				i,
				o,
				a,
				s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (
						1 === l.nodeType &&
						('click' !== e.type || !0 !== l.disabled)
					) {
						for (o = [], a = {}, n = 0; n < u; n++)
							void 0 === a[(i = (r = t[n]).selector + ' ')] &&
								(a[i] = r.needsContext
									? -1 < ce(i, this).index(l)
									: ce.find(i, this, null, [l]).length),
								a[i] && o.push(r);
						o.length && s.push({ elem: l, handlers: o });
					}
			return (
				(l = this),
				u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
				s
			);
		},
		addProp: function (t, e) {
			Object.defineProperty(ce.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: v(e)
					? function () {
							if (this.originalEvent)
								return e(this.originalEvent);
					  }
					: function () {
							if (this.originalEvent)
								return this.originalEvent[t];
					  },
				set: function (e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e,
					});
				},
			});
		},
		fix: function (e) {
			return e[ce.expando] ? e : new ce.Event(e);
		},
		special: {
			load: { noBubble: !0 },
			click: {
				setup: function (e) {
					var t = this || e;
					return (
						we.test(t.type) &&
							t.click &&
							fe(t, 'input') &&
							He(t, 'click', !0),
						!1
					);
				},
				trigger: function (e) {
					var t = this || e;
					return (
						we.test(t.type) &&
							t.click &&
							fe(t, 'input') &&
							He(t, 'click'),
						!0
					);
				},
				_default: function (e) {
					var t = e.target;
					return (
						(we.test(t.type) &&
							t.click &&
							fe(t, 'input') &&
							_.get(t, 'click')) ||
						fe(t, 'a')
					);
				},
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result &&
						e.originalEvent &&
						(e.originalEvent.returnValue = e.result);
				},
			},
		},
	}),
		(ce.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n);
		}),
		(ce.Event = function (e, t) {
			if (!(this instanceof ce.Event)) return new ce.Event(e, t);
			e && e.type
				? ((this.originalEvent = e),
				  (this.type = e.type),
				  (this.isDefaultPrevented =
						e.defaultPrevented ||
						(void 0 === e.defaultPrevented && !1 === e.returnValue)
							? Ne
							: qe),
				  (this.target =
						e.target && 3 === e.target.nodeType
							? e.target.parentNode
							: e.target),
				  (this.currentTarget = e.currentTarget),
				  (this.relatedTarget = e.relatedTarget))
				: (this.type = e),
				t && ce.extend(this, t),
				(this.timeStamp = (e && e.timeStamp) || Date.now()),
				(this[ce.expando] = !0);
		}),
		(ce.Event.prototype = {
			constructor: ce.Event,
			isDefaultPrevented: qe,
			isPropagationStopped: qe,
			isImmediatePropagationStopped: qe,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				(this.isDefaultPrevented = Ne),
					e && !this.isSimulated && e.preventDefault();
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				(this.isPropagationStopped = Ne),
					e && !this.isSimulated && e.stopPropagation();
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				(this.isImmediatePropagationStopped = Ne),
					e && !this.isSimulated && e.stopImmediatePropagation(),
					this.stopPropagation();
			},
		}),
		ce.each(
			{
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: !0,
			},
			ce.event.addProp
		),
		ce.each({ focus: 'focusin', blur: 'focusout' }, function (r, i) {
			function o(e) {
				if (C.documentMode) {
					var t = _.get(this, 'handle'),
						n = ce.event.fix(e);
					(n.type = 'focusin' === e.type ? 'focus' : 'blur'),
						(n.isSimulated = !0),
						t(e),
						n.target === n.currentTarget && t(n);
				} else ce.event.simulate(i, e.target, ce.event.fix(e));
			}
			(ce.event.special[r] = {
				setup: function () {
					var e;
					if ((He(this, r, !0), !C.documentMode)) return !1;
					(e = _.get(this, i)) || this.addEventListener(i, o),
						_.set(this, i, (e || 0) + 1);
				},
				trigger: function () {
					return He(this, r), !0;
				},
				teardown: function () {
					var e;
					if (!C.documentMode) return !1;
					(e = _.get(this, i) - 1)
						? _.set(this, i, e)
						: (this.removeEventListener(i, o), _.remove(this, i));
				},
				_default: function (e) {
					return _.get(e.target, r);
				},
				delegateType: i,
			}),
				(ce.event.special[i] = {
					setup: function () {
						var e = this.ownerDocument || this.document || this,
							t = C.documentMode ? this : e,
							n = _.get(t, i);
						n ||
							(C.documentMode
								? this.addEventListener(i, o)
								: e.addEventListener(r, o, !0)),
							_.set(t, i, (n || 0) + 1);
					},
					teardown: function () {
						var e = this.ownerDocument || this.document || this,
							t = C.documentMode ? this : e,
							n = _.get(t, i) - 1;
						n
							? _.set(t, i, n)
							: (C.documentMode
									? this.removeEventListener(i, o)
									: e.removeEventListener(r, o, !0),
							  _.remove(t, i));
					},
				});
		}),
		ce.each(
			{
				mouseenter: 'mouseover',
				mouseleave: 'mouseout',
				pointerenter: 'pointerover',
				pointerleave: 'pointerout',
			},
			function (e, i) {
				ce.event.special[e] = {
					delegateType: i,
					bindType: i,
					handle: function (e) {
						var t,
							n = e.relatedTarget,
							r = e.handleObj;
						return (
							(n && (n === this || ce.contains(this, n))) ||
								((e.type = r.origType),
								(t = r.handler.apply(this, arguments)),
								(e.type = i)),
							t
						);
					},
				};
			}
		),
		ce.fn.extend({
			on: function (e, t, n, r) {
				return Le(this, e, t, n, r);
			},
			one: function (e, t, n, r) {
				return Le(this, e, t, n, r, 1);
			},
			off: function (e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj)
					return (
						(r = e.handleObj),
						ce(e.delegateTarget).off(
							r.namespace
								? r.origType + '.' + r.namespace
								: r.origType,
							r.selector,
							r.handler
						),
						this
					);
				if ('object' == typeof e) {
					for (i in e) this.off(i, t, e[i]);
					return this;
				}
				return (
					(!1 !== t && 'function' != typeof t) ||
						((n = t), (t = void 0)),
					!1 === n && (n = qe),
					this.each(function () {
						ce.event.remove(this, e, n, t);
					})
				);
			},
		});
	var Oe = /<script|<style|<link/i,
		Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
	function Re(e, t) {
		return (
			(fe(e, 'table') &&
				fe(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
				ce(e).children('tbody')[0]) ||
			e
		);
	}
	function Ie(e) {
		return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
	}
	function We(e) {
		return (
			'true/' === (e.type || '').slice(0, 5)
				? (e.type = e.type.slice(5))
				: e.removeAttribute('type'),
			e
		);
	}
	function Fe(e, t) {
		var n, r, i, o, a, s;
		if (1 === t.nodeType) {
			if (_.hasData(e) && (s = _.get(e).events))
				for (i in (_.remove(t, 'handle events'), s))
					for (n = 0, r = s[i].length; n < r; n++)
						ce.event.add(t, i, s[i][n]);
			z.hasData(e) &&
				((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
		}
	}
	function $e(n, r, i, o) {
		r = g(r);
		var e,
			t,
			a,
			s,
			u,
			l,
			c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = v(d);
		if (
			h ||
			(1 < f && 'string' == typeof d && !le.checkClone && Pe.test(d))
		)
			return n.each(function (e) {
				var t = n.eq(e);
				h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
			});
		if (
			f &&
			((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
			1 === e.childNodes.length && (e = t),
			t || o)
		) {
			for (s = (a = ce.map(Se(e, 'script'), Ie)).length; c < f; c++)
				(u = e),
					c !== p &&
						((u = ce.clone(u, !0, !0)),
						s && ce.merge(a, Se(u, 'script'))),
					i.call(n[c], u, c);
			if (s)
				for (
					l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
					c < s;
					c++
				)
					(u = a[c]),
						Ce.test(u.type || '') &&
							!_.access(u, 'globalEval') &&
							ce.contains(l, u) &&
							(u.src && 'module' !== (u.type || '').toLowerCase()
								? ce._evalUrl &&
								  !u.noModule &&
								  ce._evalUrl(
										u.src,
										{
											nonce:
												u.nonce ||
												u.getAttribute('nonce'),
										},
										l
								  )
								: m(u.textContent.replace(Me, ''), u, l));
		}
		return n;
	}
	function Be(e, t, n) {
		for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
			n || 1 !== r.nodeType || ce.cleanData(Se(r)),
				r.parentNode &&
					(n && K(r) && Ee(Se(r, 'script')),
					r.parentNode.removeChild(r));
		return e;
	}
	ce.extend({
		htmlPrefilter: function (e) {
			return e;
		},
		clone: function (e, t, n) {
			var r,
				i,
				o,
				a,
				s,
				u,
				l,
				c = e.cloneNode(!0),
				f = K(e);
			if (
				!(
					le.noCloneChecked ||
					(1 !== e.nodeType && 11 !== e.nodeType) ||
					ce.isXMLDoc(e)
				)
			)
				for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
					(s = o[r]),
						(u = a[r]),
						void 0,
						'input' === (l = u.nodeName.toLowerCase()) &&
						we.test(s.type)
							? (u.checked = s.checked)
							: ('input' !== l && 'textarea' !== l) ||
							  (u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (
						o = o || Se(e), a = a || Se(c), r = 0, i = o.length;
						r < i;
						r++
					)
						Fe(o[r], a[r]);
				else Fe(e, c);
			return (
				0 < (a = Se(c, 'script')).length &&
					Ee(a, !f && Se(e, 'script')),
				c
			);
		},
		cleanData: function (e) {
			for (
				var t, n, r, i = ce.event.special, o = 0;
				void 0 !== (n = e[o]);
				o++
			)
				if ($(n)) {
					if ((t = n[_.expando])) {
						if (t.events)
							for (r in t.events)
								i[r]
									? ce.event.remove(n, r)
									: ce.removeEvent(n, r, t.handle);
						n[_.expando] = void 0;
					}
					n[z.expando] && (n[z.expando] = void 0);
				}
		},
	}),
		ce.fn.extend({
			detach: function (e) {
				return Be(this, e, !0);
			},
			remove: function (e) {
				return Be(this, e);
			},
			text: function (e) {
				return M(
					this,
					function (e) {
						return void 0 === e
							? ce.text(this)
							: this.empty().each(function () {
									(1 !== this.nodeType &&
										11 !== this.nodeType &&
										9 !== this.nodeType) ||
										(this.textContent = e);
							  });
					},
					null,
					e,
					arguments.length
				);
			},
			append: function () {
				return $e(this, arguments, function (e) {
					(1 !== this.nodeType &&
						11 !== this.nodeType &&
						9 !== this.nodeType) ||
						Re(this, e).appendChild(e);
				});
			},
			prepend: function () {
				return $e(this, arguments, function (e) {
					if (
						1 === this.nodeType ||
						11 === this.nodeType ||
						9 === this.nodeType
					) {
						var t = Re(this, e);
						t.insertBefore(e, t.firstChild);
					}
				});
			},
			before: function () {
				return $e(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this);
				});
			},
			after: function () {
				return $e(this, arguments, function (e) {
					this.parentNode &&
						this.parentNode.insertBefore(e, this.nextSibling);
				});
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++)
					1 === e.nodeType &&
						(ce.cleanData(Se(e, !1)), (e.textContent = ''));
				return this;
			},
			clone: function (e, t) {
				return (
					(e = null != e && e),
					(t = null == t ? e : t),
					this.map(function () {
						return ce.clone(this, e, t);
					})
				);
			},
			html: function (e) {
				return M(
					this,
					function (e) {
						var t = this[0] || {},
							n = 0,
							r = this.length;
						if (void 0 === e && 1 === t.nodeType)
							return t.innerHTML;
						if (
							'string' == typeof e &&
							!Oe.test(e) &&
							!ke[(Te.exec(e) || ['', ''])[1].toLowerCase()]
						) {
							e = ce.htmlPrefilter(e);
							try {
								for (; n < r; n++)
									1 === (t = this[n] || {}).nodeType &&
										(ce.cleanData(Se(t, !1)),
										(t.innerHTML = e));
								t = 0;
							} catch (e) {}
						}
						t && this.empty().append(e);
					},
					null,
					e,
					arguments.length
				);
			},
			replaceWith: function () {
				var n = [];
				return $e(
					this,
					arguments,
					function (e) {
						var t = this.parentNode;
						ce.inArray(this, n) < 0 &&
							(ce.cleanData(Se(this)),
							t && t.replaceChild(e, this));
					},
					n
				);
			},
		}),
		ce.each(
			{
				appendTo: 'append',
				prependTo: 'prepend',
				insertBefore: 'before',
				insertAfter: 'after',
				replaceAll: 'replaceWith',
			},
			function (e, a) {
				ce.fn[e] = function (e) {
					for (
						var t, n = [], r = ce(e), i = r.length - 1, o = 0;
						o <= i;
						o++
					)
						(t = o === i ? this : this.clone(!0)),
							ce(r[o])[a](t),
							s.apply(n, t.get());
					return this.pushStack(n);
				};
			}
		);
	var _e = new RegExp('^(' + G + ')(?!px)[a-z%]+$', 'i'),
		ze = /^--/,
		Xe = function (e) {
			var t = e.ownerDocument.defaultView;
			return (t && t.opener) || (t = ie), t.getComputedStyle(e);
		},
		Ue = function (e, t, n) {
			var r,
				i,
				o = {};
			for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
			for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
			return r;
		},
		Ve = new RegExp(Q.join('|'), 'i');
	function Ge(e, t, n) {
		var r,
			i,
			o,
			a,
			s = ze.test(t),
			u = e.style;
		return (
			(n = n || Xe(e)) &&
				((a = n.getPropertyValue(t) || n[t]),
				s && a && (a = a.replace(ve, '$1') || void 0),
				'' !== a || K(e) || (a = ce.style(e, t)),
				!le.pixelBoxStyles() &&
					_e.test(a) &&
					Ve.test(t) &&
					((r = u.width),
					(i = u.minWidth),
					(o = u.maxWidth),
					(u.minWidth = u.maxWidth = u.width = a),
					(a = n.width),
					(u.width = r),
					(u.minWidth = i),
					(u.maxWidth = o))),
			void 0 !== a ? a + '' : a
		);
	}
	function Ye(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get;
			},
		};
	}
	!(function () {
		function e() {
			if (l) {
				(u.style.cssText =
					'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
					(l.style.cssText =
						'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
					J.appendChild(u).appendChild(l);
				var e = ie.getComputedStyle(l);
				(n = '1%' !== e.top),
					(s = 12 === t(e.marginLeft)),
					(l.style.right = '60%'),
					(o = 36 === t(e.right)),
					(r = 36 === t(e.width)),
					(l.style.position = 'absolute'),
					(i = 12 === t(l.offsetWidth / 3)),
					J.removeChild(u),
					(l = null);
			}
		}
		function t(e) {
			return Math.round(parseFloat(e));
		}
		var n,
			r,
			i,
			o,
			a,
			s,
			u = C.createElement('div'),
			l = C.createElement('div');
		l.style &&
			((l.style.backgroundClip = 'content-box'),
			(l.cloneNode(!0).style.backgroundClip = ''),
			(le.clearCloneStyle = 'content-box' === l.style.backgroundClip),
			ce.extend(le, {
				boxSizingReliable: function () {
					return e(), r;
				},
				pixelBoxStyles: function () {
					return e(), o;
				},
				pixelPosition: function () {
					return e(), n;
				},
				reliableMarginLeft: function () {
					return e(), s;
				},
				scrollboxSize: function () {
					return e(), i;
				},
				reliableTrDimensions: function () {
					var e, t, n, r;
					return (
						null == a &&
							((e = C.createElement('table')),
							(t = C.createElement('tr')),
							(n = C.createElement('div')),
							(e.style.cssText =
								'position:absolute;left:-11111px;border-collapse:separate'),
							(t.style.cssText =
								'box-sizing:content-box;border:1px solid'),
							(t.style.height = '1px'),
							(n.style.height = '9px'),
							(n.style.display = 'block'),
							J.appendChild(e).appendChild(t).appendChild(n),
							(r = ie.getComputedStyle(t)),
							(a =
								parseInt(r.height, 10) +
									parseInt(r.borderTopWidth, 10) +
									parseInt(r.borderBottomWidth, 10) ===
								t.offsetHeight),
							J.removeChild(e)),
						a
					);
				},
			}));
	})();
	var Qe = ['Webkit', 'Moz', 'ms'],
		Je = C.createElement('div').style,
		Ke = {};
	function Ze(e) {
		var t = ce.cssProps[e] || Ke[e];
		return (
			t ||
			(e in Je
				? e
				: (Ke[e] =
						(function (e) {
							var t = e[0].toUpperCase() + e.slice(1),
								n = Qe.length;
							while (n--) if ((e = Qe[n] + t) in Je) return e;
						})(e) || e))
		);
	}
	var et = /^(none|table(?!-c[ea]).+)/,
		tt = { position: 'absolute', visibility: 'hidden', display: 'block' },
		nt = { letterSpacing: '0', fontWeight: '400' };
	function rt(e, t, n) {
		var r = Y.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
	}
	function it(e, t, n, r, i, o) {
		var a = 'width' === t ? 1 : 0,
			s = 0,
			u = 0,
			l = 0;
		if (n === (r ? 'border' : 'content')) return 0;
		for (; a < 4; a += 2)
			'margin' === n && (l += ce.css(e, n + Q[a], !0, i)),
				r
					? ('content' === n &&
							(u -= ce.css(e, 'padding' + Q[a], !0, i)),
					  'margin' !== n &&
							(u -= ce.css(e, 'border' + Q[a] + 'Width', !0, i)))
					: ((u += ce.css(e, 'padding' + Q[a], !0, i)),
					  'padding' !== n
							? (u += ce.css(e, 'border' + Q[a] + 'Width', !0, i))
							: (s += ce.css(
									e,
									'border' + Q[a] + 'Width',
									!0,
									i
							  )));
		return (
			!r &&
				0 <= o &&
				(u +=
					Math.max(
						0,
						Math.ceil(
							e['offset' + t[0].toUpperCase() + t.slice(1)] -
								o -
								u -
								s -
								0.5
						)
					) || 0),
			u + l
		);
	}
	function ot(e, t, n) {
		var r = Xe(e),
			i =
				(!le.boxSizingReliable() || n) &&
				'border-box' === ce.css(e, 'boxSizing', !1, r),
			o = i,
			a = Ge(e, t, r),
			s = 'offset' + t[0].toUpperCase() + t.slice(1);
		if (_e.test(a)) {
			if (!n) return a;
			a = 'auto';
		}
		return (
			((!le.boxSizingReliable() && i) ||
				(!le.reliableTrDimensions() && fe(e, 'tr')) ||
				'auto' === a ||
				(!parseFloat(a) && 'inline' === ce.css(e, 'display', !1, r))) &&
				e.getClientRects().length &&
				((i = 'border-box' === ce.css(e, 'boxSizing', !1, r)),
				(o = s in e) && (a = e[s])),
			(a = parseFloat(a) || 0) +
				it(e, t, n || (i ? 'border' : 'content'), o, r, a) +
				'px'
		);
	}
	function at(e, t, n, r, i) {
		return new at.prototype.init(e, t, n, r, i);
	}
	ce.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Ge(e, 'opacity');
						return '' === n ? '1' : n;
					}
				},
			},
		},
		cssNumber: {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageSlice: !0,
			columnCount: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			scale: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
		},
		cssProps: {},
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i,
					o,
					a,
					s = F(t),
					u = ze.test(t),
					l = e.style;
				if (
					(u || (t = Ze(s)),
					(a = ce.cssHooks[t] || ce.cssHooks[s]),
					void 0 === n)
				)
					return a && 'get' in a && void 0 !== (i = a.get(e, !1, r))
						? i
						: l[t];
				'string' === (o = typeof n) &&
					(i = Y.exec(n)) &&
					i[1] &&
					((n = te(e, t, i)), (o = 'number')),
					null != n &&
						n == n &&
						('number' !== o ||
							u ||
							(n += (i && i[3]) || (ce.cssNumber[s] ? '' : 'px')),
						le.clearCloneStyle ||
							'' !== n ||
							0 !== t.indexOf('background') ||
							(l[t] = 'inherit'),
						(a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
							(u ? l.setProperty(t, n) : (l[t] = n)));
			}
		},
		css: function (e, t, n, r) {
			var i,
				o,
				a,
				s = F(t);
			return (
				ze.test(t) || (t = Ze(s)),
				(a = ce.cssHooks[t] || ce.cssHooks[s]) &&
					'get' in a &&
					(i = a.get(e, !0, n)),
				void 0 === i && (i = Ge(e, t, r)),
				'normal' === i && t in nt && (i = nt[t]),
				'' === n || n
					? ((o = parseFloat(i)),
					  !0 === n || isFinite(o) ? o || 0 : i)
					: i
			);
		},
	}),
		ce.each(['height', 'width'], function (e, u) {
			ce.cssHooks[u] = {
				get: function (e, t, n) {
					if (t)
						return !et.test(ce.css(e, 'display')) ||
							(e.getClientRects().length &&
								e.getBoundingClientRect().width)
							? ot(e, u, n)
							: Ue(e, tt, function () {
									return ot(e, u, n);
							  });
				},
				set: function (e, t, n) {
					var r,
						i = Xe(e),
						o = !le.scrollboxSize() && 'absolute' === i.position,
						a =
							(o || n) &&
							'border-box' === ce.css(e, 'boxSizing', !1, i),
						s = n ? it(e, u, n, a, i) : 0;
					return (
						a &&
							o &&
							(s -= Math.ceil(
								e['offset' + u[0].toUpperCase() + u.slice(1)] -
									parseFloat(i[u]) -
									it(e, u, 'border', !1, i) -
									0.5
							)),
						s &&
							(r = Y.exec(t)) &&
							'px' !== (r[3] || 'px') &&
							((e.style[u] = t), (t = ce.css(e, u))),
						rt(0, t, s)
					);
				},
			};
		}),
		(ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
			if (t)
				return (
					(parseFloat(Ge(e, 'marginLeft')) ||
						e.getBoundingClientRect().left -
							Ue(e, { marginLeft: 0 }, function () {
								return e.getBoundingClientRect().left;
							})) + 'px'
				);
		})),
		ce.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
			(ce.cssHooks[i + o] = {
				expand: function (e) {
					for (
						var t = 0,
							n = {},
							r = 'string' == typeof e ? e.split(' ') : [e];
						t < 4;
						t++
					)
						n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
					return n;
				},
			}),
				'margin' !== i && (ce.cssHooks[i + o].set = rt);
		}),
		ce.fn.extend({
			css: function (e, t) {
				return M(
					this,
					function (e, t, n) {
						var r,
							i,
							o = {},
							a = 0;
						if (Array.isArray(t)) {
							for (r = Xe(e), i = t.length; a < i; a++)
								o[t[a]] = ce.css(e, t[a], !1, r);
							return o;
						}
						return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
					},
					e,
					t,
					1 < arguments.length
				);
			},
		}),
		(((ce.Tween = at).prototype = {
			constructor: at,
			init: function (e, t, n, r, i, o) {
				(this.elem = e),
					(this.prop = n),
					(this.easing = i || ce.easing._default),
					(this.options = t),
					(this.start = this.now = this.cur()),
					(this.end = r),
					(this.unit = o || (ce.cssNumber[n] ? '' : 'px'));
			},
			cur: function () {
				var e = at.propHooks[this.prop];
				return e && e.get
					? e.get(this)
					: at.propHooks._default.get(this);
			},
			run: function (e) {
				var t,
					n = at.propHooks[this.prop];
				return (
					this.options.duration
						? (this.pos = t =
								ce.easing[this.easing](
									e,
									this.options.duration * e,
									0,
									1,
									this.options.duration
								))
						: (this.pos = t = e),
					(this.now = (this.end - this.start) * t + this.start),
					this.options.step &&
						this.options.step.call(this.elem, this.now, this),
					n && n.set ? n.set(this) : at.propHooks._default.set(this),
					this
				);
			},
		}).init.prototype = at.prototype),
		((at.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType ||
						(null != e.elem[e.prop] && null == e.elem.style[e.prop])
						? e.elem[e.prop]
						: (t = ce.css(e.elem, e.prop, '')) && 'auto' !== t
						? t
						: 0;
				},
				set: function (e) {
					ce.fx.step[e.prop]
						? ce.fx.step[e.prop](e)
						: 1 !== e.elem.nodeType ||
						  (!ce.cssHooks[e.prop] &&
								null == e.elem.style[Ze(e.prop)])
						? (e.elem[e.prop] = e.now)
						: ce.style(e.elem, e.prop, e.now + e.unit);
				},
			},
		}).scrollTop = at.propHooks.scrollLeft =
			{
				set: function (e) {
					e.elem.nodeType &&
						e.elem.parentNode &&
						(e.elem[e.prop] = e.now);
				},
			}),
		(ce.easing = {
			linear: function (e) {
				return e;
			},
			swing: function (e) {
				return 0.5 - Math.cos(e * Math.PI) / 2;
			},
			_default: 'swing',
		}),
		(ce.fx = at.prototype.init),
		(ce.fx.step = {});
	var st,
		ut,
		lt,
		ct,
		ft = /^(?:toggle|show|hide)$/,
		pt = /queueHooks$/;
	function dt() {
		ut &&
			(!1 === C.hidden && ie.requestAnimationFrame
				? ie.requestAnimationFrame(dt)
				: ie.setTimeout(dt, ce.fx.interval),
			ce.fx.tick());
	}
	function ht() {
		return (
			ie.setTimeout(function () {
				st = void 0;
			}),
			(st = Date.now())
		);
	}
	function gt(e, t) {
		var n,
			r = 0,
			i = { height: e };
		for (t = t ? 1 : 0; r < 4; r += 2 - t)
			i['margin' + (n = Q[r])] = i['padding' + n] = e;
		return t && (i.opacity = i.width = e), i;
	}
	function vt(e, t, n) {
		for (
			var r,
				i = (yt.tweeners[t] || []).concat(yt.tweeners['*']),
				o = 0,
				a = i.length;
			o < a;
			o++
		)
			if ((r = i[o].call(n, t, e))) return r;
	}
	function yt(o, e, t) {
		var n,
			a,
			r = 0,
			i = yt.prefilters.length,
			s = ce.Deferred().always(function () {
				delete u.elem;
			}),
			u = function () {
				if (a) return !1;
				for (
					var e = st || ht(),
						t = Math.max(0, l.startTime + l.duration - e),
						n = 1 - (t / l.duration || 0),
						r = 0,
						i = l.tweens.length;
					r < i;
					r++
				)
					l.tweens[r].run(n);
				return (
					s.notifyWith(o, [l, n, t]),
					n < 1 && i
						? t
						: (i || s.notifyWith(o, [l, 1, 0]),
						  s.resolveWith(o, [l]),
						  !1)
				);
			},
			l = s.promise({
				elem: o,
				props: ce.extend({}, e),
				opts: ce.extend(
					!0,
					{ specialEasing: {}, easing: ce.easing._default },
					t
				),
				originalProperties: e,
				originalOptions: t,
				startTime: st || ht(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var n = ce.Tween(
						o,
						l.opts,
						e,
						t,
						l.opts.specialEasing[e] || l.opts.easing
					);
					return l.tweens.push(n), n;
				},
				stop: function (e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return (
						e
							? (s.notifyWith(o, [l, 1, 0]),
							  s.resolveWith(o, [l, e]))
							: s.rejectWith(o, [l, e]),
						this
					);
				},
			}),
			c = l.props;
		for (
			!(function (e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (
						((i = t[(r = F(n))]),
						(o = e[n]),
						Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
						n !== r && ((e[r] = o), delete e[n]),
						(a = ce.cssHooks[r]) && ('expand' in a))
					)
						for (n in ((o = a.expand(o)), delete e[r], o))
							(n in e) || ((e[n] = o[n]), (t[n] = i));
					else t[r] = i;
			})(c, l.opts.specialEasing);
			r < i;
			r++
		)
			if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
				return (
					v(n.stop) &&
						(ce._queueHooks(l.elem, l.opts.queue).stop =
							n.stop.bind(n)),
					n
				);
		return (
			ce.map(c, vt, l),
			v(l.opts.start) && l.opts.start.call(o, l),
			l
				.progress(l.opts.progress)
				.done(l.opts.done, l.opts.complete)
				.fail(l.opts.fail)
				.always(l.opts.always),
			ce.fx.timer(
				ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })
			),
			l
		);
	}
	(ce.Animation = ce.extend(yt, {
		tweeners: {
			'*': [
				function (e, t) {
					var n = this.createTween(e, t);
					return te(n.elem, e, Y.exec(t), n), n;
				},
			],
		},
		tweener: function (e, t) {
			v(e) ? ((t = e), (e = ['*'])) : (e = e.match(D));
			for (var n, r = 0, i = e.length; r < i; r++)
				(n = e[r]),
					(yt.tweeners[n] = yt.tweeners[n] || []),
					yt.tweeners[n].unshift(t);
		},
		prefilters: [
			function (e, t, n) {
				var r,
					i,
					o,
					a,
					s,
					u,
					l,
					c,
					f = 'width' in t || 'height' in t,
					p = this,
					d = {},
					h = e.style,
					g = e.nodeType && ee(e),
					v = _.get(e, 'fxshow');
				for (r in (n.queue ||
					(null == (a = ce._queueHooks(e, 'fx')).unqueued &&
						((a.unqueued = 0),
						(s = a.empty.fire),
						(a.empty.fire = function () {
							a.unqueued || s();
						})),
					a.unqueued++,
					p.always(function () {
						p.always(function () {
							a.unqueued--,
								ce.queue(e, 'fx').length || a.empty.fire();
						});
					})),
				t))
					if (((i = t[r]), ft.test(i))) {
						if (
							(delete t[r],
							(o = o || 'toggle' === i),
							i === (g ? 'hide' : 'show'))
						) {
							if ('show' !== i || !v || void 0 === v[r]) continue;
							g = !0;
						}
						d[r] = (v && v[r]) || ce.style(e, r);
					}
				if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
					for (r in (f &&
						1 === e.nodeType &&
						((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
						null == (l = v && v.display) &&
							(l = _.get(e, 'display')),
						'none' === (c = ce.css(e, 'display')) &&
							(l
								? (c = l)
								: (re([e], !0),
								  (l = e.style.display || l),
								  (c = ce.css(e, 'display')),
								  re([e]))),
						('inline' === c ||
							('inline-block' === c && null != l)) &&
							'none' === ce.css(e, 'float') &&
							(u ||
								(p.done(function () {
									h.display = l;
								}),
								null == l &&
									((c = h.display),
									(l = 'none' === c ? '' : c))),
							(h.display = 'inline-block'))),
					n.overflow &&
						((h.overflow = 'hidden'),
						p.always(function () {
							(h.overflow = n.overflow[0]),
								(h.overflowX = n.overflow[1]),
								(h.overflowY = n.overflow[2]);
						})),
					(u = !1),
					d))
						u ||
							(v
								? 'hidden' in v && (g = v.hidden)
								: (v = _.access(e, 'fxshow', { display: l })),
							o && (v.hidden = !g),
							g && re([e], !0),
							p.done(function () {
								for (r in (g || re([e]),
								_.remove(e, 'fxshow'),
								d))
									ce.style(e, r, d[r]);
							})),
							(u = vt(g ? v[r] : 0, r, p)),
							r in v ||
								((v[r] = u.start),
								g && ((u.end = u.start), (u.start = 0)));
			},
		],
		prefilter: function (e, t) {
			t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
		},
	})),
		(ce.speed = function (e, t, n) {
			var r =
				e && 'object' == typeof e
					? ce.extend({}, e)
					: {
							complete: n || (!n && t) || (v(e) && e),
							duration: e,
							easing: (n && t) || (t && !v(t) && t),
					  };
			return (
				ce.fx.off
					? (r.duration = 0)
					: 'number' != typeof r.duration &&
					  (r.duration in ce.fx.speeds
							? (r.duration = ce.fx.speeds[r.duration])
							: (r.duration = ce.fx.speeds._default)),
				(null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
				(r.old = r.complete),
				(r.complete = function () {
					v(r.old) && r.old.call(this),
						r.queue && ce.dequeue(this, r.queue);
				}),
				r
			);
		}),
		ce.fn.extend({
			fadeTo: function (e, t, n, r) {
				return this.filter(ee)
					.css('opacity', 0)
					.show()
					.end()
					.animate({ opacity: t }, e, n, r);
			},
			animate: function (t, e, n, r) {
				var i = ce.isEmptyObject(t),
					o = ce.speed(e, n, r),
					a = function () {
						var e = yt(this, ce.extend({}, t), o);
						(i || _.get(this, 'finish')) && e.stop(!0);
					};
				return (
					(a.finish = a),
					i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
				);
			},
			stop: function (i, e, o) {
				var a = function (e) {
					var t = e.stop;
					delete e.stop, t(o);
				};
				return (
					'string' != typeof i && ((o = e), (e = i), (i = void 0)),
					e && this.queue(i || 'fx', []),
					this.each(function () {
						var e = !0,
							t = null != i && i + 'queueHooks',
							n = ce.timers,
							r = _.get(this);
						if (t) r[t] && r[t].stop && a(r[t]);
						else
							for (t in r)
								r[t] && r[t].stop && pt.test(t) && a(r[t]);
						for (t = n.length; t--; )
							n[t].elem !== this ||
								(null != i && n[t].queue !== i) ||
								(n[t].anim.stop(o), (e = !1), n.splice(t, 1));
						(!e && o) || ce.dequeue(this, i);
					})
				);
			},
			finish: function (a) {
				return (
					!1 !== a && (a = a || 'fx'),
					this.each(function () {
						var e,
							t = _.get(this),
							n = t[a + 'queue'],
							r = t[a + 'queueHooks'],
							i = ce.timers,
							o = n ? n.length : 0;
						for (
							t.finish = !0,
								ce.queue(this, a, []),
								r && r.stop && r.stop.call(this, !0),
								e = i.length;
							e--;

						)
							i[e].elem === this &&
								i[e].queue === a &&
								(i[e].anim.stop(!0), i.splice(e, 1));
						for (e = 0; e < o; e++)
							n[e] && n[e].finish && n[e].finish.call(this);
						delete t.finish;
					})
				);
			},
		}),
		ce.each(['toggle', 'show', 'hide'], function (e, r) {
			var i = ce.fn[r];
			ce.fn[r] = function (e, t, n) {
				return null == e || 'boolean' == typeof e
					? i.apply(this, arguments)
					: this.animate(gt(r, !0), e, t, n);
			};
		}),
		ce.each(
			{
				slideDown: gt('show'),
				slideUp: gt('hide'),
				slideToggle: gt('toggle'),
				fadeIn: { opacity: 'show' },
				fadeOut: { opacity: 'hide' },
				fadeToggle: { opacity: 'toggle' },
			},
			function (e, r) {
				ce.fn[e] = function (e, t, n) {
					return this.animate(r, e, t, n);
				};
			}
		),
		(ce.timers = []),
		(ce.fx.tick = function () {
			var e,
				t = 0,
				n = ce.timers;
			for (st = Date.now(); t < n.length; t++)
				(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || ce.fx.stop(), (st = void 0);
		}),
		(ce.fx.timer = function (e) {
			ce.timers.push(e), ce.fx.start();
		}),
		(ce.fx.interval = 13),
		(ce.fx.start = function () {
			ut || ((ut = !0), dt());
		}),
		(ce.fx.stop = function () {
			ut = null;
		}),
		(ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
		(ce.fn.delay = function (r, e) {
			return (
				(r = (ce.fx && ce.fx.speeds[r]) || r),
				(e = e || 'fx'),
				this.queue(e, function (e, t) {
					var n = ie.setTimeout(e, r);
					t.stop = function () {
						ie.clearTimeout(n);
					};
				})
			);
		}),
		(lt = C.createElement('input')),
		(ct = C.createElement('select').appendChild(C.createElement('option'))),
		(lt.type = 'checkbox'),
		(le.checkOn = '' !== lt.value),
		(le.optSelected = ct.selected),
		((lt = C.createElement('input')).value = 't'),
		(lt.type = 'radio'),
		(le.radioValue = 't' === lt.value);
	var mt,
		xt = ce.expr.attrHandle;
	ce.fn.extend({
		attr: function (e, t) {
			return M(this, ce.attr, e, t, 1 < arguments.length);
		},
		removeAttr: function (e) {
			return this.each(function () {
				ce.removeAttr(this, e);
			});
		},
	}),
		ce.extend({
			attr: function (e, t, n) {
				var r,
					i,
					o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return 'undefined' == typeof e.getAttribute
						? ce.prop(e, t, n)
						: ((1 === o && ce.isXMLDoc(e)) ||
								(i =
									ce.attrHooks[t.toLowerCase()] ||
									(ce.expr.match.bool.test(t) ? mt : void 0)),
						  void 0 !== n
								? null === n
									? void ce.removeAttr(e, t)
									: i &&
									  'set' in i &&
									  void 0 !== (r = i.set(e, n, t))
									? r
									: (e.setAttribute(t, n + ''), n)
								: i && 'get' in i && null !== (r = i.get(e, t))
								? r
								: null == (r = ce.find.attr(e, t))
								? void 0
								: r);
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!le.radioValue && 'radio' === t && fe(e, 'input')) {
							var n = e.value;
							return (
								e.setAttribute('type', t), n && (e.value = n), t
							);
						}
					},
				},
			},
			removeAttr: function (e, t) {
				var n,
					r = 0,
					i = t && t.match(D);
				if (i && 1 === e.nodeType)
					while ((n = i[r++])) e.removeAttribute(n);
			},
		}),
		(mt = {
			set: function (e, t, n) {
				return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
			},
		}),
		ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var a = xt[t] || ce.find.attr;
			xt[t] = function (e, t, n) {
				var r,
					i,
					o = t.toLowerCase();
				return (
					n ||
						((i = xt[o]),
						(xt[o] = r),
						(r = null != a(e, t, n) ? o : null),
						(xt[o] = i)),
					r
				);
			};
		});
	var bt = /^(?:input|select|textarea|button)$/i,
		wt = /^(?:a|area)$/i;
	function Tt(e) {
		return (e.match(D) || []).join(' ');
	}
	function Ct(e) {
		return (e.getAttribute && e.getAttribute('class')) || '';
	}
	function kt(e) {
		return Array.isArray(e)
			? e
			: ('string' == typeof e && e.match(D)) || [];
	}
	ce.fn.extend({
		prop: function (e, t) {
			return M(this, ce.prop, e, t, 1 < arguments.length);
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[ce.propFix[e] || e];
			});
		},
	}),
		ce.extend({
			prop: function (e, t, n) {
				var r,
					i,
					o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return (
						(1 === o && ce.isXMLDoc(e)) ||
							((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
						void 0 !== n
							? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
								? r
								: (e[t] = n)
							: i && 'get' in i && null !== (r = i.get(e, t))
							? r
							: e[t]
					);
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = ce.find.attr(e, 'tabindex');
						return t
							? parseInt(t, 10)
							: bt.test(e.nodeName) ||
							  (wt.test(e.nodeName) && e.href)
							? 0
							: -1;
					},
				},
			},
			propFix: { for: 'htmlFor', class: 'className' },
		}),
		le.optSelected ||
			(ce.propHooks.selected = {
				get: function (e) {
					var t = e.parentNode;
					return (
						t && t.parentNode && t.parentNode.selectedIndex, null
					);
				},
				set: function (e) {
					var t = e.parentNode;
					t &&
						(t.selectedIndex,
						t.parentNode && t.parentNode.selectedIndex);
				},
			}),
		ce.each(
			[
				'tabIndex',
				'readOnly',
				'maxLength',
				'cellSpacing',
				'cellPadding',
				'rowSpan',
				'colSpan',
				'useMap',
				'frameBorder',
				'contentEditable',
			],
			function () {
				ce.propFix[this.toLowerCase()] = this;
			}
		),
		ce.fn.extend({
			addClass: function (t) {
				var e, n, r, i, o, a;
				return v(t)
					? this.each(function (e) {
							ce(this).addClass(t.call(this, e, Ct(this)));
					  })
					: (e = kt(t)).length
					? this.each(function () {
							if (
								((r = Ct(this)),
								(n = 1 === this.nodeType && ' ' + Tt(r) + ' '))
							) {
								for (o = 0; o < e.length; o++)
									(i = e[o]),
										n.indexOf(' ' + i + ' ') < 0 &&
											(n += i + ' ');
								(a = Tt(n)),
									r !== a && this.setAttribute('class', a);
							}
					  })
					: this;
			},
			removeClass: function (t) {
				var e, n, r, i, o, a;
				return v(t)
					? this.each(function (e) {
							ce(this).removeClass(t.call(this, e, Ct(this)));
					  })
					: arguments.length
					? (e = kt(t)).length
						? this.each(function () {
								if (
									((r = Ct(this)),
									(n =
										1 === this.nodeType &&
										' ' + Tt(r) + ' '))
								) {
									for (o = 0; o < e.length; o++) {
										i = e[o];
										while (-1 < n.indexOf(' ' + i + ' '))
											n = n.replace(' ' + i + ' ', ' ');
									}
									(a = Tt(n)),
										r !== a &&
											this.setAttribute('class', a);
								}
						  })
						: this
					: this.attr('class', '');
			},
			toggleClass: function (t, n) {
				var e,
					r,
					i,
					o,
					a = typeof t,
					s = 'string' === a || Array.isArray(t);
				return v(t)
					? this.each(function (e) {
							ce(this).toggleClass(
								t.call(this, e, Ct(this), n),
								n
							);
					  })
					: 'boolean' == typeof n && s
					? n
						? this.addClass(t)
						: this.removeClass(t)
					: ((e = kt(t)),
					  this.each(function () {
							if (s)
								for (o = ce(this), i = 0; i < e.length; i++)
									(r = e[i]),
										o.hasClass(r)
											? o.removeClass(r)
											: o.addClass(r);
							else
								(void 0 !== t && 'boolean' !== a) ||
									((r = Ct(this)) &&
										_.set(this, '__className__', r),
									this.setAttribute &&
										this.setAttribute(
											'class',
											r || !1 === t
												? ''
												: _.get(
														this,
														'__className__'
												  ) || ''
										));
					  }));
			},
			hasClass: function (e) {
				var t,
					n,
					r = 0;
				t = ' ' + e + ' ';
				while ((n = this[r++]))
					if (
						1 === n.nodeType &&
						-1 < (' ' + Tt(Ct(n)) + ' ').indexOf(t)
					)
						return !0;
				return !1;
			},
		});
	var St = /\r/g;
	ce.fn.extend({
		val: function (n) {
			var r,
				e,
				i,
				t = this[0];
			return arguments.length
				? ((i = v(n)),
				  this.each(function (e) {
						var t;
						1 === this.nodeType &&
							(null ==
							(t = i ? n.call(this, e, ce(this).val()) : n)
								? (t = '')
								: 'number' == typeof t
								? (t += '')
								: Array.isArray(t) &&
								  (t = ce.map(t, function (e) {
										return null == e ? '' : e + '';
								  })),
							((r =
								ce.valHooks[this.type] ||
								ce.valHooks[this.nodeName.toLowerCase()]) &&
								'set' in r &&
								void 0 !== r.set(this, t, 'value')) ||
								(this.value = t));
				  }))
				: t
				? (r =
						ce.valHooks[t.type] ||
						ce.valHooks[t.nodeName.toLowerCase()]) &&
				  'get' in r &&
				  void 0 !== (e = r.get(t, 'value'))
					? e
					: 'string' == typeof (e = t.value)
					? e.replace(St, '')
					: null == e
					? ''
					: e
				: void 0;
		},
	}),
		ce.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = ce.find.attr(e, 'value');
						return null != t ? t : Tt(ce.text(e));
					},
				},
				select: {
					get: function (e) {
						var t,
							n,
							r,
							i = e.options,
							o = e.selectedIndex,
							a = 'select-one' === e.type,
							s = a ? null : [],
							u = a ? o + 1 : i.length;
						for (r = o < 0 ? u : a ? o : 0; r < u; r++)
							if (
								((n = i[r]).selected || r === o) &&
								!n.disabled &&
								(!n.parentNode.disabled ||
									!fe(n.parentNode, 'optgroup'))
							) {
								if (((t = ce(n).val()), a)) return t;
								s.push(t);
							}
						return s;
					},
					set: function (e, t) {
						var n,
							r,
							i = e.options,
							o = ce.makeArray(t),
							a = i.length;
						while (a--)
							((r = i[a]).selected =
								-1 <
								ce.inArray(ce.valHooks.option.get(r), o)) &&
								(n = !0);
						return n || (e.selectedIndex = -1), o;
					},
				},
			},
		}),
		ce.each(['radio', 'checkbox'], function () {
			(ce.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t))
						return (e.checked = -1 < ce.inArray(ce(e).val(), t));
				},
			}),
				le.checkOn ||
					(ce.valHooks[this].get = function (e) {
						return null === e.getAttribute('value')
							? 'on'
							: e.value;
					});
		});
	var Et = ie.location,
		jt = { guid: Date.now() },
		At = /\?/;
	ce.parseXML = function (e) {
		var t, n;
		if (!e || 'string' != typeof e) return null;
		try {
			t = new ie.DOMParser().parseFromString(e, 'text/xml');
		} catch (e) {}
		return (
			(n = t && t.getElementsByTagName('parsererror')[0]),
			(t && !n) ||
				ce.error(
					'Invalid XML: ' +
						(n
							? ce
									.map(n.childNodes, function (e) {
										return e.textContent;
									})
									.join('\n')
							: e)
				),
			t
		);
	};
	var Dt = /^(?:focusinfocus|focusoutblur)$/,
		Nt = function (e) {
			e.stopPropagation();
		};
	ce.extend(ce.event, {
		trigger: function (e, t, n, r) {
			var i,
				o,
				a,
				s,
				u,
				l,
				c,
				f,
				p = [n || C],
				d = ue.call(e, 'type') ? e.type : e,
				h = ue.call(e, 'namespace') ? e.namespace.split('.') : [];
			if (
				((o = f = a = n = n || C),
				3 !== n.nodeType &&
					8 !== n.nodeType &&
					!Dt.test(d + ce.event.triggered) &&
					(-1 < d.indexOf('.') &&
						((d = (h = d.split('.')).shift()), h.sort()),
					(u = d.indexOf(':') < 0 && 'on' + d),
					((e = e[ce.expando]
						? e
						: new ce.Event(
								d,
								'object' == typeof e && e
						  )).isTrigger = r ? 2 : 3),
					(e.namespace = h.join('.')),
					(e.rnamespace = e.namespace
						? new RegExp(
								'(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
						  )
						: null),
					(e.result = void 0),
					e.target || (e.target = n),
					(t = null == t ? [e] : ce.makeArray(t, [e])),
					(c = ce.event.special[d] || {}),
					r || !c.trigger || !1 !== c.trigger.apply(n, t)))
			) {
				if (!r && !c.noBubble && !y(n)) {
					for (
						s = c.delegateType || d,
							Dt.test(s + d) || (o = o.parentNode);
						o;
						o = o.parentNode
					)
						p.push(o), (a = o);
					a === (n.ownerDocument || C) &&
						p.push(a.defaultView || a.parentWindow || ie);
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped())
					(f = o),
						(e.type = 1 < i ? s : c.bindType || d),
						(l =
							(_.get(o, 'events') || Object.create(null))[
								e.type
							] && _.get(o, 'handle')) && l.apply(o, t),
						(l = u && o[u]) &&
							l.apply &&
							$(o) &&
							((e.result = l.apply(o, t)),
							!1 === e.result && e.preventDefault());
				return (
					(e.type = d),
					r ||
						e.isDefaultPrevented() ||
						(c._default && !1 !== c._default.apply(p.pop(), t)) ||
						!$(n) ||
						(u &&
							v(n[d]) &&
							!y(n) &&
							((a = n[u]) && (n[u] = null),
							(ce.event.triggered = d),
							e.isPropagationStopped() &&
								f.addEventListener(d, Nt),
							n[d](),
							e.isPropagationStopped() &&
								f.removeEventListener(d, Nt),
							(ce.event.triggered = void 0),
							a && (n[u] = a))),
					e.result
				);
			}
		},
		simulate: function (e, t, n) {
			var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
			ce.event.trigger(r, null, t);
		},
	}),
		ce.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					ce.event.trigger(e, t, this);
				});
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return ce.event.trigger(e, t, n, !0);
			},
		});
	var qt = /\[\]$/,
		Lt = /\r?\n/g,
		Ht = /^(?:submit|button|image|reset|file)$/i,
		Ot = /^(?:input|select|textarea|keygen)/i;
	function Pt(n, e, r, i) {
		var t;
		if (Array.isArray(e))
			ce.each(e, function (e, t) {
				r || qt.test(n)
					? i(n, t)
					: Pt(
							n +
								'[' +
								('object' == typeof t && null != t ? e : '') +
								']',
							t,
							r,
							i
					  );
			});
		else if (r || 'object' !== x(e)) i(n, e);
		else for (t in e) Pt(n + '[' + t + ']', e[t], r, i);
	}
	(ce.param = function (e, t) {
		var n,
			r = [],
			i = function (e, t) {
				var n = v(t) ? t() : t;
				r[r.length] =
					encodeURIComponent(e) +
					'=' +
					encodeURIComponent(null == n ? '' : n);
			};
		if (null == e) return '';
		if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
			ce.each(e, function () {
				i(this.name, this.value);
			});
		else for (n in e) Pt(n, e[n], t, i);
		return r.join('&');
	}),
		ce.fn.extend({
			serialize: function () {
				return ce.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					var e = ce.prop(this, 'elements');
					return e ? ce.makeArray(e) : this;
				})
					.filter(function () {
						var e = this.type;
						return (
							this.name &&
							!ce(this).is(':disabled') &&
							Ot.test(this.nodeName) &&
							!Ht.test(e) &&
							(this.checked || !we.test(e))
						);
					})
					.map(function (e, t) {
						var n = ce(this).val();
						return null == n
							? null
							: Array.isArray(n)
							? ce.map(n, function (e) {
									return {
										name: t.name,
										value: e.replace(Lt, '\r\n'),
									};
							  })
							: { name: t.name, value: n.replace(Lt, '\r\n') };
					})
					.get();
			},
		});
	var Mt = /%20/g,
		Rt = /#.*$/,
		It = /([?&])_=[^&]*/,
		Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ft = /^(?:GET|HEAD)$/,
		$t = /^\/\//,
		Bt = {},
		_t = {},
		zt = '*/'.concat('*'),
		Xt = C.createElement('a');
	function Ut(o) {
		return function (e, t) {
			'string' != typeof e && ((t = e), (e = '*'));
			var n,
				r = 0,
				i = e.toLowerCase().match(D) || [];
			if (v(t))
				while ((n = i[r++]))
					'+' === n[0]
						? ((n = n.slice(1) || '*'),
						  (o[n] = o[n] || []).unshift(t))
						: (o[n] = o[n] || []).push(t);
		};
	}
	function Vt(t, i, o, a) {
		var s = {},
			u = t === _t;
		function l(e) {
			var r;
			return (
				(s[e] = !0),
				ce.each(t[e] || [], function (e, t) {
					var n = t(i, o, a);
					return 'string' != typeof n || u || s[n]
						? u
							? !(r = n)
							: void 0
						: (i.dataTypes.unshift(n), l(n), !1);
				}),
				r
			);
		}
		return l(i.dataTypes[0]) || (!s['*'] && l('*'));
	}
	function Gt(e, t) {
		var n,
			r,
			i = ce.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && ce.extend(!0, e, r), e;
	}
	(Xt.href = Et.href),
		ce.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Et.href,
				type: 'GET',
				isLocal:
					/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
						Et.protocol
					),
				global: !0,
				processData: !0,
				async: !0,
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				accepts: {
					'*': zt,
					text: 'text/plain',
					html: 'text/html',
					xml: 'application/xml, text/xml',
					json: 'application/json, text/javascript',
				},
				contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
				responseFields: {
					xml: 'responseXML',
					text: 'responseText',
					json: 'responseJSON',
				},
				converters: {
					'* text': String,
					'text html': !0,
					'text json': JSON.parse,
					'text xml': ce.parseXML,
				},
				flatOptions: { url: !0, context: !0 },
			},
			ajaxSetup: function (e, t) {
				return t
					? Gt(Gt(e, ce.ajaxSettings), t)
					: Gt(ce.ajaxSettings, e);
			},
			ajaxPrefilter: Ut(Bt),
			ajaxTransport: Ut(_t),
			ajax: function (e, t) {
				'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
				var c,
					f,
					p,
					n,
					d,
					r,
					h,
					g,
					i,
					o,
					v = ce.ajaxSetup({}, t),
					y = v.context || v,
					m =
						v.context && (y.nodeType || y.jquery)
							? ce(y)
							: ce.event,
					x = ce.Deferred(),
					b = ce.Callbacks('once memory'),
					w = v.statusCode || {},
					a = {},
					s = {},
					u = 'canceled',
					T = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (h) {
								if (!n) {
									n = {};
									while ((t = Wt.exec(p)))
										n[t[1].toLowerCase() + ' '] = (
											n[t[1].toLowerCase() + ' '] || []
										).concat(t[2]);
								}
								t = n[e.toLowerCase() + ' '];
							}
							return null == t ? null : t.join(', ');
						},
						getAllResponseHeaders: function () {
							return h ? p : null;
						},
						setRequestHeader: function (e, t) {
							return (
								null == h &&
									((e = s[e.toLowerCase()] =
										s[e.toLowerCase()] || e),
									(a[e] = t)),
								this
							);
						},
						overrideMimeType: function (e) {
							return null == h && (v.mimeType = e), this;
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (h) T.always(e[T.status]);
								else for (t in e) w[t] = [w[t], e[t]];
							return this;
						},
						abort: function (e) {
							var t = e || u;
							return c && c.abort(t), l(0, t), this;
						},
					};
				if (
					(x.promise(T),
					(v.url = ((e || v.url || Et.href) + '').replace(
						$t,
						Et.protocol + '//'
					)),
					(v.type = t.method || t.type || v.method || v.type),
					(v.dataTypes = (v.dataType || '*')
						.toLowerCase()
						.match(D) || ['']),
					null == v.crossDomain)
				) {
					r = C.createElement('a');
					try {
						(r.href = v.url),
							(r.href = r.href),
							(v.crossDomain =
								Xt.protocol + '//' + Xt.host !=
								r.protocol + '//' + r.host);
					} catch (e) {
						v.crossDomain = !0;
					}
				}
				if (
					(v.data &&
						v.processData &&
						'string' != typeof v.data &&
						(v.data = ce.param(v.data, v.traditional)),
					Vt(Bt, v, t, T),
					h)
				)
					return T;
				for (i in ((g = ce.event && v.global) &&
					0 == ce.active++ &&
					ce.event.trigger('ajaxStart'),
				(v.type = v.type.toUpperCase()),
				(v.hasContent = !Ft.test(v.type)),
				(f = v.url.replace(Rt, '')),
				v.hasContent
					? v.data &&
					  v.processData &&
					  0 ===
							(v.contentType || '').indexOf(
								'application/x-www-form-urlencoded'
							) &&
					  (v.data = v.data.replace(Mt, '+'))
					: ((o = v.url.slice(f.length)),
					  v.data &&
							(v.processData || 'string' == typeof v.data) &&
							((f += (At.test(f) ? '&' : '?') + v.data),
							delete v.data),
					  !1 === v.cache &&
							((f = f.replace(It, '$1')),
							(o =
								(At.test(f) ? '&' : '?') +
								'_=' +
								jt.guid++ +
								o)),
					  (v.url = f + o)),
				v.ifModified &&
					(ce.lastModified[f] &&
						T.setRequestHeader(
							'If-Modified-Since',
							ce.lastModified[f]
						),
					ce.etag[f] &&
						T.setRequestHeader('If-None-Match', ce.etag[f])),
				((v.data && v.hasContent && !1 !== v.contentType) ||
					t.contentType) &&
					T.setRequestHeader('Content-Type', v.contentType),
				T.setRequestHeader(
					'Accept',
					v.dataTypes[0] && v.accepts[v.dataTypes[0]]
						? v.accepts[v.dataTypes[0]] +
								('*' !== v.dataTypes[0]
									? ', ' + zt + '; q=0.01'
									: '')
						: v.accepts['*']
				),
				v.headers))
					T.setRequestHeader(i, v.headers[i]);
				if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
					return T.abort();
				if (
					((u = 'abort'),
					b.add(v.complete),
					T.done(v.success),
					T.fail(v.error),
					(c = Vt(_t, v, t, T)))
				) {
					if (
						((T.readyState = 1),
						g && m.trigger('ajaxSend', [T, v]),
						h)
					)
						return T;
					v.async &&
						0 < v.timeout &&
						(d = ie.setTimeout(function () {
							T.abort('timeout');
						}, v.timeout));
					try {
						(h = !1), c.send(a, l);
					} catch (e) {
						if (h) throw e;
						l(-1, e);
					}
				} else l(-1, 'No Transport');
				function l(e, t, n, r) {
					var i,
						o,
						a,
						s,
						u,
						l = t;
					h ||
						((h = !0),
						d && ie.clearTimeout(d),
						(c = void 0),
						(p = r || ''),
						(T.readyState = 0 < e ? 4 : 0),
						(i = (200 <= e && e < 300) || 304 === e),
						n &&
							(s = (function (e, t, n) {
								var r,
									i,
									o,
									a,
									s = e.contents,
									u = e.dataTypes;
								while ('*' === u[0])
									u.shift(),
										void 0 === r &&
											(r =
												e.mimeType ||
												t.getResponseHeader(
													'Content-Type'
												));
								if (r)
									for (i in s)
										if (s[i] && s[i].test(r)) {
											u.unshift(i);
											break;
										}
								if (u[0] in n) o = u[0];
								else {
									for (i in n) {
										if (
											!u[0] ||
											e.converters[i + ' ' + u[0]]
										) {
											o = i;
											break;
										}
										a || (a = i);
									}
									o = o || a;
								}
								if (o) return o !== u[0] && u.unshift(o), n[o];
							})(v, T, n)),
						!i &&
							-1 < ce.inArray('script', v.dataTypes) &&
							ce.inArray('json', v.dataTypes) < 0 &&
							(v.converters['text script'] = function () {}),
						(s = (function (e, t, n, r) {
							var i,
								o,
								a,
								s,
								u,
								l = {},
								c = e.dataTypes.slice();
							if (c[1])
								for (a in e.converters)
									l[a.toLowerCase()] = e.converters[a];
							o = c.shift();
							while (o)
								if (
									(e.responseFields[o] &&
										(n[e.responseFields[o]] = t),
									!u &&
										r &&
										e.dataFilter &&
										(t = e.dataFilter(t, e.dataType)),
									(u = o),
									(o = c.shift()))
								)
									if ('*' === o) o = u;
									else if ('*' !== u && u !== o) {
										if (
											!(a = l[u + ' ' + o] || l['* ' + o])
										)
											for (i in l)
												if (
													(s = i.split(' '))[1] ===
														o &&
													(a =
														l[u + ' ' + s[0]] ||
														l['* ' + s[0]])
												) {
													!0 === a
														? (a = l[i])
														: !0 !== l[i] &&
														  ((o = s[0]),
														  c.unshift(s[1]));
													break;
												}
										if (!0 !== a)
											if (a && e['throws']) t = a(t);
											else
												try {
													t = a(t);
												} catch (e) {
													return {
														state: 'parsererror',
														error: a
															? e
															: 'No conversion from ' +
															  u +
															  ' to ' +
															  o,
													};
												}
									}
							return { state: 'success', data: t };
						})(v, s, T, i)),
						i
							? (v.ifModified &&
									((u =
										T.getResponseHeader('Last-Modified')) &&
										(ce.lastModified[f] = u),
									(u = T.getResponseHeader('etag')) &&
										(ce.etag[f] = u)),
							  204 === e || 'HEAD' === v.type
									? (l = 'nocontent')
									: 304 === e
									? (l = 'notmodified')
									: ((l = s.state),
									  (o = s.data),
									  (i = !(a = s.error))))
							: ((a = l),
							  (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
						(T.status = e),
						(T.statusText = (t || l) + ''),
						i
							? x.resolveWith(y, [o, l, T])
							: x.rejectWith(y, [T, l, a]),
						T.statusCode(w),
						(w = void 0),
						g &&
							m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [
								T,
								v,
								i ? o : a,
							]),
						b.fireWith(y, [T, l]),
						g &&
							(m.trigger('ajaxComplete', [T, v]),
							--ce.active || ce.event.trigger('ajaxStop')));
				}
				return T;
			},
			getJSON: function (e, t, n) {
				return ce.get(e, t, n, 'json');
			},
			getScript: function (e, t) {
				return ce.get(e, void 0, t, 'script');
			},
		}),
		ce.each(['get', 'post'], function (e, i) {
			ce[i] = function (e, t, n, r) {
				return (
					v(t) && ((r = r || n), (n = t), (t = void 0)),
					ce.ajax(
						ce.extend(
							{
								url: e,
								type: i,
								dataType: r,
								data: t,
								success: n,
							},
							ce.isPlainObject(e) && e
						)
					)
				);
			};
		}),
		ce.ajaxPrefilter(function (e) {
			var t;
			for (t in e.headers)
				'content-type' === t.toLowerCase() &&
					(e.contentType = e.headers[t] || '');
		}),
		(ce._evalUrl = function (e, t, n) {
			return ce.ajax({
				url: e,
				type: 'GET',
				dataType: 'script',
				cache: !0,
				async: !1,
				global: !1,
				converters: { 'text script': function () {} },
				dataFilter: function (e) {
					ce.globalEval(e, t, n);
				},
			});
		}),
		ce.fn.extend({
			wrapAll: function (e) {
				var t;
				return (
					this[0] &&
						(v(e) && (e = e.call(this[0])),
						(t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
						this[0].parentNode && t.insertBefore(this[0]),
						t
							.map(function () {
								var e = this;
								while (e.firstElementChild)
									e = e.firstElementChild;
								return e;
							})
							.append(this)),
					this
				);
			},
			wrapInner: function (n) {
				return v(n)
					? this.each(function (e) {
							ce(this).wrapInner(n.call(this, e));
					  })
					: this.each(function () {
							var e = ce(this),
								t = e.contents();
							t.length ? t.wrapAll(n) : e.append(n);
					  });
			},
			wrap: function (t) {
				var n = v(t);
				return this.each(function (e) {
					ce(this).wrapAll(n ? t.call(this, e) : t);
				});
			},
			unwrap: function (e) {
				return (
					this.parent(e)
						.not('body')
						.each(function () {
							ce(this).replaceWith(this.childNodes);
						}),
					this
				);
			},
		}),
		(ce.expr.pseudos.hidden = function (e) {
			return !ce.expr.pseudos.visible(e);
		}),
		(ce.expr.pseudos.visible = function (e) {
			return !!(
				e.offsetWidth ||
				e.offsetHeight ||
				e.getClientRects().length
			);
		}),
		(ce.ajaxSettings.xhr = function () {
			try {
				return new ie.XMLHttpRequest();
			} catch (e) {}
		});
	var Yt = { 0: 200, 1223: 204 },
		Qt = ce.ajaxSettings.xhr();
	(le.cors = !!Qt && 'withCredentials' in Qt),
		(le.ajax = Qt = !!Qt),
		ce.ajaxTransport(function (i) {
			var o, a;
			if (le.cors || (Qt && !i.crossDomain))
				return {
					send: function (e, t) {
						var n,
							r = i.xhr();
						if (
							(r.open(
								i.type,
								i.url,
								i.async,
								i.username,
								i.password
							),
							i.xhrFields)
						)
							for (n in i.xhrFields) r[n] = i.xhrFields[n];
						for (n in (i.mimeType &&
							r.overrideMimeType &&
							r.overrideMimeType(i.mimeType),
						i.crossDomain ||
							e['X-Requested-With'] ||
							(e['X-Requested-With'] = 'XMLHttpRequest'),
						e))
							r.setRequestHeader(n, e[n]);
						(o = function (e) {
							return function () {
								o &&
									((o =
										a =
										r.onload =
										r.onerror =
										r.onabort =
										r.ontimeout =
										r.onreadystatechange =
											null),
									'abort' === e
										? r.abort()
										: 'error' === e
										? 'number' != typeof r.status
											? t(0, 'error')
											: t(r.status, r.statusText)
										: t(
												Yt[r.status] || r.status,
												r.statusText,
												'text' !==
													(r.responseType ||
														'text') ||
													'string' !=
														typeof r.responseText
													? { binary: r.response }
													: { text: r.responseText },
												r.getAllResponseHeaders()
										  ));
							};
						}),
							(r.onload = o()),
							(a = r.onerror = r.ontimeout = o('error')),
							void 0 !== r.onabort
								? (r.onabort = a)
								: (r.onreadystatechange = function () {
										4 === r.readyState &&
											ie.setTimeout(function () {
												o && a();
											});
								  }),
							(o = o('abort'));
						try {
							r.send((i.hasContent && i.data) || null);
						} catch (e) {
							if (o) throw e;
						}
					},
					abort: function () {
						o && o();
					},
				};
		}),
		ce.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1);
		}),
		ce.ajaxSetup({
			accepts: {
				script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
			},
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: {
				'text script': function (e) {
					return ce.globalEval(e), e;
				},
			},
		}),
		ce.ajaxPrefilter('script', function (e) {
			void 0 === e.cache && (e.cache = !1),
				e.crossDomain && (e.type = 'GET');
		}),
		ce.ajaxTransport('script', function (n) {
			var r, i;
			if (n.crossDomain || n.scriptAttrs)
				return {
					send: function (e, t) {
						(r = ce('<script>')
							.attr(n.scriptAttrs || {})
							.prop({ charset: n.scriptCharset, src: n.url })
							.on(
								'load error',
								(i = function (e) {
									r.remove(),
										(i = null),
										e &&
											t(
												'error' === e.type ? 404 : 200,
												e.type
											);
								})
							)),
							C.head.appendChild(r[0]);
					},
					abort: function () {
						i && i();
					},
				};
		});
	var Jt,
		Kt = [],
		Zt = /(=)\?(?=&|$)|\?\?/;
	ce.ajaxSetup({
		jsonp: 'callback',
		jsonpCallback: function () {
			var e = Kt.pop() || ce.expando + '_' + jt.guid++;
			return (this[e] = !0), e;
		},
	}),
		ce.ajaxPrefilter('json jsonp', function (e, t, n) {
			var r,
				i,
				o,
				a =
					!1 !== e.jsonp &&
					(Zt.test(e.url)
						? 'url'
						: 'string' == typeof e.data &&
						  0 ===
								(e.contentType || '').indexOf(
									'application/x-www-form-urlencoded'
								) &&
						  Zt.test(e.data) &&
						  'data');
			if (a || 'jsonp' === e.dataTypes[0])
				return (
					(r = e.jsonpCallback =
						v(e.jsonpCallback)
							? e.jsonpCallback()
							: e.jsonpCallback),
					a
						? (e[a] = e[a].replace(Zt, '$1' + r))
						: !1 !== e.jsonp &&
						  (e.url +=
								(At.test(e.url) ? '&' : '?') +
								e.jsonp +
								'=' +
								r),
					(e.converters['script json'] = function () {
						return o || ce.error(r + ' was not called'), o[0];
					}),
					(e.dataTypes[0] = 'json'),
					(i = ie[r]),
					(ie[r] = function () {
						o = arguments;
					}),
					n.always(function () {
						void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
							e[r] &&
								((e.jsonpCallback = t.jsonpCallback),
								Kt.push(r)),
							o && v(i) && i(o[0]),
							(o = i = void 0);
					}),
					'script'
				);
		}),
		(le.createHTMLDocument =
			(((Jt = C.implementation.createHTMLDocument('').body).innerHTML =
				'<form></form><form></form>'),
			2 === Jt.childNodes.length)),
		(ce.parseHTML = function (e, t, n) {
			return 'string' != typeof e
				? []
				: ('boolean' == typeof t && ((n = t), (t = !1)),
				  t ||
						(le.createHTMLDocument
							? (((r = (t =
									C.implementation.createHTMLDocument(
										''
									)).createElement('base')).href =
									C.location.href),
							  t.head.appendChild(r))
							: (t = C)),
				  (o = !n && []),
				  (i = w.exec(e))
						? [t.createElement(i[1])]
						: ((i = Ae([e], t, o)),
						  o && o.length && ce(o).remove(),
						  ce.merge([], i.childNodes)));
			var r, i, o;
		}),
		(ce.fn.load = function (e, t, n) {
			var r,
				i,
				o,
				a = this,
				s = e.indexOf(' ');
			return (
				-1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
				v(t)
					? ((n = t), (t = void 0))
					: t && 'object' == typeof t && (i = 'POST'),
				0 < a.length &&
					ce
						.ajax({
							url: e,
							type: i || 'GET',
							dataType: 'html',
							data: t,
						})
						.done(function (e) {
							(o = arguments),
								a.html(
									r
										? ce('<div>')
												.append(ce.parseHTML(e))
												.find(r)
										: e
								);
						})
						.always(
							n &&
								function (e, t) {
									a.each(function () {
										n.apply(
											this,
											o || [e.responseText, t, e]
										);
									});
								}
						),
				this
			);
		}),
		(ce.expr.pseudos.animated = function (t) {
			return ce.grep(ce.timers, function (e) {
				return t === e.elem;
			}).length;
		}),
		(ce.offset = {
			setOffset: function (e, t, n) {
				var r,
					i,
					o,
					a,
					s,
					u,
					l = ce.css(e, 'position'),
					c = ce(e),
					f = {};
				'static' === l && (e.style.position = 'relative'),
					(s = c.offset()),
					(o = ce.css(e, 'top')),
					(u = ce.css(e, 'left')),
					('absolute' === l || 'fixed' === l) &&
					-1 < (o + u).indexOf('auto')
						? ((a = (r = c.position()).top), (i = r.left))
						: ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
					v(t) && (t = t.call(e, n, ce.extend({}, s))),
					null != t.top && (f.top = t.top - s.top + a),
					null != t.left && (f.left = t.left - s.left + i),
					'using' in t ? t.using.call(e, f) : c.css(f);
			},
		}),
		ce.fn.extend({
			offset: function (t) {
				if (arguments.length)
					return void 0 === t
						? this
						: this.each(function (e) {
								ce.offset.setOffset(this, t, e);
						  });
				var e,
					n,
					r = this[0];
				return r
					? r.getClientRects().length
						? ((e = r.getBoundingClientRect()),
						  (n = r.ownerDocument.defaultView),
						  {
								top: e.top + n.pageYOffset,
								left: e.left + n.pageXOffset,
						  })
						: { top: 0, left: 0 }
					: void 0;
			},
			position: function () {
				if (this[0]) {
					var e,
						t,
						n,
						r = this[0],
						i = { top: 0, left: 0 };
					if ('fixed' === ce.css(r, 'position'))
						t = r.getBoundingClientRect();
					else {
						(t = this.offset()),
							(n = r.ownerDocument),
							(e = r.offsetParent || n.documentElement);
						while (
							e &&
							(e === n.body || e === n.documentElement) &&
							'static' === ce.css(e, 'position')
						)
							e = e.parentNode;
						e &&
							e !== r &&
							1 === e.nodeType &&
							(((i = ce(e).offset()).top += ce.css(
								e,
								'borderTopWidth',
								!0
							)),
							(i.left += ce.css(e, 'borderLeftWidth', !0)));
					}
					return {
						top: t.top - i.top - ce.css(r, 'marginTop', !0),
						left: t.left - i.left - ce.css(r, 'marginLeft', !0),
					};
				}
			},
			offsetParent: function () {
				return this.map(function () {
					var e = this.offsetParent;
					while (e && 'static' === ce.css(e, 'position'))
						e = e.offsetParent;
					return e || J;
				});
			},
		}),
		ce.each(
			{ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
			function (t, i) {
				var o = 'pageYOffset' === i;
				ce.fn[t] = function (e) {
					return M(
						this,
						function (e, t, n) {
							var r;
							if (
								(y(e)
									? (r = e)
									: 9 === e.nodeType && (r = e.defaultView),
								void 0 === n)
							)
								return r ? r[i] : e[t];
							r
								? r.scrollTo(
										o ? r.pageXOffset : n,
										o ? n : r.pageYOffset
								  )
								: (e[t] = n);
						},
						t,
						e,
						arguments.length
					);
				};
			}
		),
		ce.each(['top', 'left'], function (e, n) {
			ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
				if (t)
					return (
						(t = Ge(e, n)),
						_e.test(t) ? ce(e).position()[n] + 'px' : t
					);
			});
		}),
		ce.each({ Height: 'height', Width: 'width' }, function (a, s) {
			ce.each(
				{ padding: 'inner' + a, content: s, '': 'outer' + a },
				function (r, o) {
					ce.fn[o] = function (e, t) {
						var n =
								arguments.length &&
								(r || 'boolean' != typeof e),
							i =
								r ||
								(!0 === e || !0 === t ? 'margin' : 'border');
						return M(
							this,
							function (e, t, n) {
								var r;
								return y(e)
									? 0 === o.indexOf('outer')
										? e['inner' + a]
										: e.document.documentElement[
												'client' + a
										  ]
									: 9 === e.nodeType
									? ((r = e.documentElement),
									  Math.max(
											e.body['scroll' + a],
											r['scroll' + a],
											e.body['offset' + a],
											r['offset' + a],
											r['client' + a]
									  ))
									: void 0 === n
									? ce.css(e, t, i)
									: ce.style(e, t, n, i);
							},
							s,
							n ? e : void 0,
							n
						);
					};
				}
			);
		}),
		ce.each(
			[
				'ajaxStart',
				'ajaxStop',
				'ajaxComplete',
				'ajaxError',
				'ajaxSuccess',
				'ajaxSend',
			],
			function (e, t) {
				ce.fn[t] = function (e) {
					return this.on(t, e);
				};
			}
		),
		ce.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n);
			},
			unbind: function (e, t) {
				return this.off(e, null, t);
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r);
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length
					? this.off(e, '**')
					: this.off(t, e || '**', n);
			},
			hover: function (e, t) {
				return this.on('mouseenter', e).on('mouseleave', t || e);
			},
		}),
		ce.each(
			'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
				' '
			),
			function (e, n) {
				ce.fn[n] = function (e, t) {
					return 0 < arguments.length
						? this.on(n, null, e, t)
						: this.trigger(n);
				};
			}
		);
	var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
	(ce.proxy = function (e, t) {
		var n, r, i;
		if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
			return (
				(r = ae.call(arguments, 2)),
				((i = function () {
					return e.apply(t || this, r.concat(ae.call(arguments)));
				}).guid = e.guid =
					e.guid || ce.guid++),
				i
			);
	}),
		(ce.holdReady = function (e) {
			e ? ce.readyWait++ : ce.ready(!0);
		}),
		(ce.isArray = Array.isArray),
		(ce.parseJSON = JSON.parse),
		(ce.nodeName = fe),
		(ce.isFunction = v),
		(ce.isWindow = y),
		(ce.camelCase = F),
		(ce.type = x),
		(ce.now = Date.now),
		(ce.isNumeric = function (e) {
			var t = ce.type(e);
			return (
				('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
			);
		}),
		(ce.trim = function (e) {
			return null == e ? '' : (e + '').replace(en, '$1');
		}),
		'function' == typeof define &&
			define.amd &&
			define('jquery', [], function () {
				return ce;
			});
	var tn = ie.jQuery,
		nn = ie.$;
	return (
		(ce.noConflict = function (e) {
			return (
				ie.$ === ce && (ie.$ = nn),
				e && ie.jQuery === ce && (ie.jQuery = tn),
				ce
			);
		}),
		'undefined' == typeof e && (ie.jQuery = ie.$ = ce),
		ce
	);
});

/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define(e)
		: ((t =
				'undefined' != typeof globalThis
					? globalThis
					: t || self).bootstrap = e());
})(this, function () {
	'use strict';
	const t = new Map(),
		e = {
			set(e, i, n) {
				t.has(e) || t.set(e, new Map());
				const s = t.get(e);
				s.has(i) || 0 === s.size
					? s.set(i, n)
					: console.error(
							`Bootstrap doesn't allow more than one instance per element. Bound instance: ${
								Array.from(s.keys())[0]
							}.`
					  );
			},
			get: (e, i) => (t.has(e) && t.get(e).get(i)) || null,
			remove(e, i) {
				if (!t.has(e)) return;
				const n = t.get(e);
				n.delete(i), 0 === n.size && t.delete(e);
			},
		},
		i = 'transitionend',
		n = (t) => (
			t &&
				window.CSS &&
				window.CSS.escape &&
				(t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
			t
		),
		s = (t) => {
			t.dispatchEvent(new Event(i));
		},
		o = (t) =>
			!(!t || 'object' != typeof t) &&
			(void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
		r = (t) =>
			o(t)
				? t.jquery
					? t[0]
					: t
				: 'string' == typeof t && t.length > 0
				? document.querySelector(n(t))
				: null,
		a = (t) => {
			if (!o(t) || 0 === t.getClientRects().length) return !1;
			const e =
					'visible' ===
					getComputedStyle(t).getPropertyValue('visibility'),
				i = t.closest('details:not([open])');
			if (!i) return e;
			if (i !== t) {
				const e = t.closest('summary');
				if (e && e.parentNode !== i) return !1;
				if (null === e) return !1;
			}
			return e;
		},
		l = (t) =>
			!t ||
			t.nodeType !== Node.ELEMENT_NODE ||
			!!t.classList.contains('disabled') ||
			(void 0 !== t.disabled
				? t.disabled
				: t.hasAttribute('disabled') &&
				  'false' !== t.getAttribute('disabled')),
		c = (t) => {
			if (!document.documentElement.attachShadow) return null;
			if ('function' == typeof t.getRootNode) {
				const e = t.getRootNode();
				return e instanceof ShadowRoot ? e : null;
			}
			return t instanceof ShadowRoot
				? t
				: t.parentNode
				? c(t.parentNode)
				: null;
		},
		h = () => {},
		d = (t) => {
			t.offsetHeight;
		},
		u = () =>
			window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
				? window.jQuery
				: null,
		f = [],
		p = () => 'rtl' === document.documentElement.dir,
		m = (t) => {
			var e;
			(e = () => {
				const e = u();
				if (e) {
					const i = t.NAME,
						n = e.fn[i];
					(e.fn[i] = t.jQueryInterface),
						(e.fn[i].Constructor = t),
						(e.fn[i].noConflict = () => (
							(e.fn[i] = n), t.jQueryInterface
						));
				}
			}),
				'loading' === document.readyState
					? (f.length ||
							document.addEventListener(
								'DOMContentLoaded',
								() => {
									for (const t of f) t();
								}
							),
					  f.push(e))
					: e();
		},
		g = (t, e = [], i = t) => ('function' == typeof t ? t(...e) : i),
		_ = (t, e, n = !0) => {
			if (!n) return void g(t);
			const o =
				((t) => {
					if (!t) return 0;
					let { transitionDuration: e, transitionDelay: i } =
						window.getComputedStyle(t);
					const n = Number.parseFloat(e),
						s = Number.parseFloat(i);
					return n || s
						? ((e = e.split(',')[0]),
						  (i = i.split(',')[0]),
						  1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
						: 0;
				})(e) + 5;
			let r = !1;
			const a = ({ target: n }) => {
				n === e && ((r = !0), e.removeEventListener(i, a), g(t));
			};
			e.addEventListener(i, a),
				setTimeout(() => {
					r || s(e);
				}, o);
		},
		b = (t, e, i, n) => {
			const s = t.length;
			let o = t.indexOf(e);
			return -1 === o
				? !i && n
					? t[s - 1]
					: t[0]
				: ((o += i ? 1 : -1),
				  n && (o = (o + s) % s),
				  t[Math.max(0, Math.min(o, s - 1))]);
		},
		v = /[^.]*(?=\..*)\.|.*/,
		y = /\..*/,
		w = /::\d+$/,
		A = {};
	let E = 1;
	const T = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
		C = new Set([
			'click',
			'dblclick',
			'mouseup',
			'mousedown',
			'contextmenu',
			'mousewheel',
			'DOMMouseScroll',
			'mouseover',
			'mouseout',
			'mousemove',
			'selectstart',
			'selectend',
			'keydown',
			'keypress',
			'keyup',
			'orientationchange',
			'touchstart',
			'touchmove',
			'touchend',
			'touchcancel',
			'pointerdown',
			'pointermove',
			'pointerup',
			'pointerleave',
			'pointercancel',
			'gesturestart',
			'gesturechange',
			'gestureend',
			'focus',
			'blur',
			'change',
			'reset',
			'select',
			'submit',
			'focusin',
			'focusout',
			'load',
			'unload',
			'beforeunload',
			'resize',
			'move',
			'DOMContentLoaded',
			'readystatechange',
			'error',
			'abort',
			'scroll',
		]);
	function O(t, e) {
		return (e && `${e}::${E++}`) || t.uidEvent || E++;
	}
	function x(t) {
		const e = O(t);
		return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
	}
	function k(t, e, i = null) {
		return Object.values(t).find(
			(t) => t.callable === e && t.delegationSelector === i
		);
	}
	function L(t, e, i) {
		const n = 'string' == typeof e,
			s = n ? i : e || i;
		let o = I(t);
		return C.has(o) || (o = t), [n, s, o];
	}
	function S(t, e, i, n, s) {
		if ('string' != typeof e || !t) return;
		let [o, r, a] = L(e, i, n);
		if (e in T) {
			const t = (t) =>
				function (e) {
					if (
						!e.relatedTarget ||
						(e.relatedTarget !== e.delegateTarget &&
							!e.delegateTarget.contains(e.relatedTarget))
					)
						return t.call(this, e);
				};
			r = t(r);
		}
		const l = x(t),
			c = l[a] || (l[a] = {}),
			h = k(c, r, o ? i : null);
		if (h) return void (h.oneOff = h.oneOff && s);
		const d = O(r, e.replace(v, '')),
			u = o
				? (function (t, e, i) {
						return function n(s) {
							const o = t.querySelectorAll(e);
							for (
								let { target: r } = s;
								r && r !== this;
								r = r.parentNode
							)
								for (const a of o)
									if (a === r)
										return (
											P(s, { delegateTarget: r }),
											n.oneOff && N.off(t, s.type, e, i),
											i.apply(r, [s])
										);
						};
				  })(t, i, r)
				: (function (t, e) {
						return function i(n) {
							return (
								P(n, { delegateTarget: t }),
								i.oneOff && N.off(t, n.type, e),
								e.apply(t, [n])
							);
						};
				  })(t, r);
		(u.delegationSelector = o ? i : null),
			(u.callable = r),
			(u.oneOff = s),
			(u.uidEvent = d),
			(c[d] = u),
			t.addEventListener(a, u, o);
	}
	function D(t, e, i, n, s) {
		const o = k(e[i], n, s);
		o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
	}
	function $(t, e, i, n) {
		const s = e[i] || {};
		for (const [o, r] of Object.entries(s))
			o.includes(n) && D(t, e, i, r.callable, r.delegationSelector);
	}
	function I(t) {
		return (t = t.replace(y, '')), T[t] || t;
	}
	const N = {
		on(t, e, i, n) {
			S(t, e, i, n, !1);
		},
		one(t, e, i, n) {
			S(t, e, i, n, !0);
		},
		off(t, e, i, n) {
			if ('string' != typeof e || !t) return;
			const [s, o, r] = L(e, i, n),
				a = r !== e,
				l = x(t),
				c = l[r] || {},
				h = e.startsWith('.');
			if (void 0 === o) {
				if (h) for (const i of Object.keys(l)) $(t, l, i, e.slice(1));
				for (const [i, n] of Object.entries(c)) {
					const s = i.replace(w, '');
					(a && !e.includes(s)) ||
						D(t, l, r, n.callable, n.delegationSelector);
				}
			} else {
				if (!Object.keys(c).length) return;
				D(t, l, r, o, s ? i : null);
			}
		},
		trigger(t, e, i) {
			if ('string' != typeof e || !t) return null;
			const n = u();
			let s = null,
				o = !0,
				r = !0,
				a = !1;
			e !== I(e) &&
				n &&
				((s = n.Event(e, i)),
				n(t).trigger(s),
				(o = !s.isPropagationStopped()),
				(r = !s.isImmediatePropagationStopped()),
				(a = s.isDefaultPrevented()));
			const l = P(new Event(e, { bubbles: o, cancelable: !0 }), i);
			return (
				a && l.preventDefault(),
				r && t.dispatchEvent(l),
				l.defaultPrevented && s && s.preventDefault(),
				l
			);
		},
	};
	function P(t, e = {}) {
		for (const [i, n] of Object.entries(e))
			try {
				t[i] = n;
			} catch (e) {
				Object.defineProperty(t, i, { configurable: !0, get: () => n });
			}
		return t;
	}
	function M(t) {
		if ('true' === t) return !0;
		if ('false' === t) return !1;
		if (t === Number(t).toString()) return Number(t);
		if ('' === t || 'null' === t) return null;
		if ('string' != typeof t) return t;
		try {
			return JSON.parse(decodeURIComponent(t));
		} catch (e) {
			return t;
		}
	}
	function j(t) {
		return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
	}
	const F = {
		setDataAttribute(t, e, i) {
			t.setAttribute(`data-bs-${j(e)}`, i);
		},
		removeDataAttribute(t, e) {
			t.removeAttribute(`data-bs-${j(e)}`);
		},
		getDataAttributes(t) {
			if (!t) return {};
			const e = {},
				i = Object.keys(t.dataset).filter(
					(t) => t.startsWith('bs') && !t.startsWith('bsConfig')
				);
			for (const n of i) {
				let i = n.replace(/^bs/, '');
				(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
					(e[i] = M(t.dataset[n]));
			}
			return e;
		},
		getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${j(e)}`)),
	};
	class H {
		static get Default() {
			return {};
		}
		static get DefaultType() {
			return {};
		}
		static get NAME() {
			throw new Error(
				'You have to implement the static method "NAME", for each component!'
			);
		}
		_getConfig(t) {
			return (
				(t = this._mergeConfigObj(t)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		_configAfterMerge(t) {
			return t;
		}
		_mergeConfigObj(t, e) {
			const i = o(e) ? F.getDataAttribute(e, 'config') : {};
			return {
				...this.constructor.Default,
				...('object' == typeof i ? i : {}),
				...(o(e) ? F.getDataAttributes(e) : {}),
				...('object' == typeof t ? t : {}),
			};
		}
		_typeCheckConfig(t, e = this.constructor.DefaultType) {
			for (const [n, s] of Object.entries(e)) {
				const e = t[n],
					r = o(e)
						? 'element'
						: null == (i = e)
						? `${i}`
						: Object.prototype.toString
								.call(i)
								.match(/\s([a-z]+)/i)[1]
								.toLowerCase();
				if (!new RegExp(s).test(r))
					throw new TypeError(
						`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
					);
			}
			var i;
		}
	}
	class W extends H {
		constructor(t, i) {
			super(),
				(t = r(t)) &&
					((this._element = t),
					(this._config = this._getConfig(i)),
					e.set(this._element, this.constructor.DATA_KEY, this));
		}
		dispose() {
			e.remove(this._element, this.constructor.DATA_KEY),
				N.off(this._element, this.constructor.EVENT_KEY);
			for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
		}
		_queueCallback(t, e, i = !0) {
			_(t, e, i);
		}
		_getConfig(t) {
			return (
				(t = this._mergeConfigObj(t, this._element)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		static getInstance(t) {
			return e.get(r(t), this.DATA_KEY);
		}
		static getOrCreateInstance(t, e = {}) {
			return (
				this.getInstance(t) ||
				new this(t, 'object' == typeof e ? e : null)
			);
		}
		static get VERSION() {
			return '5.3.2';
		}
		static get DATA_KEY() {
			return `bs.${this.NAME}`;
		}
		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`;
		}
		static eventName(t) {
			return `${t}${this.EVENT_KEY}`;
		}
	}
	const B = (t) => {
			let e = t.getAttribute('data-bs-target');
			if (!e || '#' === e) {
				let i = t.getAttribute('href');
				if (!i || (!i.includes('#') && !i.startsWith('.'))) return null;
				i.includes('#') &&
					!i.startsWith('#') &&
					(i = `#${i.split('#')[1]}`),
					(e = i && '#' !== i ? n(i.trim()) : null);
			}
			return e;
		},
		z = {
			find: (t, e = document.documentElement) =>
				[].concat(...Element.prototype.querySelectorAll.call(e, t)),
			findOne: (t, e = document.documentElement) =>
				Element.prototype.querySelector.call(e, t),
			children: (t, e) =>
				[].concat(...t.children).filter((t) => t.matches(e)),
			parents(t, e) {
				const i = [];
				let n = t.parentNode.closest(e);
				for (; n; ) i.push(n), (n = n.parentNode.closest(e));
				return i;
			},
			prev(t, e) {
				let i = t.previousElementSibling;
				for (; i; ) {
					if (i.matches(e)) return [i];
					i = i.previousElementSibling;
				}
				return [];
			},
			next(t, e) {
				let i = t.nextElementSibling;
				for (; i; ) {
					if (i.matches(e)) return [i];
					i = i.nextElementSibling;
				}
				return [];
			},
			focusableChildren(t) {
				const e = [
					'a',
					'button',
					'input',
					'textarea',
					'select',
					'details',
					'[tabindex]',
					'[contenteditable="true"]',
				]
					.map((t) => `${t}:not([tabindex^="-"])`)
					.join(',');
				return this.find(e, t).filter((t) => !l(t) && a(t));
			},
			getSelectorFromElement(t) {
				const e = B(t);
				return e && z.findOne(e) ? e : null;
			},
			getElementFromSelector(t) {
				const e = B(t);
				return e ? z.findOne(e) : null;
			},
			getMultipleElementsFromSelector(t) {
				const e = B(t);
				return e ? z.find(e) : [];
			},
		},
		R = (t, e = 'hide') => {
			const i = `click.dismiss${t.EVENT_KEY}`,
				n = t.NAME;
			N.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
				if (
					(['A', 'AREA'].includes(this.tagName) && i.preventDefault(),
					l(this))
				)
					return;
				const s =
					z.getElementFromSelector(this) || this.closest(`.${n}`);
				t.getOrCreateInstance(s)[e]();
			});
		},
		q = '.bs.alert',
		V = `close${q}`,
		K = `closed${q}`;
	class Q extends W {
		static get NAME() {
			return 'alert';
		}
		close() {
			if (N.trigger(this._element, V).defaultPrevented) return;
			this._element.classList.remove('show');
			const t = this._element.classList.contains('fade');
			this._queueCallback(() => this._destroyElement(), this._element, t);
		}
		_destroyElement() {
			this._element.remove(), N.trigger(this._element, K), this.dispose();
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Q.getOrCreateInstance(this);
				if ('string' == typeof t) {
					if (
						void 0 === e[t] ||
						t.startsWith('_') ||
						'constructor' === t
					)
						throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	R(Q, 'close'), m(Q);
	const X = '[data-bs-toggle="button"]';
	class Y extends W {
		static get NAME() {
			return 'button';
		}
		toggle() {
			this._element.setAttribute(
				'aria-pressed',
				this._element.classList.toggle('active')
			);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Y.getOrCreateInstance(this);
				'toggle' === t && e[t]();
			});
		}
	}
	N.on(document, 'click.bs.button.data-api', X, (t) => {
		t.preventDefault();
		const e = t.target.closest(X);
		Y.getOrCreateInstance(e).toggle();
	}),
		m(Y);
	const U = '.bs.swipe',
		G = `touchstart${U}`,
		J = `touchmove${U}`,
		Z = `touchend${U}`,
		tt = `pointerdown${U}`,
		et = `pointerup${U}`,
		it = { endCallback: null, leftCallback: null, rightCallback: null },
		nt = {
			endCallback: '(function|null)',
			leftCallback: '(function|null)',
			rightCallback: '(function|null)',
		};
	class st extends H {
		constructor(t, e) {
			super(),
				(this._element = t),
				t &&
					st.isSupported() &&
					((this._config = this._getConfig(e)),
					(this._deltaX = 0),
					(this._supportPointerEvents = Boolean(window.PointerEvent)),
					this._initEvents());
		}
		static get Default() {
			return it;
		}
		static get DefaultType() {
			return nt;
		}
		static get NAME() {
			return 'swipe';
		}
		dispose() {
			N.off(this._element, U);
		}
		_start(t) {
			this._supportPointerEvents
				? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
				: (this._deltaX = t.touches[0].clientX);
		}
		_end(t) {
			this._eventIsPointerPenTouch(t) &&
				(this._deltaX = t.clientX - this._deltaX),
				this._handleSwipe(),
				g(this._config.endCallback);
		}
		_move(t) {
			this._deltaX =
				t.touches && t.touches.length > 1
					? 0
					: t.touches[0].clientX - this._deltaX;
		}
		_handleSwipe() {
			const t = Math.abs(this._deltaX);
			if (t <= 40) return;
			const e = t / this._deltaX;
			(this._deltaX = 0),
				e &&
					g(
						e > 0
							? this._config.rightCallback
							: this._config.leftCallback
					);
		}
		_initEvents() {
			this._supportPointerEvents
				? (N.on(this._element, tt, (t) => this._start(t)),
				  N.on(this._element, et, (t) => this._end(t)),
				  this._element.classList.add('pointer-event'))
				: (N.on(this._element, G, (t) => this._start(t)),
				  N.on(this._element, J, (t) => this._move(t)),
				  N.on(this._element, Z, (t) => this._end(t)));
		}
		_eventIsPointerPenTouch(t) {
			return (
				this._supportPointerEvents &&
				('pen' === t.pointerType || 'touch' === t.pointerType)
			);
		}
		static isSupported() {
			return (
				'ontouchstart' in document.documentElement ||
				navigator.maxTouchPoints > 0
			);
		}
	}
	const ot = '.bs.carousel',
		rt = '.data-api',
		at = 'next',
		lt = 'prev',
		ct = 'left',
		ht = 'right',
		dt = `slide${ot}`,
		ut = `slid${ot}`,
		ft = `keydown${ot}`,
		pt = `mouseenter${ot}`,
		mt = `mouseleave${ot}`,
		gt = `dragstart${ot}`,
		_t = `load${ot}${rt}`,
		bt = `click${ot}${rt}`,
		vt = 'carousel',
		yt = 'active',
		wt = '.active',
		At = '.carousel-item',
		Et = wt + At,
		Tt = { ArrowLeft: ht, ArrowRight: ct },
		Ct = {
			interval: 5e3,
			keyboard: !0,
			pause: 'hover',
			ride: !1,
			touch: !0,
			wrap: !0,
		},
		Ot = {
			interval: '(number|boolean)',
			keyboard: 'boolean',
			pause: '(string|boolean)',
			ride: '(boolean|string)',
			touch: 'boolean',
			wrap: 'boolean',
		};
	class xt extends W {
		constructor(t, e) {
			super(t, e),
				(this._interval = null),
				(this._activeElement = null),
				(this._isSliding = !1),
				(this.touchTimeout = null),
				(this._swipeHelper = null),
				(this._indicatorsElement = z.findOne(
					'.carousel-indicators',
					this._element
				)),
				this._addEventListeners(),
				this._config.ride === vt && this.cycle();
		}
		static get Default() {
			return Ct;
		}
		static get DefaultType() {
			return Ot;
		}
		static get NAME() {
			return 'carousel';
		}
		next() {
			this._slide(at);
		}
		nextWhenVisible() {
			!document.hidden && a(this._element) && this.next();
		}
		prev() {
			this._slide(lt);
		}
		pause() {
			this._isSliding && s(this._element), this._clearInterval();
		}
		cycle() {
			this._clearInterval(),
				this._updateInterval(),
				(this._interval = setInterval(
					() => this.nextWhenVisible(),
					this._config.interval
				));
		}
		_maybeEnableCycle() {
			this._config.ride &&
				(this._isSliding
					? N.one(this._element, ut, () => this.cycle())
					: this.cycle());
		}
		to(t) {
			const e = this._getItems();
			if (t > e.length - 1 || t < 0) return;
			if (this._isSliding)
				return void N.one(this._element, ut, () => this.to(t));
			const i = this._getItemIndex(this._getActive());
			if (i === t) return;
			const n = t > i ? at : lt;
			this._slide(n, e[t]);
		}
		dispose() {
			this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
		}
		_configAfterMerge(t) {
			return (t.defaultInterval = t.interval), t;
		}
		_addEventListeners() {
			this._config.keyboard &&
				N.on(this._element, ft, (t) => this._keydown(t)),
				'hover' === this._config.pause &&
					(N.on(this._element, pt, () => this.pause()),
					N.on(this._element, mt, () => this._maybeEnableCycle())),
				this._config.touch &&
					st.isSupported() &&
					this._addTouchEventListeners();
		}
		_addTouchEventListeners() {
			for (const t of z.find('.carousel-item img', this._element))
				N.on(t, gt, (t) => t.preventDefault());
			const t = {
				leftCallback: () => this._slide(this._directionToOrder(ct)),
				rightCallback: () => this._slide(this._directionToOrder(ht)),
				endCallback: () => {
					'hover' === this._config.pause &&
						(this.pause(),
						this.touchTimeout && clearTimeout(this.touchTimeout),
						(this.touchTimeout = setTimeout(
							() => this._maybeEnableCycle(),
							500 + this._config.interval
						)));
				},
			};
			this._swipeHelper = new st(this._element, t);
		}
		_keydown(t) {
			if (/input|textarea/i.test(t.target.tagName)) return;
			const e = Tt[t.key];
			e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
		}
		_getItemIndex(t) {
			return this._getItems().indexOf(t);
		}
		_setActiveIndicatorElement(t) {
			if (!this._indicatorsElement) return;
			const e = z.findOne(wt, this._indicatorsElement);
			e.classList.remove(yt), e.removeAttribute('aria-current');
			const i = z.findOne(
				`[data-bs-slide-to="${t}"]`,
				this._indicatorsElement
			);
			i && (i.classList.add(yt), i.setAttribute('aria-current', 'true'));
		}
		_updateInterval() {
			const t = this._activeElement || this._getActive();
			if (!t) return;
			const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
			this._config.interval = e || this._config.defaultInterval;
		}
		_slide(t, e = null) {
			if (this._isSliding) return;
			const i = this._getActive(),
				n = t === at,
				s = e || b(this._getItems(), i, n, this._config.wrap);
			if (s === i) return;
			const o = this._getItemIndex(s),
				r = (e) =>
					N.trigger(this._element, e, {
						relatedTarget: s,
						direction: this._orderToDirection(t),
						from: this._getItemIndex(i),
						to: o,
					});
			if (r(dt).defaultPrevented) return;
			if (!i || !s) return;
			const a = Boolean(this._interval);
			this.pause(),
				(this._isSliding = !0),
				this._setActiveIndicatorElement(o),
				(this._activeElement = s);
			const l = n ? 'carousel-item-start' : 'carousel-item-end',
				c = n ? 'carousel-item-next' : 'carousel-item-prev';
			s.classList.add(c),
				d(s),
				i.classList.add(l),
				s.classList.add(l),
				this._queueCallback(
					() => {
						s.classList.remove(l, c),
							s.classList.add(yt),
							i.classList.remove(yt, c, l),
							(this._isSliding = !1),
							r(ut);
					},
					i,
					this._isAnimated()
				),
				a && this.cycle();
		}
		_isAnimated() {
			return this._element.classList.contains('slide');
		}
		_getActive() {
			return z.findOne(Et, this._element);
		}
		_getItems() {
			return z.find(At, this._element);
		}
		_clearInterval() {
			this._interval &&
				(clearInterval(this._interval), (this._interval = null));
		}
		_directionToOrder(t) {
			return p() ? (t === ct ? lt : at) : t === ct ? at : lt;
		}
		_orderToDirection(t) {
			return p() ? (t === lt ? ct : ht) : t === lt ? ht : ct;
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = xt.getOrCreateInstance(this, t);
				if ('number' != typeof t) {
					if ('string' == typeof t) {
						if (
							void 0 === e[t] ||
							t.startsWith('_') ||
							'constructor' === t
						)
							throw new TypeError(`No method named "${t}"`);
						e[t]();
					}
				} else e.to(t);
			});
		}
	}
	N.on(document, bt, '[data-bs-slide], [data-bs-slide-to]', function (t) {
		const e = z.getElementFromSelector(this);
		if (!e || !e.classList.contains(vt)) return;
		t.preventDefault();
		const i = xt.getOrCreateInstance(e),
			n = this.getAttribute('data-bs-slide-to');
		return n
			? (i.to(n), void i._maybeEnableCycle())
			: 'next' === F.getDataAttribute(this, 'slide')
			? (i.next(), void i._maybeEnableCycle())
			: (i.prev(), void i._maybeEnableCycle());
	}),
		N.on(window, _t, () => {
			const t = z.find('[data-bs-ride="carousel"]');
			for (const e of t) xt.getOrCreateInstance(e);
		}),
		m(xt);
	const kt = '.bs.collapse',
		Lt = `show${kt}`,
		St = `shown${kt}`,
		Dt = `hide${kt}`,
		$t = `hidden${kt}`,
		It = `click${kt}.data-api`,
		Nt = 'show',
		Pt = 'collapse',
		Mt = 'collapsing',
		jt = `:scope .${Pt} .${Pt}`,
		Ft = '[data-bs-toggle="collapse"]',
		Ht = { parent: null, toggle: !0 },
		Wt = { parent: '(null|element)', toggle: 'boolean' };
	class Bt extends W {
		constructor(t, e) {
			super(t, e),
				(this._isTransitioning = !1),
				(this._triggerArray = []);
			const i = z.find(Ft);
			for (const t of i) {
				const e = z.getSelectorFromElement(t),
					i = z.find(e).filter((t) => t === this._element);
				null !== e && i.length && this._triggerArray.push(t);
			}
			this._initializeChildren(),
				this._config.parent ||
					this._addAriaAndCollapsedClass(
						this._triggerArray,
						this._isShown()
					),
				this._config.toggle && this.toggle();
		}
		static get Default() {
			return Ht;
		}
		static get DefaultType() {
			return Wt;
		}
		static get NAME() {
			return 'collapse';
		}
		toggle() {
			this._isShown() ? this.hide() : this.show();
		}
		show() {
			if (this._isTransitioning || this._isShown()) return;
			let t = [];
			if (
				(this._config.parent &&
					(t = this._getFirstLevelChildren(
						'.collapse.show, .collapse.collapsing'
					)
						.filter((t) => t !== this._element)
						.map((t) => Bt.getOrCreateInstance(t, { toggle: !1 }))),
				t.length && t[0]._isTransitioning)
			)
				return;
			if (N.trigger(this._element, Lt).defaultPrevented) return;
			for (const e of t) e.hide();
			const e = this._getDimension();
			this._element.classList.remove(Pt),
				this._element.classList.add(Mt),
				(this._element.style[e] = 0),
				this._addAriaAndCollapsedClass(this._triggerArray, !0),
				(this._isTransitioning = !0);
			const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
			this._queueCallback(
				() => {
					(this._isTransitioning = !1),
						this._element.classList.remove(Mt),
						this._element.classList.add(Pt, Nt),
						(this._element.style[e] = ''),
						N.trigger(this._element, St);
				},
				this._element,
				!0
			),
				(this._element.style[e] = `${this._element[i]}px`);
		}
		hide() {
			if (this._isTransitioning || !this._isShown()) return;
			if (N.trigger(this._element, Dt).defaultPrevented) return;
			const t = this._getDimension();
			(this._element.style[t] = `${
				this._element.getBoundingClientRect()[t]
			}px`),
				d(this._element),
				this._element.classList.add(Mt),
				this._element.classList.remove(Pt, Nt);
			for (const t of this._triggerArray) {
				const e = z.getElementFromSelector(t);
				e &&
					!this._isShown(e) &&
					this._addAriaAndCollapsedClass([t], !1);
			}
			(this._isTransitioning = !0),
				(this._element.style[t] = ''),
				this._queueCallback(
					() => {
						(this._isTransitioning = !1),
							this._element.classList.remove(Mt),
							this._element.classList.add(Pt),
							N.trigger(this._element, $t);
					},
					this._element,
					!0
				);
		}
		_isShown(t = this._element) {
			return t.classList.contains(Nt);
		}
		_configAfterMerge(t) {
			return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
		}
		_getDimension() {
			return this._element.classList.contains('collapse-horizontal')
				? 'width'
				: 'height';
		}
		_initializeChildren() {
			if (!this._config.parent) return;
			const t = this._getFirstLevelChildren(Ft);
			for (const e of t) {
				const t = z.getElementFromSelector(e);
				t && this._addAriaAndCollapsedClass([e], this._isShown(t));
			}
		}
		_getFirstLevelChildren(t) {
			const e = z.find(jt, this._config.parent);
			return z.find(t, this._config.parent).filter((t) => !e.includes(t));
		}
		_addAriaAndCollapsedClass(t, e) {
			if (t.length)
				for (const i of t)
					i.classList.toggle('collapsed', !e),
						i.setAttribute('aria-expanded', e);
		}
		static jQueryInterface(t) {
			const e = {};
			return (
				'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1),
				this.each(function () {
					const i = Bt.getOrCreateInstance(this, e);
					if ('string' == typeof t) {
						if (void 0 === i[t])
							throw new TypeError(`No method named "${t}"`);
						i[t]();
					}
				})
			);
		}
	}
	N.on(document, It, Ft, function (t) {
		('A' === t.target.tagName ||
			(t.delegateTarget && 'A' === t.delegateTarget.tagName)) &&
			t.preventDefault();
		for (const t of z.getMultipleElementsFromSelector(this))
			Bt.getOrCreateInstance(t, { toggle: !1 }).toggle();
	}),
		m(Bt);
	var zt = 'top',
		Rt = 'bottom',
		qt = 'right',
		Vt = 'left',
		Kt = 'auto',
		Qt = [zt, Rt, qt, Vt],
		Xt = 'start',
		Yt = 'end',
		Ut = 'clippingParents',
		Gt = 'viewport',
		Jt = 'popper',
		Zt = 'reference',
		te = Qt.reduce(function (t, e) {
			return t.concat([e + '-' + Xt, e + '-' + Yt]);
		}, []),
		ee = [].concat(Qt, [Kt]).reduce(function (t, e) {
			return t.concat([e, e + '-' + Xt, e + '-' + Yt]);
		}, []),
		ie = 'beforeRead',
		ne = 'read',
		se = 'afterRead',
		oe = 'beforeMain',
		re = 'main',
		ae = 'afterMain',
		le = 'beforeWrite',
		ce = 'write',
		he = 'afterWrite',
		de = [ie, ne, se, oe, re, ae, le, ce, he];
	function ue(t) {
		return t ? (t.nodeName || '').toLowerCase() : null;
	}
	function fe(t) {
		if (null == t) return window;
		if ('[object Window]' !== t.toString()) {
			var e = t.ownerDocument;
			return (e && e.defaultView) || window;
		}
		return t;
	}
	function pe(t) {
		return t instanceof fe(t).Element || t instanceof Element;
	}
	function me(t) {
		return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
	}
	function ge(t) {
		return (
			'undefined' != typeof ShadowRoot &&
			(t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
		);
	}
	const _e = {
		name: 'applyStyles',
		enabled: !0,
		phase: 'write',
		fn: function (t) {
			var e = t.state;
			Object.keys(e.elements).forEach(function (t) {
				var i = e.styles[t] || {},
					n = e.attributes[t] || {},
					s = e.elements[t];
				me(s) &&
					ue(s) &&
					(Object.assign(s.style, i),
					Object.keys(n).forEach(function (t) {
						var e = n[t];
						!1 === e
							? s.removeAttribute(t)
							: s.setAttribute(t, !0 === e ? '' : e);
					}));
			});
		},
		effect: function (t) {
			var e = t.state,
				i = {
					popper: {
						position: e.options.strategy,
						left: '0',
						top: '0',
						margin: '0',
					},
					arrow: { position: 'absolute' },
					reference: {},
				};
			return (
				Object.assign(e.elements.popper.style, i.popper),
				(e.styles = i),
				e.elements.arrow &&
					Object.assign(e.elements.arrow.style, i.arrow),
				function () {
					Object.keys(e.elements).forEach(function (t) {
						var n = e.elements[t],
							s = e.attributes[t] || {},
							o = Object.keys(
								e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
							).reduce(function (t, e) {
								return (t[e] = ''), t;
							}, {});
						me(n) &&
							ue(n) &&
							(Object.assign(n.style, o),
							Object.keys(s).forEach(function (t) {
								n.removeAttribute(t);
							}));
					});
				}
			);
		},
		requires: ['computeStyles'],
	};
	function be(t) {
		return t.split('-')[0];
	}
	var ve = Math.max,
		ye = Math.min,
		we = Math.round;
	function Ae() {
		var t = navigator.userAgentData;
		return null != t && t.brands && Array.isArray(t.brands)
			? t.brands
					.map(function (t) {
						return t.brand + '/' + t.version;
					})
					.join(' ')
			: navigator.userAgent;
	}
	function Ee() {
		return !/^((?!chrome|android).)*safari/i.test(Ae());
	}
	function Te(t, e, i) {
		void 0 === e && (e = !1), void 0 === i && (i = !1);
		var n = t.getBoundingClientRect(),
			s = 1,
			o = 1;
		e &&
			me(t) &&
			((s = (t.offsetWidth > 0 && we(n.width) / t.offsetWidth) || 1),
			(o = (t.offsetHeight > 0 && we(n.height) / t.offsetHeight) || 1));
		var r = (pe(t) ? fe(t) : window).visualViewport,
			a = !Ee() && i,
			l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
			c = (n.top + (a && r ? r.offsetTop : 0)) / o,
			h = n.width / s,
			d = n.height / o;
		return {
			width: h,
			height: d,
			top: c,
			right: l + h,
			bottom: c + d,
			left: l,
			x: l,
			y: c,
		};
	}
	function Ce(t) {
		var e = Te(t),
			i = t.offsetWidth,
			n = t.offsetHeight;
		return (
			Math.abs(e.width - i) <= 1 && (i = e.width),
			Math.abs(e.height - n) <= 1 && (n = e.height),
			{ x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
		);
	}
	function Oe(t, e) {
		var i = e.getRootNode && e.getRootNode();
		if (t.contains(e)) return !0;
		if (i && ge(i)) {
			var n = e;
			do {
				if (n && t.isSameNode(n)) return !0;
				n = n.parentNode || n.host;
			} while (n);
		}
		return !1;
	}
	function xe(t) {
		return fe(t).getComputedStyle(t);
	}
	function ke(t) {
		return ['table', 'td', 'th'].indexOf(ue(t)) >= 0;
	}
	function Le(t) {
		return (
			(pe(t) ? t.ownerDocument : t.document) || window.document
		).documentElement;
	}
	function Se(t) {
		return 'html' === ue(t)
			? t
			: t.assignedSlot ||
					t.parentNode ||
					(ge(t) ? t.host : null) ||
					Le(t);
	}
	function De(t) {
		return me(t) && 'fixed' !== xe(t).position ? t.offsetParent : null;
	}
	function $e(t) {
		for (
			var e = fe(t), i = De(t);
			i && ke(i) && 'static' === xe(i).position;

		)
			i = De(i);
		return i &&
			('html' === ue(i) ||
				('body' === ue(i) && 'static' === xe(i).position))
			? e
			: i ||
					(function (t) {
						var e = /firefox/i.test(Ae());
						if (
							/Trident/i.test(Ae()) &&
							me(t) &&
							'fixed' === xe(t).position
						)
							return null;
						var i = Se(t);
						for (
							ge(i) && (i = i.host);
							me(i) && ['html', 'body'].indexOf(ue(i)) < 0;

						) {
							var n = xe(i);
							if (
								'none' !== n.transform ||
								'none' !== n.perspective ||
								'paint' === n.contain ||
								-1 !==
									['transform', 'perspective'].indexOf(
										n.willChange
									) ||
								(e && 'filter' === n.willChange) ||
								(e && n.filter && 'none' !== n.filter)
							)
								return i;
							i = i.parentNode;
						}
						return null;
					})(t) ||
					e;
	}
	function Ie(t) {
		return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
	}
	function Ne(t, e, i) {
		return ve(t, ye(e, i));
	}
	function Pe(t) {
		return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
	}
	function Me(t, e) {
		return e.reduce(function (e, i) {
			return (e[i] = t), e;
		}, {});
	}
	const je = {
		name: 'arrow',
		enabled: !0,
		phase: 'main',
		fn: function (t) {
			var e,
				i = t.state,
				n = t.name,
				s = t.options,
				o = i.elements.arrow,
				r = i.modifiersData.popperOffsets,
				a = be(i.placement),
				l = Ie(a),
				c = [Vt, qt].indexOf(a) >= 0 ? 'height' : 'width';
			if (o && r) {
				var h = (function (t, e) {
						return Pe(
							'number' !=
								typeof (t =
									'function' == typeof t
										? t(
												Object.assign({}, e.rects, {
													placement: e.placement,
												})
										  )
										: t)
								? t
								: Me(t, Qt)
						);
					})(s.padding, i),
					d = Ce(o),
					u = 'y' === l ? zt : Vt,
					f = 'y' === l ? Rt : qt,
					p =
						i.rects.reference[c] +
						i.rects.reference[l] -
						r[l] -
						i.rects.popper[c],
					m = r[l] - i.rects.reference[l],
					g = $e(o),
					_ = g
						? 'y' === l
							? g.clientHeight || 0
							: g.clientWidth || 0
						: 0,
					b = p / 2 - m / 2,
					v = h[u],
					y = _ - d[c] - h[f],
					w = _ / 2 - d[c] / 2 + b,
					A = Ne(v, w, y),
					E = l;
				i.modifiersData[n] =
					(((e = {})[E] = A), (e.centerOffset = A - w), e);
			}
		},
		effect: function (t) {
			var e = t.state,
				i = t.options.element,
				n = void 0 === i ? '[data-popper-arrow]' : i;
			null != n &&
				('string' != typeof n ||
					(n = e.elements.popper.querySelector(n))) &&
				Oe(e.elements.popper, n) &&
				(e.elements.arrow = n);
		},
		requires: ['popperOffsets'],
		requiresIfExists: ['preventOverflow'],
	};
	function Fe(t) {
		return t.split('-')[1];
	}
	var He = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
	function We(t) {
		var e,
			i = t.popper,
			n = t.popperRect,
			s = t.placement,
			o = t.variation,
			r = t.offsets,
			a = t.position,
			l = t.gpuAcceleration,
			c = t.adaptive,
			h = t.roundOffsets,
			d = t.isFixed,
			u = r.x,
			f = void 0 === u ? 0 : u,
			p = r.y,
			m = void 0 === p ? 0 : p,
			g = 'function' == typeof h ? h({ x: f, y: m }) : { x: f, y: m };
		(f = g.x), (m = g.y);
		var _ = r.hasOwnProperty('x'),
			b = r.hasOwnProperty('y'),
			v = Vt,
			y = zt,
			w = window;
		if (c) {
			var A = $e(i),
				E = 'clientHeight',
				T = 'clientWidth';
			A === fe(i) &&
				'static' !== xe((A = Le(i))).position &&
				'absolute' === a &&
				((E = 'scrollHeight'), (T = 'scrollWidth')),
				(s === zt || ((s === Vt || s === qt) && o === Yt)) &&
					((y = Rt),
					(m -=
						(d && A === w && w.visualViewport
							? w.visualViewport.height
							: A[E]) - n.height),
					(m *= l ? 1 : -1)),
				(s !== Vt && ((s !== zt && s !== Rt) || o !== Yt)) ||
					((v = qt),
					(f -=
						(d && A === w && w.visualViewport
							? w.visualViewport.width
							: A[T]) - n.width),
					(f *= l ? 1 : -1));
		}
		var C,
			O = Object.assign({ position: a }, c && He),
			x =
				!0 === h
					? (function (t, e) {
							var i = t.x,
								n = t.y,
								s = e.devicePixelRatio || 1;
							return {
								x: we(i * s) / s || 0,
								y: we(n * s) / s || 0,
							};
					  })({ x: f, y: m }, fe(i))
					: { x: f, y: m };
		return (
			(f = x.x),
			(m = x.y),
			l
				? Object.assign(
						{},
						O,
						(((C = {})[y] = b ? '0' : ''),
						(C[v] = _ ? '0' : ''),
						(C.transform =
							(w.devicePixelRatio || 1) <= 1
								? 'translate(' + f + 'px, ' + m + 'px)'
								: 'translate3d(' + f + 'px, ' + m + 'px, 0)'),
						C)
				  )
				: Object.assign(
						{},
						O,
						(((e = {})[y] = b ? m + 'px' : ''),
						(e[v] = _ ? f + 'px' : ''),
						(e.transform = ''),
						e)
				  )
		);
	}
	const Be = {
		name: 'computeStyles',
		enabled: !0,
		phase: 'beforeWrite',
		fn: function (t) {
			var e = t.state,
				i = t.options,
				n = i.gpuAcceleration,
				s = void 0 === n || n,
				o = i.adaptive,
				r = void 0 === o || o,
				a = i.roundOffsets,
				l = void 0 === a || a,
				c = {
					placement: be(e.placement),
					variation: Fe(e.placement),
					popper: e.elements.popper,
					popperRect: e.rects.popper,
					gpuAcceleration: s,
					isFixed: 'fixed' === e.options.strategy,
				};
			null != e.modifiersData.popperOffsets &&
				(e.styles.popper = Object.assign(
					{},
					e.styles.popper,
					We(
						Object.assign({}, c, {
							offsets: e.modifiersData.popperOffsets,
							position: e.options.strategy,
							adaptive: r,
							roundOffsets: l,
						})
					)
				)),
				null != e.modifiersData.arrow &&
					(e.styles.arrow = Object.assign(
						{},
						e.styles.arrow,
						We(
							Object.assign({}, c, {
								offsets: e.modifiersData.arrow,
								position: 'absolute',
								adaptive: !1,
								roundOffsets: l,
							})
						)
					)),
				(e.attributes.popper = Object.assign({}, e.attributes.popper, {
					'data-popper-placement': e.placement,
				}));
		},
		data: {},
	};
	var ze = { passive: !0 };
	const Re = {
		name: 'eventListeners',
		enabled: !0,
		phase: 'write',
		fn: function () {},
		effect: function (t) {
			var e = t.state,
				i = t.instance,
				n = t.options,
				s = n.scroll,
				o = void 0 === s || s,
				r = n.resize,
				a = void 0 === r || r,
				l = fe(e.elements.popper),
				c = [].concat(
					e.scrollParents.reference,
					e.scrollParents.popper
				);
			return (
				o &&
					c.forEach(function (t) {
						t.addEventListener('scroll', i.update, ze);
					}),
				a && l.addEventListener('resize', i.update, ze),
				function () {
					o &&
						c.forEach(function (t) {
							t.removeEventListener('scroll', i.update, ze);
						}),
						a && l.removeEventListener('resize', i.update, ze);
				}
			);
		},
		data: {},
	};
	var qe = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	function Ve(t) {
		return t.replace(/left|right|bottom|top/g, function (t) {
			return qe[t];
		});
	}
	var Ke = { start: 'end', end: 'start' };
	function Qe(t) {
		return t.replace(/start|end/g, function (t) {
			return Ke[t];
		});
	}
	function Xe(t) {
		var e = fe(t);
		return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
	}
	function Ye(t) {
		return Te(Le(t)).left + Xe(t).scrollLeft;
	}
	function Ue(t) {
		var e = xe(t),
			i = e.overflow,
			n = e.overflowX,
			s = e.overflowY;
		return /auto|scroll|overlay|hidden/.test(i + s + n);
	}
	function Ge(t) {
		return ['html', 'body', '#document'].indexOf(ue(t)) >= 0
			? t.ownerDocument.body
			: me(t) && Ue(t)
			? t
			: Ge(Se(t));
	}
	function Je(t, e) {
		var i;
		void 0 === e && (e = []);
		var n = Ge(t),
			s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
			o = fe(n),
			r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
			a = e.concat(r);
		return s ? a : a.concat(Je(Se(r)));
	}
	function Ze(t) {
		return Object.assign({}, t, {
			left: t.x,
			top: t.y,
			right: t.x + t.width,
			bottom: t.y + t.height,
		});
	}
	function ti(t, e, i) {
		return e === Gt
			? Ze(
					(function (t, e) {
						var i = fe(t),
							n = Le(t),
							s = i.visualViewport,
							o = n.clientWidth,
							r = n.clientHeight,
							a = 0,
							l = 0;
						if (s) {
							(o = s.width), (r = s.height);
							var c = Ee();
							(c || (!c && 'fixed' === e)) &&
								((a = s.offsetLeft), (l = s.offsetTop));
						}
						return { width: o, height: r, x: a + Ye(t), y: l };
					})(t, i)
			  )
			: pe(e)
			? (function (t, e) {
					var i = Te(t, !1, 'fixed' === e);
					return (
						(i.top = i.top + t.clientTop),
						(i.left = i.left + t.clientLeft),
						(i.bottom = i.top + t.clientHeight),
						(i.right = i.left + t.clientWidth),
						(i.width = t.clientWidth),
						(i.height = t.clientHeight),
						(i.x = i.left),
						(i.y = i.top),
						i
					);
			  })(e, i)
			: Ze(
					(function (t) {
						var e,
							i = Le(t),
							n = Xe(t),
							s = null == (e = t.ownerDocument) ? void 0 : e.body,
							o = ve(
								i.scrollWidth,
								i.clientWidth,
								s ? s.scrollWidth : 0,
								s ? s.clientWidth : 0
							),
							r = ve(
								i.scrollHeight,
								i.clientHeight,
								s ? s.scrollHeight : 0,
								s ? s.clientHeight : 0
							),
							a = -n.scrollLeft + Ye(t),
							l = -n.scrollTop;
						return (
							'rtl' === xe(s || i).direction &&
								(a +=
									ve(i.clientWidth, s ? s.clientWidth : 0) -
									o),
							{ width: o, height: r, x: a, y: l }
						);
					})(Le(t))
			  );
	}
	function ei(t) {
		var e,
			i = t.reference,
			n = t.element,
			s = t.placement,
			o = s ? be(s) : null,
			r = s ? Fe(s) : null,
			a = i.x + i.width / 2 - n.width / 2,
			l = i.y + i.height / 2 - n.height / 2;
		switch (o) {
			case zt:
				e = { x: a, y: i.y - n.height };
				break;
			case Rt:
				e = { x: a, y: i.y + i.height };
				break;
			case qt:
				e = { x: i.x + i.width, y: l };
				break;
			case Vt:
				e = { x: i.x - n.width, y: l };
				break;
			default:
				e = { x: i.x, y: i.y };
		}
		var c = o ? Ie(o) : null;
		if (null != c) {
			var h = 'y' === c ? 'height' : 'width';
			switch (r) {
				case Xt:
					e[c] = e[c] - (i[h] / 2 - n[h] / 2);
					break;
				case Yt:
					e[c] = e[c] + (i[h] / 2 - n[h] / 2);
			}
		}
		return e;
	}
	function ii(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = void 0 === n ? t.placement : n,
			o = i.strategy,
			r = void 0 === o ? t.strategy : o,
			a = i.boundary,
			l = void 0 === a ? Ut : a,
			c = i.rootBoundary,
			h = void 0 === c ? Gt : c,
			d = i.elementContext,
			u = void 0 === d ? Jt : d,
			f = i.altBoundary,
			p = void 0 !== f && f,
			m = i.padding,
			g = void 0 === m ? 0 : m,
			_ = Pe('number' != typeof g ? g : Me(g, Qt)),
			b = u === Jt ? Zt : Jt,
			v = t.rects.popper,
			y = t.elements[p ? b : u],
			w = (function (t, e, i, n) {
				var s =
						'clippingParents' === e
							? (function (t) {
									var e = Je(Se(t)),
										i =
											['absolute', 'fixed'].indexOf(
												xe(t).position
											) >= 0 && me(t)
												? $e(t)
												: t;
									return pe(i)
										? e.filter(function (t) {
												return (
													pe(t) &&
													Oe(t, i) &&
													'body' !== ue(t)
												);
										  })
										: [];
							  })(t)
							: [].concat(e),
					o = [].concat(s, [i]),
					r = o[0],
					a = o.reduce(function (e, i) {
						var s = ti(t, i, n);
						return (
							(e.top = ve(s.top, e.top)),
							(e.right = ye(s.right, e.right)),
							(e.bottom = ye(s.bottom, e.bottom)),
							(e.left = ve(s.left, e.left)),
							e
						);
					}, ti(t, r, n));
				return (
					(a.width = a.right - a.left),
					(a.height = a.bottom - a.top),
					(a.x = a.left),
					(a.y = a.top),
					a
				);
			})(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
			A = Te(t.elements.reference),
			E = ei({
				reference: A,
				element: v,
				strategy: 'absolute',
				placement: s,
			}),
			T = Ze(Object.assign({}, v, E)),
			C = u === Jt ? T : A,
			O = {
				top: w.top - C.top + _.top,
				bottom: C.bottom - w.bottom + _.bottom,
				left: w.left - C.left + _.left,
				right: C.right - w.right + _.right,
			},
			x = t.modifiersData.offset;
		if (u === Jt && x) {
			var k = x[s];
			Object.keys(O).forEach(function (t) {
				var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
					i = [zt, Rt].indexOf(t) >= 0 ? 'y' : 'x';
				O[t] += k[i] * e;
			});
		}
		return O;
	}
	function ni(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = i.boundary,
			o = i.rootBoundary,
			r = i.padding,
			a = i.flipVariations,
			l = i.allowedAutoPlacements,
			c = void 0 === l ? ee : l,
			h = Fe(n),
			d = h
				? a
					? te
					: te.filter(function (t) {
							return Fe(t) === h;
					  })
				: Qt,
			u = d.filter(function (t) {
				return c.indexOf(t) >= 0;
			});
		0 === u.length && (u = d);
		var f = u.reduce(function (e, i) {
			return (
				(e[i] = ii(t, {
					placement: i,
					boundary: s,
					rootBoundary: o,
					padding: r,
				})[be(i)]),
				e
			);
		}, {});
		return Object.keys(f).sort(function (t, e) {
			return f[t] - f[e];
		});
	}
	const si = {
		name: 'flip',
		enabled: !0,
		phase: 'main',
		fn: function (t) {
			var e = t.state,
				i = t.options,
				n = t.name;
			if (!e.modifiersData[n]._skip) {
				for (
					var s = i.mainAxis,
						o = void 0 === s || s,
						r = i.altAxis,
						a = void 0 === r || r,
						l = i.fallbackPlacements,
						c = i.padding,
						h = i.boundary,
						d = i.rootBoundary,
						u = i.altBoundary,
						f = i.flipVariations,
						p = void 0 === f || f,
						m = i.allowedAutoPlacements,
						g = e.options.placement,
						_ = be(g),
						b =
							l ||
							(_ !== g && p
								? (function (t) {
										if (be(t) === Kt) return [];
										var e = Ve(t);
										return [Qe(t), e, Qe(e)];
								  })(g)
								: [Ve(g)]),
						v = [g].concat(b).reduce(function (t, i) {
							return t.concat(
								be(i) === Kt
									? ni(e, {
											placement: i,
											boundary: h,
											rootBoundary: d,
											padding: c,
											flipVariations: p,
											allowedAutoPlacements: m,
									  })
									: i
							);
						}, []),
						y = e.rects.reference,
						w = e.rects.popper,
						A = new Map(),
						E = !0,
						T = v[0],
						C = 0;
					C < v.length;
					C++
				) {
					var O = v[C],
						x = be(O),
						k = Fe(O) === Xt,
						L = [zt, Rt].indexOf(x) >= 0,
						S = L ? 'width' : 'height',
						D = ii(e, {
							placement: O,
							boundary: h,
							rootBoundary: d,
							altBoundary: u,
							padding: c,
						}),
						$ = L ? (k ? qt : Vt) : k ? Rt : zt;
					y[S] > w[S] && ($ = Ve($));
					var I = Ve($),
						N = [];
					if (
						(o && N.push(D[x] <= 0),
						a && N.push(D[$] <= 0, D[I] <= 0),
						N.every(function (t) {
							return t;
						}))
					) {
						(T = O), (E = !1);
						break;
					}
					A.set(O, N);
				}
				if (E)
					for (
						var P = function (t) {
								var e = v.find(function (e) {
									var i = A.get(e);
									if (i)
										return i
											.slice(0, t)
											.every(function (t) {
												return t;
											});
								});
								if (e) return (T = e), 'break';
							},
							M = p ? 3 : 1;
						M > 0 && 'break' !== P(M);
						M--
					);
				e.placement !== T &&
					((e.modifiersData[n]._skip = !0),
					(e.placement = T),
					(e.reset = !0));
			}
		},
		requiresIfExists: ['offset'],
		data: { _skip: !1 },
	};
	function oi(t, e, i) {
		return (
			void 0 === i && (i = { x: 0, y: 0 }),
			{
				top: t.top - e.height - i.y,
				right: t.right - e.width + i.x,
				bottom: t.bottom - e.height + i.y,
				left: t.left - e.width - i.x,
			}
		);
	}
	function ri(t) {
		return [zt, qt, Rt, Vt].some(function (e) {
			return t[e] >= 0;
		});
	}
	const ai = {
			name: 'hide',
			enabled: !0,
			phase: 'main',
			requiresIfExists: ['preventOverflow'],
			fn: function (t) {
				var e = t.state,
					i = t.name,
					n = e.rects.reference,
					s = e.rects.popper,
					o = e.modifiersData.preventOverflow,
					r = ii(e, { elementContext: 'reference' }),
					a = ii(e, { altBoundary: !0 }),
					l = oi(r, n),
					c = oi(a, s, o),
					h = ri(l),
					d = ri(c);
				(e.modifiersData[i] = {
					referenceClippingOffsets: l,
					popperEscapeOffsets: c,
					isReferenceHidden: h,
					hasPopperEscaped: d,
				}),
					(e.attributes.popper = Object.assign(
						{},
						e.attributes.popper,
						{
							'data-popper-reference-hidden': h,
							'data-popper-escaped': d,
						}
					));
			},
		},
		li = {
			name: 'offset',
			enabled: !0,
			phase: 'main',
			requires: ['popperOffsets'],
			fn: function (t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.offset,
					o = void 0 === s ? [0, 0] : s,
					r = ee.reduce(function (t, i) {
						return (
							(t[i] = (function (t, e, i) {
								var n = be(t),
									s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
									o =
										'function' == typeof i
											? i(
													Object.assign({}, e, {
														placement: t,
													})
											  )
											: i,
									r = o[0],
									a = o[1];
								return (
									(r = r || 0),
									(a = (a || 0) * s),
									[Vt, qt].indexOf(n) >= 0
										? { x: a, y: r }
										: { x: r, y: a }
								);
							})(i, e.rects, o)),
							t
						);
					}, {}),
					a = r[e.placement],
					l = a.x,
					c = a.y;
				null != e.modifiersData.popperOffsets &&
					((e.modifiersData.popperOffsets.x += l),
					(e.modifiersData.popperOffsets.y += c)),
					(e.modifiersData[n] = r);
			},
		},
		ci = {
			name: 'popperOffsets',
			enabled: !0,
			phase: 'read',
			fn: function (t) {
				var e = t.state,
					i = t.name;
				e.modifiersData[i] = ei({
					reference: e.rects.reference,
					element: e.rects.popper,
					strategy: 'absolute',
					placement: e.placement,
				});
			},
			data: {},
		},
		hi = {
			name: 'preventOverflow',
			enabled: !0,
			phase: 'main',
			fn: function (t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.mainAxis,
					o = void 0 === s || s,
					r = i.altAxis,
					a = void 0 !== r && r,
					l = i.boundary,
					c = i.rootBoundary,
					h = i.altBoundary,
					d = i.padding,
					u = i.tether,
					f = void 0 === u || u,
					p = i.tetherOffset,
					m = void 0 === p ? 0 : p,
					g = ii(e, {
						boundary: l,
						rootBoundary: c,
						padding: d,
						altBoundary: h,
					}),
					_ = be(e.placement),
					b = Fe(e.placement),
					v = !b,
					y = Ie(_),
					w = 'x' === y ? 'y' : 'x',
					A = e.modifiersData.popperOffsets,
					E = e.rects.reference,
					T = e.rects.popper,
					C =
						'function' == typeof m
							? m(
									Object.assign({}, e.rects, {
										placement: e.placement,
									})
							  )
							: m,
					O =
						'number' == typeof C
							? { mainAxis: C, altAxis: C }
							: Object.assign({ mainAxis: 0, altAxis: 0 }, C),
					x = e.modifiersData.offset
						? e.modifiersData.offset[e.placement]
						: null,
					k = { x: 0, y: 0 };
				if (A) {
					if (o) {
						var L,
							S = 'y' === y ? zt : Vt,
							D = 'y' === y ? Rt : qt,
							$ = 'y' === y ? 'height' : 'width',
							I = A[y],
							N = I + g[S],
							P = I - g[D],
							M = f ? -T[$] / 2 : 0,
							j = b === Xt ? E[$] : T[$],
							F = b === Xt ? -T[$] : -E[$],
							H = e.elements.arrow,
							W = f && H ? Ce(H) : { width: 0, height: 0 },
							B = e.modifiersData['arrow#persistent']
								? e.modifiersData['arrow#persistent'].padding
								: { top: 0, right: 0, bottom: 0, left: 0 },
							z = B[S],
							R = B[D],
							q = Ne(0, E[$], W[$]),
							V = v
								? E[$] / 2 - M - q - z - O.mainAxis
								: j - q - z - O.mainAxis,
							K = v
								? -E[$] / 2 + M + q + R + O.mainAxis
								: F + q + R + O.mainAxis,
							Q = e.elements.arrow && $e(e.elements.arrow),
							X = Q
								? 'y' === y
									? Q.clientTop || 0
									: Q.clientLeft || 0
								: 0,
							Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
							U = I + K - Y,
							G = Ne(
								f ? ye(N, I + V - Y - X) : N,
								I,
								f ? ve(P, U) : P
							);
						(A[y] = G), (k[y] = G - I);
					}
					if (a) {
						var J,
							Z = 'x' === y ? zt : Vt,
							tt = 'x' === y ? Rt : qt,
							et = A[w],
							it = 'y' === w ? 'height' : 'width',
							nt = et + g[Z],
							st = et - g[tt],
							ot = -1 !== [zt, Vt].indexOf(_),
							rt =
								null != (J = null == x ? void 0 : x[w]) ? J : 0,
							at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
							lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
							ct =
								f && ot
									? (function (t, e, i) {
											var n = Ne(t, e, i);
											return n > i ? i : n;
									  })(at, et, lt)
									: Ne(f ? at : nt, et, f ? lt : st);
						(A[w] = ct), (k[w] = ct - et);
					}
					e.modifiersData[n] = k;
				}
			},
			requiresIfExists: ['offset'],
		};
	function di(t, e, i) {
		void 0 === i && (i = !1);
		var n,
			s,
			o = me(e),
			r =
				me(e) &&
				(function (t) {
					var e = t.getBoundingClientRect(),
						i = we(e.width) / t.offsetWidth || 1,
						n = we(e.height) / t.offsetHeight || 1;
					return 1 !== i || 1 !== n;
				})(e),
			a = Le(e),
			l = Te(t, r, i),
			c = { scrollLeft: 0, scrollTop: 0 },
			h = { x: 0, y: 0 };
		return (
			(o || (!o && !i)) &&
				(('body' !== ue(e) || Ue(a)) &&
					(c =
						(n = e) !== fe(n) && me(n)
							? {
									scrollLeft: (s = n).scrollLeft,
									scrollTop: s.scrollTop,
							  }
							: Xe(n)),
				me(e)
					? (((h = Te(e, !0)).x += e.clientLeft),
					  (h.y += e.clientTop))
					: a && (h.x = Ye(a))),
			{
				x: l.left + c.scrollLeft - h.x,
				y: l.top + c.scrollTop - h.y,
				width: l.width,
				height: l.height,
			}
		);
	}
	function ui(t) {
		var e = new Map(),
			i = new Set(),
			n = [];
		function s(t) {
			i.add(t.name),
				[]
					.concat(t.requires || [], t.requiresIfExists || [])
					.forEach(function (t) {
						if (!i.has(t)) {
							var n = e.get(t);
							n && s(n);
						}
					}),
				n.push(t);
		}
		return (
			t.forEach(function (t) {
				e.set(t.name, t);
			}),
			t.forEach(function (t) {
				i.has(t.name) || s(t);
			}),
			n
		);
	}
	var fi = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
	function pi() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		return !e.some(function (t) {
			return !(t && 'function' == typeof t.getBoundingClientRect);
		});
	}
	function mi(t) {
		void 0 === t && (t = {});
		var e = t,
			i = e.defaultModifiers,
			n = void 0 === i ? [] : i,
			s = e.defaultOptions,
			o = void 0 === s ? fi : s;
		return function (t, e, i) {
			void 0 === i && (i = o);
			var s,
				r,
				a = {
					placement: 'bottom',
					orderedModifiers: [],
					options: Object.assign({}, fi, o),
					modifiersData: {},
					elements: { reference: t, popper: e },
					attributes: {},
					styles: {},
				},
				l = [],
				c = !1,
				h = {
					state: a,
					setOptions: function (i) {
						var s = 'function' == typeof i ? i(a.options) : i;
						d(),
							(a.options = Object.assign({}, o, a.options, s)),
							(a.scrollParents = {
								reference: pe(t)
									? Je(t)
									: t.contextElement
									? Je(t.contextElement)
									: [],
								popper: Je(e),
							});
						var r,
							c,
							u = (function (t) {
								var e = ui(t);
								return de.reduce(function (t, i) {
									return t.concat(
										e.filter(function (t) {
											return t.phase === i;
										})
									);
								}, []);
							})(
								((r = [].concat(n, a.options.modifiers)),
								(c = r.reduce(function (t, e) {
									var i = t[e.name];
									return (
										(t[e.name] = i
											? Object.assign({}, i, e, {
													options: Object.assign(
														{},
														i.options,
														e.options
													),
													data: Object.assign(
														{},
														i.data,
														e.data
													),
											  })
											: e),
										t
									);
								}, {})),
								Object.keys(c).map(function (t) {
									return c[t];
								}))
							);
						return (
							(a.orderedModifiers = u.filter(function (t) {
								return t.enabled;
							})),
							a.orderedModifiers.forEach(function (t) {
								var e = t.name,
									i = t.options,
									n = void 0 === i ? {} : i,
									s = t.effect;
								if ('function' == typeof s) {
									var o = s({
										state: a,
										name: e,
										instance: h,
										options: n,
									});
									l.push(o || function () {});
								}
							}),
							h.update()
						);
					},
					forceUpdate: function () {
						if (!c) {
							var t = a.elements,
								e = t.reference,
								i = t.popper;
							if (pi(e, i)) {
								(a.rects = {
									reference: di(
										e,
										$e(i),
										'fixed' === a.options.strategy
									),
									popper: Ce(i),
								}),
									(a.reset = !1),
									(a.placement = a.options.placement),
									a.orderedModifiers.forEach(function (t) {
										return (a.modifiersData[t.name] =
											Object.assign({}, t.data));
									});
								for (
									var n = 0;
									n < a.orderedModifiers.length;
									n++
								)
									if (!0 !== a.reset) {
										var s = a.orderedModifiers[n],
											o = s.fn,
											r = s.options,
											l = void 0 === r ? {} : r,
											d = s.name;
										'function' == typeof o &&
											(a =
												o({
													state: a,
													options: l,
													name: d,
													instance: h,
												}) || a);
									} else (a.reset = !1), (n = -1);
							}
						}
					},
					update:
						((s = function () {
							return new Promise(function (t) {
								h.forceUpdate(), t(a);
							});
						}),
						function () {
							return (
								r ||
									(r = new Promise(function (t) {
										Promise.resolve().then(function () {
											(r = void 0), t(s());
										});
									})),
								r
							);
						}),
					destroy: function () {
						d(), (c = !0);
					},
				};
			if (!pi(t, e)) return h;
			function d() {
				l.forEach(function (t) {
					return t();
				}),
					(l = []);
			}
			return (
				h.setOptions(i).then(function (t) {
					!c && i.onFirstUpdate && i.onFirstUpdate(t);
				}),
				h
			);
		};
	}
	var gi = mi(),
		_i = mi({ defaultModifiers: [Re, ci, Be, _e] }),
		bi = mi({ defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai] });
	const vi = Object.freeze(
			Object.defineProperty(
				{
					__proto__: null,
					afterMain: ae,
					afterRead: se,
					afterWrite: he,
					applyStyles: _e,
					arrow: je,
					auto: Kt,
					basePlacements: Qt,
					beforeMain: oe,
					beforeRead: ie,
					beforeWrite: le,
					bottom: Rt,
					clippingParents: Ut,
					computeStyles: Be,
					createPopper: bi,
					createPopperBase: gi,
					createPopperLite: _i,
					detectOverflow: ii,
					end: Yt,
					eventListeners: Re,
					flip: si,
					hide: ai,
					left: Vt,
					main: re,
					modifierPhases: de,
					offset: li,
					placements: ee,
					popper: Jt,
					popperGenerator: mi,
					popperOffsets: ci,
					preventOverflow: hi,
					read: ne,
					reference: Zt,
					right: qt,
					start: Xt,
					top: zt,
					variationPlacements: te,
					viewport: Gt,
					write: ce,
				},
				Symbol.toStringTag,
				{ value: 'Module' }
			)
		),
		yi = 'dropdown',
		wi = '.bs.dropdown',
		Ai = '.data-api',
		Ei = 'ArrowUp',
		Ti = 'ArrowDown',
		Ci = `hide${wi}`,
		Oi = `hidden${wi}`,
		xi = `show${wi}`,
		ki = `shown${wi}`,
		Li = `click${wi}${Ai}`,
		Si = `keydown${wi}${Ai}`,
		Di = `keyup${wi}${Ai}`,
		$i = 'show',
		Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
		Ni = `${Ii}.${$i}`,
		Pi = '.dropdown-menu',
		Mi = p() ? 'top-end' : 'top-start',
		ji = p() ? 'top-start' : 'top-end',
		Fi = p() ? 'bottom-end' : 'bottom-start',
		Hi = p() ? 'bottom-start' : 'bottom-end',
		Wi = p() ? 'left-start' : 'right-start',
		Bi = p() ? 'right-start' : 'left-start',
		zi = {
			autoClose: !0,
			boundary: 'clippingParents',
			display: 'dynamic',
			offset: [0, 2],
			popperConfig: null,
			reference: 'toggle',
		},
		Ri = {
			autoClose: '(boolean|string)',
			boundary: '(string|element)',
			display: 'string',
			offset: '(array|string|function)',
			popperConfig: '(null|object|function)',
			reference: '(string|element|object)',
		};
	class qi extends W {
		constructor(t, e) {
			super(t, e),
				(this._popper = null),
				(this._parent = this._element.parentNode),
				(this._menu =
					z.next(this._element, Pi)[0] ||
					z.prev(this._element, Pi)[0] ||
					z.findOne(Pi, this._parent)),
				(this._inNavbar = this._detectNavbar());
		}
		static get Default() {
			return zi;
		}
		static get DefaultType() {
			return Ri;
		}
		static get NAME() {
			return yi;
		}
		toggle() {
			return this._isShown() ? this.hide() : this.show();
		}
		show() {
			if (l(this._element) || this._isShown()) return;
			const t = { relatedTarget: this._element };
			if (!N.trigger(this._element, xi, t).defaultPrevented) {
				if (
					(this._createPopper(),
					'ontouchstart' in document.documentElement &&
						!this._parent.closest('.navbar-nav'))
				)
					for (const t of [].concat(...document.body.children))
						N.on(t, 'mouseover', h);
				this._element.focus(),
					this._element.setAttribute('aria-expanded', !0),
					this._menu.classList.add($i),
					this._element.classList.add($i),
					N.trigger(this._element, ki, t);
			}
		}
		hide() {
			if (l(this._element) || !this._isShown()) return;
			const t = { relatedTarget: this._element };
			this._completeHide(t);
		}
		dispose() {
			this._popper && this._popper.destroy(), super.dispose();
		}
		update() {
			(this._inNavbar = this._detectNavbar()),
				this._popper && this._popper.update();
		}
		_completeHide(t) {
			if (!N.trigger(this._element, Ci, t).defaultPrevented) {
				if ('ontouchstart' in document.documentElement)
					for (const t of [].concat(...document.body.children))
						N.off(t, 'mouseover', h);
				this._popper && this._popper.destroy(),
					this._menu.classList.remove($i),
					this._element.classList.remove($i),
					this._element.setAttribute('aria-expanded', 'false'),
					F.removeDataAttribute(this._menu, 'popper'),
					N.trigger(this._element, Oi, t);
			}
		}
		_getConfig(t) {
			if (
				'object' == typeof (t = super._getConfig(t)).reference &&
				!o(t.reference) &&
				'function' != typeof t.reference.getBoundingClientRect
			)
				throw new TypeError(
					`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
				);
			return t;
		}
		_createPopper() {
			if (void 0 === vi)
				throw new TypeError(
					"Bootstrap's dropdowns require Popper (https://popper.js.org)"
				);
			let t = this._element;
			'parent' === this._config.reference
				? (t = this._parent)
				: o(this._config.reference)
				? (t = r(this._config.reference))
				: 'object' == typeof this._config.reference &&
				  (t = this._config.reference);
			const e = this._getPopperConfig();
			this._popper = bi(t, this._menu, e);
		}
		_isShown() {
			return this._menu.classList.contains($i);
		}
		_getPlacement() {
			const t = this._parent;
			if (t.classList.contains('dropend')) return Wi;
			if (t.classList.contains('dropstart')) return Bi;
			if (t.classList.contains('dropup-center')) return 'top';
			if (t.classList.contains('dropdown-center')) return 'bottom';
			const e =
				'end' ===
				getComputedStyle(this._menu)
					.getPropertyValue('--bs-position')
					.trim();
			return t.classList.contains('dropup') ? (e ? ji : Mi) : e ? Hi : Fi;
		}
		_detectNavbar() {
			return null !== this._element.closest('.navbar');
		}
		_getOffset() {
			const { offset: t } = this._config;
			return 'string' == typeof t
				? t.split(',').map((t) => Number.parseInt(t, 10))
				: 'function' == typeof t
				? (e) => t(e, this._element)
				: t;
		}
		_getPopperConfig() {
			const t = {
				placement: this._getPlacement(),
				modifiers: [
					{
						name: 'preventOverflow',
						options: { boundary: this._config.boundary },
					},
					{ name: 'offset', options: { offset: this._getOffset() } },
				],
			};
			return (
				(this._inNavbar || 'static' === this._config.display) &&
					(F.setDataAttribute(this._menu, 'popper', 'static'),
					(t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
				{ ...t, ...g(this._config.popperConfig, [t]) }
			);
		}
		_selectMenuItem({ key: t, target: e }) {
			const i = z
				.find(
					'.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
					this._menu
				)
				.filter((t) => a(t));
			i.length && b(i, e, t === Ti, !i.includes(e)).focus();
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = qi.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t])
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
		static clearMenus(t) {
			if (2 === t.button || ('keyup' === t.type && 'Tab' !== t.key))
				return;
			const e = z.find(Ni);
			for (const i of e) {
				const e = qi.getInstance(i);
				if (!e || !1 === e._config.autoClose) continue;
				const n = t.composedPath(),
					s = n.includes(e._menu);
				if (
					n.includes(e._element) ||
					('inside' === e._config.autoClose && !s) ||
					('outside' === e._config.autoClose && s)
				)
					continue;
				if (
					e._menu.contains(t.target) &&
					(('keyup' === t.type && 'Tab' === t.key) ||
						/input|select|option|textarea|form/i.test(
							t.target.tagName
						))
				)
					continue;
				const o = { relatedTarget: e._element };
				'click' === t.type && (o.clickEvent = t), e._completeHide(o);
			}
		}
		static dataApiKeydownHandler(t) {
			const e = /input|textarea/i.test(t.target.tagName),
				i = 'Escape' === t.key,
				n = [Ei, Ti].includes(t.key);
			if (!n && !i) return;
			if (e && !i) return;
			t.preventDefault();
			const s = this.matches(Ii)
					? this
					: z.prev(this, Ii)[0] ||
					  z.next(this, Ii)[0] ||
					  z.findOne(Ii, t.delegateTarget.parentNode),
				o = qi.getOrCreateInstance(s);
			if (n)
				return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
			o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
		}
	}
	N.on(document, Si, Ii, qi.dataApiKeydownHandler),
		N.on(document, Si, Pi, qi.dataApiKeydownHandler),
		N.on(document, Li, qi.clearMenus),
		N.on(document, Di, qi.clearMenus),
		N.on(document, Li, Ii, function (t) {
			t.preventDefault(), qi.getOrCreateInstance(this).toggle();
		}),
		m(qi);
	const Vi = 'backdrop',
		Ki = 'show',
		Qi = `mousedown.bs.${Vi}`,
		Xi = {
			className: 'modal-backdrop',
			clickCallback: null,
			isAnimated: !1,
			isVisible: !0,
			rootElement: 'body',
		},
		Yi = {
			className: 'string',
			clickCallback: '(function|null)',
			isAnimated: 'boolean',
			isVisible: 'boolean',
			rootElement: '(element|string)',
		};
	class Ui extends H {
		constructor(t) {
			super(),
				(this._config = this._getConfig(t)),
				(this._isAppended = !1),
				(this._element = null);
		}
		static get Default() {
			return Xi;
		}
		static get DefaultType() {
			return Yi;
		}
		static get NAME() {
			return Vi;
		}
		show(t) {
			if (!this._config.isVisible) return void g(t);
			this._append();
			const e = this._getElement();
			this._config.isAnimated && d(e),
				e.classList.add(Ki),
				this._emulateAnimation(() => {
					g(t);
				});
		}
		hide(t) {
			this._config.isVisible
				? (this._getElement().classList.remove(Ki),
				  this._emulateAnimation(() => {
						this.dispose(), g(t);
				  }))
				: g(t);
		}
		dispose() {
			this._isAppended &&
				(N.off(this._element, Qi),
				this._element.remove(),
				(this._isAppended = !1));
		}
		_getElement() {
			if (!this._element) {
				const t = document.createElement('div');
				(t.className = this._config.className),
					this._config.isAnimated && t.classList.add('fade'),
					(this._element = t);
			}
			return this._element;
		}
		_configAfterMerge(t) {
			return (t.rootElement = r(t.rootElement)), t;
		}
		_append() {
			if (this._isAppended) return;
			const t = this._getElement();
			this._config.rootElement.append(t),
				N.on(t, Qi, () => {
					g(this._config.clickCallback);
				}),
				(this._isAppended = !0);
		}
		_emulateAnimation(t) {
			_(t, this._getElement(), this._config.isAnimated);
		}
	}
	const Gi = '.bs.focustrap',
		Ji = `focusin${Gi}`,
		Zi = `keydown.tab${Gi}`,
		tn = 'backward',
		en = { autofocus: !0, trapElement: null },
		nn = { autofocus: 'boolean', trapElement: 'element' };
	class sn extends H {
		constructor(t) {
			super(),
				(this._config = this._getConfig(t)),
				(this._isActive = !1),
				(this._lastTabNavDirection = null);
		}
		static get Default() {
			return en;
		}
		static get DefaultType() {
			return nn;
		}
		static get NAME() {
			return 'focustrap';
		}
		activate() {
			this._isActive ||
				(this._config.autofocus && this._config.trapElement.focus(),
				N.off(document, Gi),
				N.on(document, Ji, (t) => this._handleFocusin(t)),
				N.on(document, Zi, (t) => this._handleKeydown(t)),
				(this._isActive = !0));
		}
		deactivate() {
			this._isActive && ((this._isActive = !1), N.off(document, Gi));
		}
		_handleFocusin(t) {
			const { trapElement: e } = this._config;
			if (t.target === document || t.target === e || e.contains(t.target))
				return;
			const i = z.focusableChildren(e);
			0 === i.length
				? e.focus()
				: this._lastTabNavDirection === tn
				? i[i.length - 1].focus()
				: i[0].focus();
		}
		_handleKeydown(t) {
			'Tab' === t.key &&
				(this._lastTabNavDirection = t.shiftKey ? tn : 'forward');
		}
	}
	const on = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
		rn = '.sticky-top',
		an = 'padding-right',
		ln = 'margin-right';
	class cn {
		constructor() {
			this._element = document.body;
		}
		getWidth() {
			const t = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - t);
		}
		hide() {
			const t = this.getWidth();
			this._disableOverFlow(),
				this._setElementAttributes(this._element, an, (e) => e + t),
				this._setElementAttributes(on, an, (e) => e + t),
				this._setElementAttributes(rn, ln, (e) => e - t);
		}
		reset() {
			this._resetElementAttributes(this._element, 'overflow'),
				this._resetElementAttributes(this._element, an),
				this._resetElementAttributes(on, an),
				this._resetElementAttributes(rn, ln);
		}
		isOverflowing() {
			return this.getWidth() > 0;
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, 'overflow'),
				(this._element.style.overflow = 'hidden');
		}
		_setElementAttributes(t, e, i) {
			const n = this.getWidth();
			this._applyManipulationCallback(t, (t) => {
				if (
					t !== this._element &&
					window.innerWidth > t.clientWidth + n
				)
					return;
				this._saveInitialAttribute(t, e);
				const s = window.getComputedStyle(t).getPropertyValue(e);
				t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
			});
		}
		_saveInitialAttribute(t, e) {
			const i = t.style.getPropertyValue(e);
			i && F.setDataAttribute(t, e, i);
		}
		_resetElementAttributes(t, e) {
			this._applyManipulationCallback(t, (t) => {
				const i = F.getDataAttribute(t, e);
				null !== i
					? (F.removeDataAttribute(t, e), t.style.setProperty(e, i))
					: t.style.removeProperty(e);
			});
		}
		_applyManipulationCallback(t, e) {
			if (o(t)) e(t);
			else for (const i of z.find(t, this._element)) e(i);
		}
	}
	const hn = '.bs.modal',
		dn = `hide${hn}`,
		un = `hidePrevented${hn}`,
		fn = `hidden${hn}`,
		pn = `show${hn}`,
		mn = `shown${hn}`,
		gn = `resize${hn}`,
		_n = `click.dismiss${hn}`,
		bn = `mousedown.dismiss${hn}`,
		vn = `keydown.dismiss${hn}`,
		yn = `click${hn}.data-api`,
		wn = 'modal-open',
		An = 'show',
		En = 'modal-static',
		Tn = { backdrop: !0, focus: !0, keyboard: !0 },
		Cn = {
			backdrop: '(boolean|string)',
			focus: 'boolean',
			keyboard: 'boolean',
		};
	class On extends W {
		constructor(t, e) {
			super(t, e),
				(this._dialog = z.findOne('.modal-dialog', this._element)),
				(this._backdrop = this._initializeBackDrop()),
				(this._focustrap = this._initializeFocusTrap()),
				(this._isShown = !1),
				(this._isTransitioning = !1),
				(this._scrollBar = new cn()),
				this._addEventListeners();
		}
		static get Default() {
			return Tn;
		}
		static get DefaultType() {
			return Cn;
		}
		static get NAME() {
			return 'modal';
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t);
		}
		show(t) {
			this._isShown ||
				this._isTransitioning ||
				N.trigger(this._element, pn, { relatedTarget: t })
					.defaultPrevented ||
				((this._isShown = !0),
				(this._isTransitioning = !0),
				this._scrollBar.hide(),
				document.body.classList.add(wn),
				this._adjustDialog(),
				this._backdrop.show(() => this._showElement(t)));
		}
		hide() {
			this._isShown &&
				!this._isTransitioning &&
				(N.trigger(this._element, dn).defaultPrevented ||
					((this._isShown = !1),
					(this._isTransitioning = !0),
					this._focustrap.deactivate(),
					this._element.classList.remove(An),
					this._queueCallback(
						() => this._hideModal(),
						this._element,
						this._isAnimated()
					)));
		}
		dispose() {
			N.off(window, hn),
				N.off(this._dialog, hn),
				this._backdrop.dispose(),
				this._focustrap.deactivate(),
				super.dispose();
		}
		handleUpdate() {
			this._adjustDialog();
		}
		_initializeBackDrop() {
			return new Ui({
				isVisible: Boolean(this._config.backdrop),
				isAnimated: this._isAnimated(),
			});
		}
		_initializeFocusTrap() {
			return new sn({ trapElement: this._element });
		}
		_showElement(t) {
			document.body.contains(this._element) ||
				document.body.append(this._element),
				(this._element.style.display = 'block'),
				this._element.removeAttribute('aria-hidden'),
				this._element.setAttribute('aria-modal', !0),
				this._element.setAttribute('role', 'dialog'),
				(this._element.scrollTop = 0);
			const e = z.findOne('.modal-body', this._dialog);
			e && (e.scrollTop = 0),
				d(this._element),
				this._element.classList.add(An),
				this._queueCallback(
					() => {
						this._config.focus && this._focustrap.activate(),
							(this._isTransitioning = !1),
							N.trigger(this._element, mn, { relatedTarget: t });
					},
					this._dialog,
					this._isAnimated()
				);
		}
		_addEventListeners() {
			N.on(this._element, vn, (t) => {
				'Escape' === t.key &&
					(this._config.keyboard
						? this.hide()
						: this._triggerBackdropTransition());
			}),
				N.on(window, gn, () => {
					this._isShown &&
						!this._isTransitioning &&
						this._adjustDialog();
				}),
				N.on(this._element, bn, (t) => {
					N.one(this._element, _n, (e) => {
						this._element === t.target &&
							this._element === e.target &&
							('static' !== this._config.backdrop
								? this._config.backdrop && this.hide()
								: this._triggerBackdropTransition());
					});
				});
		}
		_hideModal() {
			(this._element.style.display = 'none'),
				this._element.setAttribute('aria-hidden', !0),
				this._element.removeAttribute('aria-modal'),
				this._element.removeAttribute('role'),
				(this._isTransitioning = !1),
				this._backdrop.hide(() => {
					document.body.classList.remove(wn),
						this._resetAdjustments(),
						this._scrollBar.reset(),
						N.trigger(this._element, fn);
				});
		}
		_isAnimated() {
			return this._element.classList.contains('fade');
		}
		_triggerBackdropTransition() {
			if (N.trigger(this._element, un).defaultPrevented) return;
			const t =
					this._element.scrollHeight >
					document.documentElement.clientHeight,
				e = this._element.style.overflowY;
			'hidden' === e ||
				this._element.classList.contains(En) ||
				(t || (this._element.style.overflowY = 'hidden'),
				this._element.classList.add(En),
				this._queueCallback(() => {
					this._element.classList.remove(En),
						this._queueCallback(() => {
							this._element.style.overflowY = e;
						}, this._dialog);
				}, this._dialog),
				this._element.focus());
		}
		_adjustDialog() {
			const t =
					this._element.scrollHeight >
					document.documentElement.clientHeight,
				e = this._scrollBar.getWidth(),
				i = e > 0;
			if (i && !t) {
				const t = p() ? 'paddingLeft' : 'paddingRight';
				this._element.style[t] = `${e}px`;
			}
			if (!i && t) {
				const t = p() ? 'paddingRight' : 'paddingLeft';
				this._element.style[t] = `${e}px`;
			}
		}
		_resetAdjustments() {
			(this._element.style.paddingLeft = ''),
				(this._element.style.paddingRight = '');
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				const i = On.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === i[t])
						throw new TypeError(`No method named "${t}"`);
					i[t](e);
				}
			});
		}
	}
	N.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
		const e = z.getElementFromSelector(this);
		['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
			N.one(e, pn, (t) => {
				t.defaultPrevented ||
					N.one(e, fn, () => {
						a(this) && this.focus();
					});
			});
		const i = z.findOne('.modal.show');
		i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
	}),
		R(On),
		m(On);
	const xn = '.bs.offcanvas',
		kn = '.data-api',
		Ln = `load${xn}${kn}`,
		Sn = 'show',
		Dn = 'showing',
		$n = 'hiding',
		In = '.offcanvas.show',
		Nn = `show${xn}`,
		Pn = `shown${xn}`,
		Mn = `hide${xn}`,
		jn = `hidePrevented${xn}`,
		Fn = `hidden${xn}`,
		Hn = `resize${xn}`,
		Wn = `click${xn}${kn}`,
		Bn = `keydown.dismiss${xn}`,
		zn = { backdrop: !0, keyboard: !0, scroll: !1 },
		Rn = {
			backdrop: '(boolean|string)',
			keyboard: 'boolean',
			scroll: 'boolean',
		};
	class qn extends W {
		constructor(t, e) {
			super(t, e),
				(this._isShown = !1),
				(this._backdrop = this._initializeBackDrop()),
				(this._focustrap = this._initializeFocusTrap()),
				this._addEventListeners();
		}
		static get Default() {
			return zn;
		}
		static get DefaultType() {
			return Rn;
		}
		static get NAME() {
			return 'offcanvas';
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t);
		}
		show(t) {
			this._isShown ||
				N.trigger(this._element, Nn, { relatedTarget: t })
					.defaultPrevented ||
				((this._isShown = !0),
				this._backdrop.show(),
				this._config.scroll || new cn().hide(),
				this._element.setAttribute('aria-modal', !0),
				this._element.setAttribute('role', 'dialog'),
				this._element.classList.add(Dn),
				this._queueCallback(
					() => {
						(this._config.scroll && !this._config.backdrop) ||
							this._focustrap.activate(),
							this._element.classList.add(Sn),
							this._element.classList.remove(Dn),
							N.trigger(this._element, Pn, { relatedTarget: t });
					},
					this._element,
					!0
				));
		}
		hide() {
			this._isShown &&
				(N.trigger(this._element, Mn).defaultPrevented ||
					(this._focustrap.deactivate(),
					this._element.blur(),
					(this._isShown = !1),
					this._element.classList.add($n),
					this._backdrop.hide(),
					this._queueCallback(
						() => {
							this._element.classList.remove(Sn, $n),
								this._element.removeAttribute('aria-modal'),
								this._element.removeAttribute('role'),
								this._config.scroll || new cn().reset(),
								N.trigger(this._element, Fn);
						},
						this._element,
						!0
					)));
		}
		dispose() {
			this._backdrop.dispose(),
				this._focustrap.deactivate(),
				super.dispose();
		}
		_initializeBackDrop() {
			const t = Boolean(this._config.backdrop);
			return new Ui({
				className: 'offcanvas-backdrop',
				isVisible: t,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				clickCallback: t
					? () => {
							'static' !== this._config.backdrop
								? this.hide()
								: N.trigger(this._element, jn);
					  }
					: null,
			});
		}
		_initializeFocusTrap() {
			return new sn({ trapElement: this._element });
		}
		_addEventListeners() {
			N.on(this._element, Bn, (t) => {
				'Escape' === t.key &&
					(this._config.keyboard
						? this.hide()
						: N.trigger(this._element, jn));
			});
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = qn.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (
						void 0 === e[t] ||
						t.startsWith('_') ||
						'constructor' === t
					)
						throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function (t) {
		const e = z.getElementFromSelector(this);
		if (
			(['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
			l(this))
		)
			return;
		N.one(e, Fn, () => {
			a(this) && this.focus();
		});
		const i = z.findOne(In);
		i && i !== e && qn.getInstance(i).hide(),
			qn.getOrCreateInstance(e).toggle(this);
	}),
		N.on(window, Ln, () => {
			for (const t of z.find(In)) qn.getOrCreateInstance(t).show();
		}),
		N.on(window, Hn, () => {
			for (const t of z.find(
				'[aria-modal][class*=show][class*=offcanvas-]'
			))
				'fixed' !== getComputedStyle(t).position &&
					qn.getOrCreateInstance(t).hide();
		}),
		R(qn),
		m(qn);
	const Vn = {
			'*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
			a: ['target', 'href', 'title', 'rel'],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: [],
		},
		Kn = new Set([
			'background',
			'cite',
			'href',
			'itemtype',
			'longdesc',
			'poster',
			'src',
			'xlink:href',
		]),
		Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
		Xn = (t, e) => {
			const i = t.nodeName.toLowerCase();
			return e.includes(i)
				? !Kn.has(i) || Boolean(Qn.test(t.nodeValue))
				: e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
		},
		Yn = {
			allowList: Vn,
			content: {},
			extraClass: '',
			html: !1,
			sanitize: !0,
			sanitizeFn: null,
			template: '<div></div>',
		},
		Un = {
			allowList: 'object',
			content: 'object',
			extraClass: '(string|function)',
			html: 'boolean',
			sanitize: 'boolean',
			sanitizeFn: '(null|function)',
			template: 'string',
		},
		Gn = {
			entry: '(string|element|function|null)',
			selector: '(string|element)',
		};
	class Jn extends H {
		constructor(t) {
			super(), (this._config = this._getConfig(t));
		}
		static get Default() {
			return Yn;
		}
		static get DefaultType() {
			return Un;
		}
		static get NAME() {
			return 'TemplateFactory';
		}
		getContent() {
			return Object.values(this._config.content)
				.map((t) => this._resolvePossibleFunction(t))
				.filter(Boolean);
		}
		hasContent() {
			return this.getContent().length > 0;
		}
		changeContent(t) {
			return (
				this._checkContent(t),
				(this._config.content = { ...this._config.content, ...t }),
				this
			);
		}
		toHtml() {
			const t = document.createElement('div');
			t.innerHTML = this._maybeSanitize(this._config.template);
			for (const [e, i] of Object.entries(this._config.content))
				this._setContent(t, i, e);
			const e = t.children[0],
				i = this._resolvePossibleFunction(this._config.extraClass);
			return i && e.classList.add(...i.split(' ')), e;
		}
		_typeCheckConfig(t) {
			super._typeCheckConfig(t), this._checkContent(t.content);
		}
		_checkContent(t) {
			for (const [e, i] of Object.entries(t))
				super._typeCheckConfig({ selector: e, entry: i }, Gn);
		}
		_setContent(t, e, i) {
			const n = z.findOne(i, t);
			n &&
				((e = this._resolvePossibleFunction(e))
					? o(e)
						? this._putElementInTemplate(r(e), n)
						: this._config.html
						? (n.innerHTML = this._maybeSanitize(e))
						: (n.textContent = e)
					: n.remove());
		}
		_maybeSanitize(t) {
			return this._config.sanitize
				? (function (t, e, i) {
						if (!t.length) return t;
						if (i && 'function' == typeof i) return i(t);
						const n = new window.DOMParser().parseFromString(
								t,
								'text/html'
							),
							s = [].concat(...n.body.querySelectorAll('*'));
						for (const t of s) {
							const i = t.nodeName.toLowerCase();
							if (!Object.keys(e).includes(i)) {
								t.remove();
								continue;
							}
							const n = [].concat(...t.attributes),
								s = [].concat(e['*'] || [], e[i] || []);
							for (const e of n)
								Xn(e, s) || t.removeAttribute(e.nodeName);
						}
						return n.body.innerHTML;
				  })(t, this._config.allowList, this._config.sanitizeFn)
				: t;
		}
		_resolvePossibleFunction(t) {
			return g(t, [this]);
		}
		_putElementInTemplate(t, e) {
			if (this._config.html) return (e.innerHTML = ''), void e.append(t);
			e.textContent = t.textContent;
		}
	}
	const Zn = new Set(['sanitize', 'allowList', 'sanitizeFn']),
		ts = 'fade',
		es = 'show',
		is = '.modal',
		ns = 'hide.bs.modal',
		ss = 'hover',
		os = 'focus',
		rs = {
			AUTO: 'auto',
			TOP: 'top',
			RIGHT: p() ? 'left' : 'right',
			BOTTOM: 'bottom',
			LEFT: p() ? 'right' : 'left',
		},
		as = {
			allowList: Vn,
			animation: !0,
			boundary: 'clippingParents',
			container: !1,
			customClass: '',
			delay: 0,
			fallbackPlacements: ['top', 'right', 'bottom', 'left'],
			html: !1,
			offset: [0, 6],
			placement: 'top',
			popperConfig: null,
			sanitize: !0,
			sanitizeFn: null,
			selector: !1,
			template:
				'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			title: '',
			trigger: 'hover focus',
		},
		ls = {
			allowList: 'object',
			animation: 'boolean',
			boundary: '(string|element)',
			container: '(string|element|boolean)',
			customClass: '(string|function)',
			delay: '(number|object)',
			fallbackPlacements: 'array',
			html: 'boolean',
			offset: '(array|string|function)',
			placement: '(string|function)',
			popperConfig: '(null|object|function)',
			sanitize: 'boolean',
			sanitizeFn: '(null|function)',
			selector: '(string|boolean)',
			template: 'string',
			title: '(string|element|function)',
			trigger: 'string',
		};
	class cs extends W {
		constructor(t, e) {
			if (void 0 === vi)
				throw new TypeError(
					"Bootstrap's tooltips require Popper (https://popper.js.org)"
				);
			super(t, e),
				(this._isEnabled = !0),
				(this._timeout = 0),
				(this._isHovered = null),
				(this._activeTrigger = {}),
				(this._popper = null),
				(this._templateFactory = null),
				(this._newContent = null),
				(this.tip = null),
				this._setListeners(),
				this._config.selector || this._fixTitle();
		}
		static get Default() {
			return as;
		}
		static get DefaultType() {
			return ls;
		}
		static get NAME() {
			return 'tooltip';
		}
		enable() {
			this._isEnabled = !0;
		}
		disable() {
			this._isEnabled = !1;
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled;
		}
		toggle() {
			this._isEnabled &&
				((this._activeTrigger.click = !this._activeTrigger.click),
				this._isShown() ? this._leave() : this._enter());
		}
		dispose() {
			clearTimeout(this._timeout),
				N.off(this._element.closest(is), ns, this._hideModalHandler),
				this._element.getAttribute('data-bs-original-title') &&
					this._element.setAttribute(
						'title',
						this._element.getAttribute('data-bs-original-title')
					),
				this._disposePopper(),
				super.dispose();
		}
		show() {
			if ('none' === this._element.style.display)
				throw new Error('Please use show on visible elements');
			if (!this._isWithContent() || !this._isEnabled) return;
			const t = N.trigger(
					this._element,
					this.constructor.eventName('show')
				),
				e = (
					c(this._element) ||
					this._element.ownerDocument.documentElement
				).contains(this._element);
			if (t.defaultPrevented || !e) return;
			this._disposePopper();
			const i = this._getTipElement();
			this._element.setAttribute(
				'aria-describedby',
				i.getAttribute('id')
			);
			const { container: n } = this._config;
			if (
				(this._element.ownerDocument.documentElement.contains(
					this.tip
				) ||
					(n.append(i),
					N.trigger(
						this._element,
						this.constructor.eventName('inserted')
					)),
				(this._popper = this._createPopper(i)),
				i.classList.add(es),
				'ontouchstart' in document.documentElement)
			)
				for (const t of [].concat(...document.body.children))
					N.on(t, 'mouseover', h);
			this._queueCallback(
				() => {
					N.trigger(
						this._element,
						this.constructor.eventName('shown')
					),
						!1 === this._isHovered && this._leave(),
						(this._isHovered = !1);
				},
				this.tip,
				this._isAnimated()
			);
		}
		hide() {
			if (
				this._isShown() &&
				!N.trigger(this._element, this.constructor.eventName('hide'))
					.defaultPrevented
			) {
				if (
					(this._getTipElement().classList.remove(es),
					'ontouchstart' in document.documentElement)
				)
					for (const t of [].concat(...document.body.children))
						N.off(t, 'mouseover', h);
				(this._activeTrigger.click = !1),
					(this._activeTrigger[os] = !1),
					(this._activeTrigger[ss] = !1),
					(this._isHovered = null),
					this._queueCallback(
						() => {
							this._isWithActiveTrigger() ||
								(this._isHovered || this._disposePopper(),
								this._element.removeAttribute(
									'aria-describedby'
								),
								N.trigger(
									this._element,
									this.constructor.eventName('hidden')
								));
						},
						this.tip,
						this._isAnimated()
					);
			}
		}
		update() {
			this._popper && this._popper.update();
		}
		_isWithContent() {
			return Boolean(this._getTitle());
		}
		_getTipElement() {
			return (
				this.tip ||
					(this.tip = this._createTipElement(
						this._newContent || this._getContentForTemplate()
					)),
				this.tip
			);
		}
		_createTipElement(t) {
			const e = this._getTemplateFactory(t).toHtml();
			if (!e) return null;
			e.classList.remove(ts, es),
				e.classList.add(`bs-${this.constructor.NAME}-auto`);
			const i = ((t) => {
				do {
					t += Math.floor(1e6 * Math.random());
				} while (document.getElementById(t));
				return t;
			})(this.constructor.NAME).toString();
			return (
				e.setAttribute('id', i),
				this._isAnimated() && e.classList.add(ts),
				e
			);
		}
		setContent(t) {
			(this._newContent = t),
				this._isShown() && (this._disposePopper(), this.show());
		}
		_getTemplateFactory(t) {
			return (
				this._templateFactory
					? this._templateFactory.changeContent(t)
					: (this._templateFactory = new Jn({
							...this._config,
							content: t,
							extraClass: this._resolvePossibleFunction(
								this._config.customClass
							),
					  })),
				this._templateFactory
			);
		}
		_getContentForTemplate() {
			return { '.tooltip-inner': this._getTitle() };
		}
		_getTitle() {
			return (
				this._resolvePossibleFunction(this._config.title) ||
				this._element.getAttribute('data-bs-original-title')
			);
		}
		_initializeOnDelegatedTarget(t) {
			return this.constructor.getOrCreateInstance(
				t.delegateTarget,
				this._getDelegateConfig()
			);
		}
		_isAnimated() {
			return (
				this._config.animation ||
				(this.tip && this.tip.classList.contains(ts))
			);
		}
		_isShown() {
			return this.tip && this.tip.classList.contains(es);
		}
		_createPopper(t) {
			const e = g(this._config.placement, [this, t, this._element]),
				i = rs[e.toUpperCase()];
			return bi(this._element, t, this._getPopperConfig(i));
		}
		_getOffset() {
			const { offset: t } = this._config;
			return 'string' == typeof t
				? t.split(',').map((t) => Number.parseInt(t, 10))
				: 'function' == typeof t
				? (e) => t(e, this._element)
				: t;
		}
		_resolvePossibleFunction(t) {
			return g(t, [this._element]);
		}
		_getPopperConfig(t) {
			const e = {
				placement: t,
				modifiers: [
					{
						name: 'flip',
						options: {
							fallbackPlacements: this._config.fallbackPlacements,
						},
					},
					{ name: 'offset', options: { offset: this._getOffset() } },
					{
						name: 'preventOverflow',
						options: { boundary: this._config.boundary },
					},
					{
						name: 'arrow',
						options: { element: `.${this.constructor.NAME}-arrow` },
					},
					{
						name: 'preSetPlacement',
						enabled: !0,
						phase: 'beforeMain',
						fn: (t) => {
							this._getTipElement().setAttribute(
								'data-popper-placement',
								t.state.placement
							);
						},
					},
				],
			};
			return { ...e, ...g(this._config.popperConfig, [e]) };
		}
		_setListeners() {
			const t = this._config.trigger.split(' ');
			for (const e of t)
				if ('click' === e)
					N.on(
						this._element,
						this.constructor.eventName('click'),
						this._config.selector,
						(t) => {
							this._initializeOnDelegatedTarget(t).toggle();
						}
					);
				else if ('manual' !== e) {
					const t =
							e === ss
								? this.constructor.eventName('mouseenter')
								: this.constructor.eventName('focusin'),
						i =
							e === ss
								? this.constructor.eventName('mouseleave')
								: this.constructor.eventName('focusout');
					N.on(this._element, t, this._config.selector, (t) => {
						const e = this._initializeOnDelegatedTarget(t);
						(e._activeTrigger['focusin' === t.type ? os : ss] = !0),
							e._enter();
					}),
						N.on(this._element, i, this._config.selector, (t) => {
							const e = this._initializeOnDelegatedTarget(t);
							(e._activeTrigger['focusout' === t.type ? os : ss] =
								e._element.contains(t.relatedTarget)),
								e._leave();
						});
				}
			(this._hideModalHandler = () => {
				this._element && this.hide();
			}),
				N.on(this._element.closest(is), ns, this._hideModalHandler);
		}
		_fixTitle() {
			const t = this._element.getAttribute('title');
			t &&
				(this._element.getAttribute('aria-label') ||
					this._element.textContent.trim() ||
					this._element.setAttribute('aria-label', t),
				this._element.setAttribute('data-bs-original-title', t),
				this._element.removeAttribute('title'));
		}
		_enter() {
			this._isShown() || this._isHovered
				? (this._isHovered = !0)
				: ((this._isHovered = !0),
				  this._setTimeout(() => {
						this._isHovered && this.show();
				  }, this._config.delay.show));
		}
		_leave() {
			this._isWithActiveTrigger() ||
				((this._isHovered = !1),
				this._setTimeout(() => {
					this._isHovered || this.hide();
				}, this._config.delay.hide));
		}
		_setTimeout(t, e) {
			clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
		}
		_isWithActiveTrigger() {
			return Object.values(this._activeTrigger).includes(!0);
		}
		_getConfig(t) {
			const e = F.getDataAttributes(this._element);
			for (const t of Object.keys(e)) Zn.has(t) && delete e[t];
			return (
				(t = { ...e, ...('object' == typeof t && t ? t : {}) }),
				(t = this._mergeConfigObj(t)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		_configAfterMerge(t) {
			return (
				(t.container =
					!1 === t.container ? document.body : r(t.container)),
				'number' == typeof t.delay &&
					(t.delay = { show: t.delay, hide: t.delay }),
				'number' == typeof t.title && (t.title = t.title.toString()),
				'number' == typeof t.content &&
					(t.content = t.content.toString()),
				t
			);
		}
		_getDelegateConfig() {
			const t = {};
			for (const [e, i] of Object.entries(this._config))
				this.constructor.Default[e] !== i && (t[e] = i);
			return (t.selector = !1), (t.trigger = 'manual'), t;
		}
		_disposePopper() {
			this._popper && (this._popper.destroy(), (this._popper = null)),
				this.tip && (this.tip.remove(), (this.tip = null));
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = cs.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t])
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	m(cs);
	const hs = {
			...cs.Default,
			content: '',
			offset: [0, 8],
			placement: 'right',
			template:
				'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			trigger: 'click',
		},
		ds = { ...cs.DefaultType, content: '(null|string|element|function)' };
	class us extends cs {
		static get Default() {
			return hs;
		}
		static get DefaultType() {
			return ds;
		}
		static get NAME() {
			return 'popover';
		}
		_isWithContent() {
			return this._getTitle() || this._getContent();
		}
		_getContentForTemplate() {
			return {
				'.popover-header': this._getTitle(),
				'.popover-body': this._getContent(),
			};
		}
		_getContent() {
			return this._resolvePossibleFunction(this._config.content);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = us.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t])
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	m(us);
	const fs = '.bs.scrollspy',
		ps = `activate${fs}`,
		ms = `click${fs}`,
		gs = `load${fs}.data-api`,
		_s = 'active',
		bs = '[href]',
		vs = '.nav-link',
		ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
		ws = {
			offset: null,
			rootMargin: '0px 0px -25%',
			smoothScroll: !1,
			target: null,
			threshold: [0.1, 0.5, 1],
		},
		As = {
			offset: '(number|null)',
			rootMargin: 'string',
			smoothScroll: 'boolean',
			target: 'element',
			threshold: 'array',
		};
	class Es extends W {
		constructor(t, e) {
			super(t, e),
				(this._targetLinks = new Map()),
				(this._observableSections = new Map()),
				(this._rootElement =
					'visible' === getComputedStyle(this._element).overflowY
						? null
						: this._element),
				(this._activeTarget = null),
				(this._observer = null),
				(this._previousScrollData = {
					visibleEntryTop: 0,
					parentScrollTop: 0,
				}),
				this.refresh();
		}
		static get Default() {
			return ws;
		}
		static get DefaultType() {
			return As;
		}
		static get NAME() {
			return 'scrollspy';
		}
		refresh() {
			this._initializeTargetsAndObservables(),
				this._maybeEnableSmoothScroll(),
				this._observer
					? this._observer.disconnect()
					: (this._observer = this._getNewObserver());
			for (const t of this._observableSections.values())
				this._observer.observe(t);
		}
		dispose() {
			this._observer.disconnect(), super.dispose();
		}
		_configAfterMerge(t) {
			return (
				(t.target = r(t.target) || document.body),
				(t.rootMargin = t.offset
					? `${t.offset}px 0px -30%`
					: t.rootMargin),
				'string' == typeof t.threshold &&
					(t.threshold = t.threshold
						.split(',')
						.map((t) => Number.parseFloat(t))),
				t
			);
		}
		_maybeEnableSmoothScroll() {
			this._config.smoothScroll &&
				(N.off(this._config.target, ms),
				N.on(this._config.target, ms, bs, (t) => {
					const e = this._observableSections.get(t.target.hash);
					if (e) {
						t.preventDefault();
						const i = this._rootElement || window,
							n = e.offsetTop - this._element.offsetTop;
						if (i.scrollTo)
							return void i.scrollTo({
								top: n,
								behavior: 'smooth',
							});
						i.scrollTop = n;
					}
				}));
		}
		_getNewObserver() {
			const t = {
				root: this._rootElement,
				threshold: this._config.threshold,
				rootMargin: this._config.rootMargin,
			};
			return new IntersectionObserver(
				(t) => this._observerCallback(t),
				t
			);
		}
		_observerCallback(t) {
			const e = (t) => this._targetLinks.get(`#${t.target.id}`),
				i = (t) => {
					(this._previousScrollData.visibleEntryTop =
						t.target.offsetTop),
						this._process(e(t));
				},
				n = (this._rootElement || document.documentElement).scrollTop,
				s = n >= this._previousScrollData.parentScrollTop;
			this._previousScrollData.parentScrollTop = n;
			for (const o of t) {
				if (!o.isIntersecting) {
					(this._activeTarget = null), this._clearActiveClass(e(o));
					continue;
				}
				const t =
					o.target.offsetTop >=
					this._previousScrollData.visibleEntryTop;
				if (s && t) {
					if ((i(o), !n)) return;
				} else s || t || i(o);
			}
		}
		_initializeTargetsAndObservables() {
			(this._targetLinks = new Map()),
				(this._observableSections = new Map());
			const t = z.find(bs, this._config.target);
			for (const e of t) {
				if (!e.hash || l(e)) continue;
				const t = z.findOne(decodeURI(e.hash), this._element);
				a(t) &&
					(this._targetLinks.set(decodeURI(e.hash), e),
					this._observableSections.set(e.hash, t));
			}
		}
		_process(t) {
			this._activeTarget !== t &&
				(this._clearActiveClass(this._config.target),
				(this._activeTarget = t),
				t.classList.add(_s),
				this._activateParents(t),
				N.trigger(this._element, ps, { relatedTarget: t }));
		}
		_activateParents(t) {
			if (t.classList.contains('dropdown-item'))
				z.findOne(
					'.dropdown-toggle',
					t.closest('.dropdown')
				).classList.add(_s);
			else
				for (const e of z.parents(t, '.nav, .list-group'))
					for (const t of z.prev(e, ys)) t.classList.add(_s);
		}
		_clearActiveClass(t) {
			t.classList.remove(_s);
			const e = z.find(`${bs}.${_s}`, t);
			for (const t of e) t.classList.remove(_s);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Es.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (
						void 0 === e[t] ||
						t.startsWith('_') ||
						'constructor' === t
					)
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	N.on(window, gs, () => {
		for (const t of z.find('[data-bs-spy="scroll"]'))
			Es.getOrCreateInstance(t);
	}),
		m(Es);
	const Ts = '.bs.tab',
		Cs = `hide${Ts}`,
		Os = `hidden${Ts}`,
		xs = `show${Ts}`,
		ks = `shown${Ts}`,
		Ls = `click${Ts}`,
		Ss = `keydown${Ts}`,
		Ds = `load${Ts}`,
		$s = 'ArrowLeft',
		Is = 'ArrowRight',
		Ns = 'ArrowUp',
		Ps = 'ArrowDown',
		Ms = 'Home',
		js = 'End',
		Fs = 'active',
		Hs = 'fade',
		Ws = 'show',
		Bs = '.dropdown-toggle',
		zs = `:not(${Bs})`,
		Rs =
			'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
		qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
		Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
	class Ks extends W {
		constructor(t) {
			super(t),
				(this._parent = this._element.closest(
					'.list-group, .nav, [role="tablist"]'
				)),
				this._parent &&
					(this._setInitialAttributes(
						this._parent,
						this._getChildren()
					),
					N.on(this._element, Ss, (t) => this._keydown(t)));
		}
		static get NAME() {
			return 'tab';
		}
		show() {
			const t = this._element;
			if (this._elemIsActive(t)) return;
			const e = this._getActiveElem(),
				i = e ? N.trigger(e, Cs, { relatedTarget: t }) : null;
			N.trigger(t, xs, { relatedTarget: e }).defaultPrevented ||
				(i && i.defaultPrevented) ||
				(this._deactivate(e, t), this._activate(t, e));
		}
		_activate(t, e) {
			t &&
				(t.classList.add(Fs),
				this._activate(z.getElementFromSelector(t)),
				this._queueCallback(
					() => {
						'tab' === t.getAttribute('role')
							? (t.removeAttribute('tabindex'),
							  t.setAttribute('aria-selected', !0),
							  this._toggleDropDown(t, !0),
							  N.trigger(t, ks, { relatedTarget: e }))
							: t.classList.add(Ws);
					},
					t,
					t.classList.contains(Hs)
				));
		}
		_deactivate(t, e) {
			t &&
				(t.classList.remove(Fs),
				t.blur(),
				this._deactivate(z.getElementFromSelector(t)),
				this._queueCallback(
					() => {
						'tab' === t.getAttribute('role')
							? (t.setAttribute('aria-selected', !1),
							  t.setAttribute('tabindex', '-1'),
							  this._toggleDropDown(t, !1),
							  N.trigger(t, Os, { relatedTarget: e }))
							: t.classList.remove(Ws);
					},
					t,
					t.classList.contains(Hs)
				));
		}
		_keydown(t) {
			if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
			t.stopPropagation(), t.preventDefault();
			const e = this._getChildren().filter((t) => !l(t));
			let i;
			if ([Ms, js].includes(t.key))
				i = e[t.key === Ms ? 0 : e.length - 1];
			else {
				const n = [Is, Ps].includes(t.key);
				i = b(e, t.target, n, !0);
			}
			i &&
				(i.focus({ preventScroll: !0 }),
				Ks.getOrCreateInstance(i).show());
		}
		_getChildren() {
			return z.find(qs, this._parent);
		}
		_getActiveElem() {
			return (
				this._getChildren().find((t) => this._elemIsActive(t)) || null
			);
		}
		_setInitialAttributes(t, e) {
			this._setAttributeIfNotExists(t, 'role', 'tablist');
			for (const t of e) this._setInitialAttributesOnChild(t);
		}
		_setInitialAttributesOnChild(t) {
			t = this._getInnerElement(t);
			const e = this._elemIsActive(t),
				i = this._getOuterElement(t);
			t.setAttribute('aria-selected', e),
				i !== t &&
					this._setAttributeIfNotExists(i, 'role', 'presentation'),
				e || t.setAttribute('tabindex', '-1'),
				this._setAttributeIfNotExists(t, 'role', 'tab'),
				this._setInitialAttributesOnTargetPanel(t);
		}
		_setInitialAttributesOnTargetPanel(t) {
			const e = z.getElementFromSelector(t);
			e &&
				(this._setAttributeIfNotExists(e, 'role', 'tabpanel'),
				t.id &&
					this._setAttributeIfNotExists(
						e,
						'aria-labelledby',
						`${t.id}`
					));
		}
		_toggleDropDown(t, e) {
			const i = this._getOuterElement(t);
			if (!i.classList.contains('dropdown')) return;
			const n = (t, n) => {
				const s = z.findOne(t, i);
				s && s.classList.toggle(n, e);
			};
			n(Bs, Fs),
				n('.dropdown-menu', Ws),
				i.setAttribute('aria-expanded', e);
		}
		_setAttributeIfNotExists(t, e, i) {
			t.hasAttribute(e) || t.setAttribute(e, i);
		}
		_elemIsActive(t) {
			return t.classList.contains(Fs);
		}
		_getInnerElement(t) {
			return t.matches(qs) ? t : z.findOne(qs, t);
		}
		_getOuterElement(t) {
			return t.closest('.nav-item, .list-group-item') || t;
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Ks.getOrCreateInstance(this);
				if ('string' == typeof t) {
					if (
						void 0 === e[t] ||
						t.startsWith('_') ||
						'constructor' === t
					)
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	N.on(document, Ls, Rs, function (t) {
		['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
			l(this) || Ks.getOrCreateInstance(this).show();
	}),
		N.on(window, Ds, () => {
			for (const t of z.find(Vs)) Ks.getOrCreateInstance(t);
		}),
		m(Ks);
	const Qs = '.bs.toast',
		Xs = `mouseover${Qs}`,
		Ys = `mouseout${Qs}`,
		Us = `focusin${Qs}`,
		Gs = `focusout${Qs}`,
		Js = `hide${Qs}`,
		Zs = `hidden${Qs}`,
		to = `show${Qs}`,
		eo = `shown${Qs}`,
		io = 'hide',
		no = 'show',
		so = 'showing',
		oo = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
		ro = { animation: !0, autohide: !0, delay: 5e3 };
	class ao extends W {
		constructor(t, e) {
			super(t, e),
				(this._timeout = null),
				(this._hasMouseInteraction = !1),
				(this._hasKeyboardInteraction = !1),
				this._setListeners();
		}
		static get Default() {
			return ro;
		}
		static get DefaultType() {
			return oo;
		}
		static get NAME() {
			return 'toast';
		}
		show() {
			N.trigger(this._element, to).defaultPrevented ||
				(this._clearTimeout(),
				this._config.animation && this._element.classList.add('fade'),
				this._element.classList.remove(io),
				d(this._element),
				this._element.classList.add(no, so),
				this._queueCallback(
					() => {
						this._element.classList.remove(so),
							N.trigger(this._element, eo),
							this._maybeScheduleHide();
					},
					this._element,
					this._config.animation
				));
		}
		hide() {
			this.isShown() &&
				(N.trigger(this._element, Js).defaultPrevented ||
					(this._element.classList.add(so),
					this._queueCallback(
						() => {
							this._element.classList.add(io),
								this._element.classList.remove(so, no),
								N.trigger(this._element, Zs);
						},
						this._element,
						this._config.animation
					)));
		}
		dispose() {
			this._clearTimeout(),
				this.isShown() && this._element.classList.remove(no),
				super.dispose();
		}
		isShown() {
			return this._element.classList.contains(no);
		}
		_maybeScheduleHide() {
			this._config.autohide &&
				(this._hasMouseInteraction ||
					this._hasKeyboardInteraction ||
					(this._timeout = setTimeout(() => {
						this.hide();
					}, this._config.delay)));
		}
		_onInteraction(t, e) {
			switch (t.type) {
				case 'mouseover':
				case 'mouseout':
					this._hasMouseInteraction = e;
					break;
				case 'focusin':
				case 'focusout':
					this._hasKeyboardInteraction = e;
			}
			if (e) return void this._clearTimeout();
			const i = t.relatedTarget;
			this._element === i ||
				this._element.contains(i) ||
				this._maybeScheduleHide();
		}
		_setListeners() {
			N.on(this._element, Xs, (t) => this._onInteraction(t, !0)),
				N.on(this._element, Ys, (t) => this._onInteraction(t, !1)),
				N.on(this._element, Us, (t) => this._onInteraction(t, !0)),
				N.on(this._element, Gs, (t) => this._onInteraction(t, !1));
		}
		_clearTimeout() {
			clearTimeout(this._timeout), (this._timeout = null);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = ao.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t])
						throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	return (
		R(ao),
		m(ao),
		{
			Alert: Q,
			Button: Y,
			Carousel: xt,
			Collapse: Bt,
			Dropdown: qi,
			Modal: On,
			Offcanvas: qn,
			Popover: us,
			ScrollSpy: Es,
			Tab: Ks,
			Toast: ao,
			Tooltip: cs,
		}
	);
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/**
 * Swiper 10.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 28, 2023
 */

var Swiper = (function () {
	'use strict';
	function e(e) {
		return (
			null !== e &&
			'object' == typeof e &&
			'constructor' in e &&
			e.constructor === Object
		);
	}
	function t(s, a) {
		void 0 === s && (s = {}),
			void 0 === a && (a = {}),
			Object.keys(a).forEach((i) => {
				void 0 === s[i]
					? (s[i] = a[i])
					: e(a[i]) &&
					  e(s[i]) &&
					  Object.keys(a[i]).length > 0 &&
					  t(s[i], a[i]);
			});
	}
	const s = {
		body: {},
		addEventListener() {},
		removeEventListener() {},
		activeElement: { blur() {}, nodeName: '' },
		querySelector: () => null,
		querySelectorAll: () => [],
		getElementById: () => null,
		createEvent: () => ({ initEvent() {} }),
		createElement: () => ({
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName: () => [],
		}),
		createElementNS: () => ({}),
		importNode: () => null,
		location: {
			hash: '',
			host: '',
			hostname: '',
			href: '',
			origin: '',
			pathname: '',
			protocol: '',
			search: '',
		},
	};
	function a() {
		const e = 'undefined' != typeof document ? document : {};
		return t(e, s), e;
	}
	const i = {
		document: s,
		navigator: { userAgent: '' },
		location: {
			hash: '',
			host: '',
			hostname: '',
			href: '',
			origin: '',
			pathname: '',
			protocol: '',
			search: '',
		},
		history: { replaceState() {}, pushState() {}, go() {}, back() {} },
		CustomEvent: function () {
			return this;
		},
		addEventListener() {},
		removeEventListener() {},
		getComputedStyle: () => ({ getPropertyValue: () => '' }),
		Image() {},
		Date() {},
		screen: {},
		setTimeout() {},
		clearTimeout() {},
		matchMedia: () => ({}),
		requestAnimationFrame: (e) =>
			'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
		cancelAnimationFrame(e) {
			'undefined' != typeof setTimeout && clearTimeout(e);
		},
	};
	function r() {
		const e = 'undefined' != typeof window ? window : {};
		return t(e, i), e;
	}
	function n(e, t) {
		return void 0 === t && (t = 0), setTimeout(e, t);
	}
	function l() {
		return Date.now();
	}
	function o(e, t) {
		void 0 === t && (t = 'x');
		const s = r();
		let a, i, n;
		const l = (function (e) {
			const t = r();
			let s;
			return (
				t.getComputedStyle && (s = t.getComputedStyle(e, null)),
				!s && e.currentStyle && (s = e.currentStyle),
				s || (s = e.style),
				s
			);
		})(e);
		return (
			s.WebKitCSSMatrix
				? ((i = l.transform || l.webkitTransform),
				  i.split(',').length > 6 &&
						(i = i
							.split(', ')
							.map((e) => e.replace(',', '.'))
							.join(', ')),
				  (n = new s.WebKitCSSMatrix('none' === i ? '' : i)))
				: ((n =
						l.MozTransform ||
						l.OTransform ||
						l.MsTransform ||
						l.msTransform ||
						l.transform ||
						l
							.getPropertyValue('transform')
							.replace('translate(', 'matrix(1, 0, 0, 1,')),
				  (a = n.toString().split(','))),
			'x' === t &&
				(i = s.WebKitCSSMatrix
					? n.m41
					: 16 === a.length
					? parseFloat(a[12])
					: parseFloat(a[4])),
			'y' === t &&
				(i = s.WebKitCSSMatrix
					? n.m42
					: 16 === a.length
					? parseFloat(a[13])
					: parseFloat(a[5])),
			i || 0
		);
	}
	function d(e) {
		return (
			'object' == typeof e &&
			null !== e &&
			e.constructor &&
			'Object' === Object.prototype.toString.call(e).slice(8, -1)
		);
	}
	function c() {
		const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
			t = ['__proto__', 'constructor', 'prototype'];
		for (let a = 1; a < arguments.length; a += 1) {
			const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
			if (
				null != i &&
				((s = i),
				!('undefined' != typeof window && void 0 !== window.HTMLElement
					? s instanceof HTMLElement
					: s && (1 === s.nodeType || 11 === s.nodeType)))
			) {
				const s = Object.keys(Object(i)).filter(
					(e) => t.indexOf(e) < 0
				);
				for (let t = 0, a = s.length; t < a; t += 1) {
					const a = s[t],
						r = Object.getOwnPropertyDescriptor(i, a);
					void 0 !== r &&
						r.enumerable &&
						(d(e[a]) && d(i[a])
							? i[a].__swiper__
								? (e[a] = i[a])
								: c(e[a], i[a])
							: !d(e[a]) && d(i[a])
							? ((e[a] = {}),
							  i[a].__swiper__ ? (e[a] = i[a]) : c(e[a], i[a]))
							: (e[a] = i[a]));
				}
			}
		}
		var s;
		return e;
	}
	function p(e, t, s) {
		e.style.setProperty(t, s);
	}
	function u(e) {
		let { swiper: t, targetPosition: s, side: a } = e;
		const i = r(),
			n = -t.translate;
		let l,
			o = null;
		const d = t.params.speed;
		(t.wrapperEl.style.scrollSnapType = 'none'),
			i.cancelAnimationFrame(t.cssModeFrameID);
		const c = s > n ? 'next' : 'prev',
			p = (e, t) => ('next' === c && e >= t) || ('prev' === c && e <= t),
			u = () => {
				(l = new Date().getTime()), null === o && (o = l);
				const e = Math.max(Math.min((l - o) / d, 1), 0),
					r = 0.5 - Math.cos(e * Math.PI) / 2;
				let c = n + r * (s - n);
				if (
					(p(c, s) && (c = s),
					t.wrapperEl.scrollTo({ [a]: c }),
					p(c, s))
				)
					return (
						(t.wrapperEl.style.overflow = 'hidden'),
						(t.wrapperEl.style.scrollSnapType = ''),
						setTimeout(() => {
							(t.wrapperEl.style.overflow = ''),
								t.wrapperEl.scrollTo({ [a]: c });
						}),
						void i.cancelAnimationFrame(t.cssModeFrameID)
					);
				t.cssModeFrameID = i.requestAnimationFrame(u);
			};
		u();
	}
	function m(e) {
		return (
			e.querySelector('.swiper-slide-transform') ||
			(e.shadowRoot &&
				e.shadowRoot.querySelector('.swiper-slide-transform')) ||
			e
		);
	}
	function h(e, t) {
		return (
			void 0 === t && (t = ''),
			[...e.children].filter((e) => e.matches(t))
		);
	}
	function f(e, t) {
		void 0 === t && (t = []);
		const s = document.createElement(e);
		return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
	}
	function g(e) {
		const t = r(),
			s = a(),
			i = e.getBoundingClientRect(),
			n = s.body,
			l = e.clientTop || n.clientTop || 0,
			o = e.clientLeft || n.clientLeft || 0,
			d = e === t ? t.scrollY : e.scrollTop,
			c = e === t ? t.scrollX : e.scrollLeft;
		return { top: i.top + d - l, left: i.left + c - o };
	}
	function v(e, t) {
		return r().getComputedStyle(e, null).getPropertyValue(t);
	}
	function w(e) {
		let t,
			s = e;
		if (s) {
			for (t = 0; null !== (s = s.previousSibling); )
				1 === s.nodeType && (t += 1);
			return t;
		}
	}
	function b(e, t) {
		const s = [];
		let a = e.parentElement;
		for (; a; )
			t ? a.matches(t) && s.push(a) : s.push(a), (a = a.parentElement);
		return s;
	}
	function y(e, t) {
		t &&
			e.addEventListener('transitionend', function s(a) {
				a.target === e &&
					(t.call(e, a), e.removeEventListener('transitionend', s));
			});
	}
	function E(e, t, s) {
		const a = r();
		return s
			? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
					parseFloat(
						a
							.getComputedStyle(e, null)
							.getPropertyValue(
								'width' === t ? 'margin-right' : 'margin-top'
							)
					) +
					parseFloat(
						a
							.getComputedStyle(e, null)
							.getPropertyValue(
								'width' === t ? 'margin-left' : 'margin-bottom'
							)
					)
			: e.offsetWidth;
	}
	let x, S, T;
	function M() {
		return (
			x ||
				(x = (function () {
					const e = r(),
						t = a();
					return {
						smoothScroll:
							t.documentElement &&
							t.documentElement.style &&
							'scrollBehavior' in t.documentElement.style,
						touch: !!(
							'ontouchstart' in e ||
							(e.DocumentTouch && t instanceof e.DocumentTouch)
						),
					};
				})()),
			x
		);
	}
	function C(e) {
		return (
			void 0 === e && (e = {}),
			S ||
				(S = (function (e) {
					let { userAgent: t } = void 0 === e ? {} : e;
					const s = M(),
						a = r(),
						i = a.navigator.platform,
						n = t || a.navigator.userAgent,
						l = { ios: !1, android: !1 },
						o = a.screen.width,
						d = a.screen.height,
						c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
					let p = n.match(/(iPad).*OS\s([\d_]+)/);
					const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
						m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
						h = 'Win32' === i;
					let f = 'MacIntel' === i;
					return (
						!p &&
							f &&
							s.touch &&
							[
								'1024x1366',
								'1366x1024',
								'834x1194',
								'1194x834',
								'834x1112',
								'1112x834',
								'768x1024',
								'1024x768',
								'820x1180',
								'1180x820',
								'810x1080',
								'1080x810',
							].indexOf(`${o}x${d}`) >= 0 &&
							((p = n.match(/(Version)\/([\d.]+)/)),
							p || (p = [0, 1, '13_0_0']),
							(f = !1)),
						c && !h && ((l.os = 'android'), (l.android = !0)),
						(p || m || u) && ((l.os = 'ios'), (l.ios = !0)),
						l
					);
				})(e)),
			S
		);
	}
	function P() {
		return (
			T ||
				(T = (function () {
					const e = r();
					let t = !1;
					function s() {
						const t = e.navigator.userAgent.toLowerCase();
						return (
							t.indexOf('safari') >= 0 &&
							t.indexOf('chrome') < 0 &&
							t.indexOf('android') < 0
						);
					}
					if (s()) {
						const s = String(e.navigator.userAgent);
						if (s.includes('Version/')) {
							const [e, a] = s
								.split('Version/')[1]
								.split(' ')[0]
								.split('.')
								.map((e) => Number(e));
							t = e < 16 || (16 === e && a < 2);
						}
					}
					return {
						isSafari: t || s(),
						needPerspectiveFix: t,
						isWebView:
							/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
								e.navigator.userAgent
							),
					};
				})()),
			T
		);
	}
	var L = {
		on(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ('function' != typeof t) return a;
			const i = s ? 'unshift' : 'push';
			return (
				e.split(' ').forEach((e) => {
					a.eventsListeners[e] || (a.eventsListeners[e] = []),
						a.eventsListeners[e][i](t);
				}),
				a
			);
		},
		once(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ('function' != typeof t) return a;
			function i() {
				a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
				for (
					var s = arguments.length, r = new Array(s), n = 0;
					n < s;
					n++
				)
					r[n] = arguments[n];
				t.apply(a, r);
			}
			return (i.__emitterProxy = t), a.on(e, i, s);
		},
		onAny(e, t) {
			const s = this;
			if (!s.eventsListeners || s.destroyed) return s;
			if ('function' != typeof e) return s;
			const a = t ? 'unshift' : 'push';
			return (
				s.eventsAnyListeners.indexOf(e) < 0 &&
					s.eventsAnyListeners[a](e),
				s
			);
		},
		offAny(e) {
			const t = this;
			if (!t.eventsListeners || t.destroyed) return t;
			if (!t.eventsAnyListeners) return t;
			const s = t.eventsAnyListeners.indexOf(e);
			return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
		},
		off(e, t) {
			const s = this;
			return !s.eventsListeners || s.destroyed
				? s
				: s.eventsListeners
				? (e.split(' ').forEach((e) => {
						void 0 === t
							? (s.eventsListeners[e] = [])
							: s.eventsListeners[e] &&
							  s.eventsListeners[e].forEach((a, i) => {
									(a === t ||
										(a.__emitterProxy &&
											a.__emitterProxy === t)) &&
										s.eventsListeners[e].splice(i, 1);
							  });
				  }),
				  s)
				: s;
		},
		emit() {
			const e = this;
			if (!e.eventsListeners || e.destroyed) return e;
			if (!e.eventsListeners) return e;
			let t, s, a;
			for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
				r[n] = arguments[n];
			'string' == typeof r[0] || Array.isArray(r[0])
				? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
				: ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
				s.unshift(a);
			return (
				(Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
					e.eventsAnyListeners &&
						e.eventsAnyListeners.length &&
						e.eventsAnyListeners.forEach((e) => {
							e.apply(a, [t, ...s]);
						}),
						e.eventsListeners &&
							e.eventsListeners[t] &&
							e.eventsListeners[t].forEach((e) => {
								e.apply(a, s);
							});
				}),
				e
			);
		},
	};
	const z = (e, t) => {
			if (!e || e.destroyed || !e.params) return;
			const s = t.closest(
				e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`
			);
			if (s) {
				let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
				!t &&
					e.isElement &&
					(s.shadowRoot
						? (t = s.shadowRoot.querySelector(
								`.${e.params.lazyPreloaderClass}`
						  ))
						: requestAnimationFrame(() => {
								s.shadowRoot &&
									((t = s.shadowRoot.querySelector(
										`.${e.params.lazyPreloaderClass}`
									)),
									t && t.remove());
						  })),
					t && t.remove();
			}
		},
		A = (e, t) => {
			if (!e.slides[t]) return;
			const s = e.slides[t].querySelector('[loading="lazy"]');
			s && s.removeAttribute('loading');
		},
		$ = (e) => {
			if (!e || e.destroyed || !e.params) return;
			let t = e.params.lazyPreloadPrevNext;
			const s = e.slides.length;
			if (!s || !t || t < 0) return;
			t = Math.min(t, s);
			const a =
					'auto' === e.params.slidesPerView
						? e.slidesPerViewDynamic()
						: Math.ceil(e.params.slidesPerView),
				i = e.activeIndex;
			if (e.params.grid && e.params.grid.rows > 1) {
				const s = i,
					r = [s - t];
				return (
					r.push(
						...Array.from({ length: t }).map((e, t) => s + a + t)
					),
					void e.slides.forEach((t, s) => {
						r.includes(t.column) && A(e, s);
					})
				);
			}
			const r = i + a - 1;
			if (e.params.rewind || e.params.loop)
				for (let a = i - t; a <= r + t; a += 1) {
					const t = ((a % s) + s) % s;
					(t < i || t > r) && A(e, t);
				}
			else
				for (
					let a = Math.max(i - t, 0);
					a <= Math.min(r + t, s - 1);
					a += 1
				)
					a !== i && (a > r || a < i) && A(e, a);
		};
	var I = {
		updateSize: function () {
			const e = this;
			let t, s;
			const a = e.el;
			(t =
				void 0 !== e.params.width && null !== e.params.width
					? e.params.width
					: a.clientWidth),
				(s =
					void 0 !== e.params.height && null !== e.params.height
						? e.params.height
						: a.clientHeight),
				(0 === t && e.isHorizontal()) ||
					(0 === s && e.isVertical()) ||
					((t =
						t -
						parseInt(v(a, 'padding-left') || 0, 10) -
						parseInt(v(a, 'padding-right') || 0, 10)),
					(s =
						s -
						parseInt(v(a, 'padding-top') || 0, 10) -
						parseInt(v(a, 'padding-bottom') || 0, 10)),
					Number.isNaN(t) && (t = 0),
					Number.isNaN(s) && (s = 0),
					Object.assign(e, {
						width: t,
						height: s,
						size: e.isHorizontal() ? t : s,
					}));
		},
		updateSlides: function () {
			const e = this;
			function t(t) {
				return e.isHorizontal()
					? t
					: {
							width: 'height',
							'margin-top': 'margin-left',
							'margin-bottom ': 'margin-right',
							'margin-left': 'margin-top',
							'margin-right': 'margin-bottom',
							'padding-left': 'padding-top',
							'padding-right': 'padding-bottom',
							marginRight: 'marginBottom',
					  }[t];
			}
			function s(e, s) {
				return parseFloat(e.getPropertyValue(t(s)) || 0);
			}
			const a = e.params,
				{
					wrapperEl: i,
					slidesEl: r,
					size: n,
					rtlTranslate: l,
					wrongRTL: o,
				} = e,
				d = e.virtual && a.virtual.enabled,
				c = d ? e.virtual.slides.length : e.slides.length,
				u = h(r, `.${e.params.slideClass}, swiper-slide`),
				m = d ? e.virtual.slides.length : u.length;
			let f = [];
			const g = [],
				w = [];
			let b = a.slidesOffsetBefore;
			'function' == typeof b && (b = a.slidesOffsetBefore.call(e));
			let y = a.slidesOffsetAfter;
			'function' == typeof y && (y = a.slidesOffsetAfter.call(e));
			const x = e.snapGrid.length,
				S = e.slidesGrid.length;
			let T = a.spaceBetween,
				M = -b,
				C = 0,
				P = 0;
			if (void 0 === n) return;
			'string' == typeof T && T.indexOf('%') >= 0
				? (T = (parseFloat(T.replace('%', '')) / 100) * n)
				: 'string' == typeof T && (T = parseFloat(T)),
				(e.virtualSize = -T),
				u.forEach((e) => {
					l ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
						(e.style.marginBottom = ''),
						(e.style.marginTop = '');
				}),
				a.centeredSlides &&
					a.cssMode &&
					(p(i, '--swiper-centered-offset-before', ''),
					p(i, '--swiper-centered-offset-after', ''));
			const L = a.grid && a.grid.rows > 1 && e.grid;
			let z;
			L && e.grid.initSlides(m);
			const A =
				'auto' === a.slidesPerView &&
				a.breakpoints &&
				Object.keys(a.breakpoints).filter(
					(e) => void 0 !== a.breakpoints[e].slidesPerView
				).length > 0;
			for (let i = 0; i < m; i += 1) {
				let r;
				if (
					((z = 0),
					u[i] && (r = u[i]),
					L && e.grid.updateSlide(i, r, m, t),
					!u[i] || 'none' !== v(r, 'display'))
				) {
					if ('auto' === a.slidesPerView) {
						A && (u[i].style[t('width')] = '');
						const n = getComputedStyle(r),
							l = r.style.transform,
							o = r.style.webkitTransform;
						if (
							(l && (r.style.transform = 'none'),
							o && (r.style.webkitTransform = 'none'),
							a.roundLengths)
						)
							z = e.isHorizontal()
								? E(r, 'width', !0)
								: E(r, 'height', !0);
						else {
							const e = s(n, 'width'),
								t = s(n, 'padding-left'),
								a = s(n, 'padding-right'),
								i = s(n, 'margin-left'),
								l = s(n, 'margin-right'),
								o = n.getPropertyValue('box-sizing');
							if (o && 'border-box' === o) z = e + i + l;
							else {
								const { clientWidth: s, offsetWidth: n } = r;
								z = e + t + a + i + l + (n - s);
							}
						}
						l && (r.style.transform = l),
							o && (r.style.webkitTransform = o),
							a.roundLengths && (z = Math.floor(z));
					} else
						(z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView),
							a.roundLengths && (z = Math.floor(z)),
							u[i] && (u[i].style[t('width')] = `${z}px`);
					u[i] && (u[i].swiperSlideSize = z),
						w.push(z),
						a.centeredSlides
							? ((M = M + z / 2 + C / 2 + T),
							  0 === C && 0 !== i && (M = M - n / 2 - T),
							  0 === i && (M = M - n / 2 - T),
							  Math.abs(M) < 0.001 && (M = 0),
							  a.roundLengths && (M = Math.floor(M)),
							  P % a.slidesPerGroup == 0 && f.push(M),
							  g.push(M))
							: (a.roundLengths && (M = Math.floor(M)),
							  (P - Math.min(e.params.slidesPerGroupSkip, P)) %
									e.params.slidesPerGroup ==
									0 && f.push(M),
							  g.push(M),
							  (M = M + z + T)),
						(e.virtualSize += z + T),
						(C = z),
						(P += 1);
				}
			}
			if (
				((e.virtualSize = Math.max(e.virtualSize, n) + y),
				l &&
					o &&
					('slide' === a.effect || 'coverflow' === a.effect) &&
					(i.style.width = `${e.virtualSize + T}px`),
				a.setWrapperSize &&
					(i.style[t('width')] = `${e.virtualSize + T}px`),
				L && e.grid.updateWrapperSize(z, f, t),
				!a.centeredSlides)
			) {
				const t = [];
				for (let s = 0; s < f.length; s += 1) {
					let i = f[s];
					a.roundLengths && (i = Math.floor(i)),
						f[s] <= e.virtualSize - n && t.push(i);
				}
				(f = t),
					Math.floor(e.virtualSize - n) -
						Math.floor(f[f.length - 1]) >
						1 && f.push(e.virtualSize - n);
			}
			if (d && a.loop) {
				const t = w[0] + T;
				if (a.slidesPerGroup > 1) {
					const s = Math.ceil(
							(e.virtual.slidesBefore + e.virtual.slidesAfter) /
								a.slidesPerGroup
						),
						i = t * a.slidesPerGroup;
					for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + i);
				}
				for (
					let s = 0;
					s < e.virtual.slidesBefore + e.virtual.slidesAfter;
					s += 1
				)
					1 === a.slidesPerGroup && f.push(f[f.length - 1] + t),
						g.push(g[g.length - 1] + t),
						(e.virtualSize += t);
			}
			if ((0 === f.length && (f = [0]), 0 !== T)) {
				const s =
					e.isHorizontal() && l ? 'marginLeft' : t('marginRight');
				u.filter(
					(e, t) => !(a.cssMode && !a.loop) || t !== u.length - 1
				).forEach((e) => {
					e.style[s] = `${T}px`;
				});
			}
			if (a.centeredSlides && a.centeredSlidesBounds) {
				let e = 0;
				w.forEach((t) => {
					e += t + (T || 0);
				}),
					(e -= T);
				const t = e - n;
				f = f.map((e) => (e <= 0 ? -b : e > t ? t + y : e));
			}
			if (a.centerInsufficientSlides) {
				let e = 0;
				if (
					(w.forEach((t) => {
						e += t + (T || 0);
					}),
					(e -= T),
					e < n)
				) {
					const t = (n - e) / 2;
					f.forEach((e, s) => {
						f[s] = e - t;
					}),
						g.forEach((e, s) => {
							g[s] = e + t;
						});
				}
			}
			if (
				(Object.assign(e, {
					slides: u,
					snapGrid: f,
					slidesGrid: g,
					slidesSizesGrid: w,
				}),
				a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
			) {
				p(i, '--swiper-centered-offset-before', -f[0] + 'px'),
					p(
						i,
						'--swiper-centered-offset-after',
						e.size / 2 - w[w.length - 1] / 2 + 'px'
					);
				const t = -e.snapGrid[0],
					s = -e.slidesGrid[0];
				(e.snapGrid = e.snapGrid.map((e) => e + t)),
					(e.slidesGrid = e.slidesGrid.map((e) => e + s));
			}
			if (
				(m !== c && e.emit('slidesLengthChange'),
				f.length !== x &&
					(e.params.watchOverflow && e.checkOverflow(),
					e.emit('snapGridLengthChange')),
				g.length !== S && e.emit('slidesGridLengthChange'),
				a.watchSlidesProgress && e.updateSlidesOffset(),
				!(
					d ||
					a.cssMode ||
					('slide' !== a.effect && 'fade' !== a.effect)
				))
			) {
				const t = `${a.containerModifierClass}backface-hidden`,
					s = e.el.classList.contains(t);
				m <= a.maxBackfaceHiddenSlides
					? s || e.el.classList.add(t)
					: s && e.el.classList.remove(t);
			}
		},
		updateAutoHeight: function (e) {
			const t = this,
				s = [],
				a = t.virtual && t.params.virtual.enabled;
			let i,
				r = 0;
			'number' == typeof e
				? t.setTransition(e)
				: !0 === e && t.setTransition(t.params.speed);
			const n = (e) =>
				a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
			if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
				if (t.params.centeredSlides)
					(t.visibleSlides || []).forEach((e) => {
						s.push(e);
					});
				else
					for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
						const e = t.activeIndex + i;
						if (e > t.slides.length && !a) break;
						s.push(n(e));
					}
			else s.push(n(t.activeIndex));
			for (i = 0; i < s.length; i += 1)
				if (void 0 !== s[i]) {
					const e = s[i].offsetHeight;
					r = e > r ? e : r;
				}
			(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
		},
		updateSlidesOffset: function () {
			const e = this,
				t = e.slides,
				s = e.isElement
					? e.isHorizontal()
						? e.wrapperEl.offsetLeft
						: e.wrapperEl.offsetTop
					: 0;
			for (let a = 0; a < t.length; a += 1)
				t[a].swiperSlideOffset =
					(e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) -
					s -
					e.cssOverflowAdjustment();
		},
		updateSlidesProgress: function (e) {
			void 0 === e && (e = (this && this.translate) || 0);
			const t = this,
				s = t.params,
				{ slides: a, rtlTranslate: i, snapGrid: r } = t;
			if (0 === a.length) return;
			void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
			let n = -e;
			i && (n = e),
				a.forEach((e) => {
					e.classList.remove(s.slideVisibleClass);
				}),
				(t.visibleSlidesIndexes = []),
				(t.visibleSlides = []);
			let l = s.spaceBetween;
			'string' == typeof l && l.indexOf('%') >= 0
				? (l = (parseFloat(l.replace('%', '')) / 100) * t.size)
				: 'string' == typeof l && (l = parseFloat(l));
			for (let e = 0; e < a.length; e += 1) {
				const o = a[e];
				let d = o.swiperSlideOffset;
				s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
				const c =
						(n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
						(o.swiperSlideSize + l),
					p =
						(n -
							r[0] +
							(s.centeredSlides ? t.minTranslate() : 0) -
							d) /
						(o.swiperSlideSize + l),
					u = -(n - d),
					m = u + t.slidesSizesGrid[e];
				((u >= 0 && u < t.size - 1) ||
					(m > 1 && m <= t.size) ||
					(u <= 0 && m >= t.size)) &&
					(t.visibleSlides.push(o),
					t.visibleSlidesIndexes.push(e),
					a[e].classList.add(s.slideVisibleClass)),
					(o.progress = i ? -c : c),
					(o.originalProgress = i ? -p : p);
			}
		},
		updateProgress: function (e) {
			const t = this;
			if (void 0 === e) {
				const s = t.rtlTranslate ? -1 : 1;
				e = (t && t.translate && t.translate * s) || 0;
			}
			const s = t.params,
				a = t.maxTranslate() - t.minTranslate();
			let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t;
			const o = r,
				d = n;
			if (0 === a) (i = 0), (r = !0), (n = !0);
			else {
				i = (e - t.minTranslate()) / a;
				const s = Math.abs(e - t.minTranslate()) < 1,
					l = Math.abs(e - t.maxTranslate()) < 1;
				(r = s || i <= 0),
					(n = l || i >= 1),
					s && (i = 0),
					l && (i = 1);
			}
			if (s.loop) {
				const s = t.getSlideIndexByData(0),
					a = t.getSlideIndexByData(t.slides.length - 1),
					i = t.slidesGrid[s],
					r = t.slidesGrid[a],
					n = t.slidesGrid[t.slidesGrid.length - 1],
					o = Math.abs(e);
				(l = o >= i ? (o - i) / n : (o + n - r) / n), l > 1 && (l -= 1);
			}
			Object.assign(t, {
				progress: i,
				progressLoop: l,
				isBeginning: r,
				isEnd: n,
			}),
				(s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
					t.updateSlidesProgress(e),
				r && !o && t.emit('reachBeginning toEdge'),
				n && !d && t.emit('reachEnd toEdge'),
				((o && !r) || (d && !n)) && t.emit('fromEdge'),
				t.emit('progress', i);
		},
		updateSlidesClasses: function () {
			const e = this,
				{ slides: t, params: s, slidesEl: a, activeIndex: i } = e,
				r = e.virtual && s.virtual.enabled,
				n = (e) => h(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
			let l;
			if (
				(t.forEach((e) => {
					e.classList.remove(
						s.slideActiveClass,
						s.slideNextClass,
						s.slidePrevClass
					);
				}),
				r)
			)
				if (s.loop) {
					let t = i - e.virtual.slidesBefore;
					t < 0 && (t = e.virtual.slides.length + t),
						t >= e.virtual.slides.length &&
							(t -= e.virtual.slides.length),
						(l = n(`[data-swiper-slide-index="${t}"]`));
				} else l = n(`[data-swiper-slide-index="${i}"]`);
			else l = t[i];
			if (l) {
				l.classList.add(s.slideActiveClass);
				let e = (function (e, t) {
					const s = [];
					for (; e.nextElementSibling; ) {
						const a = e.nextElementSibling;
						t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
					}
					return s;
				})(l, `.${s.slideClass}, swiper-slide`)[0];
				s.loop && !e && (e = t[0]),
					e && e.classList.add(s.slideNextClass);
				let a = (function (e, t) {
					const s = [];
					for (; e.previousElementSibling; ) {
						const a = e.previousElementSibling;
						t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
					}
					return s;
				})(l, `.${s.slideClass}, swiper-slide`)[0];
				s.loop && 0 === !a && (a = t[t.length - 1]),
					a && a.classList.add(s.slidePrevClass);
			}
			e.emitSlidesClasses();
		},
		updateActiveIndex: function (e) {
			const t = this,
				s = t.rtlTranslate ? t.translate : -t.translate,
				{
					snapGrid: a,
					params: i,
					activeIndex: r,
					realIndex: n,
					snapIndex: l,
				} = t;
			let o,
				d = e;
			const c = (e) => {
				let s = e - t.virtual.slidesBefore;
				return (
					s < 0 && (s = t.virtual.slides.length + s),
					s >= t.virtual.slides.length &&
						(s -= t.virtual.slides.length),
					s
				);
			};
			if (
				(void 0 === d &&
					(d = (function (e) {
						const { slidesGrid: t, params: s } = e,
							a = e.rtlTranslate ? e.translate : -e.translate;
						let i;
						for (let e = 0; e < t.length; e += 1)
							void 0 !== t[e + 1]
								? a >= t[e] &&
								  a < t[e + 1] - (t[e + 1] - t[e]) / 2
									? (i = e)
									: a >= t[e] && a < t[e + 1] && (i = e + 1)
								: a >= t[e] && (i = e);
						return (
							s.normalizeSlideIndex &&
								(i < 0 || void 0 === i) &&
								(i = 0),
							i
						);
					})(t)),
				a.indexOf(s) >= 0)
			)
				o = a.indexOf(s);
			else {
				const e = Math.min(i.slidesPerGroupSkip, d);
				o = e + Math.floor((d - e) / i.slidesPerGroup);
			}
			if ((o >= a.length && (o = a.length - 1), d === r))
				return (
					o !== l && ((t.snapIndex = o), t.emit('snapIndexChange')),
					void (
						t.params.loop &&
						t.virtual &&
						t.params.virtual.enabled &&
						(t.realIndex = c(d))
					)
				);
			let p;
			(p =
				t.virtual && i.virtual.enabled && i.loop
					? c(d)
					: t.slides[d]
					? parseInt(
							t.slides[d].getAttribute(
								'data-swiper-slide-index'
							) || d,
							10
					  )
					: d),
				Object.assign(t, {
					previousSnapIndex: l,
					snapIndex: o,
					previousRealIndex: n,
					realIndex: p,
					previousIndex: r,
					activeIndex: d,
				}),
				t.initialized && $(t),
				t.emit('activeIndexChange'),
				t.emit('snapIndexChange'),
				(t.initialized || t.params.runCallbacksOnInit) &&
					(n !== p && t.emit('realIndexChange'),
					t.emit('slideChange'));
		},
		updateClickedSlide: function (e, t) {
			const s = this,
				a = s.params;
			let i = e.closest(`.${a.slideClass}, swiper-slide`);
			!i &&
				s.isElement &&
				t &&
				t.length > 1 &&
				t.includes(e) &&
				[...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
					!i &&
						e.matches &&
						e.matches(`.${a.slideClass}, swiper-slide`) &&
						(i = e);
				});
			let r,
				n = !1;
			if (i)
				for (let e = 0; e < s.slides.length; e += 1)
					if (s.slides[e] === i) {
						(n = !0), (r = e);
						break;
					}
			if (!i || !n)
				return (
					(s.clickedSlide = void 0), void (s.clickedIndex = void 0)
				);
			(s.clickedSlide = i),
				s.virtual && s.params.virtual.enabled
					? (s.clickedIndex = parseInt(
							i.getAttribute('data-swiper-slide-index'),
							10
					  ))
					: (s.clickedIndex = r),
				a.slideToClickedSlide &&
					void 0 !== s.clickedIndex &&
					s.clickedIndex !== s.activeIndex &&
					s.slideToClickedSlide();
		},
	};
	var k = {
		getTranslate: function (e) {
			void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
			const {
				params: t,
				rtlTranslate: s,
				translate: a,
				wrapperEl: i,
			} = this;
			if (t.virtualTranslate) return s ? -a : a;
			if (t.cssMode) return a;
			let r = o(i, e);
			return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
		},
		setTranslate: function (e, t) {
			const s = this,
				{ rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s;
			let l,
				o = 0,
				d = 0;
			s.isHorizontal() ? (o = a ? -e : e) : (d = e),
				i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
				(s.previousTranslate = s.translate),
				(s.translate = s.isHorizontal() ? o : d),
				i.cssMode
					? (r[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
							s.isHorizontal() ? -o : -d)
					: i.virtualTranslate ||
					  (s.isHorizontal()
							? (o -= s.cssOverflowAdjustment())
							: (d -= s.cssOverflowAdjustment()),
					  (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
			const c = s.maxTranslate() - s.minTranslate();
			(l = 0 === c ? 0 : (e - s.minTranslate()) / c),
				l !== n && s.updateProgress(e),
				s.emit('setTranslate', s.translate, t);
		},
		minTranslate: function () {
			return -this.snapGrid[0];
		},
		maxTranslate: function () {
			return -this.snapGrid[this.snapGrid.length - 1];
		},
		translateTo: function (e, t, s, a, i) {
			void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				void 0 === a && (a = !0);
			const r = this,
				{ params: n, wrapperEl: l } = r;
			if (r.animating && n.preventInteractionOnTransition) return !1;
			const o = r.minTranslate(),
				d = r.maxTranslate();
			let c;
			if (
				((c = a && e > o ? o : a && e < d ? d : e),
				r.updateProgress(c),
				n.cssMode)
			) {
				const e = r.isHorizontal();
				if (0 === t) l[e ? 'scrollLeft' : 'scrollTop'] = -c;
				else {
					if (!r.support.smoothScroll)
						return (
							u({
								swiper: r,
								targetPosition: -c,
								side: e ? 'left' : 'top',
							}),
							!0
						);
					l.scrollTo({
						[e ? 'left' : 'top']: -c,
						behavior: 'smooth',
					});
				}
				return !0;
			}
			return (
				0 === t
					? (r.setTransition(0),
					  r.setTranslate(c),
					  s &&
							(r.emit('beforeTransitionStart', t, i),
							r.emit('transitionEnd')))
					: (r.setTransition(t),
					  r.setTranslate(c),
					  s &&
							(r.emit('beforeTransitionStart', t, i),
							r.emit('transitionStart')),
					  r.animating ||
							((r.animating = !0),
							r.onTranslateToWrapperTransitionEnd ||
								(r.onTranslateToWrapperTransitionEnd =
									function (e) {
										r &&
											!r.destroyed &&
											e.target === this &&
											(r.wrapperEl.removeEventListener(
												'transitionend',
												r.onTranslateToWrapperTransitionEnd
											),
											(r.onTranslateToWrapperTransitionEnd =
												null),
											delete r.onTranslateToWrapperTransitionEnd,
											s && r.emit('transitionEnd'));
									}),
							r.wrapperEl.addEventListener(
								'transitionend',
								r.onTranslateToWrapperTransitionEnd
							))),
				!0
			);
		},
	};
	function O(e) {
		let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
		const { activeIndex: r, previousIndex: n } = t;
		let l = a;
		if (
			(l || (l = r > n ? 'next' : r < n ? 'prev' : 'reset'),
			t.emit(`transition${i}`),
			s && r !== n)
		) {
			if ('reset' === l) return void t.emit(`slideResetTransition${i}`);
			t.emit(`slideChangeTransition${i}`),
				'next' === l
					? t.emit(`slideNextTransition${i}`)
					: t.emit(`slidePrevTransition${i}`);
		}
	}
	var D = {
		slideTo: function (e, t, s, a, i) {
			void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				'string' == typeof e && (e = parseInt(e, 10));
			const r = this;
			let n = e;
			n < 0 && (n = 0);
			const {
				params: l,
				snapGrid: o,
				slidesGrid: d,
				previousIndex: c,
				activeIndex: p,
				rtlTranslate: m,
				wrapperEl: h,
				enabled: f,
			} = r;
			if (
				(r.animating && l.preventInteractionOnTransition) ||
				(!f && !a && !i)
			)
				return !1;
			const g = Math.min(r.params.slidesPerGroupSkip, n);
			let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
			v >= o.length && (v = o.length - 1);
			const w = -o[v];
			if (l.normalizeSlideIndex)
				for (let e = 0; e < d.length; e += 1) {
					const t = -Math.floor(100 * w),
						s = Math.floor(100 * d[e]),
						a = Math.floor(100 * d[e + 1]);
					void 0 !== d[e + 1]
						? t >= s && t < a - (a - s) / 2
							? (n = e)
							: t >= s && t < a && (n = e + 1)
						: t >= s && (n = e);
				}
			if (r.initialized && n !== p) {
				if (
					!r.allowSlideNext &&
					(m
						? w > r.translate && w > r.minTranslate()
						: w < r.translate && w < r.minTranslate())
				)
					return !1;
				if (
					!r.allowSlidePrev &&
					w > r.translate &&
					w > r.maxTranslate() &&
					(p || 0) !== n
				)
					return !1;
			}
			let b;
			if (
				(n !== (c || 0) && s && r.emit('beforeSlideChangeStart'),
				r.updateProgress(w),
				(b = n > p ? 'next' : n < p ? 'prev' : 'reset'),
				(m && -w === r.translate) || (!m && w === r.translate))
			)
				return (
					r.updateActiveIndex(n),
					l.autoHeight && r.updateAutoHeight(),
					r.updateSlidesClasses(),
					'slide' !== l.effect && r.setTranslate(w),
					'reset' !== b &&
						(r.transitionStart(s, b), r.transitionEnd(s, b)),
					!1
				);
			if (l.cssMode) {
				const e = r.isHorizontal(),
					s = m ? w : -w;
				if (0 === t) {
					const t = r.virtual && r.params.virtual.enabled;
					t &&
						((r.wrapperEl.style.scrollSnapType = 'none'),
						(r._immediateVirtual = !0)),
						t &&
						!r._cssModeVirtualInitialSet &&
						r.params.initialSlide > 0
							? ((r._cssModeVirtualInitialSet = !0),
							  requestAnimationFrame(() => {
									h[e ? 'scrollLeft' : 'scrollTop'] = s;
							  }))
							: (h[e ? 'scrollLeft' : 'scrollTop'] = s),
						t &&
							requestAnimationFrame(() => {
								(r.wrapperEl.style.scrollSnapType = ''),
									(r._immediateVirtual = !1);
							});
				} else {
					if (!r.support.smoothScroll)
						return (
							u({
								swiper: r,
								targetPosition: s,
								side: e ? 'left' : 'top',
							}),
							!0
						);
					h.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
				}
				return !0;
			}
			return (
				r.setTransition(t),
				r.setTranslate(w),
				r.updateActiveIndex(n),
				r.updateSlidesClasses(),
				r.emit('beforeTransitionStart', t, a),
				r.transitionStart(s, b),
				0 === t
					? r.transitionEnd(s, b)
					: r.animating ||
					  ((r.animating = !0),
					  r.onSlideToWrapperTransitionEnd ||
							(r.onSlideToWrapperTransitionEnd = function (e) {
								r &&
									!r.destroyed &&
									e.target === this &&
									(r.wrapperEl.removeEventListener(
										'transitionend',
										r.onSlideToWrapperTransitionEnd
									),
									(r.onSlideToWrapperTransitionEnd = null),
									delete r.onSlideToWrapperTransitionEnd,
									r.transitionEnd(s, b));
							}),
					  r.wrapperEl.addEventListener(
							'transitionend',
							r.onSlideToWrapperTransitionEnd
					  )),
				!0
			);
		},
		slideToLoop: function (e, t, s, a) {
			if (
				(void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				'string' == typeof e)
			) {
				e = parseInt(e, 10);
			}
			const i = this;
			let r = e;
			return (
				i.params.loop &&
					(i.virtual && i.params.virtual.enabled
						? (r += i.virtual.slidesBefore)
						: (r = i.getSlideIndexByData(r))),
				i.slideTo(r, t, s, a)
			);
		},
		slideNext: function (e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{ enabled: i, params: r, animating: n } = a;
			if (!i) return a;
			let l = r.slidesPerGroup;
			'auto' === r.slidesPerView &&
				1 === r.slidesPerGroup &&
				r.slidesPerGroupAuto &&
				(l = Math.max(a.slidesPerViewDynamic('current', !0), 1));
			const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
				d = a.virtual && r.virtual.enabled;
			if (r.loop) {
				if (n && !d && r.loopPreventsSliding) return !1;
				if (
					(a.loopFix({ direction: 'next' }),
					(a._clientLeft = a.wrapperEl.clientLeft),
					a.activeIndex === a.slides.length - 1 && r.cssMode)
				)
					return (
						requestAnimationFrame(() => {
							a.slideTo(a.activeIndex + o, e, t, s);
						}),
						!0
					);
			}
			return r.rewind && a.isEnd
				? a.slideTo(0, e, t, s)
				: a.slideTo(a.activeIndex + o, e, t, s);
		},
		slidePrev: function (e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{
					params: i,
					snapGrid: r,
					slidesGrid: n,
					rtlTranslate: l,
					enabled: o,
					animating: d,
				} = a;
			if (!o) return a;
			const c = a.virtual && i.virtual.enabled;
			if (i.loop) {
				if (d && !c && i.loopPreventsSliding) return !1;
				a.loopFix({ direction: 'prev' }),
					(a._clientLeft = a.wrapperEl.clientLeft);
			}
			function p(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
			}
			const u = p(l ? a.translate : -a.translate),
				m = r.map((e) => p(e));
			let h = r[m.indexOf(u) - 1];
			if (void 0 === h && i.cssMode) {
				let e;
				r.forEach((t, s) => {
					u >= t && (e = s);
				}),
					void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
			}
			let f = 0;
			if (
				(void 0 !== h &&
					((f = n.indexOf(h)),
					f < 0 && (f = a.activeIndex - 1),
					'auto' === i.slidesPerView &&
						1 === i.slidesPerGroup &&
						i.slidesPerGroupAuto &&
						((f = f - a.slidesPerViewDynamic('previous', !0) + 1),
						(f = Math.max(f, 0)))),
				i.rewind && a.isBeginning)
			) {
				const i =
					a.params.virtual && a.params.virtual.enabled && a.virtual
						? a.virtual.slides.length - 1
						: a.slides.length - 1;
				return a.slideTo(i, e, t, s);
			}
			return i.loop && 0 === a.activeIndex && i.cssMode
				? (requestAnimationFrame(() => {
						a.slideTo(f, e, t, s);
				  }),
				  !0)
				: a.slideTo(f, e, t, s);
		},
		slideReset: function (e, t, s) {
			return (
				void 0 === e && (e = this.params.speed),
				void 0 === t && (t = !0),
				this.slideTo(this.activeIndex, e, t, s)
			);
		},
		slideToClosest: function (e, t, s, a) {
			void 0 === e && (e = this.params.speed),
				void 0 === t && (t = !0),
				void 0 === a && (a = 0.5);
			const i = this;
			let r = i.activeIndex;
			const n = Math.min(i.params.slidesPerGroupSkip, r),
				l = n + Math.floor((r - n) / i.params.slidesPerGroup),
				o = i.rtlTranslate ? i.translate : -i.translate;
			if (o >= i.snapGrid[l]) {
				const e = i.snapGrid[l];
				o - e > (i.snapGrid[l + 1] - e) * a &&
					(r += i.params.slidesPerGroup);
			} else {
				const e = i.snapGrid[l - 1];
				o - e <= (i.snapGrid[l] - e) * a &&
					(r -= i.params.slidesPerGroup);
			}
			return (
				(r = Math.max(r, 0)),
				(r = Math.min(r, i.slidesGrid.length - 1)),
				i.slideTo(r, e, t, s)
			);
		},
		slideToClickedSlide: function () {
			const e = this,
				{ params: t, slidesEl: s } = e,
				a =
					'auto' === t.slidesPerView
						? e.slidesPerViewDynamic()
						: t.slidesPerView;
			let i,
				r = e.clickedIndex;
			const l = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
			if (t.loop) {
				if (e.animating) return;
				(i = parseInt(
					e.clickedSlide.getAttribute('data-swiper-slide-index'),
					10
				)),
					t.centeredSlides
						? r < e.loopedSlides - a / 2 ||
						  r > e.slides.length - e.loopedSlides + a / 2
							? (e.loopFix(),
							  (r = e.getSlideIndex(
									h(
										s,
										`${l}[data-swiper-slide-index="${i}"]`
									)[0]
							  )),
							  n(() => {
									e.slideTo(r);
							  }))
							: e.slideTo(r)
						: r > e.slides.length - a
						? (e.loopFix(),
						  (r = e.getSlideIndex(
								h(s, `${l}[data-swiper-slide-index="${i}"]`)[0]
						  )),
						  n(() => {
								e.slideTo(r);
						  }))
						: e.slideTo(r);
			} else e.slideTo(r);
		},
	};
	var G = {
		loopCreate: function (e) {
			const t = this,
				{ params: s, slidesEl: a } = t;
			if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
			h(a, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
				e.setAttribute('data-swiper-slide-index', t);
			}),
				t.loopFix({
					slideRealIndex: e,
					direction: s.centeredSlides ? void 0 : 'next',
				});
		},
		loopFix: function (e) {
			let {
				slideRealIndex: t,
				slideTo: s = !0,
				direction: a,
				setTranslate: i,
				activeSlideIndex: r,
				byController: n,
				byMousewheel: l,
			} = void 0 === e ? {} : e;
			const o = this;
			if (!o.params.loop) return;
			o.emit('beforeLoopFix');
			const {
				slides: d,
				allowSlidePrev: c,
				allowSlideNext: p,
				slidesEl: u,
				params: m,
			} = o;
			if (
				((o.allowSlidePrev = !0),
				(o.allowSlideNext = !0),
				o.virtual && m.virtual.enabled)
			)
				return (
					s &&
						(m.centeredSlides || 0 !== o.snapIndex
							? m.centeredSlides && o.snapIndex < m.slidesPerView
								? o.slideTo(
										o.virtual.slides.length + o.snapIndex,
										0,
										!1,
										!0
								  )
								: o.snapIndex === o.snapGrid.length - 1 &&
								  o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
							: o.slideTo(o.virtual.slides.length, 0, !1, !0)),
					(o.allowSlidePrev = c),
					(o.allowSlideNext = p),
					void o.emit('loopFix')
				);
			const h =
				'auto' === m.slidesPerView
					? o.slidesPerViewDynamic()
					: Math.ceil(parseFloat(m.slidesPerView, 10));
			let f = m.loopedSlides || h;
			f % m.slidesPerGroup != 0 &&
				(f += m.slidesPerGroup - (f % m.slidesPerGroup)),
				(o.loopedSlides = f);
			const g = [],
				v = [];
			let w = o.activeIndex;
			void 0 === r
				? (r = o.getSlideIndex(
						o.slides.filter((e) =>
							e.classList.contains(m.slideActiveClass)
						)[0]
				  ))
				: (w = r);
			const b = 'next' === a || !a,
				y = 'prev' === a || !a;
			let E = 0,
				x = 0;
			if (r < f) {
				E = Math.max(f - r, m.slidesPerGroup);
				for (let e = 0; e < f - r; e += 1) {
					const t = e - Math.floor(e / d.length) * d.length;
					g.push(d.length - t - 1);
				}
			} else if (r > o.slides.length - 2 * f) {
				x = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
				for (let e = 0; e < x; e += 1) {
					const t = e - Math.floor(e / d.length) * d.length;
					v.push(t);
				}
			}
			if (
				(y &&
					g.forEach((e) => {
						(o.slides[e].swiperLoopMoveDOM = !0),
							u.prepend(o.slides[e]),
							(o.slides[e].swiperLoopMoveDOM = !1);
					}),
				b &&
					v.forEach((e) => {
						(o.slides[e].swiperLoopMoveDOM = !0),
							u.append(o.slides[e]),
							(o.slides[e].swiperLoopMoveDOM = !1);
					}),
				o.recalcSlides(),
				'auto' === m.slidesPerView && o.updateSlides(),
				m.watchSlidesProgress && o.updateSlidesOffset(),
				s)
			)
				if (g.length > 0 && y)
					if (void 0 === t) {
						const e = o.slidesGrid[w],
							t = o.slidesGrid[w + E] - e;
						l
							? o.setTranslate(o.translate - t)
							: (o.slideTo(w + E, 0, !1, !0),
							  i &&
									((o.touches[
										o.isHorizontal() ? 'startX' : 'startY'
									] += t),
									(o.touchEventsData.currentTranslate =
										o.translate)));
					} else
						i &&
							(o.slideToLoop(t, 0, !1, !0),
							(o.touchEventsData.currentTranslate = o.translate));
				else if (v.length > 0 && b)
					if (void 0 === t) {
						const e = o.slidesGrid[w],
							t = o.slidesGrid[w - x] - e;
						l
							? o.setTranslate(o.translate - t)
							: (o.slideTo(w - x, 0, !1, !0),
							  i &&
									((o.touches[
										o.isHorizontal() ? 'startX' : 'startY'
									] += t),
									(o.touchEventsData.currentTranslate =
										o.translate)));
					} else o.slideToLoop(t, 0, !1, !0);
			if (
				((o.allowSlidePrev = c),
				(o.allowSlideNext = p),
				o.controller && o.controller.control && !n)
			) {
				const e = {
					slideRealIndex: t,
					direction: a,
					setTranslate: i,
					activeSlideIndex: r,
					byController: !0,
				};
				Array.isArray(o.controller.control)
					? o.controller.control.forEach((t) => {
							!t.destroyed &&
								t.params.loop &&
								t.loopFix({
									...e,
									slideTo:
										t.params.slidesPerView ===
											m.slidesPerView && s,
								});
					  })
					: o.controller.control instanceof o.constructor &&
					  o.controller.control.params.loop &&
					  o.controller.control.loopFix({
							...e,
							slideTo:
								o.controller.control.params.slidesPerView ===
									m.slidesPerView && s,
					  });
			}
			o.emit('loopFix');
		},
		loopDestroy: function () {
			const e = this,
				{ params: t, slidesEl: s } = e;
			if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
			e.recalcSlides();
			const a = [];
			e.slides.forEach((e) => {
				const t =
					void 0 === e.swiperSlideIndex
						? 1 * e.getAttribute('data-swiper-slide-index')
						: e.swiperSlideIndex;
				a[t] = e;
			}),
				e.slides.forEach((e) => {
					e.removeAttribute('data-swiper-slide-index');
				}),
				a.forEach((e) => {
					s.append(e);
				}),
				e.recalcSlides(),
				e.slideTo(e.realIndex, 0);
		},
	};
	function H(e) {
		const t = this,
			s = a(),
			i = r(),
			n = t.touchEventsData;
		n.evCache.push(e);
		const { params: o, touches: d, enabled: c } = t;
		if (!c) return;
		if (!o.simulateTouch && 'mouse' === e.pointerType) return;
		if (t.animating && o.preventInteractionOnTransition) return;
		!t.animating && o.cssMode && o.loop && t.loopFix();
		let p = e;
		p.originalEvent && (p = p.originalEvent);
		let u = p.target;
		if ('wrapper' === o.touchEventsTarget && !t.wrapperEl.contains(u))
			return;
		if ('which' in p && 3 === p.which) return;
		if ('button' in p && p.button > 0) return;
		if (n.isTouched && n.isMoved) return;
		const m = !!o.noSwipingClass && '' !== o.noSwipingClass,
			h = e.composedPath ? e.composedPath() : e.path;
		m && p.target && p.target.shadowRoot && h && (u = h[0]);
		const f = o.noSwipingSelector
				? o.noSwipingSelector
				: `.${o.noSwipingClass}`,
			g = !(!p.target || !p.target.shadowRoot);
		if (
			o.noSwiping &&
			(g
				? (function (e, t) {
						return (
							void 0 === t && (t = this),
							(function t(s) {
								if (!s || s === a() || s === r()) return null;
								s.assignedSlot && (s = s.assignedSlot);
								const i = s.closest(e);
								return i || s.getRootNode
									? i || t(s.getRootNode().host)
									: null;
							})(t)
						);
				  })(f, u)
				: u.closest(f))
		)
			return void (t.allowClick = !0);
		if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
		(d.currentX = p.pageX), (d.currentY = p.pageY);
		const v = d.currentX,
			w = d.currentY,
			b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
			y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
		if (b && (v <= y || v >= i.innerWidth - y)) {
			if ('prevent' !== b) return;
			e.preventDefault();
		}
		Object.assign(n, {
			isTouched: !0,
			isMoved: !1,
			allowTouchCallbacks: !0,
			isScrolling: void 0,
			startMoving: void 0,
		}),
			(d.startX = v),
			(d.startY = w),
			(n.touchStartTime = l()),
			(t.allowClick = !0),
			t.updateSize(),
			(t.swipeDirection = void 0),
			o.threshold > 0 && (n.allowThresholdMove = !1);
		let E = !0;
		u.matches(n.focusableElements) &&
			((E = !1), 'SELECT' === u.nodeName && (n.isTouched = !1)),
			s.activeElement &&
				s.activeElement.matches(n.focusableElements) &&
				s.activeElement !== u &&
				s.activeElement.blur();
		const x = E && t.allowTouchMove && o.touchStartPreventDefault;
		(!o.touchStartForcePreventDefault && !x) ||
			u.isContentEditable ||
			p.preventDefault(),
			o.freeMode &&
				o.freeMode.enabled &&
				t.freeMode &&
				t.animating &&
				!o.cssMode &&
				t.freeMode.onTouchStart(),
			t.emit('touchStart', p);
	}
	function X(e) {
		const t = a(),
			s = this,
			i = s.touchEventsData,
			{ params: r, touches: n, rtlTranslate: o, enabled: d } = s;
		if (!d) return;
		if (!r.simulateTouch && 'mouse' === e.pointerType) return;
		let c = e;
		if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
			return void (
				i.startMoving &&
				i.isScrolling &&
				s.emit('touchMoveOpposite', c)
			);
		const p = i.evCache.findIndex((e) => e.pointerId === c.pointerId);
		p >= 0 && (i.evCache[p] = c);
		const u = i.evCache.length > 1 ? i.evCache[0] : c,
			m = u.pageX,
			h = u.pageY;
		if (c.preventedByNestedSwiper)
			return (n.startX = m), void (n.startY = h);
		if (!s.allowTouchMove)
			return (
				c.target.matches(i.focusableElements) || (s.allowClick = !1),
				void (
					i.isTouched &&
					(Object.assign(n, {
						startX: m,
						startY: h,
						prevX: s.touches.currentX,
						prevY: s.touches.currentY,
						currentX: m,
						currentY: h,
					}),
					(i.touchStartTime = l()))
				)
			);
		if (r.touchReleaseOnEdges && !r.loop)
			if (s.isVertical()) {
				if (
					(h < n.startY && s.translate <= s.maxTranslate()) ||
					(h > n.startY && s.translate >= s.minTranslate())
				)
					return (i.isTouched = !1), void (i.isMoved = !1);
			} else if (
				(m < n.startX && s.translate <= s.maxTranslate()) ||
				(m > n.startX && s.translate >= s.minTranslate())
			)
				return;
		if (
			t.activeElement &&
			c.target === t.activeElement &&
			c.target.matches(i.focusableElements)
		)
			return (i.isMoved = !0), void (s.allowClick = !1);
		if (
			(i.allowTouchCallbacks && s.emit('touchMove', c),
			c.targetTouches && c.targetTouches.length > 1)
		)
			return;
		(n.currentX = m), (n.currentY = h);
		const f = n.currentX - n.startX,
			g = n.currentY - n.startY;
		if (
			s.params.threshold &&
			Math.sqrt(f ** 2 + g ** 2) < s.params.threshold
		)
			return;
		if (void 0 === i.isScrolling) {
			let e;
			(s.isHorizontal() && n.currentY === n.startY) ||
			(s.isVertical() && n.currentX === n.startX)
				? (i.isScrolling = !1)
				: f * f + g * g >= 25 &&
				  ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
				  (i.isScrolling = s.isHorizontal()
						? e > r.touchAngle
						: 90 - e > r.touchAngle));
		}
		if (
			(i.isScrolling && s.emit('touchMoveOpposite', c),
			void 0 === i.startMoving &&
				((n.currentX === n.startX && n.currentY === n.startY) ||
					(i.startMoving = !0)),
			i.isScrolling ||
				(s.zoom &&
					s.params.zoom &&
					s.params.zoom.enabled &&
					i.evCache.length > 1))
		)
			return void (i.isTouched = !1);
		if (!i.startMoving) return;
		(s.allowClick = !1),
			!r.cssMode && c.cancelable && c.preventDefault(),
			r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
		let v = s.isHorizontal() ? f : g,
			w = s.isHorizontal()
				? n.currentX - n.previousX
				: n.currentY - n.previousY;
		r.oneWayMovement &&
			((v = Math.abs(v) * (o ? 1 : -1)),
			(w = Math.abs(w) * (o ? 1 : -1))),
			(n.diff = v),
			(v *= r.touchRatio),
			o && ((v = -v), (w = -w));
		const b = s.touchesDirection;
		(s.swipeDirection = v > 0 ? 'prev' : 'next'),
			(s.touchesDirection = w > 0 ? 'prev' : 'next');
		const y = s.params.loop && !r.cssMode,
			E =
				('next' === s.swipeDirection && s.allowSlideNext) ||
				('prev' === s.swipeDirection && s.allowSlidePrev);
		if (!i.isMoved) {
			if (
				(y && E && s.loopFix({ direction: s.swipeDirection }),
				(i.startTranslate = s.getTranslate()),
				s.setTransition(0),
				s.animating)
			) {
				const e = new window.CustomEvent('transitionend', {
					bubbles: !0,
					cancelable: !0,
				});
				s.wrapperEl.dispatchEvent(e);
			}
			(i.allowMomentumBounce = !1),
				!r.grabCursor ||
					(!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
					s.setGrabCursor(!0),
				s.emit('sliderFirstMove', c);
		}
		let x;
		i.isMoved &&
			b !== s.touchesDirection &&
			y &&
			E &&
			Math.abs(v) >= 1 &&
			(s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
			(x = !0)),
			s.emit('sliderMove', c),
			(i.isMoved = !0),
			(i.currentTranslate = v + i.startTranslate);
		let S = !0,
			T = r.resistanceRatio;
		if (
			(r.touchReleaseOnEdges && (T = 0),
			v > 0
				? (y &&
						E &&
						!x &&
						i.currentTranslate >
							(r.centeredSlides
								? s.minTranslate() - s.size / 2
								: s.minTranslate()) &&
						s.loopFix({
							direction: 'prev',
							setTranslate: !0,
							activeSlideIndex: 0,
						}),
				  i.currentTranslate > s.minTranslate() &&
						((S = !1),
						r.resistance &&
							(i.currentTranslate =
								s.minTranslate() -
								1 +
								(-s.minTranslate() + i.startTranslate + v) **
									T)))
				: v < 0 &&
				  (y &&
						E &&
						!x &&
						i.currentTranslate <
							(r.centeredSlides
								? s.maxTranslate() + s.size / 2
								: s.maxTranslate()) &&
						s.loopFix({
							direction: 'next',
							setTranslate: !0,
							activeSlideIndex:
								s.slides.length -
								('auto' === r.slidesPerView
									? s.slidesPerViewDynamic()
									: Math.ceil(
											parseFloat(r.slidesPerView, 10)
									  )),
						}),
				  i.currentTranslate < s.maxTranslate() &&
						((S = !1),
						r.resistance &&
							(i.currentTranslate =
								s.maxTranslate() +
								1 -
								(s.maxTranslate() - i.startTranslate - v) **
									T))),
			S && (c.preventedByNestedSwiper = !0),
			!s.allowSlideNext &&
				'next' === s.swipeDirection &&
				i.currentTranslate < i.startTranslate &&
				(i.currentTranslate = i.startTranslate),
			!s.allowSlidePrev &&
				'prev' === s.swipeDirection &&
				i.currentTranslate > i.startTranslate &&
				(i.currentTranslate = i.startTranslate),
			s.allowSlidePrev ||
				s.allowSlideNext ||
				(i.currentTranslate = i.startTranslate),
			r.threshold > 0)
		) {
			if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
				return void (i.currentTranslate = i.startTranslate);
			if (!i.allowThresholdMove)
				return (
					(i.allowThresholdMove = !0),
					(n.startX = n.currentX),
					(n.startY = n.currentY),
					(i.currentTranslate = i.startTranslate),
					void (n.diff = s.isHorizontal()
						? n.currentX - n.startX
						: n.currentY - n.startY)
				);
		}
		r.followFinger &&
			!r.cssMode &&
			(((r.freeMode && r.freeMode.enabled && s.freeMode) ||
				r.watchSlidesProgress) &&
				(s.updateActiveIndex(), s.updateSlidesClasses()),
			r.freeMode &&
				r.freeMode.enabled &&
				s.freeMode &&
				s.freeMode.onTouchMove(),
			s.updateProgress(i.currentTranslate),
			s.setTranslate(i.currentTranslate));
	}
	function Y(e) {
		const t = this,
			s = t.touchEventsData,
			a = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
		if (
			(a >= 0 && s.evCache.splice(a, 1),
			[
				'pointercancel',
				'pointerout',
				'pointerleave',
				'contextmenu',
			].includes(e.type))
		) {
			if (
				!(
					['pointercancel', 'contextmenu'].includes(e.type) &&
					(t.browser.isSafari || t.browser.isWebView)
				)
			)
				return;
		}
		const {
			params: i,
			touches: r,
			rtlTranslate: o,
			slidesGrid: d,
			enabled: c,
		} = t;
		if (!c) return;
		if (!i.simulateTouch && 'mouse' === e.pointerType) return;
		let p = e;
		if (
			(p.originalEvent && (p = p.originalEvent),
			s.allowTouchCallbacks && t.emit('touchEnd', p),
			(s.allowTouchCallbacks = !1),
			!s.isTouched)
		)
			return (
				s.isMoved && i.grabCursor && t.setGrabCursor(!1),
				(s.isMoved = !1),
				void (s.startMoving = !1)
			);
		i.grabCursor &&
			s.isMoved &&
			s.isTouched &&
			(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
			t.setGrabCursor(!1);
		const u = l(),
			m = u - s.touchStartTime;
		if (t.allowClick) {
			const e = p.path || (p.composedPath && p.composedPath());
			t.updateClickedSlide((e && e[0]) || p.target, e),
				t.emit('tap click', p),
				m < 300 &&
					u - s.lastClickTime < 300 &&
					t.emit('doubleTap doubleClick', p);
		}
		if (
			((s.lastClickTime = l()),
			n(() => {
				t.destroyed || (t.allowClick = !0);
			}),
			!s.isTouched ||
				!s.isMoved ||
				!t.swipeDirection ||
				0 === r.diff ||
				s.currentTranslate === s.startTranslate)
		)
			return (
				(s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
			);
		let h;
		if (
			((s.isTouched = !1),
			(s.isMoved = !1),
			(s.startMoving = !1),
			(h = i.followFinger
				? o
					? t.translate
					: -t.translate
				: -s.currentTranslate),
			i.cssMode)
		)
			return;
		if (i.freeMode && i.freeMode.enabled)
			return void t.freeMode.onTouchEnd({ currentPos: h });
		let f = 0,
			g = t.slidesSizesGrid[0];
		for (
			let e = 0;
			e < d.length;
			e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
		) {
			const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
			void 0 !== d[e + t]
				? h >= d[e] && h < d[e + t] && ((f = e), (g = d[e + t] - d[e]))
				: h >= d[e] &&
				  ((f = e), (g = d[d.length - 1] - d[d.length - 2]));
		}
		let v = null,
			w = null;
		i.rewind &&
			(t.isBeginning
				? (w =
						i.virtual && i.virtual.enabled && t.virtual
							? t.virtual.slides.length - 1
							: t.slides.length - 1)
				: t.isEnd && (v = 0));
		const b = (h - d[f]) / g,
			y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
		if (m > i.longSwipesMs) {
			if (!i.longSwipes) return void t.slideTo(t.activeIndex);
			'next' === t.swipeDirection &&
				(b >= i.longSwipesRatio
					? t.slideTo(i.rewind && t.isEnd ? v : f + y)
					: t.slideTo(f)),
				'prev' === t.swipeDirection &&
					(b > 1 - i.longSwipesRatio
						? t.slideTo(f + y)
						: null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio
						? t.slideTo(w)
						: t.slideTo(f));
		} else {
			if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
			t.navigation &&
			(p.target === t.navigation.nextEl ||
				p.target === t.navigation.prevEl)
				? p.target === t.navigation.nextEl
					? t.slideTo(f + y)
					: t.slideTo(f)
				: ('next' === t.swipeDirection &&
						t.slideTo(null !== v ? v : f + y),
				  'prev' === t.swipeDirection && t.slideTo(null !== w ? w : f));
		}
	}
	function N() {
		const e = this,
			{ params: t, el: s } = e;
		if (s && 0 === s.offsetWidth) return;
		t.breakpoints && e.setBreakpoint();
		const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e,
			n = e.virtual && e.params.virtual.enabled;
		(e.allowSlideNext = !0),
			(e.allowSlidePrev = !0),
			e.updateSize(),
			e.updateSlides(),
			e.updateSlidesClasses();
		const l = n && t.loop;
		!('auto' === t.slidesPerView || t.slidesPerView > 1) ||
		!e.isEnd ||
		e.isBeginning ||
		e.params.centeredSlides ||
		l
			? e.params.loop && !n
				? e.slideToLoop(e.realIndex, 0, !1, !0)
				: e.slideTo(e.activeIndex, 0, !1, !0)
			: e.slideTo(e.slides.length - 1, 0, !1, !0),
			e.autoplay &&
				e.autoplay.running &&
				e.autoplay.paused &&
				(clearTimeout(e.autoplay.resizeTimeout),
				(e.autoplay.resizeTimeout = setTimeout(() => {
					e.autoplay &&
						e.autoplay.running &&
						e.autoplay.paused &&
						e.autoplay.resume();
				}, 500))),
			(e.allowSlidePrev = i),
			(e.allowSlideNext = a),
			e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
	}
	function B(e) {
		const t = this;
		t.enabled &&
			(t.allowClick ||
				(t.params.preventClicks && e.preventDefault(),
				t.params.preventClicksPropagation &&
					t.animating &&
					(e.stopPropagation(), e.stopImmediatePropagation())));
	}
	function R() {
		const e = this,
			{ wrapperEl: t, rtlTranslate: s, enabled: a } = e;
		if (!a) return;
		let i;
		(e.previousTranslate = e.translate),
			e.isHorizontal()
				? (e.translate = -t.scrollLeft)
				: (e.translate = -t.scrollTop),
			0 === e.translate && (e.translate = 0),
			e.updateActiveIndex(),
			e.updateSlidesClasses();
		const r = e.maxTranslate() - e.minTranslate();
		(i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
			i !== e.progress &&
				e.updateProgress(s ? -e.translate : e.translate),
			e.emit('setTranslate', e.translate, !1);
	}
	function q(e) {
		const t = this;
		z(t, e.target),
			t.params.cssMode ||
				('auto' !== t.params.slidesPerView && !t.params.autoHeight) ||
				t.update();
	}
	let V = !1;
	function F() {}
	const _ = (e, t) => {
		const s = a(),
			{ params: i, el: r, wrapperEl: n, device: l } = e,
			o = !!i.nested,
			d = 'on' === t ? 'addEventListener' : 'removeEventListener',
			c = t;
		r[d]('pointerdown', e.onTouchStart, { passive: !1 }),
			s[d]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
			s[d]('pointerup', e.onTouchEnd, { passive: !0 }),
			s[d]('pointercancel', e.onTouchEnd, { passive: !0 }),
			s[d]('pointerout', e.onTouchEnd, { passive: !0 }),
			s[d]('pointerleave', e.onTouchEnd, { passive: !0 }),
			s[d]('contextmenu', e.onTouchEnd, { passive: !0 }),
			(i.preventClicks || i.preventClicksPropagation) &&
				r[d]('click', e.onClick, !0),
			i.cssMode && n[d]('scroll', e.onScroll),
			i.updateOnWindowResize
				? e[c](
						l.ios || l.android
							? 'resize orientationchange observerUpdate'
							: 'resize observerUpdate',
						N,
						!0
				  )
				: e[c]('observerUpdate', N, !0),
			r[d]('load', e.onLoad, { capture: !0 });
	};
	const j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
	var W = {
		init: !0,
		direction: 'horizontal',
		oneWayMovement: !1,
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		enabled: !0,
		focusableElements:
			'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopedSlides: null,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideActiveClass: 'swiper-slide-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideNextClass: 'swiper-slide-next',
		slidePrevClass: 'swiper-slide-prev',
		wrapperClass: 'swiper-wrapper',
		lazyPreloaderClass: 'swiper-lazy-preloader',
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	};
	function U(e, t) {
		return function (s) {
			void 0 === s && (s = {});
			const a = Object.keys(s)[0],
				i = s[a];
			'object' == typeof i && null !== i
				? (!0 === e[a] && (e[a] = { enabled: !0 }),
				  'navigation' === a &&
						e[a] &&
						e[a].enabled &&
						!e[a].prevEl &&
						!e[a].nextEl &&
						(e[a].auto = !0),
				  ['pagination', 'scrollbar'].indexOf(a) >= 0 &&
						e[a] &&
						e[a].enabled &&
						!e[a].el &&
						(e[a].auto = !0),
				  a in e && 'enabled' in i
						? ('object' != typeof e[a] ||
								'enabled' in e[a] ||
								(e[a].enabled = !0),
						  e[a] || (e[a] = { enabled: !1 }),
						  c(t, s))
						: c(t, s))
				: c(t, s);
		};
	}
	const K = {
			eventsEmitter: L,
			update: I,
			translate: k,
			transition: {
				setTransition: function (e, t) {
					const s = this;
					s.params.cssMode ||
						((s.wrapperEl.style.transitionDuration = `${e}ms`),
						(s.wrapperEl.style.transitionDelay =
							0 === e ? '0ms' : '')),
						s.emit('setTransition', e, t);
				},
				transitionStart: function (e, t) {
					void 0 === e && (e = !0);
					const s = this,
						{ params: a } = s;
					a.cssMode ||
						(a.autoHeight && s.updateAutoHeight(),
						O({
							swiper: s,
							runCallbacks: e,
							direction: t,
							step: 'Start',
						}));
				},
				transitionEnd: function (e, t) {
					void 0 === e && (e = !0);
					const s = this,
						{ params: a } = s;
					(s.animating = !1),
						a.cssMode ||
							(s.setTransition(0),
							O({
								swiper: s,
								runCallbacks: e,
								direction: t,
								step: 'End',
							}));
				},
			},
			slide: D,
			loop: G,
			grabCursor: {
				setGrabCursor: function (e) {
					const t = this;
					if (
						!t.params.simulateTouch ||
						(t.params.watchOverflow && t.isLocked) ||
						t.params.cssMode
					)
						return;
					const s =
						'container' === t.params.touchEventsTarget
							? t.el
							: t.wrapperEl;
					t.isElement && (t.__preventObserver__ = !0),
						(s.style.cursor = 'move'),
						(s.style.cursor = e ? 'grabbing' : 'grab'),
						t.isElement &&
							requestAnimationFrame(() => {
								t.__preventObserver__ = !1;
							});
				},
				unsetGrabCursor: function () {
					const e = this;
					(e.params.watchOverflow && e.isLocked) ||
						e.params.cssMode ||
						(e.isElement && (e.__preventObserver__ = !0),
						(e[
							'container' === e.params.touchEventsTarget
								? 'el'
								: 'wrapperEl'
						].style.cursor = ''),
						e.isElement &&
							requestAnimationFrame(() => {
								e.__preventObserver__ = !1;
							}));
				},
			},
			events: {
				attachEvents: function () {
					const e = this,
						t = a(),
						{ params: s } = e;
					(e.onTouchStart = H.bind(e)),
						(e.onTouchMove = X.bind(e)),
						(e.onTouchEnd = Y.bind(e)),
						s.cssMode && (e.onScroll = R.bind(e)),
						(e.onClick = B.bind(e)),
						(e.onLoad = q.bind(e)),
						V || (t.addEventListener('touchstart', F), (V = !0)),
						_(e, 'on');
				},
				detachEvents: function () {
					_(this, 'off');
				},
			},
			breakpoints: {
				setBreakpoint: function () {
					const e = this,
						{ realIndex: t, initialized: s, params: a, el: i } = e,
						r = a.breakpoints;
					if (!r || (r && 0 === Object.keys(r).length)) return;
					const n = e.getBreakpoint(
						r,
						e.params.breakpointsBase,
						e.el
					);
					if (!n || e.currentBreakpoint === n) return;
					const l = (n in r ? r[n] : void 0) || e.originalParams,
						o = j(e, a),
						d = j(e, l),
						p = a.enabled;
					o && !d
						? (i.classList.remove(
								`${a.containerModifierClass}grid`,
								`${a.containerModifierClass}grid-column`
						  ),
						  e.emitContainerClasses())
						: !o &&
						  d &&
						  (i.classList.add(`${a.containerModifierClass}grid`),
						  ((l.grid.fill && 'column' === l.grid.fill) ||
								(!l.grid.fill && 'column' === a.grid.fill)) &&
								i.classList.add(
									`${a.containerModifierClass}grid-column`
								),
						  e.emitContainerClasses()),
						['navigation', 'pagination', 'scrollbar'].forEach(
							(t) => {
								if (void 0 === l[t]) return;
								const s = a[t] && a[t].enabled,
									i = l[t] && l[t].enabled;
								s && !i && e[t].disable(),
									!s && i && e[t].enable();
							}
						);
					const u = l.direction && l.direction !== a.direction,
						m =
							a.loop &&
							(l.slidesPerView !== a.slidesPerView || u),
						h = a.loop;
					u && s && e.changeDirection(), c(e.params, l);
					const f = e.params.enabled,
						g = e.params.loop;
					Object.assign(e, {
						allowTouchMove: e.params.allowTouchMove,
						allowSlideNext: e.params.allowSlideNext,
						allowSlidePrev: e.params.allowSlidePrev,
					}),
						p && !f ? e.disable() : !p && f && e.enable(),
						(e.currentBreakpoint = n),
						e.emit('_beforeBreakpoint', l),
						s &&
							(m
								? (e.loopDestroy(),
								  e.loopCreate(t),
								  e.updateSlides())
								: !h && g
								? (e.loopCreate(t), e.updateSlides())
								: h && !g && e.loopDestroy()),
						e.emit('breakpoint', l);
				},
				getBreakpoint: function (e, t, s) {
					if (
						(void 0 === t && (t = 'window'),
						!e || ('container' === t && !s))
					)
						return;
					let a = !1;
					const i = r(),
						n = 'window' === t ? i.innerHeight : s.clientHeight,
						l = Object.keys(e).map((e) => {
							if ('string' == typeof e && 0 === e.indexOf('@')) {
								const t = parseFloat(e.substr(1));
								return { value: n * t, point: e };
							}
							return { value: e, point: e };
						});
					l.sort(
						(e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)
					);
					for (let e = 0; e < l.length; e += 1) {
						const { point: r, value: n } = l[e];
						'window' === t
							? i.matchMedia(`(min-width: ${n}px)`).matches &&
							  (a = r)
							: n <= s.clientWidth && (a = r);
					}
					return a || 'max';
				},
			},
			checkOverflow: {
				checkOverflow: function () {
					const e = this,
						{ isLocked: t, params: s } = e,
						{ slidesOffsetBefore: a } = s;
					if (a) {
						const t = e.slides.length - 1,
							s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
						e.isLocked = e.size > s;
					} else e.isLocked = 1 === e.snapGrid.length;
					!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
						!0 === s.allowSlidePrev &&
							(e.allowSlidePrev = !e.isLocked),
						t && t !== e.isLocked && (e.isEnd = !1),
						t !== e.isLocked &&
							e.emit(e.isLocked ? 'lock' : 'unlock');
				},
			},
			classes: {
				addClasses: function () {
					const e = this,
						{
							classNames: t,
							params: s,
							rtl: a,
							el: i,
							device: r,
						} = e,
						n = (function (e, t) {
							const s = [];
							return (
								e.forEach((e) => {
									'object' == typeof e
										? Object.keys(e).forEach((a) => {
												e[a] && s.push(t + a);
										  })
										: 'string' == typeof e && s.push(t + e);
								}),
								s
							);
						})(
							[
								'initialized',
								s.direction,
								{
									'free-mode':
										e.params.freeMode && s.freeMode.enabled,
								},
								{ autoheight: s.autoHeight },
								{ rtl: a },
								{ grid: s.grid && s.grid.rows > 1 },
								{
									'grid-column':
										s.grid &&
										s.grid.rows > 1 &&
										'column' === s.grid.fill,
								},
								{ android: r.android },
								{ ios: r.ios },
								{ 'css-mode': s.cssMode },
								{ centered: s.cssMode && s.centeredSlides },
								{ 'watch-progress': s.watchSlidesProgress },
							],
							s.containerModifierClass
						);
					t.push(...n),
						i.classList.add(...t),
						e.emitContainerClasses();
				},
				removeClasses: function () {
					const { el: e, classNames: t } = this;
					e.classList.remove(...t), this.emitContainerClasses();
				},
			},
		},
		Z = {};
	class Q {
		constructor() {
			let e, t;
			for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
				i[r] = arguments[r];
			1 === i.length &&
			i[0].constructor &&
			'Object' === Object.prototype.toString.call(i[0]).slice(8, -1)
				? (t = i[0])
				: ([e, t] = i),
				t || (t = {}),
				(t = c({}, t)),
				e && !t.el && (t.el = e);
			const n = a();
			if (
				t.el &&
				'string' == typeof t.el &&
				n.querySelectorAll(t.el).length > 1
			) {
				const e = [];
				return (
					n.querySelectorAll(t.el).forEach((s) => {
						const a = c({}, t, { el: s });
						e.push(new Q(a));
					}),
					e
				);
			}
			const l = this;
			(l.__swiper__ = !0),
				(l.support = M()),
				(l.device = C({ userAgent: t.userAgent })),
				(l.browser = P()),
				(l.eventsListeners = {}),
				(l.eventsAnyListeners = []),
				(l.modules = [...l.__modules__]),
				t.modules &&
					Array.isArray(t.modules) &&
					l.modules.push(...t.modules);
			const o = {};
			l.modules.forEach((e) => {
				e({
					params: t,
					swiper: l,
					extendParams: U(t, o),
					on: l.on.bind(l),
					once: l.once.bind(l),
					off: l.off.bind(l),
					emit: l.emit.bind(l),
				});
			});
			const d = c({}, W, o);
			return (
				(l.params = c({}, d, Z, t)),
				(l.originalParams = c({}, l.params)),
				(l.passedParams = c({}, t)),
				l.params &&
					l.params.on &&
					Object.keys(l.params.on).forEach((e) => {
						l.on(e, l.params.on[e]);
					}),
				l.params && l.params.onAny && l.onAny(l.params.onAny),
				Object.assign(l, {
					enabled: l.params.enabled,
					el: e,
					classNames: [],
					slides: [],
					slidesGrid: [],
					snapGrid: [],
					slidesSizesGrid: [],
					isHorizontal: () => 'horizontal' === l.params.direction,
					isVertical: () => 'vertical' === l.params.direction,
					activeIndex: 0,
					realIndex: 0,
					isBeginning: !0,
					isEnd: !1,
					translate: 0,
					previousTranslate: 0,
					progress: 0,
					velocity: 0,
					animating: !1,
					cssOverflowAdjustment() {
						return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
					},
					allowSlideNext: l.params.allowSlideNext,
					allowSlidePrev: l.params.allowSlidePrev,
					touchEventsData: {
						isTouched: void 0,
						isMoved: void 0,
						allowTouchCallbacks: void 0,
						touchStartTime: void 0,
						isScrolling: void 0,
						currentTranslate: void 0,
						startTranslate: void 0,
						allowThresholdMove: void 0,
						focusableElements: l.params.focusableElements,
						lastClickTime: 0,
						clickTimeout: void 0,
						velocities: [],
						allowMomentumBounce: void 0,
						startMoving: void 0,
						evCache: [],
					},
					allowClick: !0,
					allowTouchMove: l.params.allowTouchMove,
					touches: {
						startX: 0,
						startY: 0,
						currentX: 0,
						currentY: 0,
						diff: 0,
					},
					imagesToLoad: [],
					imagesLoaded: 0,
				}),
				l.emit('_swiper'),
				l.params.init && l.init(),
				l
			);
		}
		getSlideIndex(e) {
			const { slidesEl: t, params: s } = this,
				a = w(h(t, `.${s.slideClass}, swiper-slide`)[0]);
			return w(e) - a;
		}
		getSlideIndexByData(e) {
			return this.getSlideIndex(
				this.slides.filter(
					(t) => 1 * t.getAttribute('data-swiper-slide-index') === e
				)[0]
			);
		}
		recalcSlides() {
			const { slidesEl: e, params: t } = this;
			this.slides = h(e, `.${t.slideClass}, swiper-slide`);
		}
		enable() {
			const e = this;
			e.enabled ||
				((e.enabled = !0),
				e.params.grabCursor && e.setGrabCursor(),
				e.emit('enable'));
		}
		disable() {
			const e = this;
			e.enabled &&
				((e.enabled = !1),
				e.params.grabCursor && e.unsetGrabCursor(),
				e.emit('disable'));
		}
		setProgress(e, t) {
			const s = this;
			e = Math.min(Math.max(e, 0), 1);
			const a = s.minTranslate(),
				i = (s.maxTranslate() - a) * e + a;
			s.translateTo(i, void 0 === t ? 0 : t),
				s.updateActiveIndex(),
				s.updateSlidesClasses();
		}
		emitContainerClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = e.el.className
				.split(' ')
				.filter(
					(t) =>
						0 === t.indexOf('swiper') ||
						0 === t.indexOf(e.params.containerModifierClass)
				);
			e.emit('_containerClasses', t.join(' '));
		}
		getSlideClasses(e) {
			const t = this;
			return t.destroyed
				? ''
				: e.className
						.split(' ')
						.filter(
							(e) =>
								0 === e.indexOf('swiper-slide') ||
								0 === e.indexOf(t.params.slideClass)
						)
						.join(' ');
		}
		emitSlidesClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = [];
			e.slides.forEach((s) => {
				const a = e.getSlideClasses(s);
				t.push({ slideEl: s, classNames: a }),
					e.emit('_slideClass', s, a);
			}),
				e.emit('_slideClasses', t);
		}
		slidesPerViewDynamic(e, t) {
			void 0 === e && (e = 'current'), void 0 === t && (t = !1);
			const {
				params: s,
				slides: a,
				slidesGrid: i,
				slidesSizesGrid: r,
				size: n,
				activeIndex: l,
			} = this;
			let o = 1;
			if ('number' == typeof s.slidesPerView) return s.slidesPerView;
			if (s.centeredSlides) {
				let e,
					t = a[l] ? a[l].swiperSlideSize : 0;
				for (let s = l + 1; s < a.length; s += 1)
					a[s] &&
						!e &&
						((t += a[s].swiperSlideSize),
						(o += 1),
						t > n && (e = !0));
				for (let s = l - 1; s >= 0; s -= 1)
					a[s] &&
						!e &&
						((t += a[s].swiperSlideSize),
						(o += 1),
						t > n && (e = !0));
			} else if ('current' === e)
				for (let e = l + 1; e < a.length; e += 1) {
					(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
				}
			else
				for (let e = l - 1; e >= 0; e -= 1) {
					i[l] - i[e] < n && (o += 1);
				}
			return o;
		}
		update() {
			const e = this;
			if (!e || e.destroyed) return;
			const { snapGrid: t, params: s } = e;
			function a() {
				const t = e.rtlTranslate ? -1 * e.translate : e.translate,
					s = Math.min(
						Math.max(t, e.maxTranslate()),
						e.minTranslate()
					);
				e.setTranslate(s),
					e.updateActiveIndex(),
					e.updateSlidesClasses();
			}
			let i;
			if (
				(s.breakpoints && e.setBreakpoint(),
				[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
					t.complete && z(e, t);
				}),
				e.updateSize(),
				e.updateSlides(),
				e.updateProgress(),
				e.updateSlidesClasses(),
				s.freeMode && s.freeMode.enabled && !s.cssMode)
			)
				a(), s.autoHeight && e.updateAutoHeight();
			else {
				if (
					('auto' === s.slidesPerView || s.slidesPerView > 1) &&
					e.isEnd &&
					!s.centeredSlides
				) {
					const t =
						e.virtual && s.virtual.enabled
							? e.virtual.slides
							: e.slides;
					i = e.slideTo(t.length - 1, 0, !1, !0);
				} else i = e.slideTo(e.activeIndex, 0, !1, !0);
				i || a();
			}
			s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
				e.emit('update');
		}
		changeDirection(e, t) {
			void 0 === t && (t = !0);
			const s = this,
				a = s.params.direction;
			return (
				e || (e = 'horizontal' === a ? 'vertical' : 'horizontal'),
				e === a ||
					('horizontal' !== e && 'vertical' !== e) ||
					(s.el.classList.remove(
						`${s.params.containerModifierClass}${a}`
					),
					s.el.classList.add(
						`${s.params.containerModifierClass}${e}`
					),
					s.emitContainerClasses(),
					(s.params.direction = e),
					s.slides.forEach((t) => {
						'vertical' === e
							? (t.style.width = '')
							: (t.style.height = '');
					}),
					s.emit('changeDirection'),
					t && s.update()),
				s
			);
		}
		changeLanguageDirection(e) {
			const t = this;
			(t.rtl && 'rtl' === e) ||
				(!t.rtl && 'ltr' === e) ||
				((t.rtl = 'rtl' === e),
				(t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
				t.rtl
					? (t.el.classList.add(
							`${t.params.containerModifierClass}rtl`
					  ),
					  (t.el.dir = 'rtl'))
					: (t.el.classList.remove(
							`${t.params.containerModifierClass}rtl`
					  ),
					  (t.el.dir = 'ltr')),
				t.update());
		}
		mount(e) {
			const t = this;
			if (t.mounted) return !0;
			let s = e || t.params.el;
			if (('string' == typeof s && (s = document.querySelector(s)), !s))
				return !1;
			(s.swiper = t),
				s.parentNode &&
					s.parentNode.host &&
					'SWIPER-CONTAINER' === s.parentNode.host.nodeName &&
					(t.isElement = !0);
			const a = () =>
				`.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
			let i = (() => {
				if (s && s.shadowRoot && s.shadowRoot.querySelector) {
					return s.shadowRoot.querySelector(a());
				}
				return h(s, a())[0];
			})();
			return (
				!i &&
					t.params.createElements &&
					((i = f('div', t.params.wrapperClass)),
					s.append(i),
					h(s, `.${t.params.slideClass}`).forEach((e) => {
						i.append(e);
					})),
				Object.assign(t, {
					el: s,
					wrapperEl: i,
					slidesEl:
						t.isElement && !s.parentNode.host.slideSlots
							? s.parentNode.host
							: i,
					hostEl: t.isElement ? s.parentNode.host : s,
					mounted: !0,
					rtl:
						'rtl' === s.dir.toLowerCase() ||
						'rtl' === v(s, 'direction'),
					rtlTranslate:
						'horizontal' === t.params.direction &&
						('rtl' === s.dir.toLowerCase() ||
							'rtl' === v(s, 'direction')),
					wrongRTL: '-webkit-box' === v(i, 'display'),
				}),
				!0
			);
		}
		init(e) {
			const t = this;
			if (t.initialized) return t;
			if (!1 === t.mount(e)) return t;
			t.emit('beforeInit'),
				t.params.breakpoints && t.setBreakpoint(),
				t.addClasses(),
				t.updateSize(),
				t.updateSlides(),
				t.params.watchOverflow && t.checkOverflow(),
				t.params.grabCursor && t.enabled && t.setGrabCursor(),
				t.params.loop && t.virtual && t.params.virtual.enabled
					? t.slideTo(
							t.params.initialSlide + t.virtual.slidesBefore,
							0,
							t.params.runCallbacksOnInit,
							!1,
							!0
					  )
					: t.slideTo(
							t.params.initialSlide,
							0,
							t.params.runCallbacksOnInit,
							!1,
							!0
					  ),
				t.params.loop && t.loopCreate(),
				t.attachEvents();
			const s = [...t.el.querySelectorAll('[loading="lazy"]')];
			return (
				t.isElement &&
					s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
				s.forEach((e) => {
					e.complete
						? z(t, e)
						: e.addEventListener('load', (e) => {
								z(t, e.target);
						  });
				}),
				$(t),
				(t.initialized = !0),
				$(t),
				t.emit('init'),
				t.emit('afterInit'),
				t
			);
		}
		destroy(e, t) {
			void 0 === e && (e = !0), void 0 === t && (t = !0);
			const s = this,
				{ params: a, el: i, wrapperEl: r, slides: n } = s;
			return (
				void 0 === s.params ||
					s.destroyed ||
					(s.emit('beforeDestroy'),
					(s.initialized = !1),
					s.detachEvents(),
					a.loop && s.loopDestroy(),
					t &&
						(s.removeClasses(),
						i.removeAttribute('style'),
						r.removeAttribute('style'),
						n &&
							n.length &&
							n.forEach((e) => {
								e.classList.remove(
									a.slideVisibleClass,
									a.slideActiveClass,
									a.slideNextClass,
									a.slidePrevClass
								),
									e.removeAttribute('style'),
									e.removeAttribute(
										'data-swiper-slide-index'
									);
							})),
					s.emit('destroy'),
					Object.keys(s.eventsListeners).forEach((e) => {
						s.off(e);
					}),
					!1 !== e &&
						((s.el.swiper = null),
						(function (e) {
							const t = e;
							Object.keys(t).forEach((e) => {
								try {
									t[e] = null;
								} catch (e) {}
								try {
									delete t[e];
								} catch (e) {}
							});
						})(s)),
					(s.destroyed = !0)),
				null
			);
		}
		static extendDefaults(e) {
			c(Z, e);
		}
		static get extendedDefaults() {
			return Z;
		}
		static get defaults() {
			return W;
		}
		static installModule(e) {
			Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
			const t = Q.prototype.__modules__;
			'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
		}
		static use(e) {
			return Array.isArray(e)
				? (e.forEach((e) => Q.installModule(e)), Q)
				: (Q.installModule(e), Q);
		}
	}
	function J(e, t, s, a) {
		return (
			e.params.createElements &&
				Object.keys(a).forEach((i) => {
					if (!s[i] && !0 === s.auto) {
						let r = h(e.el, `.${a[i]}`)[0];
						r ||
							((r = f('div', a[i])),
							(r.className = a[i]),
							e.el.append(r)),
							(s[i] = r),
							(t[i] = r);
					}
				}),
			s
		);
	}
	function ee(e) {
		return (
			void 0 === e && (e = ''),
			`.${e
				.trim()
				.replace(/([\.:!+\/])/g, '\\$1')
				.replace(/ /g, '.')}`
		);
	}
	function te(e) {
		const t = this,
			{ params: s, slidesEl: a } = t;
		s.loop && t.loopDestroy();
		const i = (e) => {
			if ('string' == typeof e) {
				const t = document.createElement('div');
				(t.innerHTML = e), a.append(t.children[0]), (t.innerHTML = '');
			} else a.append(e);
		};
		if ('object' == typeof e && 'length' in e)
			for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
		else i(e);
		t.recalcSlides(),
			s.loop && t.loopCreate(),
			(s.observer && !t.isElement) || t.update();
	}
	function se(e) {
		const t = this,
			{ params: s, activeIndex: a, slidesEl: i } = t;
		s.loop && t.loopDestroy();
		let r = a + 1;
		const n = (e) => {
			if ('string' == typeof e) {
				const t = document.createElement('div');
				(t.innerHTML = e), i.prepend(t.children[0]), (t.innerHTML = '');
			} else i.prepend(e);
		};
		if ('object' == typeof e && 'length' in e) {
			for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
			r = a + e.length;
		} else n(e);
		t.recalcSlides(),
			s.loop && t.loopCreate(),
			(s.observer && !t.isElement) || t.update(),
			t.slideTo(r, 0, !1);
	}
	function ae(e, t) {
		const s = this,
			{ params: a, activeIndex: i, slidesEl: r } = s;
		let n = i;
		a.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
		const l = s.slides.length;
		if (e <= 0) return void s.prependSlide(t);
		if (e >= l) return void s.appendSlide(t);
		let o = n > e ? n + 1 : n;
		const d = [];
		for (let t = l - 1; t >= e; t -= 1) {
			const e = s.slides[t];
			e.remove(), d.unshift(e);
		}
		if ('object' == typeof t && 'length' in t) {
			for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
			o = n > e ? n + t.length : n;
		} else r.append(t);
		for (let e = 0; e < d.length; e += 1) r.append(d[e]);
		s.recalcSlides(),
			a.loop && s.loopCreate(),
			(a.observer && !s.isElement) || s.update(),
			a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
	}
	function ie(e) {
		const t = this,
			{ params: s, activeIndex: a } = t;
		let i = a;
		s.loop && ((i -= t.loopedSlides), t.loopDestroy());
		let r,
			n = i;
		if ('object' == typeof e && 'length' in e) {
			for (let s = 0; s < e.length; s += 1)
				(r = e[s]),
					t.slides[r] && t.slides[r].remove(),
					r < n && (n -= 1);
			n = Math.max(n, 0);
		} else
			(r = e),
				t.slides[r] && t.slides[r].remove(),
				r < n && (n -= 1),
				(n = Math.max(n, 0));
		t.recalcSlides(),
			s.loop && t.loopCreate(),
			(s.observer && !t.isElement) || t.update(),
			s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
	}
	function re() {
		const e = this,
			t = [];
		for (let s = 0; s < e.slides.length; s += 1) t.push(s);
		e.removeSlide(t);
	}
	function ne(e) {
		const {
			effect: t,
			swiper: s,
			on: a,
			setTranslate: i,
			setTransition: r,
			overwriteParams: n,
			perspective: l,
			recreateShadows: o,
			getEffectParams: d,
		} = e;
		let c;
		a('beforeInit', () => {
			if (s.params.effect !== t) return;
			s.classNames.push(`${s.params.containerModifierClass}${t}`),
				l &&
					l() &&
					s.classNames.push(`${s.params.containerModifierClass}3d`);
			const e = n ? n() : {};
			Object.assign(s.params, e), Object.assign(s.originalParams, e);
		}),
			a('setTranslate', () => {
				s.params.effect === t && i();
			}),
			a('setTransition', (e, a) => {
				s.params.effect === t && r(a);
			}),
			a('transitionEnd', () => {
				if (s.params.effect === t && o) {
					if (!d || !d().slideShadows) return;
					s.slides.forEach((e) => {
						e.querySelectorAll(
							'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
						).forEach((e) => e.remove());
					}),
						o();
				}
			}),
			a('virtualUpdate', () => {
				s.params.effect === t &&
					(s.slides.length || (c = !0),
					requestAnimationFrame(() => {
						c && s.slides && s.slides.length && (i(), (c = !1));
					}));
			});
	}
	function le(e, t) {
		const s = m(t);
		return (
			s !== t &&
				((s.style.backfaceVisibility = 'hidden'),
				(s.style['-webkit-backface-visibility'] = 'hidden')),
			s
		);
	}
	function oe(e) {
		let { swiper: t, duration: s, transformElements: a, allSlides: i } = e;
		const { activeIndex: r } = t;
		if (t.params.virtualTranslate && 0 !== s) {
			let e,
				s = !1;
			(e = i
				? a
				: a.filter((e) => {
						const s = e.classList.contains('swiper-slide-transform')
							? ((e) => {
									if (!e.parentElement)
										return t.slides.filter(
											(t) =>
												t.shadowRoot &&
												t.shadowRoot === e.parentNode
										)[0];
									return e.parentElement;
							  })(e)
							: e;
						return t.getSlideIndex(s) === r;
				  })),
				e.forEach((e) => {
					y(e, () => {
						if (s) return;
						if (!t || t.destroyed) return;
						(s = !0), (t.animating = !1);
						const e = new window.CustomEvent('transitionend', {
							bubbles: !0,
							cancelable: !0,
						});
						t.wrapperEl.dispatchEvent(e);
					});
				});
		}
	}
	function de(e, t, s) {
		const a = `swiper-slide-shadow${s ? `-${s}` : ''}${
				e ? ` swiper-slide-shadow-${e}` : ''
			}`,
			i = m(t);
		let r = i.querySelector(`.${a.split(' ').join('.')}`);
		return r || ((r = f('div', a.split(' '))), i.append(r)), r;
	}
	Object.keys(K).forEach((e) => {
		Object.keys(K[e]).forEach((t) => {
			Q.prototype[t] = K[e][t];
		});
	}),
		Q.use([
			function (e) {
				let { swiper: t, on: s, emit: a } = e;
				const i = r();
				let n = null,
					l = null;
				const o = () => {
						t &&
							!t.destroyed &&
							t.initialized &&
							(a('beforeResize'), a('resize'));
					},
					d = () => {
						t &&
							!t.destroyed &&
							t.initialized &&
							a('orientationchange');
					};
				s('init', () => {
					t.params.resizeObserver && void 0 !== i.ResizeObserver
						? t &&
						  !t.destroyed &&
						  t.initialized &&
						  ((n = new ResizeObserver((e) => {
								l = i.requestAnimationFrame(() => {
									const { width: s, height: a } = t;
									let i = s,
										r = a;
									e.forEach((e) => {
										let {
											contentBoxSize: s,
											contentRect: a,
											target: n,
										} = e;
										(n && n !== t.el) ||
											((i = a
												? a.width
												: (s[0] || s).inlineSize),
											(r = a
												? a.height
												: (s[0] || s).blockSize));
									}),
										(i === s && r === a) || o();
								});
						  })),
						  n.observe(t.el))
						: (i.addEventListener('resize', o),
						  i.addEventListener('orientationchange', d));
				}),
					s('destroy', () => {
						l && i.cancelAnimationFrame(l),
							n &&
								n.unobserve &&
								t.el &&
								(n.unobserve(t.el), (n = null)),
							i.removeEventListener('resize', o),
							i.removeEventListener('orientationchange', d);
					});
			},
			function (e) {
				let { swiper: t, extendParams: s, on: a, emit: i } = e;
				const n = [],
					l = r(),
					o = function (e, s) {
						void 0 === s && (s = {});
						const a = new (l.MutationObserver ||
							l.WebkitMutationObserver)((e) => {
							if (t.__preventObserver__) return;
							if (1 === e.length)
								return void i('observerUpdate', e[0]);
							const s = function () {
								i('observerUpdate', e[0]);
							};
							l.requestAnimationFrame
								? l.requestAnimationFrame(s)
								: l.setTimeout(s, 0);
						});
						a.observe(e, {
							attributes: void 0 === s.attributes || s.attributes,
							childList: void 0 === s.childList || s.childList,
							characterData:
								void 0 === s.characterData || s.characterData,
						}),
							n.push(a);
					};
				s({
					observer: !1,
					observeParents: !1,
					observeSlideChildren: !1,
				}),
					a('init', () => {
						if (t.params.observer) {
							if (t.params.observeParents) {
								const e = b(t.hostEl);
								for (let t = 0; t < e.length; t += 1) o(e[t]);
							}
							o(t.hostEl, {
								childList: t.params.observeSlideChildren,
							}),
								o(t.wrapperEl, { attributes: !1 });
						}
					}),
					a('destroy', () => {
						n.forEach((e) => {
							e.disconnect();
						}),
							n.splice(0, n.length);
					});
			},
		]);
	const ce = [
		function (e) {
			let t,
				{ swiper: s, extendParams: i, on: r, emit: n } = e;
			i({
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					renderExternalUpdate: !0,
					addSlidesBefore: 0,
					addSlidesAfter: 0,
				},
			});
			const l = a();
			s.virtual = {
				cache: {},
				from: void 0,
				to: void 0,
				slides: [],
				offset: 0,
				slidesGrid: [],
			};
			const o = l.createElement('div');
			function d(e, t) {
				const a = s.params.virtual;
				if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
				let i;
				return (
					a.renderSlide
						? ((i = a.renderSlide.call(s, e, t)),
						  'string' == typeof i &&
								((o.innerHTML = i), (i = o.children[0])))
						: (i = s.isElement
								? f('swiper-slide')
								: f('div', s.params.slideClass)),
					i.setAttribute('data-swiper-slide-index', t),
					a.renderSlide || (i.innerHTML = e),
					a.cache && (s.virtual.cache[t] = i),
					i
				);
			}
			function c(e) {
				const {
						slidesPerView: t,
						slidesPerGroup: a,
						centeredSlides: i,
						loop: r,
					} = s.params,
					{ addSlidesBefore: l, addSlidesAfter: o } =
						s.params.virtual,
					{
						from: c,
						to: p,
						slides: u,
						slidesGrid: m,
						offset: f,
					} = s.virtual;
				s.params.cssMode || s.updateActiveIndex();
				const g = s.activeIndex || 0;
				let v, w, b;
				(v = s.rtlTranslate
					? 'right'
					: s.isHorizontal()
					? 'left'
					: 'top'),
					i
						? ((w = Math.floor(t / 2) + a + o),
						  (b = Math.floor(t / 2) + a + l))
						: ((w = t + (a - 1) + o), (b = (r ? t : a) + l));
				let y = g - b,
					E = g + w;
				r || ((y = Math.max(y, 0)), (E = Math.min(E, u.length - 1)));
				let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
				function S() {
					s.updateSlides(),
						s.updateProgress(),
						s.updateSlidesClasses(),
						n('virtualUpdate');
				}
				if (
					(r && g >= b
						? ((y -= b), i || (x += s.slidesGrid[0]))
						: r && g < b && ((y = -b), i && (x += s.slidesGrid[0])),
					Object.assign(s.virtual, {
						from: y,
						to: E,
						offset: x,
						slidesGrid: s.slidesGrid,
						slidesBefore: b,
						slidesAfter: w,
					}),
					c === y && p === E && !e)
				)
					return (
						s.slidesGrid !== m &&
							x !== f &&
							s.slides.forEach((e) => {
								e.style[v] =
									x -
									Math.abs(s.cssOverflowAdjustment()) +
									'px';
							}),
						s.updateProgress(),
						void n('virtualUpdate')
					);
				if (s.params.virtual.renderExternal)
					return (
						s.params.virtual.renderExternal.call(s, {
							offset: x,
							from: y,
							to: E,
							slides: (function () {
								const e = [];
								for (let t = y; t <= E; t += 1) e.push(u[t]);
								return e;
							})(),
						}),
						void (s.params.virtual.renderExternalUpdate
							? S()
							: n('virtualUpdate'))
					);
				const T = [],
					M = [],
					C = (e) => {
						let t = e;
						return (
							e < 0
								? (t = u.length + e)
								: t >= u.length && (t -= u.length),
							t
						);
					};
				if (e)
					s.slides
						.filter((e) =>
							e.matches(`.${s.params.slideClass}, swiper-slide`)
						)
						.forEach((e) => {
							e.remove();
						});
				else
					for (let e = c; e <= p; e += 1)
						if (e < y || e > E) {
							const t = C(e);
							s.slides
								.filter((e) =>
									e.matches(
										`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
									)
								)
								.forEach((e) => {
									e.remove();
								});
						}
				const P = r ? -u.length : 0,
					L = r ? 2 * u.length : u.length;
				for (let t = P; t < L; t += 1)
					if (t >= y && t <= E) {
						const s = C(t);
						void 0 === p || e
							? M.push(s)
							: (t > p && M.push(s), t < c && T.push(s));
					}
				if (
					(M.forEach((e) => {
						s.slidesEl.append(d(u[e], e));
					}),
					r)
				)
					for (let e = T.length - 1; e >= 0; e -= 1) {
						const t = T[e];
						s.slidesEl.prepend(d(u[t], t));
					}
				else
					T.sort((e, t) => t - e),
						T.forEach((e) => {
							s.slidesEl.prepend(d(u[e], e));
						});
				h(s.slidesEl, '.swiper-slide, swiper-slide').forEach((e) => {
					e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + 'px';
				}),
					S();
			}
			r('beforeInit', () => {
				if (!s.params.virtual.enabled) return;
				let e;
				if (void 0 === s.passedParams.virtual.slides) {
					const t = [...s.slidesEl.children].filter((e) =>
						e.matches(`.${s.params.slideClass}, swiper-slide`)
					);
					t &&
						t.length &&
						((s.virtual.slides = [...t]),
						(e = !0),
						t.forEach((e, t) => {
							e.setAttribute('data-swiper-slide-index', t),
								(s.virtual.cache[t] = e),
								e.remove();
						}));
				}
				e || (s.virtual.slides = s.params.virtual.slides),
					s.classNames.push(
						`${s.params.containerModifierClass}virtual`
					),
					(s.params.watchSlidesProgress = !0),
					(s.originalParams.watchSlidesProgress = !0),
					c();
			}),
				r('setTranslate', () => {
					s.params.virtual.enabled &&
						(s.params.cssMode && !s._immediateVirtual
							? (clearTimeout(t),
							  (t = setTimeout(() => {
									c();
							  }, 100)))
							: c());
				}),
				r('init update resize', () => {
					s.params.virtual.enabled &&
						s.params.cssMode &&
						p(
							s.wrapperEl,
							'--swiper-virtual-size',
							`${s.virtualSize}px`
						);
				}),
				Object.assign(s.virtual, {
					appendSlide: function (e) {
						if ('object' == typeof e && 'length' in e)
							for (let t = 0; t < e.length; t += 1)
								e[t] && s.virtual.slides.push(e[t]);
						else s.virtual.slides.push(e);
						c(!0);
					},
					prependSlide: function (e) {
						const t = s.activeIndex;
						let a = t + 1,
							i = 1;
						if (Array.isArray(e)) {
							for (let t = 0; t < e.length; t += 1)
								e[t] && s.virtual.slides.unshift(e[t]);
							(a = t + e.length), (i = e.length);
						} else s.virtual.slides.unshift(e);
						if (s.params.virtual.cache) {
							const e = s.virtual.cache,
								t = {};
							Object.keys(e).forEach((s) => {
								const a = e[s],
									r = a.getAttribute(
										'data-swiper-slide-index'
									);
								r &&
									a.setAttribute(
										'data-swiper-slide-index',
										parseInt(r, 10) + i
									),
									(t[parseInt(s, 10) + i] = a);
							}),
								(s.virtual.cache = t);
						}
						c(!0), s.slideTo(a, 0);
					},
					removeSlide: function (e) {
						if (null == e) return;
						let t = s.activeIndex;
						if (Array.isArray(e))
							for (let a = e.length - 1; a >= 0; a -= 1)
								s.params.virtual.cache &&
									(delete s.virtual.cache[e[a]],
									Object.keys(s.virtual.cache).forEach(
										(t) => {
											t > e &&
												((s.virtual.cache[t - 1] =
													s.virtual.cache[t]),
												s.virtual.cache[
													t - 1
												].setAttribute(
													'data-swiper-slide-index',
													t - 1
												),
												delete s.virtual.cache[t]);
										}
									)),
									s.virtual.slides.splice(e[a], 1),
									e[a] < t && (t -= 1),
									(t = Math.max(t, 0));
						else
							s.params.virtual.cache &&
								(delete s.virtual.cache[e],
								Object.keys(s.virtual.cache).forEach((t) => {
									t > e &&
										((s.virtual.cache[t - 1] =
											s.virtual.cache[t]),
										s.virtual.cache[t - 1].setAttribute(
											'data-swiper-slide-index',
											t - 1
										),
										delete s.virtual.cache[t]);
								})),
								s.virtual.slides.splice(e, 1),
								e < t && (t -= 1),
								(t = Math.max(t, 0));
						c(!0), s.slideTo(t, 0);
					},
					removeAllSlides: function () {
						(s.virtual.slides = []),
							s.params.virtual.cache && (s.virtual.cache = {}),
							c(!0),
							s.slideTo(0, 0);
					},
					update: c,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: i, emit: n } = e;
			const l = a(),
				o = r();
			function d(e) {
				if (!t.enabled) return;
				const { rtlTranslate: s } = t;
				let a = e;
				a.originalEvent && (a = a.originalEvent);
				const i = a.keyCode || a.charCode,
					r = t.params.keyboard.pageUpDown,
					d = r && 33 === i,
					c = r && 34 === i,
					p = 37 === i,
					u = 39 === i,
					m = 38 === i,
					h = 40 === i;
				if (
					!t.allowSlideNext &&
					((t.isHorizontal() && u) || (t.isVertical() && h) || c)
				)
					return !1;
				if (
					!t.allowSlidePrev &&
					((t.isHorizontal() && p) || (t.isVertical() && m) || d)
				)
					return !1;
				if (
					!(
						a.shiftKey ||
						a.altKey ||
						a.ctrlKey ||
						a.metaKey ||
						(l.activeElement &&
							l.activeElement.nodeName &&
							('input' ===
								l.activeElement.nodeName.toLowerCase() ||
								'textarea' ===
									l.activeElement.nodeName.toLowerCase()))
					)
				) {
					if (
						t.params.keyboard.onlyInViewport &&
						(d || c || p || u || m || h)
					) {
						let e = !1;
						if (
							b(t.el, `.${t.params.slideClass}, swiper-slide`)
								.length > 0 &&
							0 ===
								b(t.el, `.${t.params.slideActiveClass}`).length
						)
							return;
						const a = t.el,
							i = a.clientWidth,
							r = a.clientHeight,
							n = o.innerWidth,
							l = o.innerHeight,
							d = g(a);
						s && (d.left -= a.scrollLeft);
						const c = [
							[d.left, d.top],
							[d.left + i, d.top],
							[d.left, d.top + r],
							[d.left + i, d.top + r],
						];
						for (let t = 0; t < c.length; t += 1) {
							const s = c[t];
							if (
								s[0] >= 0 &&
								s[0] <= n &&
								s[1] >= 0 &&
								s[1] <= l
							) {
								if (0 === s[0] && 0 === s[1]) continue;
								e = !0;
							}
						}
						if (!e) return;
					}
					t.isHorizontal()
						? ((d || c || p || u) &&
								(a.preventDefault
									? a.preventDefault()
									: (a.returnValue = !1)),
						  (((c || u) && !s) || ((d || p) && s)) &&
								t.slideNext(),
						  (((d || p) && !s) || ((c || u) && s)) &&
								t.slidePrev())
						: ((d || c || m || h) &&
								(a.preventDefault
									? a.preventDefault()
									: (a.returnValue = !1)),
						  (c || h) && t.slideNext(),
						  (d || m) && t.slidePrev()),
						n('keyPress', i);
				}
			}
			function c() {
				t.keyboard.enabled ||
					(l.addEventListener('keydown', d),
					(t.keyboard.enabled = !0));
			}
			function p() {
				t.keyboard.enabled &&
					(l.removeEventListener('keydown', d),
					(t.keyboard.enabled = !1));
			}
			(t.keyboard = { enabled: !1 }),
				s({
					keyboard: {
						enabled: !1,
						onlyInViewport: !0,
						pageUpDown: !0,
					},
				}),
				i('init', () => {
					t.params.keyboard.enabled && c();
				}),
				i('destroy', () => {
					t.keyboard.enabled && p();
				}),
				Object.assign(t.keyboard, { enable: c, disable: p });
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const o = r();
			let d;
			s({
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarget: 'container',
					thresholdDelta: null,
					thresholdTime: null,
					noMousewheelClass: 'swiper-no-mousewheel',
				},
			}),
				(t.mousewheel = { enabled: !1 });
			let c,
				p = l();
			const u = [];
			function m() {
				t.enabled && (t.mouseEntered = !0);
			}
			function h() {
				t.enabled && (t.mouseEntered = !1);
			}
			function f(e) {
				return (
					!(
						t.params.mousewheel.thresholdDelta &&
						e.delta < t.params.mousewheel.thresholdDelta
					) &&
					!(
						t.params.mousewheel.thresholdTime &&
						l() - p < t.params.mousewheel.thresholdTime
					) &&
					((e.delta >= 6 && l() - p < 60) ||
						(e.direction < 0
							? (t.isEnd && !t.params.loop) ||
							  t.animating ||
							  (t.slideNext(), i('scroll', e.raw))
							: (t.isBeginning && !t.params.loop) ||
							  t.animating ||
							  (t.slidePrev(), i('scroll', e.raw)),
						(p = new o.Date().getTime()),
						!1))
				);
			}
			function g(e) {
				let s = e,
					a = !0;
				if (!t.enabled) return;
				if (
					e.target.closest(
						`.${t.params.mousewheel.noMousewheelClass}`
					)
				)
					return;
				const r = t.params.mousewheel;
				t.params.cssMode && s.preventDefault();
				let o = t.el;
				'container' !== t.params.mousewheel.eventsTarget &&
					(o = document.querySelector(
						t.params.mousewheel.eventsTarget
					));
				const p = o && o.contains(s.target);
				if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
				s.originalEvent && (s = s.originalEvent);
				let m = 0;
				const h = t.rtlTranslate ? -1 : 1,
					g = (function (e) {
						let t = 0,
							s = 0,
							a = 0,
							i = 0;
						return (
							'detail' in e && (s = e.detail),
							'wheelDelta' in e && (s = -e.wheelDelta / 120),
							'wheelDeltaY' in e && (s = -e.wheelDeltaY / 120),
							'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
							'axis' in e &&
								e.axis === e.HORIZONTAL_AXIS &&
								((t = s), (s = 0)),
							(a = 10 * t),
							(i = 10 * s),
							'deltaY' in e && (i = e.deltaY),
							'deltaX' in e && (a = e.deltaX),
							e.shiftKey && !a && ((a = i), (i = 0)),
							(a || i) &&
								e.deltaMode &&
								(1 === e.deltaMode
									? ((a *= 40), (i *= 40))
									: ((a *= 800), (i *= 800))),
							a && !t && (t = a < 1 ? -1 : 1),
							i && !s && (s = i < 1 ? -1 : 1),
							{ spinX: t, spinY: s, pixelX: a, pixelY: i }
						);
					})(s);
				if (r.forceToAxis)
					if (t.isHorizontal()) {
						if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
							return !0;
						m = -g.pixelX * h;
					} else {
						if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
							return !0;
						m = -g.pixelY;
					}
				else
					m =
						Math.abs(g.pixelX) > Math.abs(g.pixelY)
							? -g.pixelX * h
							: -g.pixelY;
				if (0 === m) return !0;
				r.invert && (m = -m);
				let v = t.getTranslate() + m * r.sensitivity;
				if (
					(v >= t.minTranslate() && (v = t.minTranslate()),
					v <= t.maxTranslate() && (v = t.maxTranslate()),
					(a =
						!!t.params.loop ||
						!(v === t.minTranslate() || v === t.maxTranslate())),
					a && t.params.nested && s.stopPropagation(),
					t.params.freeMode && t.params.freeMode.enabled)
				) {
					const e = {
							time: l(),
							delta: Math.abs(m),
							direction: Math.sign(m),
						},
						a =
							c &&
							e.time < c.time + 500 &&
							e.delta <= c.delta &&
							e.direction === c.direction;
					if (!a) {
						c = void 0;
						let l = t.getTranslate() + m * r.sensitivity;
						const o = t.isBeginning,
							p = t.isEnd;
						if (
							(l >= t.minTranslate() && (l = t.minTranslate()),
							l <= t.maxTranslate() && (l = t.maxTranslate()),
							t.setTransition(0),
							t.setTranslate(l),
							t.updateProgress(),
							t.updateActiveIndex(),
							t.updateSlidesClasses(),
							((!o && t.isBeginning) || (!p && t.isEnd)) &&
								t.updateSlidesClasses(),
							t.params.loop &&
								t.loopFix({
									direction:
										e.direction < 0 ? 'next' : 'prev',
									byMousewheel: !0,
								}),
							t.params.freeMode.sticky)
						) {
							clearTimeout(d),
								(d = void 0),
								u.length >= 15 && u.shift();
							const s = u.length ? u[u.length - 1] : void 0,
								a = u[0];
							if (
								(u.push(e),
								s &&
									(e.delta > s.delta ||
										e.direction !== s.direction))
							)
								u.splice(0);
							else if (
								u.length >= 15 &&
								e.time - a.time < 500 &&
								a.delta - e.delta >= 1 &&
								e.delta <= 6
							) {
								const s = m > 0 ? 0.8 : 0.2;
								(c = e),
									u.splice(0),
									(d = n(() => {
										t.slideToClosest(
											t.params.speed,
											!0,
											void 0,
											s
										);
									}, 0));
							}
							d ||
								(d = n(() => {
									(c = e),
										u.splice(0),
										t.slideToClosest(
											t.params.speed,
											!0,
											void 0,
											0.5
										);
								}, 500));
						}
						if (
							(a || i('scroll', s),
							t.params.autoplay &&
								t.params.autoplayDisableOnInteraction &&
								t.autoplay.stop(),
							r.releaseOnEdges &&
								(l === t.minTranslate() ||
									l === t.maxTranslate()))
						)
							return !0;
					}
				} else {
					const s = {
						time: l(),
						delta: Math.abs(m),
						direction: Math.sign(m),
						raw: e,
					};
					u.length >= 2 && u.shift();
					const a = u.length ? u[u.length - 1] : void 0;
					if (
						(u.push(s),
						a
							? (s.direction !== a.direction ||
									s.delta > a.delta ||
									s.time > a.time + 150) &&
							  f(s)
							: f(s),
						(function (e) {
							const s = t.params.mousewheel;
							if (e.direction < 0) {
								if (
									t.isEnd &&
									!t.params.loop &&
									s.releaseOnEdges
								)
									return !0;
							} else if (
								t.isBeginning &&
								!t.params.loop &&
								s.releaseOnEdges
							)
								return !0;
							return !1;
						})(s))
					)
						return !0;
				}
				return (
					s.preventDefault
						? s.preventDefault()
						: (s.returnValue = !1),
					!1
				);
			}
			function v(e) {
				let s = t.el;
				'container' !== t.params.mousewheel.eventsTarget &&
					(s = document.querySelector(
						t.params.mousewheel.eventsTarget
					)),
					s[e]('mouseenter', m),
					s[e]('mouseleave', h),
					s[e]('wheel', g);
			}
			function w() {
				return t.params.cssMode
					? (t.wrapperEl.removeEventListener('wheel', g), !0)
					: !t.mousewheel.enabled &&
							(v('addEventListener'),
							(t.mousewheel.enabled = !0),
							!0);
			}
			function b() {
				return t.params.cssMode
					? (t.wrapperEl.addEventListener(event, g), !0)
					: !!t.mousewheel.enabled &&
							(v('removeEventListener'),
							(t.mousewheel.enabled = !1),
							!0);
			}
			a('init', () => {
				!t.params.mousewheel.enabled && t.params.cssMode && b(),
					t.params.mousewheel.enabled && w();
			}),
				a('destroy', () => {
					t.params.cssMode && w(), t.mousewheel.enabled && b();
				}),
				Object.assign(t.mousewheel, { enable: w, disable: b });
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			s({
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: 'swiper-button-disabled',
					hiddenClass: 'swiper-button-hidden',
					lockClass: 'swiper-button-lock',
					navigationDisabledClass: 'swiper-navigation-disabled',
				},
			}),
				(t.navigation = { nextEl: null, prevEl: null });
			const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
			function n(e) {
				let s;
				return e &&
					'string' == typeof e &&
					t.isElement &&
					((s = t.el.querySelector(e)), s)
					? s
					: (e &&
							('string' == typeof e &&
								(s = [...document.querySelectorAll(e)]),
							t.params.uniqueNavElements &&
								'string' == typeof e &&
								s.length > 1 &&
								1 === t.el.querySelectorAll(e).length &&
								(s = t.el.querySelector(e))),
					  e && !s ? e : s);
			}
			function l(e, s) {
				const a = t.params.navigation;
				(e = r(e)).forEach((e) => {
					e &&
						(e.classList[s ? 'add' : 'remove'](
							...a.disabledClass.split(' ')
						),
						'BUTTON' === e.tagName && (e.disabled = s),
						t.params.watchOverflow &&
							t.enabled &&
							e.classList[t.isLocked ? 'add' : 'remove'](
								a.lockClass
							));
				});
			}
			function o() {
				const { nextEl: e, prevEl: s } = t.navigation;
				if (t.params.loop) return l(s, !1), void l(e, !1);
				l(s, t.isBeginning && !t.params.rewind),
					l(e, t.isEnd && !t.params.rewind);
			}
			function d(e) {
				e.preventDefault(),
					(!t.isBeginning || t.params.loop || t.params.rewind) &&
						(t.slidePrev(), i('navigationPrev'));
			}
			function c(e) {
				e.preventDefault(),
					(!t.isEnd || t.params.loop || t.params.rewind) &&
						(t.slideNext(), i('navigationNext'));
			}
			function p() {
				const e = t.params.navigation;
				if (
					((t.params.navigation = J(
						t,
						t.originalParams.navigation,
						t.params.navigation,
						{
							nextEl: 'swiper-button-next',
							prevEl: 'swiper-button-prev',
						}
					)),
					!e.nextEl && !e.prevEl)
				)
					return;
				let s = n(e.nextEl),
					a = n(e.prevEl);
				Object.assign(t.navigation, { nextEl: s, prevEl: a }),
					(s = r(s)),
					(a = r(a));
				const i = (s, a) => {
					s && s.addEventListener('click', 'next' === a ? c : d),
						!t.enabled &&
							s &&
							s.classList.add(...e.lockClass.split(' '));
				};
				s.forEach((e) => i(e, 'next')), a.forEach((e) => i(e, 'prev'));
			}
			function u() {
				let { nextEl: e, prevEl: s } = t.navigation;
				(e = r(e)), (s = r(s));
				const a = (e, s) => {
					e.removeEventListener('click', 'next' === s ? c : d),
						e.classList.remove(
							...t.params.navigation.disabledClass.split(' ')
						);
				};
				e.forEach((e) => a(e, 'next')), s.forEach((e) => a(e, 'prev'));
			}
			a('init', () => {
				!1 === t.params.navigation.enabled ? m() : (p(), o());
			}),
				a('toEdge fromEdge lock unlock', () => {
					o();
				}),
				a('destroy', () => {
					u();
				}),
				a('enable disable', () => {
					let { nextEl: e, prevEl: s } = t.navigation;
					(e = r(e)),
						(s = r(s)),
						t.enabled
							? o()
							: [...e, ...s]
									.filter((e) => !!e)
									.forEach((e) =>
										e.classList.add(
											t.params.navigation.lockClass
										)
									);
				}),
				a('click', (e, s) => {
					let { nextEl: a, prevEl: n } = t.navigation;
					(a = r(a)), (n = r(n));
					const l = s.target;
					if (
						t.params.navigation.hideOnClick &&
						!n.includes(l) &&
						!a.includes(l)
					) {
						if (
							t.pagination &&
							t.params.pagination &&
							t.params.pagination.clickable &&
							(t.pagination.el === l ||
								t.pagination.el.contains(l))
						)
							return;
						let e;
						a.length
							? (e = a[0].classList.contains(
									t.params.navigation.hiddenClass
							  ))
							: n.length &&
							  (e = n[0].classList.contains(
									t.params.navigation.hiddenClass
							  )),
							i(!0 === e ? 'navigationShow' : 'navigationHide'),
							[...a, ...n]
								.filter((e) => !!e)
								.forEach((e) =>
									e.classList.toggle(
										t.params.navigation.hiddenClass
									)
								);
					}
				});
			const m = () => {
				t.el.classList.add(
					...t.params.navigation.navigationDisabledClass.split(' ')
				),
					u();
			};
			Object.assign(t.navigation, {
				enable: () => {
					t.el.classList.remove(
						...t.params.navigation.navigationDisabledClass.split(
							' '
						)
					),
						p(),
						o();
				},
				disable: m,
				update: o,
				init: p,
				destroy: u,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const r = 'swiper-pagination';
			let n;
			s({
				pagination: {
					el: null,
					bulletElement: 'span',
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: 'bullets',
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: (e) => e,
					formatFractionTotal: (e) => e,
					bulletClass: `${r}-bullet`,
					bulletActiveClass: `${r}-bullet-active`,
					modifierClass: `${r}-`,
					currentClass: `${r}-current`,
					totalClass: `${r}-total`,
					hiddenClass: `${r}-hidden`,
					progressbarFillClass: `${r}-progressbar-fill`,
					progressbarOppositeClass: `${r}-progressbar-opposite`,
					clickableClass: `${r}-clickable`,
					lockClass: `${r}-lock`,
					horizontalClass: `${r}-horizontal`,
					verticalClass: `${r}-vertical`,
					paginationDisabledClass: `${r}-disabled`,
				},
			}),
				(t.pagination = { el: null, bullets: [] });
			let l = 0;
			const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
			function d() {
				return (
					!t.params.pagination.el ||
					!t.pagination.el ||
					(Array.isArray(t.pagination.el) &&
						0 === t.pagination.el.length)
				);
			}
			function c(e, s) {
				const { bulletActiveClass: a } = t.params.pagination;
				e &&
					(e =
						e[
							('prev' === s ? 'previous' : 'next') +
								'ElementSibling'
						]) &&
					(e.classList.add(`${a}-${s}`),
					(e =
						e[
							('prev' === s ? 'previous' : 'next') +
								'ElementSibling'
						]) && e.classList.add(`${a}-${s}-${s}`));
			}
			function p(e) {
				const s = e.target.closest(ee(t.params.pagination.bulletClass));
				if (!s) return;
				e.preventDefault();
				const a = w(s) * t.params.slidesPerGroup;
				if (t.params.loop) {
					if (t.realIndex === a) return;
					const e = t.realIndex,
						s = t.getSlideIndexByData(a),
						i = t.getSlideIndexByData(t.realIndex),
						r = (a) => {
							const i = t.activeIndex;
							t.loopFix({
								direction: a,
								activeSlideIndex: s,
								slideTo: !1,
							});
							i === t.activeIndex && t.slideToLoop(e, 0, !1, !0);
						};
					if (s > t.slides.length - t.loopedSlides)
						r(s > i ? 'next' : 'prev');
					else if (t.params.centeredSlides) {
						const e =
							'auto' === t.params.slidesPerView
								? t.slidesPerViewDynamic()
								: Math.ceil(
										parseFloat(t.params.slidesPerView, 10)
								  );
						s < Math.floor(e / 2) && r('prev');
					}
					t.slideToLoop(a);
				} else t.slideTo(a);
			}
			function u() {
				const e = t.rtl,
					s = t.params.pagination;
				if (d()) return;
				let a,
					r,
					p = t.pagination.el;
				p = o(p);
				const u =
						t.virtual && t.params.virtual.enabled
							? t.virtual.slides.length
							: t.slides.length,
					m = t.params.loop
						? Math.ceil(u / t.params.slidesPerGroup)
						: t.snapGrid.length;
				if (
					(t.params.loop
						? ((r = t.previousRealIndex || 0),
						  (a =
								t.params.slidesPerGroup > 1
									? Math.floor(
											t.realIndex /
												t.params.slidesPerGroup
									  )
									: t.realIndex))
						: void 0 !== t.snapIndex
						? ((a = t.snapIndex), (r = t.previousSnapIndex))
						: ((r = t.previousIndex || 0),
						  (a = t.activeIndex || 0)),
					'bullets' === s.type &&
						t.pagination.bullets &&
						t.pagination.bullets.length > 0)
				) {
					const i = t.pagination.bullets;
					let o, d, u;
					if (
						(s.dynamicBullets &&
							((n = E(
								i[0],
								t.isHorizontal() ? 'width' : 'height',
								!0
							)),
							p.forEach((e) => {
								e.style[t.isHorizontal() ? 'width' : 'height'] =
									n * (s.dynamicMainBullets + 4) + 'px';
							}),
							s.dynamicMainBullets > 1 &&
								void 0 !== r &&
								((l += a - (r || 0)),
								l > s.dynamicMainBullets - 1
									? (l = s.dynamicMainBullets - 1)
									: l < 0 && (l = 0)),
							(o = Math.max(a - l, 0)),
							(d =
								o +
								(Math.min(i.length, s.dynamicMainBullets) - 1)),
							(u = (d + o) / 2)),
						i.forEach((e) => {
							const t = [
								...[
									'',
									'-next',
									'-next-next',
									'-prev',
									'-prev-prev',
									'-main',
								].map((e) => `${s.bulletActiveClass}${e}`),
							]
								.map((e) =>
									'string' == typeof e && e.includes(' ')
										? e.split(' ')
										: e
								)
								.flat();
							e.classList.remove(...t);
						}),
						p.length > 1)
					)
						i.forEach((e) => {
							const i = w(e);
							i === a
								? e.classList.add(
										...s.bulletActiveClass.split(' ')
								  )
								: t.isElement &&
								  e.setAttribute('part', 'bullet'),
								s.dynamicBullets &&
									(i >= o &&
										i <= d &&
										e.classList.add(
											...`${s.bulletActiveClass}-main`.split(
												' '
											)
										),
									i === o && c(e, 'prev'),
									i === d && c(e, 'next'));
						});
					else {
						const e = i[a];
						if (
							(e &&
								e.classList.add(
									...s.bulletActiveClass.split(' ')
								),
							t.isElement &&
								i.forEach((e, t) => {
									e.setAttribute(
										'part',
										t === a ? 'bullet-active' : 'bullet'
									);
								}),
							s.dynamicBullets)
						) {
							const e = i[o],
								t = i[d];
							for (let e = o; e <= d; e += 1)
								i[e] &&
									i[e].classList.add(
										...`${s.bulletActiveClass}-main`.split(
											' '
										)
									);
							c(e, 'prev'), c(t, 'next');
						}
					}
					if (s.dynamicBullets) {
						const a = Math.min(i.length, s.dynamicMainBullets + 4),
							r = (n * a - n) / 2 - u * n,
							l = e ? 'right' : 'left';
						i.forEach((e) => {
							e.style[t.isHorizontal() ? l : 'top'] = `${r}px`;
						});
					}
				}
				p.forEach((e, r) => {
					if (
						('fraction' === s.type &&
							(e
								.querySelectorAll(ee(s.currentClass))
								.forEach((e) => {
									e.textContent = s.formatFractionCurrent(
										a + 1
									);
								}),
							e
								.querySelectorAll(ee(s.totalClass))
								.forEach((e) => {
									e.textContent = s.formatFractionTotal(m);
								})),
						'progressbar' === s.type)
					) {
						let i;
						i = s.progressbarOpposite
							? t.isHorizontal()
								? 'vertical'
								: 'horizontal'
							: t.isHorizontal()
							? 'horizontal'
							: 'vertical';
						const r = (a + 1) / m;
						let n = 1,
							l = 1;
						'horizontal' === i ? (n = r) : (l = r),
							e
								.querySelectorAll(ee(s.progressbarFillClass))
								.forEach((e) => {
									(e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
										(e.style.transitionDuration = `${t.params.speed}ms`);
								});
					}
					'custom' === s.type && s.renderCustom
						? ((e.innerHTML = s.renderCustom(t, a + 1, m)),
						  0 === r && i('paginationRender', e))
						: (0 === r && i('paginationRender', e),
						  i('paginationUpdate', e)),
						t.params.watchOverflow &&
							t.enabled &&
							e.classList[t.isLocked ? 'add' : 'remove'](
								s.lockClass
							);
				});
			}
			function m() {
				const e = t.params.pagination;
				if (d()) return;
				const s =
					t.virtual && t.params.virtual.enabled
						? t.virtual.slides.length
						: t.slides.length;
				let a = t.pagination.el;
				a = o(a);
				let r = '';
				if ('bullets' === e.type) {
					let a = t.params.loop
						? Math.ceil(s / t.params.slidesPerGroup)
						: t.snapGrid.length;
					t.params.freeMode &&
						t.params.freeMode.enabled &&
						a > s &&
						(a = s);
					for (let s = 0; s < a; s += 1)
						e.renderBullet
							? (r += e.renderBullet.call(t, s, e.bulletClass))
							: (r += `<${e.bulletElement} ${
									t.isElement ? 'part="bullet"' : ''
							  } class="${e.bulletClass}"></${
									e.bulletElement
							  }>`);
				}
				'fraction' === e.type &&
					(r = e.renderFraction
						? e.renderFraction.call(t, e.currentClass, e.totalClass)
						: `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
					'progressbar' === e.type &&
						(r = e.renderProgressbar
							? e.renderProgressbar.call(
									t,
									e.progressbarFillClass
							  )
							: `<span class="${e.progressbarFillClass}"></span>`),
					(t.pagination.bullets = []),
					a.forEach((s) => {
						'custom' !== e.type && (s.innerHTML = r || ''),
							'bullets' === e.type &&
								t.pagination.bullets.push(
									...s.querySelectorAll(ee(e.bulletClass))
								);
					}),
					'custom' !== e.type && i('paginationRender', a[0]);
			}
			function h() {
				t.params.pagination = J(
					t,
					t.originalParams.pagination,
					t.params.pagination,
					{ el: 'swiper-pagination' }
				);
				const e = t.params.pagination;
				if (!e.el) return;
				let s;
				'string' == typeof e.el &&
					t.isElement &&
					(s = t.el.querySelector(e.el)),
					s ||
						'string' != typeof e.el ||
						(s = [...document.querySelectorAll(e.el)]),
					s || (s = e.el),
					s &&
						0 !== s.length &&
						(t.params.uniqueNavElements &&
							'string' == typeof e.el &&
							Array.isArray(s) &&
							s.length > 1 &&
							((s = [...t.el.querySelectorAll(e.el)]),
							s.length > 1 &&
								(s = s.filter(
									(e) => b(e, '.swiper')[0] === t.el
								)[0])),
						Array.isArray(s) && 1 === s.length && (s = s[0]),
						Object.assign(t.pagination, { el: s }),
						(s = o(s)),
						s.forEach((s) => {
							'bullets' === e.type &&
								e.clickable &&
								s.classList.add(
									...(e.clickableClass || '').split(' ')
								),
								s.classList.add(e.modifierClass + e.type),
								s.classList.add(
									t.isHorizontal()
										? e.horizontalClass
										: e.verticalClass
								),
								'bullets' === e.type &&
									e.dynamicBullets &&
									(s.classList.add(
										`${e.modifierClass}${e.type}-dynamic`
									),
									(l = 0),
									e.dynamicMainBullets < 1 &&
										(e.dynamicMainBullets = 1)),
								'progressbar' === e.type &&
									e.progressbarOpposite &&
									s.classList.add(e.progressbarOppositeClass),
								e.clickable && s.addEventListener('click', p),
								t.enabled || s.classList.add(e.lockClass);
						}));
			}
			function f() {
				const e = t.params.pagination;
				if (d()) return;
				let s = t.pagination.el;
				s &&
					((s = o(s)),
					s.forEach((s) => {
						s.classList.remove(e.hiddenClass),
							s.classList.remove(e.modifierClass + e.type),
							s.classList.remove(
								t.isHorizontal()
									? e.horizontalClass
									: e.verticalClass
							),
							e.clickable &&
								(s.classList.remove(
									...(e.clickableClass || '').split(' ')
								),
								s.removeEventListener('click', p));
					})),
					t.pagination.bullets &&
						t.pagination.bullets.forEach((t) =>
							t.classList.remove(
								...e.bulletActiveClass.split(' ')
							)
						);
			}
			a('changeDirection', () => {
				if (!t.pagination || !t.pagination.el) return;
				const e = t.params.pagination;
				let { el: s } = t.pagination;
				(s = o(s)),
					s.forEach((s) => {
						s.classList.remove(e.horizontalClass, e.verticalClass),
							s.classList.add(
								t.isHorizontal()
									? e.horizontalClass
									: e.verticalClass
							);
					});
			}),
				a('init', () => {
					!1 === t.params.pagination.enabled ? g() : (h(), m(), u());
				}),
				a('activeIndexChange', () => {
					void 0 === t.snapIndex && u();
				}),
				a('snapIndexChange', () => {
					u();
				}),
				a('snapGridLengthChange', () => {
					m(), u();
				}),
				a('destroy', () => {
					f();
				}),
				a('enable disable', () => {
					let { el: e } = t.pagination;
					e &&
						((e = o(e)),
						e.forEach((e) =>
							e.classList[t.enabled ? 'remove' : 'add'](
								t.params.pagination.lockClass
							)
						));
				}),
				a('lock unlock', () => {
					u();
				}),
				a('click', (e, s) => {
					const a = s.target,
						r = o(t.pagination.el);
					if (
						t.params.pagination.el &&
						t.params.pagination.hideOnClick &&
						r &&
						r.length > 0 &&
						!a.classList.contains(t.params.pagination.bulletClass)
					) {
						if (
							t.navigation &&
							((t.navigation.nextEl &&
								a === t.navigation.nextEl) ||
								(t.navigation.prevEl &&
									a === t.navigation.prevEl))
						)
							return;
						const e = r[0].classList.contains(
							t.params.pagination.hiddenClass
						);
						i(!0 === e ? 'paginationShow' : 'paginationHide'),
							r.forEach((e) =>
								e.classList.toggle(
									t.params.pagination.hiddenClass
								)
							);
					}
				});
			const g = () => {
				t.el.classList.add(t.params.pagination.paginationDisabledClass);
				let { el: e } = t.pagination;
				e &&
					((e = o(e)),
					e.forEach((e) =>
						e.classList.add(
							t.params.pagination.paginationDisabledClass
						)
					)),
					f();
			};
			Object.assign(t.pagination, {
				enable: () => {
					t.el.classList.remove(
						t.params.pagination.paginationDisabledClass
					);
					let { el: e } = t.pagination;
					e &&
						((e = o(e)),
						e.forEach((e) =>
							e.classList.remove(
								t.params.pagination.paginationDisabledClass
							)
						)),
						h(),
						m(),
						u();
				},
				disable: g,
				render: m,
				update: u,
				init: h,
				destroy: f,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: i, emit: r } = e;
			const l = a();
			let o,
				d,
				c,
				p,
				u = !1,
				m = null,
				h = null;
			function v() {
				if (!t.params.scrollbar.el || !t.scrollbar.el) return;
				const { scrollbar: e, rtlTranslate: s } = t,
					{ dragEl: a, el: i } = e,
					r = t.params.scrollbar,
					n = t.params.loop ? t.progressLoop : t.progress;
				let l = d,
					o = (c - d) * n;
				s
					? ((o = -o),
					  o > 0
							? ((l = d - o), (o = 0))
							: -o + d > c && (l = c + o))
					: o < 0
					? ((l = d + o), (o = 0))
					: o + d > c && (l = c - o),
					t.isHorizontal()
						? ((a.style.transform = `translate3d(${o}px, 0, 0)`),
						  (a.style.width = `${l}px`))
						: ((a.style.transform = `translate3d(0px, ${o}px, 0)`),
						  (a.style.height = `${l}px`)),
					r.hide &&
						(clearTimeout(m),
						(i.style.opacity = 1),
						(m = setTimeout(() => {
							(i.style.opacity = 0),
								(i.style.transitionDuration = '400ms');
						}, 1e3)));
			}
			function w() {
				if (!t.params.scrollbar.el || !t.scrollbar.el) return;
				const { scrollbar: e } = t,
					{ dragEl: s, el: a } = e;
				(s.style.width = ''),
					(s.style.height = ''),
					(c = t.isHorizontal() ? a.offsetWidth : a.offsetHeight),
					(p =
						t.size /
						(t.virtualSize +
							t.params.slidesOffsetBefore -
							(t.params.centeredSlides ? t.snapGrid[0] : 0))),
					(d =
						'auto' === t.params.scrollbar.dragSize
							? c * p
							: parseInt(t.params.scrollbar.dragSize, 10)),
					t.isHorizontal()
						? (s.style.width = `${d}px`)
						: (s.style.height = `${d}px`),
					(a.style.display = p >= 1 ? 'none' : ''),
					t.params.scrollbar.hide && (a.style.opacity = 0),
					t.params.watchOverflow &&
						t.enabled &&
						e.el.classList[t.isLocked ? 'add' : 'remove'](
							t.params.scrollbar.lockClass
						);
			}
			function b(e) {
				return t.isHorizontal() ? e.clientX : e.clientY;
			}
			function y(e) {
				const { scrollbar: s, rtlTranslate: a } = t,
					{ el: i } = s;
				let r;
				(r =
					(b(e) -
						g(i)[t.isHorizontal() ? 'left' : 'top'] -
						(null !== o ? o : d / 2)) /
					(c - d)),
					(r = Math.max(Math.min(r, 1), 0)),
					a && (r = 1 - r);
				const n =
					t.minTranslate() +
					(t.maxTranslate() - t.minTranslate()) * r;
				t.updateProgress(n),
					t.setTranslate(n),
					t.updateActiveIndex(),
					t.updateSlidesClasses();
			}
			function E(e) {
				const s = t.params.scrollbar,
					{ scrollbar: a, wrapperEl: i } = t,
					{ el: n, dragEl: l } = a;
				(u = !0),
					(o =
						e.target === l
							? b(e) -
							  e.target.getBoundingClientRect()[
									t.isHorizontal() ? 'left' : 'top'
							  ]
							: null),
					e.preventDefault(),
					e.stopPropagation(),
					(i.style.transitionDuration = '100ms'),
					(l.style.transitionDuration = '100ms'),
					y(e),
					clearTimeout(h),
					(n.style.transitionDuration = '0ms'),
					s.hide && (n.style.opacity = 1),
					t.params.cssMode &&
						(t.wrapperEl.style['scroll-snap-type'] = 'none'),
					r('scrollbarDragStart', e);
			}
			function x(e) {
				const { scrollbar: s, wrapperEl: a } = t,
					{ el: i, dragEl: n } = s;
				u &&
					(e.preventDefault
						? e.preventDefault()
						: (e.returnValue = !1),
					y(e),
					(a.style.transitionDuration = '0ms'),
					(i.style.transitionDuration = '0ms'),
					(n.style.transitionDuration = '0ms'),
					r('scrollbarDragMove', e));
			}
			function S(e) {
				const s = t.params.scrollbar,
					{ scrollbar: a, wrapperEl: i } = t,
					{ el: l } = a;
				u &&
					((u = !1),
					t.params.cssMode &&
						((t.wrapperEl.style['scroll-snap-type'] = ''),
						(i.style.transitionDuration = '')),
					s.hide &&
						(clearTimeout(h),
						(h = n(() => {
							(l.style.opacity = 0),
								(l.style.transitionDuration = '400ms');
						}, 1e3))),
					r('scrollbarDragEnd', e),
					s.snapOnRelease && t.slideToClosest());
			}
			function T(e) {
				const { scrollbar: s, params: a } = t,
					i = s.el;
				if (!i) return;
				const r = i,
					n = !!a.passiveListeners && { passive: !1, capture: !1 },
					o = !!a.passiveListeners && { passive: !0, capture: !1 };
				if (!r) return;
				const d =
					'on' === e ? 'addEventListener' : 'removeEventListener';
				r[d]('pointerdown', E, n),
					l[d]('pointermove', x, n),
					l[d]('pointerup', S, o);
			}
			function M() {
				const { scrollbar: e, el: s } = t;
				t.params.scrollbar = J(
					t,
					t.originalParams.scrollbar,
					t.params.scrollbar,
					{ el: 'swiper-scrollbar' }
				);
				const a = t.params.scrollbar;
				if (!a.el) return;
				let i, r;
				'string' == typeof a.el &&
					t.isElement &&
					(i = t.el.querySelector(a.el)),
					i || 'string' != typeof a.el
						? i || (i = a.el)
						: (i = l.querySelectorAll(a.el)),
					t.params.uniqueNavElements &&
						'string' == typeof a.el &&
						i.length > 1 &&
						1 === s.querySelectorAll(a.el).length &&
						(i = s.querySelector(a.el)),
					i.length > 0 && (i = i[0]),
					i.classList.add(
						t.isHorizontal() ? a.horizontalClass : a.verticalClass
					),
					i &&
						((r = i.querySelector(
							`.${t.params.scrollbar.dragClass}`
						)),
						r ||
							((r = f('div', t.params.scrollbar.dragClass)),
							i.append(r))),
					Object.assign(e, { el: i, dragEl: r }),
					a.draggable &&
						t.params.scrollbar.el &&
						t.scrollbar.el &&
						T('on'),
					i &&
						i.classList[t.enabled ? 'remove' : 'add'](
							t.params.scrollbar.lockClass
						);
			}
			function C() {
				const e = t.params.scrollbar,
					s = t.scrollbar.el;
				s &&
					s.classList.remove(
						t.isHorizontal() ? e.horizontalClass : e.verticalClass
					),
					t.params.scrollbar.el && t.scrollbar.el && T('off');
			}
			s({
				scrollbar: {
					el: null,
					dragSize: 'auto',
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: 'swiper-scrollbar-lock',
					dragClass: 'swiper-scrollbar-drag',
					scrollbarDisabledClass: 'swiper-scrollbar-disabled',
					horizontalClass: 'swiper-scrollbar-horizontal',
					verticalClass: 'swiper-scrollbar-vertical',
				},
			}),
				(t.scrollbar = { el: null, dragEl: null }),
				i('init', () => {
					!1 === t.params.scrollbar.enabled ? P() : (M(), w(), v());
				}),
				i('update resize observerUpdate lock unlock', () => {
					w();
				}),
				i('setTranslate', () => {
					v();
				}),
				i('setTransition', (e, s) => {
					!(function (e) {
						t.params.scrollbar.el &&
							t.scrollbar.el &&
							(t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
					})(s);
				}),
				i('enable disable', () => {
					const { el: e } = t.scrollbar;
					e &&
						e.classList[t.enabled ? 'remove' : 'add'](
							t.params.scrollbar.lockClass
						);
				}),
				i('destroy', () => {
					C();
				});
			const P = () => {
				t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
					t.scrollbar.el &&
						t.scrollbar.el.classList.add(
							t.params.scrollbar.scrollbarDisabledClass
						),
					C();
			};
			Object.assign(t.scrollbar, {
				enable: () => {
					t.el.classList.remove(
						t.params.scrollbar.scrollbarDisabledClass
					),
						t.scrollbar.el &&
							t.scrollbar.el.classList.remove(
								t.params.scrollbar.scrollbarDisabledClass
							),
						M(),
						w(),
						v();
				},
				disable: P,
				updateSize: w,
				setTranslate: v,
				init: M,
				destroy: C,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({ parallax: { enabled: !1 } });
			const i =
					'[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
				r = (e, s) => {
					const { rtl: a } = t,
						i = a ? -1 : 1,
						r = e.getAttribute('data-swiper-parallax') || '0';
					let n = e.getAttribute('data-swiper-parallax-x'),
						l = e.getAttribute('data-swiper-parallax-y');
					const o = e.getAttribute('data-swiper-parallax-scale'),
						d = e.getAttribute('data-swiper-parallax-opacity'),
						c = e.getAttribute('data-swiper-parallax-rotate');
					if (
						(n || l
							? ((n = n || '0'), (l = l || '0'))
							: t.isHorizontal()
							? ((n = r), (l = '0'))
							: ((l = r), (n = '0')),
						(n =
							n.indexOf('%') >= 0
								? parseInt(n, 10) * s * i + '%'
								: n * s * i + 'px'),
						(l =
							l.indexOf('%') >= 0
								? parseInt(l, 10) * s + '%'
								: l * s + 'px'),
						null != d)
					) {
						const t = d - (d - 1) * (1 - Math.abs(s));
						e.style.opacity = t;
					}
					let p = `translate3d(${n}, ${l}, 0px)`;
					if (null != o) {
						p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
					}
					if (c && null != c) {
						p += ` rotate(${c * s * -1}deg)`;
					}
					e.style.transform = p;
				},
				n = () => {
					const {
							el: e,
							slides: s,
							progress: a,
							snapGrid: n,
							isElement: l,
						} = t,
						o = h(e, i);
					t.isElement && o.push(...h(t.hostEl, i)),
						o.forEach((e) => {
							r(e, a);
						}),
						s.forEach((e, s) => {
							let l = e.progress;
							t.params.slidesPerGroup > 1 &&
								'auto' !== t.params.slidesPerView &&
								(l += Math.ceil(s / 2) - a * (n.length - 1)),
								(l = Math.min(Math.max(l, -1), 1)),
								e
									.querySelectorAll(
										`${i}, [data-swiper-parallax-rotate]`
									)
									.forEach((e) => {
										r(e, l);
									});
						});
				};
			a('beforeInit', () => {
				t.params.parallax.enabled &&
					((t.params.watchSlidesProgress = !0),
					(t.originalParams.watchSlidesProgress = !0));
			}),
				a('init', () => {
					t.params.parallax.enabled && n();
				}),
				a('setTranslate', () => {
					t.params.parallax.enabled && n();
				}),
				a('setTransition', (e, s) => {
					t.params.parallax.enabled &&
						(function (e) {
							void 0 === e && (e = t.params.speed);
							const { el: s, hostEl: a } = t,
								r = [...s.querySelectorAll(i)];
							t.isElement && r.push(...a.querySelectorAll(i)),
								r.forEach((t) => {
									let s =
										parseInt(
											t.getAttribute(
												'data-swiper-parallax-duration'
											),
											10
										) || e;
									0 === e && (s = 0),
										(t.style.transitionDuration = `${s}ms`);
								});
						})(s);
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const n = r();
			s({
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: 'swiper-zoom-container',
					zoomedSlideClass: 'swiper-slide-zoomed',
				},
			}),
				(t.zoom = { enabled: !1 });
			let l,
				d,
				c = 1,
				p = !1;
			const u = [],
				m = {
					originX: 0,
					originY: 0,
					slideEl: void 0,
					slideWidth: void 0,
					slideHeight: void 0,
					imageEl: void 0,
					imageWrapEl: void 0,
					maxRatio: 3,
				},
				f = {
					isTouched: void 0,
					isMoved: void 0,
					currentX: void 0,
					currentY: void 0,
					minX: void 0,
					minY: void 0,
					maxX: void 0,
					maxY: void 0,
					width: void 0,
					height: void 0,
					startX: void 0,
					startY: void 0,
					touchesStart: {},
					touchesCurrent: {},
				},
				v = {
					x: void 0,
					y: void 0,
					prevPositionX: void 0,
					prevPositionY: void 0,
					prevTime: void 0,
				};
			let w = 1;
			function y() {
				if (u.length < 2) return 1;
				const e = u[0].pageX,
					t = u[0].pageY,
					s = u[1].pageX,
					a = u[1].pageY;
				return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
			}
			function E(e) {
				const s = t.isElement
					? 'swiper-slide'
					: `.${t.params.slideClass}`;
				return (
					!!e.target.matches(s) ||
					t.slides.filter((t) => t.contains(e.target)).length > 0
				);
			}
			function x(e) {
				if (('mouse' === e.pointerType && u.splice(0, u.length), !E(e)))
					return;
				const s = t.params.zoom;
				if (((l = !1), (d = !1), u.push(e), !(u.length < 2))) {
					if (((l = !0), (m.scaleStart = y()), !m.slideEl)) {
						(m.slideEl = e.target.closest(
							`.${t.params.slideClass}, swiper-slide`
						)),
							m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
						let a = m.slideEl.querySelector(`.${s.containerClass}`);
						if (
							(a &&
								(a = a.querySelectorAll(
									'picture, img, svg, canvas, .swiper-zoom-target'
								)[0]),
							(m.imageEl = a),
							(m.imageWrapEl = a
								? b(m.imageEl, `.${s.containerClass}`)[0]
								: void 0),
							!m.imageWrapEl)
						)
							return void (m.imageEl = void 0);
						m.maxRatio =
							m.imageWrapEl.getAttribute('data-swiper-zoom') ||
							s.maxRatio;
					}
					if (m.imageEl) {
						const [e, t] = (function () {
							if (u.length < 2) return { x: null, y: null };
							const e = m.imageEl.getBoundingClientRect();
							return [
								(u[0].pageX +
									(u[1].pageX - u[0].pageX) / 2 -
									e.x -
									n.scrollX) /
									c,
								(u[0].pageY +
									(u[1].pageY - u[0].pageY) / 2 -
									e.y -
									n.scrollY) /
									c,
							];
						})();
						(m.originX = e),
							(m.originY = t),
							(m.imageEl.style.transitionDuration = '0ms');
					}
					p = !0;
				}
			}
			function S(e) {
				if (!E(e)) return;
				const s = t.params.zoom,
					a = t.zoom,
					i = u.findIndex((t) => t.pointerId === e.pointerId);
				i >= 0 && (u[i] = e),
					u.length < 2 ||
						((d = !0),
						(m.scaleMove = y()),
						m.imageEl &&
							((a.scale = (m.scaleMove / m.scaleStart) * c),
							a.scale > m.maxRatio &&
								(a.scale =
									m.maxRatio -
									1 +
									(a.scale - m.maxRatio + 1) ** 0.5),
							a.scale < s.minRatio &&
								(a.scale =
									s.minRatio +
									1 -
									(s.minRatio - a.scale + 1) ** 0.5),
							(m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`)));
			}
			function T(e) {
				if (!E(e)) return;
				if ('mouse' === e.pointerType && 'pointerout' === e.type)
					return;
				const s = t.params.zoom,
					a = t.zoom,
					i = u.findIndex((t) => t.pointerId === e.pointerId);
				i >= 0 && u.splice(i, 1),
					l &&
						d &&
						((l = !1),
						(d = !1),
						m.imageEl &&
							((a.scale = Math.max(
								Math.min(a.scale, m.maxRatio),
								s.minRatio
							)),
							(m.imageEl.style.transitionDuration = `${t.params.speed}ms`),
							(m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`),
							(c = a.scale),
							(p = !1),
							a.scale > 1 && m.slideEl
								? m.slideEl.classList.add(
										`${s.zoomedSlideClass}`
								  )
								: a.scale <= 1 &&
								  m.slideEl &&
								  m.slideEl.classList.remove(
										`${s.zoomedSlideClass}`
								  ),
							1 === a.scale &&
								((m.originX = 0),
								(m.originY = 0),
								(m.slideEl = void 0))));
			}
			function M(e) {
				if (
					!E(e) ||
					!(function (e) {
						const s = `.${t.params.zoom.containerClass}`;
						return (
							!!e.target.matches(s) ||
							[...t.hostEl.querySelectorAll(s)].filter((t) =>
								t.contains(e.target)
							).length > 0
						);
					})(e)
				)
					return;
				const s = t.zoom;
				if (!m.imageEl) return;
				if (!f.isTouched || !m.slideEl) return;
				f.isMoved ||
					((f.width = m.imageEl.offsetWidth),
					(f.height = m.imageEl.offsetHeight),
					(f.startX = o(m.imageWrapEl, 'x') || 0),
					(f.startY = o(m.imageWrapEl, 'y') || 0),
					(m.slideWidth = m.slideEl.offsetWidth),
					(m.slideHeight = m.slideEl.offsetHeight),
					(m.imageWrapEl.style.transitionDuration = '0ms'));
				const a = f.width * s.scale,
					i = f.height * s.scale;
				if (a < m.slideWidth && i < m.slideHeight) return;
				(f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
					(f.maxX = -f.minX),
					(f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
					(f.maxY = -f.minY),
					(f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX),
					(f.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY);
				if (
					(Math.max(
						Math.abs(f.touchesCurrent.x - f.touchesStart.x),
						Math.abs(f.touchesCurrent.y - f.touchesStart.y)
					) > 5 && (t.allowClick = !1),
					!f.isMoved && !p)
				) {
					if (
						t.isHorizontal() &&
						((Math.floor(f.minX) === Math.floor(f.startX) &&
							f.touchesCurrent.x < f.touchesStart.x) ||
							(Math.floor(f.maxX) === Math.floor(f.startX) &&
								f.touchesCurrent.x > f.touchesStart.x))
					)
						return void (f.isTouched = !1);
					if (
						!t.isHorizontal() &&
						((Math.floor(f.minY) === Math.floor(f.startY) &&
							f.touchesCurrent.y < f.touchesStart.y) ||
							(Math.floor(f.maxY) === Math.floor(f.startY) &&
								f.touchesCurrent.y > f.touchesStart.y))
					)
						return void (f.isTouched = !1);
				}
				e.cancelable && e.preventDefault(),
					e.stopPropagation(),
					(f.isMoved = !0);
				const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
					{ originX: n, originY: l } = m;
				(f.currentX =
					f.touchesCurrent.x -
					f.touchesStart.x +
					f.startX +
					r * (f.width - 2 * n)),
					(f.currentY =
						f.touchesCurrent.y -
						f.touchesStart.y +
						f.startY +
						r * (f.height - 2 * l)),
					f.currentX < f.minX &&
						(f.currentX =
							f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
					f.currentX > f.maxX &&
						(f.currentX =
							f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
					f.currentY < f.minY &&
						(f.currentY =
							f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
					f.currentY > f.maxY &&
						(f.currentY =
							f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
					v.prevPositionX || (v.prevPositionX = f.touchesCurrent.x),
					v.prevPositionY || (v.prevPositionY = f.touchesCurrent.y),
					v.prevTime || (v.prevTime = Date.now()),
					(v.x =
						(f.touchesCurrent.x - v.prevPositionX) /
						(Date.now() - v.prevTime) /
						2),
					(v.y =
						(f.touchesCurrent.y - v.prevPositionY) /
						(Date.now() - v.prevTime) /
						2),
					Math.abs(f.touchesCurrent.x - v.prevPositionX) < 2 &&
						(v.x = 0),
					Math.abs(f.touchesCurrent.y - v.prevPositionY) < 2 &&
						(v.y = 0),
					(v.prevPositionX = f.touchesCurrent.x),
					(v.prevPositionY = f.touchesCurrent.y),
					(v.prevTime = Date.now()),
					(m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
			}
			function C() {
				const e = t.zoom;
				m.slideEl &&
					t.activeIndex !== t.slides.indexOf(m.slideEl) &&
					(m.imageEl &&
						(m.imageEl.style.transform =
							'translate3d(0,0,0) scale(1)'),
					m.imageWrapEl &&
						(m.imageWrapEl.style.transform = 'translate3d(0,0,0)'),
					m.slideEl.classList.remove(
						`${t.params.zoom.zoomedSlideClass}`
					),
					(e.scale = 1),
					(c = 1),
					(m.slideEl = void 0),
					(m.imageEl = void 0),
					(m.imageWrapEl = void 0),
					(m.originX = 0),
					(m.originY = 0));
			}
			function P(e) {
				const s = t.zoom,
					a = t.params.zoom;
				if (!m.slideEl) {
					e &&
						e.target &&
						(m.slideEl = e.target.closest(
							`.${t.params.slideClass}, swiper-slide`
						)),
						m.slideEl ||
							(t.params.virtual &&
							t.params.virtual.enabled &&
							t.virtual
								? (m.slideEl = h(
										t.slidesEl,
										`.${t.params.slideActiveClass}`
								  )[0])
								: (m.slideEl = t.slides[t.activeIndex]));
					let s = m.slideEl.querySelector(`.${a.containerClass}`);
					s &&
						(s = s.querySelectorAll(
							'picture, img, svg, canvas, .swiper-zoom-target'
						)[0]),
						(m.imageEl = s),
						(m.imageWrapEl = s
							? b(m.imageEl, `.${a.containerClass}`)[0]
							: void 0);
				}
				if (!m.imageEl || !m.imageWrapEl) return;
				let i, r, l, o, d, p, u, v, w, y, E, x, S, T, M, C, P, L;
				t.params.cssMode &&
					((t.wrapperEl.style.overflow = 'hidden'),
					(t.wrapperEl.style.touchAction = 'none')),
					m.slideEl.classList.add(`${a.zoomedSlideClass}`),
					void 0 === f.touchesStart.x && e
						? ((i = e.pageX), (r = e.pageY))
						: ((i = f.touchesStart.x), (r = f.touchesStart.y));
				const z = 'number' == typeof e ? e : null;
				1 === c && z && ((i = void 0), (r = void 0)),
					(s.scale =
						z ||
						m.imageWrapEl.getAttribute('data-swiper-zoom') ||
						a.maxRatio),
					(c =
						z ||
						m.imageWrapEl.getAttribute('data-swiper-zoom') ||
						a.maxRatio),
					!e || (1 === c && z)
						? ((u = 0), (v = 0))
						: ((P = m.slideEl.offsetWidth),
						  (L = m.slideEl.offsetHeight),
						  (l = g(m.slideEl).left + n.scrollX),
						  (o = g(m.slideEl).top + n.scrollY),
						  (d = l + P / 2 - i),
						  (p = o + L / 2 - r),
						  (w = m.imageEl.offsetWidth),
						  (y = m.imageEl.offsetHeight),
						  (E = w * s.scale),
						  (x = y * s.scale),
						  (S = Math.min(P / 2 - E / 2, 0)),
						  (T = Math.min(L / 2 - x / 2, 0)),
						  (M = -S),
						  (C = -T),
						  (u = d * s.scale),
						  (v = p * s.scale),
						  u < S && (u = S),
						  u > M && (u = M),
						  v < T && (v = T),
						  v > C && (v = C)),
					z && 1 === s.scale && ((m.originX = 0), (m.originY = 0)),
					(m.imageWrapEl.style.transitionDuration = '300ms'),
					(m.imageWrapEl.style.transform = `translate3d(${u}px, ${v}px,0)`),
					(m.imageEl.style.transitionDuration = '300ms'),
					(m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`);
			}
			function L() {
				const e = t.zoom,
					s = t.params.zoom;
				if (!m.slideEl) {
					t.params.virtual && t.params.virtual.enabled && t.virtual
						? (m.slideEl = h(
								t.slidesEl,
								`.${t.params.slideActiveClass}`
						  )[0])
						: (m.slideEl = t.slides[t.activeIndex]);
					let e = m.slideEl.querySelector(`.${s.containerClass}`);
					e &&
						(e = e.querySelectorAll(
							'picture, img, svg, canvas, .swiper-zoom-target'
						)[0]),
						(m.imageEl = e),
						(m.imageWrapEl = e
							? b(m.imageEl, `.${s.containerClass}`)[0]
							: void 0);
				}
				m.imageEl &&
					m.imageWrapEl &&
					(t.params.cssMode &&
						((t.wrapperEl.style.overflow = ''),
						(t.wrapperEl.style.touchAction = '')),
					(e.scale = 1),
					(c = 1),
					(m.imageWrapEl.style.transitionDuration = '300ms'),
					(m.imageWrapEl.style.transform = 'translate3d(0,0,0)'),
					(m.imageEl.style.transitionDuration = '300ms'),
					(m.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'),
					m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
					(m.slideEl = void 0),
					(m.originX = 0),
					(m.originY = 0));
			}
			function z(e) {
				const s = t.zoom;
				s.scale && 1 !== s.scale ? L() : P(e);
			}
			function A() {
				return {
					passiveListener: !!t.params.passiveListeners && {
						passive: !0,
						capture: !1,
					},
					activeListenerWithCapture: !t.params.passiveListeners || {
						passive: !1,
						capture: !0,
					},
				};
			}
			function $() {
				const e = t.zoom;
				if (e.enabled) return;
				e.enabled = !0;
				const { passiveListener: s, activeListenerWithCapture: a } =
					A();
				t.wrapperEl.addEventListener('pointerdown', x, s),
					t.wrapperEl.addEventListener('pointermove', S, a),
					['pointerup', 'pointercancel', 'pointerout'].forEach(
						(e) => {
							t.wrapperEl.addEventListener(e, T, s);
						}
					),
					t.wrapperEl.addEventListener('pointermove', M, a);
			}
			function I() {
				const e = t.zoom;
				if (!e.enabled) return;
				e.enabled = !1;
				const { passiveListener: s, activeListenerWithCapture: a } =
					A();
				t.wrapperEl.removeEventListener('pointerdown', x, s),
					t.wrapperEl.removeEventListener('pointermove', S, a),
					['pointerup', 'pointercancel', 'pointerout'].forEach(
						(e) => {
							t.wrapperEl.removeEventListener(e, T, s);
						}
					),
					t.wrapperEl.removeEventListener('pointermove', M, a);
			}
			Object.defineProperty(t.zoom, 'scale', {
				get: () => w,
				set(e) {
					if (w !== e) {
						const t = m.imageEl,
							s = m.slideEl;
						i('zoomChange', e, t, s);
					}
					w = e;
				},
			}),
				a('init', () => {
					t.params.zoom.enabled && $();
				}),
				a('destroy', () => {
					I();
				}),
				a('touchStart', (e, s) => {
					t.zoom.enabled &&
						(function (e) {
							const s = t.device;
							if (!m.imageEl) return;
							if (f.isTouched) return;
							s.android && e.cancelable && e.preventDefault(),
								(f.isTouched = !0);
							const a = u.length > 0 ? u[0] : e;
							(f.touchesStart.x = a.pageX),
								(f.touchesStart.y = a.pageY);
						})(s);
				}),
				a('touchEnd', (e, s) => {
					t.zoom.enabled &&
						(function () {
							const e = t.zoom;
							if (!m.imageEl) return;
							if (!f.isTouched || !f.isMoved)
								return (
									(f.isTouched = !1), void (f.isMoved = !1)
								);
							(f.isTouched = !1), (f.isMoved = !1);
							let s = 300,
								a = 300;
							const i = v.x * s,
								r = f.currentX + i,
								n = v.y * a,
								l = f.currentY + n;
							0 !== v.x && (s = Math.abs((r - f.currentX) / v.x)),
								0 !== v.y &&
									(a = Math.abs((l - f.currentY) / v.y));
							const o = Math.max(s, a);
							(f.currentX = r), (f.currentY = l);
							const d = f.width * e.scale,
								c = f.height * e.scale;
							(f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
								(f.maxX = -f.minX),
								(f.minY = Math.min(
									m.slideHeight / 2 - c / 2,
									0
								)),
								(f.maxY = -f.minY),
								(f.currentX = Math.max(
									Math.min(f.currentX, f.maxX),
									f.minX
								)),
								(f.currentY = Math.max(
									Math.min(f.currentY, f.maxY),
									f.minY
								)),
								(m.imageWrapEl.style.transitionDuration = `${o}ms`),
								(m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
						})();
				}),
				a('doubleTap', (e, s) => {
					!t.animating &&
						t.params.zoom.enabled &&
						t.zoom.enabled &&
						t.params.zoom.toggle &&
						z(s);
				}),
				a('transitionEnd', () => {
					t.zoom.enabled && t.params.zoom.enabled && C();
				}),
				a('slideChange', () => {
					t.zoom.enabled &&
						t.params.zoom.enabled &&
						t.params.cssMode &&
						C();
				}),
				Object.assign(t.zoom, {
					enable: $,
					disable: I,
					in: P,
					out: L,
					toggle: z,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			function i(e, t) {
				const s = (function () {
					let e, t, s;
					return (a, i) => {
						for (t = -1, e = a.length; e - t > 1; )
							(s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
						return e;
					};
				})();
				let a, i;
				return (
					(this.x = e),
					(this.y = t),
					(this.lastIndex = e.length - 1),
					(this.interpolate = function (e) {
						return e
							? ((i = s(this.x, e)),
							  (a = i - 1),
							  ((e - this.x[a]) * (this.y[i] - this.y[a])) /
									(this.x[i] - this.x[a]) +
									this.y[a])
							: 0;
					}),
					this
				);
			}
			function r() {
				t.controller.control &&
					t.controller.spline &&
					((t.controller.spline = void 0),
					delete t.controller.spline);
			}
			s({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
				(t.controller = { control: void 0 }),
				a('beforeInit', () => {
					if (
						'undefined' != typeof window &&
						('string' == typeof t.params.controller.control ||
							t.params.controller.control instanceof HTMLElement)
					) {
						const e = document.querySelector(
							t.params.controller.control
						);
						if (e && e.swiper) t.controller.control = e.swiper;
						else if (e) {
							const s = (a) => {
								(t.controller.control = a.detail[0]),
									t.update(),
									e.removeEventListener('init', s);
							};
							e.addEventListener('init', s);
						}
					} else t.controller.control = t.params.controller.control;
				}),
				a('update', () => {
					r();
				}),
				a('resize', () => {
					r();
				}),
				a('observerUpdate', () => {
					r();
				}),
				a('setTranslate', (e, s, a) => {
					t.controller.control &&
						!t.controller.control.destroyed &&
						t.controller.setTranslate(s, a);
				}),
				a('setTransition', (e, s, a) => {
					t.controller.control &&
						!t.controller.control.destroyed &&
						t.controller.setTransition(s, a);
				}),
				Object.assign(t.controller, {
					setTranslate: function (e, s) {
						const a = t.controller.control;
						let r, n;
						const l = t.constructor;
						function o(e) {
							if (e.destroyed) return;
							const s = t.rtlTranslate
								? -t.translate
								: t.translate;
							'slide' === t.params.controller.by &&
								(!(function (e) {
									t.controller.spline = t.params.loop
										? new i(t.slidesGrid, e.slidesGrid)
										: new i(t.snapGrid, e.snapGrid);
								})(e),
								(n = -t.controller.spline.interpolate(-s))),
								(n && 'container' !== t.params.controller.by) ||
									((r =
										(e.maxTranslate() - e.minTranslate()) /
										(t.maxTranslate() - t.minTranslate())),
									(!Number.isNaN(r) && Number.isFinite(r)) ||
										(r = 1),
									(n =
										(s - t.minTranslate()) * r +
										e.minTranslate())),
								t.params.controller.inverse &&
									(n = e.maxTranslate() - n),
								e.updateProgress(n),
								e.setTranslate(n, t),
								e.updateActiveIndex(),
								e.updateSlidesClasses();
						}
						if (Array.isArray(a))
							for (let e = 0; e < a.length; e += 1)
								a[e] !== s && a[e] instanceof l && o(a[e]);
						else a instanceof l && s !== a && o(a);
					},
					setTransition: function (e, s) {
						const a = t.constructor,
							i = t.controller.control;
						let r;
						function l(s) {
							s.destroyed ||
								(s.setTransition(e, t),
								0 !== e &&
									(s.transitionStart(),
									s.params.autoHeight &&
										n(() => {
											s.updateAutoHeight();
										}),
									y(s.wrapperEl, () => {
										i && s.transitionEnd();
									})));
						}
						if (Array.isArray(i))
							for (r = 0; r < i.length; r += 1)
								i[r] !== s && i[r] instanceof a && l(i[r]);
						else i instanceof a && s !== i && l(i);
					},
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				a11y: {
					enabled: !0,
					notificationClass: 'swiper-notification',
					prevSlideMessage: 'Previous slide',
					nextSlideMessage: 'Next slide',
					firstSlideMessage: 'This is the first slide',
					lastSlideMessage: 'This is the last slide',
					paginationBulletMessage: 'Go to slide {{index}}',
					slideLabelMessage: '{{index}} / {{slidesLength}}',
					containerMessage: null,
					containerRoleDescriptionMessage: null,
					itemRoleDescriptionMessage: null,
					slideRole: 'group',
					id: null,
				},
			}),
				(t.a11y = { clicked: !1 });
			let i = null;
			function r(e) {
				const t = i;
				0 !== t.length && ((t.innerHTML = ''), (t.innerHTML = e));
			}
			const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
			function l(e) {
				(e = n(e)).forEach((e) => {
					e.setAttribute('tabIndex', '0');
				});
			}
			function o(e) {
				(e = n(e)).forEach((e) => {
					e.setAttribute('tabIndex', '-1');
				});
			}
			function d(e, t) {
				(e = n(e)).forEach((e) => {
					e.setAttribute('role', t);
				});
			}
			function c(e, t) {
				(e = n(e)).forEach((e) => {
					e.setAttribute('aria-roledescription', t);
				});
			}
			function p(e, t) {
				(e = n(e)).forEach((e) => {
					e.setAttribute('aria-label', t);
				});
			}
			function u(e) {
				(e = n(e)).forEach((e) => {
					e.setAttribute('aria-disabled', !0);
				});
			}
			function m(e) {
				(e = n(e)).forEach((e) => {
					e.setAttribute('aria-disabled', !1);
				});
			}
			function h(e) {
				if (13 !== e.keyCode && 32 !== e.keyCode) return;
				const s = t.params.a11y,
					a = e.target;
				(t.pagination &&
					t.pagination.el &&
					(a === t.pagination.el ||
						t.pagination.el.contains(e.target)) &&
					!e.target.matches(ee(t.params.pagination.bulletClass))) ||
					(t.navigation &&
						t.navigation.nextEl &&
						a === t.navigation.nextEl &&
						((t.isEnd && !t.params.loop) || t.slideNext(),
						t.isEnd
							? r(s.lastSlideMessage)
							: r(s.nextSlideMessage)),
					t.navigation &&
						t.navigation.prevEl &&
						a === t.navigation.prevEl &&
						((t.isBeginning && !t.params.loop) || t.slidePrev(),
						t.isBeginning
							? r(s.firstSlideMessage)
							: r(s.prevSlideMessage)),
					t.pagination &&
						a.matches(ee(t.params.pagination.bulletClass)) &&
						a.click());
			}
			function g() {
				return (
					t.pagination &&
					t.pagination.bullets &&
					t.pagination.bullets.length
				);
			}
			function v() {
				return g() && t.params.pagination.clickable;
			}
			const b = (e, t, s) => {
					l(e),
						'BUTTON' !== e.tagName &&
							(d(e, 'button'), e.addEventListener('keydown', h)),
						p(e, s),
						(function (e, t) {
							(e = n(e)).forEach((e) => {
								e.setAttribute('aria-controls', t);
							});
						})(e, t);
				},
				y = () => {
					t.a11y.clicked = !0;
				},
				E = () => {
					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							t.destroyed || (t.a11y.clicked = !1);
						});
					});
				},
				x = (e) => {
					if (t.a11y.clicked) return;
					const s = e.target.closest(
						`.${t.params.slideClass}, swiper-slide`
					);
					if (!s || !t.slides.includes(s)) return;
					const a = t.slides.indexOf(s) === t.activeIndex,
						i =
							t.params.watchSlidesProgress &&
							t.visibleSlides &&
							t.visibleSlides.includes(s);
					a ||
						i ||
						(e.sourceCapabilities &&
							e.sourceCapabilities.firesTouchEvents) ||
						(t.isHorizontal()
							? (t.el.scrollLeft = 0)
							: (t.el.scrollTop = 0),
						t.slideTo(t.slides.indexOf(s), 0));
				},
				S = () => {
					const e = t.params.a11y;
					e.itemRoleDescriptionMessage &&
						c(t.slides, e.itemRoleDescriptionMessage),
						e.slideRole && d(t.slides, e.slideRole);
					const s = t.slides.length;
					e.slideLabelMessage &&
						t.slides.forEach((a, i) => {
							const r = t.params.loop
								? parseInt(
										a.getAttribute(
											'data-swiper-slide-index'
										),
										10
								  )
								: i;
							p(
								a,
								e.slideLabelMessage
									.replace(/\{\{index\}\}/, r + 1)
									.replace(/\{\{slidesLength\}\}/, s)
							);
						});
				},
				T = () => {
					const e = t.params.a11y;
					t.el.append(i);
					const s = t.el;
					e.containerRoleDescriptionMessage &&
						c(s, e.containerRoleDescriptionMessage),
						e.containerMessage && p(s, e.containerMessage);
					const a = t.wrapperEl,
						r =
							e.id ||
							a.getAttribute('id') ||
							`swiper-wrapper-${
								((l = 16),
								void 0 === l && (l = 16),
								'x'
									.repeat(l)
									.replace(/x/g, () =>
										Math.round(16 * Math.random()).toString(
											16
										)
									))
							}`;
					var l;
					const o =
						t.params.autoplay && t.params.autoplay.enabled
							? 'off'
							: 'polite';
					var d;
					(d = r),
						n(a).forEach((e) => {
							e.setAttribute('id', d);
						}),
						(function (e, t) {
							(e = n(e)).forEach((e) => {
								e.setAttribute('aria-live', t);
							});
						})(a, o),
						S();
					let { nextEl: u, prevEl: m } = t.navigation
						? t.navigation
						: {};
					if (
						((u = n(u)),
						(m = n(m)),
						u && u.forEach((t) => b(t, r, e.nextSlideMessage)),
						m && m.forEach((t) => b(t, r, e.prevSlideMessage)),
						v())
					) {
						(Array.isArray(t.pagination.el)
							? t.pagination.el
							: [t.pagination.el]
						).forEach((e) => {
							e.addEventListener('keydown', h);
						});
					}
					t.el.addEventListener('focus', x, !0),
						t.el.addEventListener('pointerdown', y, !0),
						t.el.addEventListener('pointerup', E, !0);
				};
			a('beforeInit', () => {
				(i = f('span', t.params.a11y.notificationClass)),
					i.setAttribute('aria-live', 'assertive'),
					i.setAttribute('aria-atomic', 'true');
			}),
				a('afterInit', () => {
					t.params.a11y.enabled && T();
				}),
				a(
					'slidesLengthChange snapGridLengthChange slidesGridLengthChange',
					() => {
						t.params.a11y.enabled && S();
					}
				),
				a('fromEdge toEdge afterInit lock unlock', () => {
					t.params.a11y.enabled &&
						(function () {
							if (
								t.params.loop ||
								t.params.rewind ||
								!t.navigation
							)
								return;
							const { nextEl: e, prevEl: s } = t.navigation;
							s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))),
								e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
						})();
				}),
				a('paginationUpdate', () => {
					t.params.a11y.enabled &&
						(function () {
							const e = t.params.a11y;
							g() &&
								t.pagination.bullets.forEach((s) => {
									t.params.pagination.clickable &&
										(l(s),
										t.params.pagination.renderBullet ||
											(d(s, 'button'),
											p(
												s,
												e.paginationBulletMessage.replace(
													/\{\{index\}\}/,
													w(s) + 1
												)
											))),
										s.matches(
											ee(
												t.params.pagination
													.bulletActiveClass
											)
										)
											? s.setAttribute(
													'aria-current',
													'true'
											  )
											: s.removeAttribute('aria-current');
								});
						})();
				}),
				a('destroy', () => {
					t.params.a11y.enabled &&
						(function () {
							i && i.remove();
							let { nextEl: e, prevEl: s } = t.navigation
								? t.navigation
								: {};
							(e = n(e)),
								(s = n(s)),
								e &&
									e.forEach((e) =>
										e.removeEventListener('keydown', h)
									),
								s &&
									s.forEach((e) =>
										e.removeEventListener('keydown', h)
									),
								v() &&
									(Array.isArray(t.pagination.el)
										? t.pagination.el
										: [t.pagination.el]
									).forEach((e) => {
										e.removeEventListener('keydown', h);
									});
							t.el.removeEventListener('focus', x, !0),
								t.el.removeEventListener('pointerdown', y, !0),
								t.el.removeEventListener('pointerup', E, !0);
						})();
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				history: {
					enabled: !1,
					root: '',
					replaceState: !1,
					key: 'slides',
					keepQuery: !1,
				},
			});
			let i = !1,
				n = {};
			const l = (e) =>
					e
						.toString()
						.replace(/\s+/g, '-')
						.replace(/[^\w-]+/g, '')
						.replace(/--+/g, '-')
						.replace(/^-+/, '')
						.replace(/-+$/, ''),
				o = (e) => {
					const t = r();
					let s;
					s = e ? new URL(e) : t.location;
					const a = s.pathname
							.slice(1)
							.split('/')
							.filter((e) => '' !== e),
						i = a.length;
					return { key: a[i - 2], value: a[i - 1] };
				},
				d = (e, s) => {
					const a = r();
					if (!i || !t.params.history.enabled) return;
					let n;
					n = t.params.url ? new URL(t.params.url) : a.location;
					const o = t.slides[s];
					let d = l(o.getAttribute('data-history'));
					if (t.params.history.root.length > 0) {
						let s = t.params.history.root;
						'/' === s[s.length - 1] &&
							(s = s.slice(0, s.length - 1)),
							(d = `${s}/${e ? `${e}/` : ''}${d}`);
					} else
						n.pathname.includes(e) ||
							(d = `${e ? `${e}/` : ''}${d}`);
					t.params.history.keepQuery && (d += n.search);
					const c = a.history.state;
					(c && c.value === d) ||
						(t.params.history.replaceState
							? a.history.replaceState({ value: d }, null, d)
							: a.history.pushState({ value: d }, null, d));
				},
				c = (e, s, a) => {
					if (s)
						for (let i = 0, r = t.slides.length; i < r; i += 1) {
							const r = t.slides[i];
							if (l(r.getAttribute('data-history')) === s) {
								const s = t.getSlideIndex(r);
								t.slideTo(s, e, a);
							}
						}
					else t.slideTo(0, e, a);
				},
				p = () => {
					(n = o(t.params.url)), c(t.params.speed, n.value, !1);
				};
			a('init', () => {
				t.params.history.enabled &&
					(() => {
						const e = r();
						if (t.params.history) {
							if (!e.history || !e.history.pushState)
								return (
									(t.params.history.enabled = !1),
									void (t.params.hashNavigation.enabled = !0)
								);
							(i = !0),
								(n = o(t.params.url)),
								n.key || n.value
									? (c(
											0,
											n.value,
											t.params.runCallbacksOnInit
									  ),
									  t.params.history.replaceState ||
											e.addEventListener('popstate', p))
									: t.params.history.replaceState ||
									  e.addEventListener('popstate', p);
						}
					})();
			}),
				a('destroy', () => {
					t.params.history.enabled &&
						(() => {
							const e = r();
							t.params.history.replaceState ||
								e.removeEventListener('popstate', p);
						})();
				}),
				a('transitionEnd _freeModeNoMomentumRelease', () => {
					i && d(t.params.history.key, t.activeIndex);
				}),
				a('slideChange', () => {
					i &&
						t.params.cssMode &&
						d(t.params.history.key, t.activeIndex);
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, emit: i, on: n } = e,
				l = !1;
			const o = a(),
				d = r();
			s({
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1,
					getSlideIndex(e, s) {
						if (t.virtual && t.params.virtual.enabled) {
							const e = t.slides.filter(
								(e) => e.getAttribute('data-hash') === s
							)[0];
							if (!e) return 0;
							return parseInt(
								e.getAttribute('data-swiper-slide-index'),
								10
							);
						}
						return t.getSlideIndex(
							h(
								t.slidesEl,
								`.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`
							)[0]
						);
					},
				},
			});
			const c = () => {
					i('hashChange');
					const e = o.location.hash.replace('#', ''),
						s =
							t.virtual && t.params.virtual.enabled
								? t.slidesEl.querySelector(
										`[data-swiper-slide-index="${t.activeIndex}"]`
								  )
								: t.slides[t.activeIndex];
					if (e !== (s ? s.getAttribute('data-hash') : '')) {
						const s = t.params.hashNavigation.getSlideIndex(t, e);
						if (void 0 === s || Number.isNaN(s)) return;
						t.slideTo(s);
					}
				},
				p = () => {
					if (!l || !t.params.hashNavigation.enabled) return;
					const e =
							t.virtual && t.params.virtual.enabled
								? t.slidesEl.querySelector(
										`[data-swiper-slide-index="${t.activeIndex}"]`
								  )
								: t.slides[t.activeIndex],
						s = e
							? e.getAttribute('data-hash') ||
							  e.getAttribute('data-history')
							: '';
					t.params.hashNavigation.replaceState &&
					d.history &&
					d.history.replaceState
						? (d.history.replaceState(null, null, `#${s}` || ''),
						  i('hashSet'))
						: ((o.location.hash = s || ''), i('hashSet'));
				};
			n('init', () => {
				t.params.hashNavigation.enabled &&
					(() => {
						if (
							!t.params.hashNavigation.enabled ||
							(t.params.history && t.params.history.enabled)
						)
							return;
						l = !0;
						const e = o.location.hash.replace('#', '');
						if (e) {
							const s = 0,
								a = t.params.hashNavigation.getSlideIndex(t, e);
							t.slideTo(
								a || 0,
								s,
								t.params.runCallbacksOnInit,
								!0
							);
						}
						t.params.hashNavigation.watchState &&
							d.addEventListener('hashchange', c);
					})();
			}),
				n('destroy', () => {
					t.params.hashNavigation.enabled &&
						t.params.hashNavigation.watchState &&
						d.removeEventListener('hashchange', c);
				}),
				n('transitionEnd _freeModeNoMomentumRelease', () => {
					l && p();
				}),
				n('slideChange', () => {
					l && t.params.cssMode && p();
				});
		},
		function (e) {
			let t,
				s,
				{ swiper: i, extendParams: r, on: n, emit: l, params: o } = e;
			(i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
				r({
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1,
						pauseOnMouseEnter: !1,
					},
				});
			let d,
				c,
				p,
				u,
				m,
				h,
				f,
				g = o && o.autoplay ? o.autoplay.delay : 3e3,
				v = o && o.autoplay ? o.autoplay.delay : 3e3,
				w = new Date().getTime;
			function b(e) {
				i &&
					!i.destroyed &&
					i.wrapperEl &&
					e.target === i.wrapperEl &&
					(i.wrapperEl.removeEventListener('transitionend', b), M());
			}
			const y = () => {
					if (i.destroyed || !i.autoplay.running) return;
					i.autoplay.paused ? (c = !0) : c && ((v = d), (c = !1));
					const e = i.autoplay.paused
						? d
						: w + v - new Date().getTime();
					(i.autoplay.timeLeft = e),
						l('autoplayTimeLeft', e, e / g),
						(s = requestAnimationFrame(() => {
							y();
						}));
				},
				E = (e) => {
					if (i.destroyed || !i.autoplay.running) return;
					cancelAnimationFrame(s), y();
					let a = void 0 === e ? i.params.autoplay.delay : e;
					(g = i.params.autoplay.delay),
						(v = i.params.autoplay.delay);
					const r = (() => {
						let e;
						if (
							((e =
								i.virtual && i.params.virtual.enabled
									? i.slides.filter((e) =>
											e.classList.contains(
												'swiper-slide-active'
											)
									  )[0]
									: i.slides[i.activeIndex]),
							!e)
						)
							return;
						return parseInt(
							e.getAttribute('data-swiper-autoplay'),
							10
						);
					})();
					!Number.isNaN(r) &&
						r > 0 &&
						void 0 === e &&
						((a = r), (g = r), (v = r)),
						(d = a);
					const n = i.params.speed,
						o = () => {
							i &&
								!i.destroyed &&
								(i.params.autoplay.reverseDirection
									? !i.isBeginning ||
									  i.params.loop ||
									  i.params.rewind
										? (i.slidePrev(n, !0, !0),
										  l('autoplay'))
										: i.params.autoplay.stopOnLastSlide ||
										  (i.slideTo(
												i.slides.length - 1,
												n,
												!0,
												!0
										  ),
										  l('autoplay'))
									: !i.isEnd ||
									  i.params.loop ||
									  i.params.rewind
									? (i.slideNext(n, !0, !0), l('autoplay'))
									: i.params.autoplay.stopOnLastSlide ||
									  (i.slideTo(0, n, !0, !0), l('autoplay')),
								i.params.cssMode &&
									((w = new Date().getTime()),
									requestAnimationFrame(() => {
										E();
									})));
						};
					return (
						a > 0
							? (clearTimeout(t),
							  (t = setTimeout(() => {
									o();
							  }, a)))
							: requestAnimationFrame(() => {
									o();
							  }),
						a
					);
				},
				x = () => {
					(i.autoplay.running = !0), E(), l('autoplayStart');
				},
				S = () => {
					(i.autoplay.running = !1),
						clearTimeout(t),
						cancelAnimationFrame(s),
						l('autoplayStop');
				},
				T = (e, s) => {
					if (i.destroyed || !i.autoplay.running) return;
					clearTimeout(t), e || (f = !0);
					const a = () => {
						l('autoplayPause'),
							i.params.autoplay.waitForTransition
								? i.wrapperEl.addEventListener(
										'transitionend',
										b
								  )
								: M();
					};
					if (((i.autoplay.paused = !0), s))
						return (
							h && (d = i.params.autoplay.delay),
							(h = !1),
							void a()
						);
					const r = d || i.params.autoplay.delay;
					(d = r - (new Date().getTime() - w)),
						(i.isEnd && d < 0 && !i.params.loop) ||
							(d < 0 && (d = 0), a());
				},
				M = () => {
					(i.isEnd && d < 0 && !i.params.loop) ||
						i.destroyed ||
						!i.autoplay.running ||
						((w = new Date().getTime()),
						f ? ((f = !1), E(d)) : E(),
						(i.autoplay.paused = !1),
						l('autoplayResume'));
				},
				C = () => {
					if (i.destroyed || !i.autoplay.running) return;
					const e = a();
					'hidden' === e.visibilityState && ((f = !0), T(!0)),
						'visible' === e.visibilityState && M();
				},
				P = (e) => {
					'mouse' === e.pointerType &&
						((f = !0), i.animating || i.autoplay.paused || T(!0));
				},
				L = (e) => {
					'mouse' === e.pointerType && i.autoplay.paused && M();
				};
			n('init', () => {
				i.params.autoplay.enabled &&
					(i.params.autoplay.pauseOnMouseEnter &&
						(i.el.addEventListener('pointerenter', P),
						i.el.addEventListener('pointerleave', L)),
					a().addEventListener('visibilitychange', C),
					(w = new Date().getTime()),
					x());
			}),
				n('destroy', () => {
					i.el.removeEventListener('pointerenter', P),
						i.el.removeEventListener('pointerleave', L),
						a().removeEventListener('visibilitychange', C),
						i.autoplay.running && S();
				}),
				n('beforeTransitionStart', (e, t, s) => {
					!i.destroyed &&
						i.autoplay.running &&
						(s || !i.params.autoplay.disableOnInteraction
							? T(!0, !0)
							: S());
				}),
				n('sliderFirstMove', () => {
					!i.destroyed &&
						i.autoplay.running &&
						(i.params.autoplay.disableOnInteraction
							? S()
							: ((p = !0),
							  (u = !1),
							  (f = !1),
							  (m = setTimeout(() => {
									(f = !0), (u = !0), T(!0);
							  }, 200))));
				}),
				n('touchEnd', () => {
					if (!i.destroyed && i.autoplay.running && p) {
						if (
							(clearTimeout(m),
							clearTimeout(t),
							i.params.autoplay.disableOnInteraction)
						)
							return (u = !1), void (p = !1);
						u && i.params.cssMode && M(), (u = !1), (p = !1);
					}
				}),
				n('slideChange', () => {
					!i.destroyed && i.autoplay.running && (h = !0);
				}),
				Object.assign(i.autoplay, {
					start: x,
					stop: S,
					pause: T,
					resume: M,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: i } = e;
			s({
				thumbs: {
					swiper: null,
					multipleActiveThumbs: !0,
					autoScrollOffset: 0,
					slideThumbActiveClass: 'swiper-slide-thumb-active',
					thumbsContainerClass: 'swiper-thumbs',
				},
			});
			let r = !1,
				n = !1;
			function l() {
				const e = t.thumbs.swiper;
				if (!e || e.destroyed) return;
				const s = e.clickedIndex,
					a = e.clickedSlide;
				if (
					a &&
					a.classList.contains(t.params.thumbs.slideThumbActiveClass)
				)
					return;
				if (null == s) return;
				let i;
				(i = e.params.loop
					? parseInt(
							e.clickedSlide.getAttribute(
								'data-swiper-slide-index'
							),
							10
					  )
					: s),
					t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
			}
			function o() {
				const { thumbs: e } = t.params;
				if (r) return !1;
				r = !0;
				const s = t.constructor;
				if (e.swiper instanceof s)
					(t.thumbs.swiper = e.swiper),
						Object.assign(t.thumbs.swiper.originalParams, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						}),
						Object.assign(t.thumbs.swiper.params, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						}),
						t.thumbs.swiper.update();
				else if (d(e.swiper)) {
					const a = Object.assign({}, e.swiper);
					Object.assign(a, {
						watchSlidesProgress: !0,
						slideToClickedSlide: !1,
					}),
						(t.thumbs.swiper = new s(a)),
						(n = !0);
				}
				return (
					t.thumbs.swiper.el.classList.add(
						t.params.thumbs.thumbsContainerClass
					),
					t.thumbs.swiper.on('tap', l),
					!0
				);
			}
			function c(e) {
				const s = t.thumbs.swiper;
				if (!s || s.destroyed) return;
				const a =
					'auto' === s.params.slidesPerView
						? s.slidesPerViewDynamic()
						: s.params.slidesPerView;
				let i = 1;
				const r = t.params.thumbs.slideThumbActiveClass;
				if (
					(t.params.slidesPerView > 1 &&
						!t.params.centeredSlides &&
						(i = t.params.slidesPerView),
					t.params.thumbs.multipleActiveThumbs || (i = 1),
					(i = Math.floor(i)),
					s.slides.forEach((e) => e.classList.remove(r)),
					s.params.loop ||
						(s.params.virtual && s.params.virtual.enabled))
				)
					for (let e = 0; e < i; e += 1)
						h(
							s.slidesEl,
							`[data-swiper-slide-index="${t.realIndex + e}"]`
						).forEach((e) => {
							e.classList.add(r);
						});
				else
					for (let e = 0; e < i; e += 1)
						s.slides[t.realIndex + e] &&
							s.slides[t.realIndex + e].classList.add(r);
				const n = t.params.thumbs.autoScrollOffset,
					l = n && !s.params.loop;
				if (t.realIndex !== s.realIndex || l) {
					const i = s.activeIndex;
					let r, o;
					if (s.params.loop) {
						const e = s.slides.filter(
							(e) =>
								e.getAttribute('data-swiper-slide-index') ===
								`${t.realIndex}`
						)[0];
						(r = s.slides.indexOf(e)),
							(o =
								t.activeIndex > t.previousIndex
									? 'next'
									: 'prev');
					} else
						(r = t.realIndex),
							(o = r > t.previousIndex ? 'next' : 'prev');
					l && (r += 'next' === o ? n : -1 * n),
						s.visibleSlidesIndexes &&
							s.visibleSlidesIndexes.indexOf(r) < 0 &&
							(s.params.centeredSlides
								? (r =
										r > i
											? r - Math.floor(a / 2) + 1
											: r + Math.floor(a / 2) - 1)
								: r > i && s.params.slidesPerGroup,
							s.slideTo(r, e ? 0 : void 0));
				}
			}
			(t.thumbs = { swiper: null }),
				i('beforeInit', () => {
					const { thumbs: e } = t.params;
					if (e && e.swiper)
						if (
							'string' == typeof e.swiper ||
							e.swiper instanceof HTMLElement
						) {
							const s = a(),
								i = () => {
									const a =
										'string' == typeof e.swiper
											? s.querySelector(e.swiper)
											: e.swiper;
									if (a && a.swiper)
										(e.swiper = a.swiper), o(), c(!0);
									else if (a) {
										const s = (i) => {
											(e.swiper = i.detail[0]),
												a.removeEventListener(
													'init',
													s
												),
												o(),
												c(!0),
												e.swiper.update(),
												t.update();
										};
										a.addEventListener('init', s);
									}
									return a;
								},
								r = () => {
									if (t.destroyed) return;
									i() || requestAnimationFrame(r);
								};
							requestAnimationFrame(r);
						} else o(), c(!0);
				}),
				i('slideChange update resize observerUpdate', () => {
					c();
				}),
				i('setTransition', (e, s) => {
					const a = t.thumbs.swiper;
					a && !a.destroyed && a.setTransition(s);
				}),
				i('beforeDestroy', () => {
					const e = t.thumbs.swiper;
					e && !e.destroyed && n && e.destroy();
				}),
				Object.assign(t.thumbs, { init: o, update: c });
		},
		function (e) {
			let { swiper: t, extendParams: s, emit: a, once: i } = e;
			s({
				freeMode: {
					enabled: !1,
					momentum: !0,
					momentumRatio: 1,
					momentumBounce: !0,
					momentumBounceRatio: 1,
					momentumVelocityRatio: 1,
					sticky: !1,
					minimumVelocity: 0.02,
				},
			}),
				Object.assign(t, {
					freeMode: {
						onTouchStart: function () {
							if (t.params.cssMode) return;
							const e = t.getTranslate();
							t.setTranslate(e),
								t.setTransition(0),
								(t.touchEventsData.velocities.length = 0),
								t.freeMode.onTouchEnd({
									currentPos: t.rtl
										? t.translate
										: -t.translate,
								});
						},
						onTouchMove: function () {
							if (t.params.cssMode) return;
							const { touchEventsData: e, touches: s } = t;
							0 === e.velocities.length &&
								e.velocities.push({
									position:
										s[
											t.isHorizontal()
												? 'startX'
												: 'startY'
										],
									time: e.touchStartTime,
								}),
								e.velocities.push({
									position:
										s[
											t.isHorizontal()
												? 'currentX'
												: 'currentY'
										],
									time: l(),
								});
						},
						onTouchEnd: function (e) {
							let { currentPos: s } = e;
							if (t.params.cssMode) return;
							const {
									params: r,
									wrapperEl: n,
									rtlTranslate: o,
									snapGrid: d,
									touchEventsData: c,
								} = t,
								p = l() - c.touchStartTime;
							if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
							else if (s > -t.maxTranslate())
								t.slides.length < d.length
									? t.slideTo(d.length - 1)
									: t.slideTo(t.slides.length - 1);
							else {
								if (r.freeMode.momentum) {
									if (c.velocities.length > 1) {
										const e = c.velocities.pop(),
											s = c.velocities.pop(),
											a = e.position - s.position,
											i = e.time - s.time;
										(t.velocity = a / i),
											(t.velocity /= 2),
											Math.abs(t.velocity) <
												r.freeMode.minimumVelocity &&
												(t.velocity = 0),
											(i > 150 || l() - e.time > 300) &&
												(t.velocity = 0);
									} else t.velocity = 0;
									(t.velocity *=
										r.freeMode.momentumVelocityRatio),
										(c.velocities.length = 0);
									let e = 1e3 * r.freeMode.momentumRatio;
									const s = t.velocity * e;
									let p = t.translate + s;
									o && (p = -p);
									let u,
										m = !1;
									const h =
										20 *
										Math.abs(t.velocity) *
										r.freeMode.momentumBounceRatio;
									let f;
									if (p < t.maxTranslate())
										r.freeMode.momentumBounce
											? (p + t.maxTranslate() < -h &&
													(p = t.maxTranslate() - h),
											  (u = t.maxTranslate()),
											  (m = !0),
											  (c.allowMomentumBounce = !0))
											: (p = t.maxTranslate()),
											r.loop &&
												r.centeredSlides &&
												(f = !0);
									else if (p > t.minTranslate())
										r.freeMode.momentumBounce
											? (p - t.minTranslate() > h &&
													(p = t.minTranslate() + h),
											  (u = t.minTranslate()),
											  (m = !0),
											  (c.allowMomentumBounce = !0))
											: (p = t.minTranslate()),
											r.loop &&
												r.centeredSlides &&
												(f = !0);
									else if (r.freeMode.sticky) {
										let e;
										for (let t = 0; t < d.length; t += 1)
											if (d[t] > -p) {
												e = t;
												break;
											}
										(p =
											Math.abs(d[e] - p) <
												Math.abs(d[e - 1] - p) ||
											'next' === t.swipeDirection
												? d[e]
												: d[e - 1]),
											(p = -p);
									}
									if (
										(f &&
											i('transitionEnd', () => {
												t.loopFix();
											}),
										0 !== t.velocity)
									) {
										if (
											((e = o
												? Math.abs(
														(-p - t.translate) /
															t.velocity
												  )
												: Math.abs(
														(p - t.translate) /
															t.velocity
												  )),
											r.freeMode.sticky)
										) {
											const s = Math.abs(
													(o ? -p : p) - t.translate
												),
												a =
													t.slidesSizesGrid[
														t.activeIndex
													];
											e =
												s < a
													? r.speed
													: s < 2 * a
													? 1.5 * r.speed
													: 2.5 * r.speed;
										}
									} else if (r.freeMode.sticky)
										return void t.slideToClosest();
									r.freeMode.momentumBounce && m
										? (t.updateProgress(u),
										  t.setTransition(e),
										  t.setTranslate(p),
										  t.transitionStart(
												!0,
												t.swipeDirection
										  ),
										  (t.animating = !0),
										  y(n, () => {
												t &&
													!t.destroyed &&
													c.allowMomentumBounce &&
													(a('momentumBounce'),
													t.setTransition(r.speed),
													setTimeout(() => {
														t.setTranslate(u),
															y(n, () => {
																t &&
																	!t.destroyed &&
																	t.transitionEnd();
															});
													}, 0));
										  }))
										: t.velocity
										? (a('_freeModeNoMomentumRelease'),
										  t.updateProgress(p),
										  t.setTransition(e),
										  t.setTranslate(p),
										  t.transitionStart(
												!0,
												t.swipeDirection
										  ),
										  t.animating ||
												((t.animating = !0),
												y(n, () => {
													t &&
														!t.destroyed &&
														t.transitionEnd();
												})))
										: t.updateProgress(p),
										t.updateActiveIndex(),
										t.updateSlidesClasses();
								} else {
									if (r.freeMode.sticky)
										return void t.slideToClosest();
									r.freeMode &&
										a('_freeModeNoMomentumRelease');
								}
								(!r.freeMode.momentum || p >= r.longSwipesMs) &&
									(t.updateProgress(),
									t.updateActiveIndex(),
									t.updateSlidesClasses());
							}
						},
					},
				});
		},
		function (e) {
			let t,
				s,
				a,
				i,
				{ swiper: r, extendParams: n, on: l } = e;
			n({ grid: { rows: 1, fill: 'column' } });
			const o = () => {
				let e = r.params.spaceBetween;
				return (
					'string' == typeof e && e.indexOf('%') >= 0
						? (e = (parseFloat(e.replace('%', '')) / 100) * r.size)
						: 'string' == typeof e && (e = parseFloat(e)),
					e
				);
			};
			l('init', () => {
				i = r.params.grid && r.params.grid.rows > 1;
			}),
				l('update', () => {
					const { params: e, el: t } = r,
						s = e.grid && e.grid.rows > 1;
					i && !s
						? (t.classList.remove(
								`${e.containerModifierClass}grid`,
								`${e.containerModifierClass}grid-column`
						  ),
						  (a = 1),
						  r.emitContainerClasses())
						: !i &&
						  s &&
						  (t.classList.add(`${e.containerModifierClass}grid`),
						  'column' === e.grid.fill &&
								t.classList.add(
									`${e.containerModifierClass}grid-column`
								),
						  r.emitContainerClasses()),
						(i = s);
				}),
				(r.grid = {
					initSlides: (e) => {
						const { slidesPerView: i } = r.params,
							{ rows: n, fill: l } = r.params.grid;
						(a = Math.floor(e / n)),
							(t =
								Math.floor(e / n) === e / n
									? e
									: Math.ceil(e / n) * n),
							'auto' !== i &&
								'row' === l &&
								(t = Math.max(t, i * n)),
							(s = t / n);
					},
					updateSlide: (e, i, n, l) => {
						const { slidesPerGroup: d } = r.params,
							c = o(),
							{ rows: p, fill: u } = r.params.grid;
						let m, h, f;
						if ('row' === u && d > 1) {
							const s = Math.floor(e / (d * p)),
								a = e - p * d * s,
								r =
									0 === s
										? d
										: Math.min(
												Math.ceil((n - s * p * d) / p),
												d
										  );
							(f = Math.floor(a / r)),
								(h = a - f * r + s * d),
								(m = h + (f * t) / p),
								(i.style.order = m);
						} else
							'column' === u
								? ((h = Math.floor(e / p)),
								  (f = e - h * p),
								  (h > a || (h === a && f === p - 1)) &&
										((f += 1),
										f >= p && ((f = 0), (h += 1))))
								: ((f = Math.floor(e / s)), (h = e - f * s));
						(i.row = f),
							(i.column = h),
							(i.style[l('margin-top')] =
								0 !== f ? c && `${c}px` : '');
					},
					updateWrapperSize: (e, s, a) => {
						const { centeredSlides: i, roundLengths: n } = r.params,
							l = o(),
							{ rows: d } = r.params.grid;
						if (
							((r.virtualSize = (e + l) * t),
							(r.virtualSize = Math.ceil(r.virtualSize / d) - l),
							(r.wrapperEl.style[a('width')] = `${
								r.virtualSize + l
							}px`),
							i)
						) {
							const e = [];
							for (let t = 0; t < s.length; t += 1) {
								let a = s[t];
								n && (a = Math.floor(a)),
									s[t] < r.virtualSize + s[0] && e.push(a);
							}
							s.splice(0, s.length), s.push(...e);
						}
					},
				});
		},
		function (e) {
			let { swiper: t } = e;
			Object.assign(t, {
				appendSlide: te.bind(t),
				prependSlide: se.bind(t),
				addSlide: ae.bind(t),
				removeSlide: ie.bind(t),
				removeAllSlides: re.bind(t),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({ fadeEffect: { crossFade: !1 } }),
				ne({
					effect: 'fade',
					swiper: t,
					on: a,
					setTranslate: () => {
						const { slides: e } = t;
						t.params.fadeEffect;
						for (let s = 0; s < e.length; s += 1) {
							const e = t.slides[s];
							let a = -e.swiperSlideOffset;
							t.params.virtualTranslate || (a -= t.translate);
							let i = 0;
							t.isHorizontal() || ((i = a), (a = 0));
							const r = t.params.fadeEffect.crossFade
									? Math.max(1 - Math.abs(e.progress), 0)
									: 1 + Math.min(Math.max(e.progress, -1), 0),
								n = le(0, e);
							(n.style.opacity = r),
								(n.style.transform = `translate3d(${a}px, ${i}px, 0px)`);
						}
					},
					setTransition: (e) => {
						const s = t.slides.map((e) => m(e));
						s.forEach((t) => {
							t.style.transitionDuration = `${e}ms`;
						}),
							oe({
								swiper: t,
								duration: e,
								transformElements: s,
								allSlides: !0,
							});
					},
					overwriteParams: () => ({
						slidesPerView: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: !0,
						spaceBetween: 0,
						virtualTranslate: !t.params.cssMode,
					}),
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: 0.94,
				},
			});
			const i = (e, t, s) => {
				let a = s
						? e.querySelector('.swiper-slide-shadow-left')
						: e.querySelector('.swiper-slide-shadow-top'),
					i = s
						? e.querySelector('.swiper-slide-shadow-right')
						: e.querySelector('.swiper-slide-shadow-bottom');
				a ||
					((a = f(
						'div',
						(
							'swiper-slide-shadow-cube swiper-slide-shadow-' +
							(s ? 'left' : 'top')
						).split(' ')
					)),
					e.append(a)),
					i ||
						((i = f(
							'div',
							(
								'swiper-slide-shadow-cube swiper-slide-shadow-' +
								(s ? 'right' : 'bottom')
							).split(' ')
						)),
						e.append(i)),
					a && (a.style.opacity = Math.max(-t, 0)),
					i && (i.style.opacity = Math.max(t, 0));
			};
			ne({
				effect: 'cube',
				swiper: t,
				on: a,
				setTranslate: () => {
					const {
							el: e,
							wrapperEl: s,
							slides: a,
							width: r,
							height: n,
							rtlTranslate: l,
							size: o,
							browser: d,
						} = t,
						c = t.params.cubeEffect,
						p = t.isHorizontal(),
						u = t.virtual && t.params.virtual.enabled;
					let m,
						h = 0;
					c.shadow &&
						(p
							? ((m = t.wrapperEl.querySelector(
									'.swiper-cube-shadow'
							  )),
							  m ||
									((m = f('div', 'swiper-cube-shadow')),
									t.wrapperEl.append(m)),
							  (m.style.height = `${r}px`))
							: ((m = e.querySelector('.swiper-cube-shadow')),
							  m ||
									((m = f('div', 'swiper-cube-shadow')),
									e.append(m))));
					for (let e = 0; e < a.length; e += 1) {
						const t = a[e];
						let s = e;
						u &&
							(s = parseInt(
								t.getAttribute('data-swiper-slide-index'),
								10
							));
						let r = 90 * s,
							n = Math.floor(r / 360);
						l && ((r = -r), (n = Math.floor(-r / 360)));
						const d = Math.max(Math.min(t.progress, 1), -1);
						let m = 0,
							f = 0,
							g = 0;
						s % 4 == 0
							? ((m = 4 * -n * o), (g = 0))
							: (s - 1) % 4 == 0
							? ((m = 0), (g = 4 * -n * o))
							: (s - 2) % 4 == 0
							? ((m = o + 4 * n * o), (g = o))
							: (s - 3) % 4 == 0 &&
							  ((m = -o), (g = 3 * o + 4 * o * n)),
							l && (m = -m),
							p || ((f = m), (m = 0));
						const v = `rotateX(${p ? 0 : -r}deg) rotateY(${
							p ? r : 0
						}deg) translate3d(${m}px, ${f}px, ${g}px)`;
						d <= 1 &&
							d > -1 &&
							((h = 90 * s + 90 * d),
							l && (h = 90 * -s - 90 * d)),
							(t.style.transform = v),
							c.slideShadows && i(t, d, p);
					}
					if (
						((s.style.transformOrigin = `50% 50% -${o / 2}px`),
						(s.style['-webkit-transform-origin'] = `50% 50% -${
							o / 2
						}px`),
						c.shadow)
					)
						if (p)
							m.style.transform = `translate3d(0px, ${
								r / 2 + c.shadowOffset
							}px, ${
								-r / 2
							}px) rotateX(90deg) rotateZ(0deg) scale(${
								c.shadowScale
							})`;
						else {
							const e =
									Math.abs(h) -
									90 * Math.floor(Math.abs(h) / 90),
								t =
									1.5 -
									(Math.sin((2 * e * Math.PI) / 360) / 2 +
										Math.cos((2 * e * Math.PI) / 360) / 2),
								s = c.shadowScale,
								a = c.shadowScale / t,
								i = c.shadowOffset;
							m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${
								n / 2 + i
							}px, ${-n / 2 / a}px) rotateX(-90deg)`;
						}
					const g =
						(d.isSafari || d.isWebView) && d.needPerspectiveFix
							? -o / 2
							: 0;
					(s.style.transform = `translate3d(0px,0,${g}px) rotateX(${
						t.isHorizontal() ? 0 : h
					}deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`),
						s.style.setProperty(
							'--swiper-cube-translate-z',
							`${g}px`
						);
				},
				setTransition: (e) => {
					const { el: s, slides: a } = t;
					if (
						(a.forEach((t) => {
							(t.style.transitionDuration = `${e}ms`),
								t
									.querySelectorAll(
										'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
									)
									.forEach((t) => {
										t.style.transitionDuration = `${e}ms`;
									});
						}),
						t.params.cubeEffect.shadow && !t.isHorizontal())
					) {
						const t = s.querySelector('.swiper-cube-shadow');
						t && (t.style.transitionDuration = `${e}ms`);
					}
				},
				recreateShadows: () => {
					const e = t.isHorizontal();
					t.slides.forEach((t) => {
						const s = Math.max(Math.min(t.progress, 1), -1);
						i(t, s, e);
					});
				},
				getEffectParams: () => t.params.cubeEffect,
				perspective: () => !0,
				overwriteParams: () => ({
					slidesPerView: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: !0,
					resistanceRatio: 0,
					spaceBetween: 0,
					centeredSlides: !1,
					virtualTranslate: !0,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
			const i = (e, s) => {
				let a = t.isHorizontal()
						? e.querySelector('.swiper-slide-shadow-left')
						: e.querySelector('.swiper-slide-shadow-top'),
					i = t.isHorizontal()
						? e.querySelector('.swiper-slide-shadow-right')
						: e.querySelector('.swiper-slide-shadow-bottom');
				a || (a = de('flip', e, t.isHorizontal() ? 'left' : 'top')),
					i ||
						(i = de(
							'flip',
							e,
							t.isHorizontal() ? 'right' : 'bottom'
						)),
					a && (a.style.opacity = Math.max(-s, 0)),
					i && (i.style.opacity = Math.max(s, 0));
			};
			ne({
				effect: 'flip',
				swiper: t,
				on: a,
				setTranslate: () => {
					const { slides: e, rtlTranslate: s } = t,
						a = t.params.flipEffect;
					for (let r = 0; r < e.length; r += 1) {
						const n = e[r];
						let l = n.progress;
						t.params.flipEffect.limitRotation &&
							(l = Math.max(Math.min(n.progress, 1), -1));
						const o = n.swiperSlideOffset;
						let d = -180 * l,
							c = 0,
							p = t.params.cssMode ? -o - t.translate : -o,
							u = 0;
						t.isHorizontal()
							? s && (d = -d)
							: ((u = p), (p = 0), (c = -d), (d = 0)),
							(n.style.zIndex =
								-Math.abs(Math.round(l)) + e.length),
							a.slideShadows && i(n, l);
						const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
						le(0, n).style.transform = m;
					}
				},
				setTransition: (e) => {
					const s = t.slides.map((e) => m(e));
					s.forEach((t) => {
						(t.style.transitionDuration = `${e}ms`),
							t
								.querySelectorAll(
									'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
								)
								.forEach((t) => {
									t.style.transitionDuration = `${e}ms`;
								});
					}),
						oe({ swiper: t, duration: e, transformElements: s });
				},
				recreateShadows: () => {
					t.params.flipEffect,
						t.slides.forEach((e) => {
							let s = e.progress;
							t.params.flipEffect.limitRotation &&
								(s = Math.max(Math.min(e.progress, 1), -1)),
								i(e, s);
						});
				},
				getEffectParams: () => t.params.flipEffect,
				perspective: () => !0,
				overwriteParams: () => ({
					slidesPerView: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: !0,
					spaceBetween: 0,
					virtualTranslate: !t.params.cssMode,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					scale: 1,
					modifier: 1,
					slideShadows: !0,
				},
			}),
				ne({
					effect: 'coverflow',
					swiper: t,
					on: a,
					setTranslate: () => {
						const {
								width: e,
								height: s,
								slides: a,
								slidesSizesGrid: i,
							} = t,
							r = t.params.coverflowEffect,
							n = t.isHorizontal(),
							l = t.translate,
							o = n ? e / 2 - l : s / 2 - l,
							d = n ? r.rotate : -r.rotate,
							c = r.depth;
						for (let e = 0, t = a.length; e < t; e += 1) {
							const t = a[e],
								s = i[e],
								l = (o - t.swiperSlideOffset - s / 2) / s,
								p =
									'function' == typeof r.modifier
										? r.modifier(l)
										: l * r.modifier;
							let u = n ? d * p : 0,
								m = n ? 0 : d * p,
								h = -c * Math.abs(p),
								f = r.stretch;
							'string' == typeof f &&
								-1 !== f.indexOf('%') &&
								(f = (parseFloat(r.stretch) / 100) * s);
							let g = n ? 0 : f * p,
								v = n ? f * p : 0,
								w = 1 - (1 - r.scale) * Math.abs(p);
							Math.abs(v) < 0.001 && (v = 0),
								Math.abs(g) < 0.001 && (g = 0),
								Math.abs(h) < 0.001 && (h = 0),
								Math.abs(u) < 0.001 && (u = 0),
								Math.abs(m) < 0.001 && (m = 0),
								Math.abs(w) < 0.001 && (w = 0);
							const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
							if (
								((le(0, t).style.transform = b),
								(t.style.zIndex = 1 - Math.abs(Math.round(p))),
								r.slideShadows)
							) {
								let e = n
										? t.querySelector(
												'.swiper-slide-shadow-left'
										  )
										: t.querySelector(
												'.swiper-slide-shadow-top'
										  ),
									s = n
										? t.querySelector(
												'.swiper-slide-shadow-right'
										  )
										: t.querySelector(
												'.swiper-slide-shadow-bottom'
										  );
								e ||
									(e = de(
										'coverflow',
										t,
										n ? 'left' : 'top'
									)),
									s ||
										(s = de(
											'coverflow',
											t,
											n ? 'right' : 'bottom'
										)),
									e && (e.style.opacity = p > 0 ? p : 0),
									s && (s.style.opacity = -p > 0 ? -p : 0);
							}
						}
					},
					setTransition: (e) => {
						t.slides
							.map((e) => m(e))
							.forEach((t) => {
								(t.style.transitionDuration = `${e}ms`),
									t
										.querySelectorAll(
											'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
										)
										.forEach((t) => {
											t.style.transitionDuration = `${e}ms`;
										});
							});
					},
					perspective: () => !0,
					overwriteParams: () => ({ watchSlidesProgress: !0 }),
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				creativeEffect: {
					limitProgress: 1,
					shadowPerProgress: !1,
					progressMultiplier: 1,
					perspective: !0,
					prev: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1,
					},
					next: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1,
					},
				},
			});
			const i = (e) => ('string' == typeof e ? e : `${e}px`);
			ne({
				effect: 'creative',
				swiper: t,
				on: a,
				setTranslate: () => {
					const { slides: e, wrapperEl: s, slidesSizesGrid: a } = t,
						r = t.params.creativeEffect,
						{ progressMultiplier: n } = r,
						l = t.params.centeredSlides;
					if (l) {
						const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
						s.style.transform = `translateX(calc(50% - ${e}px))`;
					}
					for (let s = 0; s < e.length; s += 1) {
						const a = e[s],
							o = a.progress,
							d = Math.min(
								Math.max(a.progress, -r.limitProgress),
								r.limitProgress
							);
						let c = d;
						l ||
							(c = Math.min(
								Math.max(a.originalProgress, -r.limitProgress),
								r.limitProgress
							));
						const p = a.swiperSlideOffset,
							u = [
								t.params.cssMode ? -p - t.translate : -p,
								0,
								0,
							],
							m = [0, 0, 0];
						let h = !1;
						t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
						let f = {
							translate: [0, 0, 0],
							rotate: [0, 0, 0],
							scale: 1,
							opacity: 1,
						};
						d < 0
							? ((f = r.next), (h = !0))
							: d > 0 && ((f = r.prev), (h = !0)),
							u.forEach((e, t) => {
								u[t] = `calc(${e}px + (${i(
									f.translate[t]
								)} * ${Math.abs(d * n)}))`;
							}),
							m.forEach((e, t) => {
								m[t] = f.rotate[t] * Math.abs(d * n);
							}),
							(a.style.zIndex =
								-Math.abs(Math.round(o)) + e.length);
						const g = u.join(', '),
							v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
							w =
								c < 0
									? `scale(${1 + (1 - f.scale) * c * n})`
									: `scale(${1 - (1 - f.scale) * c * n})`,
							b =
								c < 0
									? 1 + (1 - f.opacity) * c * n
									: 1 - (1 - f.opacity) * c * n,
							y = `translate3d(${g}) ${v} ${w}`;
						if ((h && f.shadow) || !h) {
							let e = a.querySelector('.swiper-slide-shadow');
							if (
								(!e && f.shadow && (e = de('creative', a)), e)
							) {
								const t = r.shadowPerProgress
									? d * (1 / r.limitProgress)
									: d;
								e.style.opacity = Math.min(
									Math.max(Math.abs(t), 0),
									1
								);
							}
						}
						const E = le(0, a);
						(E.style.transform = y),
							(E.style.opacity = b),
							f.origin && (E.style.transformOrigin = f.origin);
					}
				},
				setTransition: (e) => {
					const s = t.slides.map((e) => m(e));
					s.forEach((t) => {
						(t.style.transitionDuration = `${e}ms`),
							t
								.querySelectorAll('.swiper-slide-shadow')
								.forEach((t) => {
									t.style.transitionDuration = `${e}ms`;
								});
					}),
						oe({
							swiper: t,
							duration: e,
							transformElements: s,
							allSlides: !0,
						});
				},
				perspective: () => t.params.creativeEffect.perspective,
				overwriteParams: () => ({
					watchSlidesProgress: !0,
					virtualTranslate: !t.params.cssMode,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				cardsEffect: {
					slideShadows: !0,
					rotate: !0,
					perSlideRotate: 2,
					perSlideOffset: 8,
				},
			}),
				ne({
					effect: 'cards',
					swiper: t,
					on: a,
					setTranslate: () => {
						const {
								slides: e,
								activeIndex: s,
								rtlTranslate: a,
							} = t,
							i = t.params.cardsEffect,
							{ startTranslate: r, isTouched: n } =
								t.touchEventsData,
							l = a ? -t.translate : t.translate;
						for (let o = 0; o < e.length; o += 1) {
							const d = e[o],
								c = d.progress,
								p = Math.min(Math.max(c, -4), 4);
							let u = d.swiperSlideOffset;
							t.params.centeredSlides &&
								!t.params.cssMode &&
								(t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
								t.params.centeredSlides &&
									t.params.cssMode &&
									(u -= e[0].swiperSlideOffset);
							let m = t.params.cssMode ? -u - t.translate : -u,
								h = 0;
							const f = -100 * Math.abs(p);
							let g = 1,
								v = -i.perSlideRotate * p,
								w = i.perSlideOffset - 0.75 * Math.abs(p);
							const b =
									t.virtual && t.params.virtual.enabled
										? t.virtual.from + o
										: o,
								y =
									(b === s || b === s - 1) &&
									p > 0 &&
									p < 1 &&
									(n || t.params.cssMode) &&
									l < r,
								E =
									(b === s || b === s + 1) &&
									p < 0 &&
									p > -1 &&
									(n || t.params.cssMode) &&
									l > r;
							if (y || E) {
								const e =
									(1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) **
									0.5;
								(v += -28 * p * e),
									(g += -0.5 * e),
									(w += 96 * e),
									(h = -25 * e * Math.abs(p) + '%');
							}
							if (
								((m =
									p < 0
										? `calc(${m}px ${a ? '-' : '+'} (${
												w * Math.abs(p)
										  }%))`
										: p > 0
										? `calc(${m}px ${a ? '-' : '+'} (-${
												w * Math.abs(p)
										  }%))`
										: `${m}px`),
								!t.isHorizontal())
							) {
								const e = h;
								(h = m), (m = e);
							}
							const x =
									p < 0
										? '' + (1 + (1 - g) * p)
										: '' + (1 - (1 - g) * p),
								S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${
									i.rotate ? (a ? -v : v) : 0
								}deg)\n        scale(${x})\n      `;
							if (i.slideShadows) {
								let e = d.querySelector('.swiper-slide-shadow');
								e || (e = de('cards', d)),
									e &&
										(e.style.opacity = Math.min(
											Math.max(
												(Math.abs(p) - 0.5) / 0.5,
												0
											),
											1
										));
							}
							d.style.zIndex =
								-Math.abs(Math.round(c)) + e.length;
							le(0, d).style.transform = S;
						}
					},
					setTransition: (e) => {
						const s = t.slides.map((e) => m(e));
						s.forEach((t) => {
							(t.style.transitionDuration = `${e}ms`),
								t
									.querySelectorAll('.swiper-slide-shadow')
									.forEach((t) => {
										t.style.transitionDuration = `${e}ms`;
									});
						}),
							oe({
								swiper: t,
								duration: e,
								transformElements: s,
							});
					},
					perspective: () => !0,
					overwriteParams: () => ({
						watchSlidesProgress: !0,
						virtualTranslate: !t.params.cssMode,
					}),
				});
		},
	];
	return Q.use(ce), Q;
})();
//# sourceMappingURL=swiper-bundle.min.js.map

/*!
 * sweetalert2 v11.7.32
 * Released under the MIT License.
 */
!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define(e)
		: ((t =
				'undefined' != typeof globalThis
					? globalThis
					: t || self).Sweetalert2 = e());
})(this, function () {
	'use strict';
	function t(t, e) {
		return (function (t, e) {
			if (e.get) return e.get.call(t);
			return e.value;
		})(t, n(t, e, 'get'));
	}
	function e(t, e, o) {
		return (
			(function (t, e, n) {
				if (e.set) e.set.call(t, n);
				else {
					if (!e.writable)
						throw new TypeError(
							'attempted to set read only private field'
						);
					e.value = n;
				}
			})(t, n(t, e, 'set'), o),
			o
		);
	}
	function n(t, e, n) {
		if (!e.has(t))
			throw new TypeError(
				'attempted to ' + n + ' private field on non-instance'
			);
		return e.get(t);
	}
	function o(t, e, n) {
		!(function (t, e) {
			if (e.has(t))
				throw new TypeError(
					'Cannot initialize the same private elements twice on an object'
				);
		})(t, e),
			e.set(t, n);
	}
	const i = {},
		s = (t) =>
			new Promise((e) => {
				if (!t) return e();
				const n = window.scrollX,
					o = window.scrollY;
				(i.restoreFocusTimeout = setTimeout(() => {
					i.previousActiveElement instanceof HTMLElement
						? (i.previousActiveElement.focus(),
						  (i.previousActiveElement = null))
						: document.body && document.body.focus(),
						e();
				}, 100)),
					window.scrollTo(n, o);
			}),
		r = 'swal2-',
		a = [
			'container',
			'shown',
			'height-auto',
			'iosfix',
			'popup',
			'modal',
			'no-backdrop',
			'no-transition',
			'toast',
			'toast-shown',
			'show',
			'hide',
			'close',
			'title',
			'html-container',
			'actions',
			'confirm',
			'deny',
			'cancel',
			'default-outline',
			'footer',
			'icon',
			'icon-content',
			'image',
			'input',
			'file',
			'range',
			'select',
			'radio',
			'checkbox',
			'label',
			'textarea',
			'inputerror',
			'input-label',
			'validation-message',
			'progress-steps',
			'active-progress-step',
			'progress-step',
			'progress-step-line',
			'loader',
			'loading',
			'styled',
			'top',
			'top-start',
			'top-end',
			'top-left',
			'top-right',
			'center',
			'center-start',
			'center-end',
			'center-left',
			'center-right',
			'bottom',
			'bottom-start',
			'bottom-end',
			'bottom-left',
			'bottom-right',
			'grow-row',
			'grow-column',
			'grow-fullscreen',
			'rtl',
			'timer-progress-bar',
			'timer-progress-bar-container',
			'scrollbar-measure',
			'icon-success',
			'icon-warning',
			'icon-info',
			'icon-question',
			'icon-error',
		].reduce((t, e) => ((t[e] = r + e), t), {}),
		c = ['success', 'warning', 'info', 'question', 'error'].reduce(
			(t, e) => ((t[e] = r + e), t),
			{}
		),
		l = 'SweetAlert2:',
		u = (t) => t.charAt(0).toUpperCase() + t.slice(1),
		d = (t) => {
			console.warn(
				''.concat(l, ' ').concat('object' == typeof t ? t.join(' ') : t)
			);
		},
		p = (t) => {
			console.error(''.concat(l, ' ').concat(t));
		},
		m = [],
		g = (t, e) => {
			var n;
			(n = '"'
				.concat(
					t,
					'" is deprecated and will be removed in the next major release. Please use "'
				)
				.concat(e, '" instead.')),
				m.includes(n) || (m.push(n), d(n));
		},
		h = (t) => ('function' == typeof t ? t() : t),
		f = (t) => t && 'function' == typeof t.toPromise,
		b = (t) => (f(t) ? t.toPromise() : Promise.resolve(t)),
		y = (t) => t && Promise.resolve(t) === t,
		w = () => document.body.querySelector('.'.concat(a.container)),
		v = (t) => {
			const e = w();
			return e ? e.querySelector(t) : null;
		},
		C = (t) => v('.'.concat(t)),
		A = () => C(a.popup),
		k = () => C(a.icon),
		B = () => C(a.title),
		E = () => C(a['html-container']),
		x = () => C(a.image),
		P = () => C(a['progress-steps']),
		T = () => C(a['validation-message']),
		L = () => v('.'.concat(a.actions, ' .').concat(a.confirm)),
		S = () => v('.'.concat(a.actions, ' .').concat(a.cancel)),
		O = () => v('.'.concat(a.actions, ' .').concat(a.deny)),
		M = () => v('.'.concat(a.loader)),
		j = () => C(a.actions),
		H = () => C(a.footer),
		I = () => C(a['timer-progress-bar']),
		D = () => C(a.close),
		q = () => {
			const t = A();
			if (!t) return [];
			const e = t.querySelectorAll(
					'[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
				),
				n = Array.from(e).sort((t, e) => {
					const n = parseInt(t.getAttribute('tabindex') || '0'),
						o = parseInt(e.getAttribute('tabindex') || '0');
					return n > o ? 1 : n < o ? -1 : 0;
				}),
				o = t.querySelectorAll(
					'\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
				),
				i = Array.from(o).filter(
					(t) => '-1' !== t.getAttribute('tabindex')
				);
			return [...new Set(n.concat(i))].filter((t) => tt(t));
		},
		V = () =>
			_(document.body, a.shown) &&
			!_(document.body, a['toast-shown']) &&
			!_(document.body, a['no-backdrop']),
		N = () => {
			const t = A();
			return !!t && _(t, a.toast);
		},
		F = (t, e) => {
			if (((t.textContent = ''), e)) {
				const n = new DOMParser().parseFromString(e, 'text/html'),
					o = n.querySelector('head');
				o &&
					Array.from(o.childNodes).forEach((e) => {
						t.appendChild(e);
					});
				const i = n.querySelector('body');
				i &&
					Array.from(i.childNodes).forEach((e) => {
						e instanceof HTMLVideoElement ||
						e instanceof HTMLAudioElement
							? t.appendChild(e.cloneNode(!0))
							: t.appendChild(e);
					});
			}
		},
		_ = (t, e) => {
			if (!e) return !1;
			const n = e.split(/\s+/);
			for (let e = 0; e < n.length; e++)
				if (!t.classList.contains(n[e])) return !1;
			return !0;
		},
		R = (t, e, n) => {
			if (
				(((t, e) => {
					Array.from(t.classList).forEach((n) => {
						Object.values(a).includes(n) ||
							Object.values(c).includes(n) ||
							Object.values(e.showClass || {}).includes(n) ||
							t.classList.remove(n);
					});
				})(t, e),
				e.customClass && e.customClass[n])
			) {
				if (
					'string' != typeof e.customClass[n] &&
					!e.customClass[n].forEach
				)
					return void d(
						'Invalid type of customClass.'
							.concat(
								n,
								'! Expected string or iterable object, got "'
							)
							.concat(typeof e.customClass[n], '"')
					);
				K(t, e.customClass[n]);
			}
		},
		U = (t, e) => {
			if (!e) return null;
			switch (e) {
				case 'select':
				case 'textarea':
				case 'file':
					return t.querySelector(
						'.'.concat(a.popup, ' > .').concat(a[e])
					);
				case 'checkbox':
					return t.querySelector(
						'.'.concat(a.popup, ' > .').concat(a.checkbox, ' input')
					);
				case 'radio':
					return (
						t.querySelector(
							'.'
								.concat(a.popup, ' > .')
								.concat(a.radio, ' input:checked')
						) ||
						t.querySelector(
							'.'
								.concat(a.popup, ' > .')
								.concat(a.radio, ' input:first-child')
						)
					);
				case 'range':
					return t.querySelector(
						'.'.concat(a.popup, ' > .').concat(a.range, ' input')
					);
				default:
					return t.querySelector(
						'.'.concat(a.popup, ' > .').concat(a.input)
					);
			}
		},
		z = (t) => {
			if ((t.focus(), 'file' !== t.type)) {
				const e = t.value;
				(t.value = ''), (t.value = e);
			}
		},
		W = (t, e, n) => {
			t &&
				e &&
				('string' == typeof e && (e = e.split(/\s+/).filter(Boolean)),
				e.forEach((e) => {
					Array.isArray(t)
						? t.forEach((t) => {
								n ? t.classList.add(e) : t.classList.remove(e);
						  })
						: n
						? t.classList.add(e)
						: t.classList.remove(e);
				}));
		},
		K = (t, e) => {
			W(t, e, !0);
		},
		Y = (t, e) => {
			W(t, e, !1);
		},
		Z = (t, e) => {
			const n = Array.from(t.children);
			for (let t = 0; t < n.length; t++) {
				const o = n[t];
				if (o instanceof HTMLElement && _(o, e)) return o;
			}
		},
		$ = (t, e, n) => {
			n === ''.concat(parseInt(n)) && (n = parseInt(n)),
				n || 0 === parseInt(n)
					? (t.style[e] =
							'number' == typeof n ? ''.concat(n, 'px') : n)
					: t.style.removeProperty(e);
		},
		J = function (t) {
			let e =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: 'flex';
			t && (t.style.display = e);
		},
		X = (t) => {
			t && (t.style.display = 'none');
		},
		G = (t, e, n, o) => {
			const i = t.querySelector(e);
			i && (i.style[n] = o);
		},
		Q = function (t, e) {
			e
				? J(
						t,
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: 'flex'
				  )
				: X(t);
		},
		tt = (t) =>
			!(
				!t ||
				!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
			),
		et = (t) => !!(t.scrollHeight > t.clientHeight),
		nt = (t) => {
			const e = window.getComputedStyle(t),
				n = parseFloat(e.getPropertyValue('animation-duration') || '0'),
				o = parseFloat(
					e.getPropertyValue('transition-duration') || '0'
				);
			return n > 0 || o > 0;
		},
		ot = function (t) {
			let e =
				arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			const n = I();
			n &&
				tt(n) &&
				(e && ((n.style.transition = 'none'), (n.style.width = '100%')),
				setTimeout(() => {
					(n.style.transition = 'width '.concat(t / 1e3, 's linear')),
						(n.style.width = '0%');
				}, 10));
		},
		it = () =>
			'undefined' == typeof window || 'undefined' == typeof document,
		st = '\n <div aria-labelledby="'
			.concat(a.title, '" aria-describedby="')
			.concat(a['html-container'], '" class="')
			.concat(
				a.popup,
				'" tabindex="-1">\n   <button type="button" class="'
			)
			.concat(a.close, '"></button>\n   <ul class="')
			.concat(a['progress-steps'], '"></ul>\n   <div class="')
			.concat(a.icon, '"></div>\n   <img class="')
			.concat(a.image, '" />\n   <h2 class="')
			.concat(a.title, '" id="')
			.concat(a.title, '"></h2>\n   <div class="')
			.concat(a['html-container'], '" id="')
			.concat(a['html-container'], '"></div>\n   <input class="')
			.concat(a.input, '" id="')
			.concat(a.input, '" />\n   <input type="file" class="')
			.concat(a.file, '" />\n   <div class="')
			.concat(
				a.range,
				'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
			)
			.concat(a.select, '" id="')
			.concat(a.select, '"></select>\n   <div class="')
			.concat(a.radio, '"></div>\n   <label class="')
			.concat(a.checkbox, '">\n     <input type="checkbox" id="')
			.concat(a.checkbox, '" />\n     <span class="')
			.concat(a.label, '"></span>\n   </label>\n   <textarea class="')
			.concat(a.textarea, '" id="')
			.concat(a.textarea, '"></textarea>\n   <div class="')
			.concat(a['validation-message'], '" id="')
			.concat(a['validation-message'], '"></div>\n   <div class="')
			.concat(a.actions, '">\n     <div class="')
			.concat(a.loader, '"></div>\n     <button type="button" class="')
			.concat(
				a.confirm,
				'"></button>\n     <button type="button" class="'
			)
			.concat(a.deny, '"></button>\n     <button type="button" class="')
			.concat(a.cancel, '"></button>\n   </div>\n   <div class="')
			.concat(a.footer, '"></div>\n   <div class="')
			.concat(a['timer-progress-bar-container'], '">\n     <div class="')
			.concat(a['timer-progress-bar'], '"></div>\n   </div>\n </div>\n')
			.replace(/(^|\n)\s*/g, ''),
		rt = () => {
			i.currentInstance.resetValidationMessage();
		},
		at = (t) => {
			const e = (() => {
				const t = w();
				return (
					!!t &&
					(t.remove(),
					Y(
						[document.documentElement, document.body],
						[a['no-backdrop'], a['toast-shown'], a['has-column']]
					),
					!0)
				);
			})();
			if (it())
				return void p('SweetAlert2 requires document to initialize');
			const n = document.createElement('div');
			(n.className = a.container),
				e && K(n, a['no-transition']),
				F(n, st);
			const o =
				'string' == typeof (i = t.target)
					? document.querySelector(i)
					: i;
			var i;
			o.appendChild(n),
				((t) => {
					const e = A();
					e.setAttribute('role', t.toast ? 'alert' : 'dialog'),
						e.setAttribute(
							'aria-live',
							t.toast ? 'polite' : 'assertive'
						),
						t.toast || e.setAttribute('aria-modal', 'true');
				})(t),
				((t) => {
					'rtl' === window.getComputedStyle(t).direction &&
						K(w(), a.rtl);
				})(o),
				(() => {
					const t = A(),
						e = Z(t, a.input),
						n = Z(t, a.file),
						o = t.querySelector('.'.concat(a.range, ' input')),
						i = t.querySelector('.'.concat(a.range, ' output')),
						s = Z(t, a.select),
						r = t.querySelector('.'.concat(a.checkbox, ' input')),
						c = Z(t, a.textarea);
					(e.oninput = rt),
						(n.onchange = rt),
						(s.onchange = rt),
						(r.onchange = rt),
						(c.oninput = rt),
						(o.oninput = () => {
							rt(), (i.value = o.value);
						}),
						(o.onchange = () => {
							rt(), (i.value = o.value);
						});
				})();
		},
		ct = (t, e) => {
			t instanceof HTMLElement
				? e.appendChild(t)
				: 'object' == typeof t
				? lt(t, e)
				: t && F(e, t);
		},
		lt = (t, e) => {
			t.jquery ? ut(e, t) : F(e, t.toString());
		},
		ut = (t, e) => {
			if (((t.textContent = ''), 0 in e))
				for (let n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
			else t.appendChild(e.cloneNode(!0));
		},
		dt = (() => {
			if (it()) return !1;
			const t = document.createElement('div');
			return void 0 !== t.style.webkitAnimation
				? 'webkitAnimationEnd'
				: void 0 !== t.style.animation && 'animationend';
		})(),
		pt = (t, e) => {
			const n = j(),
				o = M();
			n &&
				o &&
				(e.showConfirmButton || e.showDenyButton || e.showCancelButton
					? J(n)
					: X(n),
				R(n, e, 'actions'),
				(function (t, e, n) {
					const o = L(),
						i = O(),
						s = S();
					if (!o || !i || !s) return;
					mt(o, 'confirm', n),
						mt(i, 'deny', n),
						mt(s, 'cancel', n),
						(function (t, e, n, o) {
							if (!o.buttonsStyling)
								return void Y([t, e, n], a.styled);
							K([t, e, n], a.styled),
								o.confirmButtonColor &&
									((t.style.backgroundColor =
										o.confirmButtonColor),
									K(t, a['default-outline']));
							o.denyButtonColor &&
								((e.style.backgroundColor = o.denyButtonColor),
								K(e, a['default-outline']));
							o.cancelButtonColor &&
								((n.style.backgroundColor =
									o.cancelButtonColor),
								K(n, a['default-outline']));
						})(o, i, s, n),
						n.reverseButtons &&
							(n.toast
								? (t.insertBefore(s, o), t.insertBefore(i, o))
								: (t.insertBefore(s, e),
								  t.insertBefore(i, e),
								  t.insertBefore(o, e)));
				})(n, o, e),
				F(o, e.loaderHtml || ''),
				R(o, e, 'loader'));
		};
	function mt(t, e, n) {
		const o = u(e);
		Q(t, n['show'.concat(o, 'Button')], 'inline-block'),
			F(t, n[''.concat(e, 'ButtonText')] || ''),
			t.setAttribute(
				'aria-label',
				n[''.concat(e, 'ButtonAriaLabel')] || ''
			),
			(t.className = a[e]),
			R(t, n, ''.concat(e, 'Button'));
	}
	const gt = (t, e) => {
		const n = w();
		n &&
			(!(function (t, e) {
				'string' == typeof e
					? (t.style.background = e)
					: e ||
					  K(
							[document.documentElement, document.body],
							a['no-backdrop']
					  );
			})(n, e.backdrop),
			(function (t, e) {
				if (!e) return;
				e in a
					? K(t, a[e])
					: (d(
							'The "position" parameter is not valid, defaulting to "center"'
					  ),
					  K(t, a.center));
			})(n, e.position),
			(function (t, e) {
				if (!e) return;
				K(t, a['grow-'.concat(e)]);
			})(n, e.grow),
			R(n, e, 'container'));
	};
	var ht = { innerParams: new WeakMap(), domCache: new WeakMap() };
	const ft = [
			'input',
			'file',
			'range',
			'select',
			'radio',
			'checkbox',
			'textarea',
		],
		bt = (t) => {
			if (!t.input) return;
			if (!Bt[t.input])
				return void p(
					'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
						t.input,
						'"'
					)
				);
			const e = At(t.input),
				n = Bt[t.input](e, t);
			J(e),
				t.inputAutoFocus &&
					setTimeout(() => {
						z(n);
					});
		},
		yt = (t, e) => {
			const n = U(A(), t);
			if (n) {
				((t) => {
					for (let e = 0; e < t.attributes.length; e++) {
						const n = t.attributes[e].name;
						['id', 'type', 'value', 'style'].includes(n) ||
							t.removeAttribute(n);
					}
				})(n);
				for (const t in e) n.setAttribute(t, e[t]);
			}
		},
		wt = (t) => {
			const e = At(t.input);
			'object' == typeof t.customClass && K(e, t.customClass.input);
		},
		vt = (t, e) => {
			(t.placeholder && !e.inputPlaceholder) ||
				(t.placeholder = e.inputPlaceholder);
		},
		Ct = (t, e, n) => {
			if (n.inputLabel) {
				const o = document.createElement('label'),
					i = a['input-label'];
				o.setAttribute('for', t.id),
					(o.className = i),
					'object' == typeof n.customClass &&
						K(o, n.customClass.inputLabel),
					(o.innerText = n.inputLabel),
					e.insertAdjacentElement('beforebegin', o);
			}
		},
		At = (t) => Z(A(), a[t] || a.input),
		kt = (t, e) => {
			['string', 'number'].includes(typeof e)
				? (t.value = ''.concat(e))
				: y(e) ||
				  d(
						'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
							typeof e,
							'"'
						)
				  );
		},
		Bt = {};
	(Bt.text =
		Bt.email =
		Bt.password =
		Bt.number =
		Bt.tel =
		Bt.url =
			(t, e) => (
				kt(t, e.inputValue),
				Ct(t, t, e),
				vt(t, e),
				(t.type = e.input),
				t
			)),
		(Bt.file = (t, e) => (Ct(t, t, e), vt(t, e), t)),
		(Bt.range = (t, e) => {
			const n = t.querySelector('input'),
				o = t.querySelector('output');
			return (
				kt(n, e.inputValue),
				(n.type = e.input),
				kt(o, e.inputValue),
				Ct(n, t, e),
				t
			);
		}),
		(Bt.select = (t, e) => {
			if (((t.textContent = ''), e.inputPlaceholder)) {
				const n = document.createElement('option');
				F(n, e.inputPlaceholder),
					(n.value = ''),
					(n.disabled = !0),
					(n.selected = !0),
					t.appendChild(n);
			}
			return Ct(t, t, e), t;
		}),
		(Bt.radio = (t) => ((t.textContent = ''), t)),
		(Bt.checkbox = (t, e) => {
			const n = U(A(), 'checkbox');
			(n.value = '1'), (n.checked = Boolean(e.inputValue));
			const o = t.querySelector('span');
			return F(o, e.inputPlaceholder), n;
		}),
		(Bt.textarea = (t, e) => {
			kt(t, e.inputValue), vt(t, e), Ct(t, t, e);
			return (
				setTimeout(() => {
					if ('MutationObserver' in window) {
						const n = parseInt(window.getComputedStyle(A()).width);
						new MutationObserver(() => {
							if (!document.body.contains(t)) return;
							const o =
								t.offsetWidth +
								((i = t),
								parseInt(
									window.getComputedStyle(i).marginLeft
								) +
									parseInt(
										window.getComputedStyle(i).marginRight
									));
							var i;
							o > n
								? (A().style.width = ''.concat(o, 'px'))
								: $(A(), 'width', e.width);
						}).observe(t, {
							attributes: !0,
							attributeFilter: ['style'],
						});
					}
				}),
				t
			);
		});
	const Et = (t, e) => {
			const n = E();
			n &&
				(R(n, e, 'htmlContainer'),
				e.html
					? (ct(e.html, n), J(n, 'block'))
					: e.text
					? ((n.textContent = e.text), J(n, 'block'))
					: X(n),
				((t, e) => {
					const n = A();
					if (!n) return;
					const o = ht.innerParams.get(t),
						i = !o || e.input !== o.input;
					ft.forEach((t) => {
						const o = Z(n, a[t]);
						o &&
							(yt(t, e.inputAttributes),
							(o.className = a[t]),
							i && X(o));
					}),
						e.input && (i && bt(e), wt(e));
				})(t, e));
		},
		xt = (t, e) => {
			for (const [n, o] of Object.entries(c)) e.icon !== n && Y(t, o);
			K(t, e.icon && c[e.icon]), Lt(t, e), Pt(), R(t, e, 'icon');
		},
		Pt = () => {
			const t = A();
			if (!t) return;
			const e = window
					.getComputedStyle(t)
					.getPropertyValue('background-color'),
				n = t.querySelectorAll(
					'[class^=swal2-success-circular-line], .swal2-success-fix'
				);
			for (let t = 0; t < n.length; t++) n[t].style.backgroundColor = e;
		},
		Tt = (t, e) => {
			if (!e.icon && !e.iconHtml) return;
			let n = t.innerHTML,
				o = '';
			if (e.iconHtml) o = St(e.iconHtml);
			else if ('success' === e.icon)
				(o =
					'\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
					(n = n.replace(/ style=".*?"/g, ''));
			else if ('error' === e.icon)
				o =
					'\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
			else if (e.icon) {
				o = St({ question: '?', warning: '!', info: 'i' }[e.icon]);
			}
			n.trim() !== o.trim() && F(t, o);
		},
		Lt = (t, e) => {
			if (e.iconColor) {
				(t.style.color = e.iconColor),
					(t.style.borderColor = e.iconColor);
				for (const n of [
					'.swal2-success-line-tip',
					'.swal2-success-line-long',
					'.swal2-x-mark-line-left',
					'.swal2-x-mark-line-right',
				])
					G(t, n, 'backgroundColor', e.iconColor);
				G(t, '.swal2-success-ring', 'borderColor', e.iconColor);
			}
		},
		St = (t) =>
			'<div class="'.concat(a['icon-content'], '">').concat(t, '</div>'),
		Ot = (t, e) => {
			const n = e.showClass || {};
			(t.className = ''
				.concat(a.popup, ' ')
				.concat(tt(t) ? n.popup : '')),
				e.toast
					? (K(
							[document.documentElement, document.body],
							a['toast-shown']
					  ),
					  K(t, a.toast))
					: K(t, a.modal),
				R(t, e, 'popup'),
				'string' == typeof e.customClass && K(t, e.customClass),
				e.icon && K(t, a['icon-'.concat(e.icon)]);
		},
		Mt = (t) => {
			const e = document.createElement('li');
			return K(e, a['progress-step']), F(e, t), e;
		},
		jt = (t) => {
			const e = document.createElement('li');
			return (
				K(e, a['progress-step-line']),
				t.progressStepsDistance &&
					$(e, 'width', t.progressStepsDistance),
				e
			);
		},
		Ht = (t, e) => {
			((t, e) => {
				const n = w(),
					o = A();
				if (n && o) {
					if (e.toast) {
						$(n, 'width', e.width), (o.style.width = '100%');
						const t = M();
						t && o.insertBefore(t, k());
					} else $(o, 'width', e.width);
					$(o, 'padding', e.padding),
						e.color && (o.style.color = e.color),
						e.background && (o.style.background = e.background),
						X(T()),
						Ot(o, e);
				}
			})(0, e),
				gt(0, e),
				((t, e) => {
					const n = P();
					if (!n) return;
					const { progressSteps: o, currentProgressStep: i } = e;
					o && 0 !== o.length && void 0 !== i
						? (J(n),
						  (n.textContent = ''),
						  i >= o.length &&
								d(
									'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
								),
						  o.forEach((t, s) => {
								const r = Mt(t);
								if (
									(n.appendChild(r),
									s === i && K(r, a['active-progress-step']),
									s !== o.length - 1)
								) {
									const t = jt(e);
									n.appendChild(t);
								}
						  }))
						: X(n);
				})(0, e),
				((t, e) => {
					const n = ht.innerParams.get(t),
						o = k();
					if (o) {
						if (n && e.icon === n.icon)
							return Tt(o, e), void xt(o, e);
						if (e.icon || e.iconHtml) {
							if (e.icon && -1 === Object.keys(c).indexOf(e.icon))
								return (
									p(
										'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
											e.icon,
											'"'
										)
									),
									void X(o)
								);
							J(o),
								Tt(o, e),
								xt(o, e),
								K(o, e.showClass && e.showClass.icon);
						} else X(o);
					}
				})(t, e),
				((t, e) => {
					const n = x();
					n &&
						(e.imageUrl
							? (J(n, ''),
							  n.setAttribute('src', e.imageUrl),
							  n.setAttribute('alt', e.imageAlt || ''),
							  $(n, 'width', e.imageWidth),
							  $(n, 'height', e.imageHeight),
							  (n.className = a.image),
							  R(n, e, 'image'))
							: X(n));
				})(0, e),
				((t, e) => {
					const n = B();
					n &&
						(Q(n, e.title || e.titleText, 'block'),
						e.title && ct(e.title, n),
						e.titleText && (n.innerText = e.titleText),
						R(n, e, 'title'));
				})(0, e),
				((t, e) => {
					const n = D();
					n &&
						(F(n, e.closeButtonHtml || ''),
						R(n, e, 'closeButton'),
						Q(n, e.showCloseButton),
						n.setAttribute(
							'aria-label',
							e.closeButtonAriaLabel || ''
						));
				})(0, e),
				Et(t, e),
				pt(0, e),
				((t, e) => {
					const n = H();
					n &&
						(Q(n, e.footer, 'block'),
						e.footer && ct(e.footer, n),
						R(n, e, 'footer'));
				})(0, e);
			const n = A();
			'function' == typeof e.didRender && n && e.didRender(n);
		},
		It = () => {
			var t;
			return null === (t = L()) || void 0 === t ? void 0 : t.click();
		},
		Dt = Object.freeze({
			cancel: 'cancel',
			backdrop: 'backdrop',
			close: 'close',
			esc: 'esc',
			timer: 'timer',
		}),
		qt = (t) => {
			t.keydownTarget &&
				t.keydownHandlerAdded &&
				(t.keydownTarget.removeEventListener(
					'keydown',
					t.keydownHandler,
					{ capture: t.keydownListenerCapture }
				),
				(t.keydownHandlerAdded = !1));
		},
		Vt = (t, e) => {
			var n;
			const o = q();
			if (o.length)
				return (
					(t += e) === o.length
						? (t = 0)
						: -1 === t && (t = o.length - 1),
					void o[t].focus()
				);
			null === (n = A()) || void 0 === n || n.focus();
		},
		Nt = ['ArrowRight', 'ArrowDown'],
		Ft = ['ArrowLeft', 'ArrowUp'],
		_t = (t, e, n) => {
			t &&
				(e.isComposing ||
					229 === e.keyCode ||
					(t.stopKeydownPropagation && e.stopPropagation(),
					'Enter' === e.key
						? Rt(e, t)
						: 'Tab' === e.key
						? Ut(e)
						: [...Nt, ...Ft].includes(e.key)
						? zt(e.key)
						: 'Escape' === e.key && Wt(e, t, n)));
		},
		Rt = (t, e) => {
			if (!h(e.allowEnterKey)) return;
			const n = U(A(), e.input);
			if (
				t.target &&
				n &&
				t.target instanceof HTMLElement &&
				t.target.outerHTML === n.outerHTML
			) {
				if (['textarea', 'file'].includes(e.input)) return;
				It(), t.preventDefault();
			}
		},
		Ut = (t) => {
			const e = t.target,
				n = q();
			let o = -1;
			for (let t = 0; t < n.length; t++)
				if (e === n[t]) {
					o = t;
					break;
				}
			t.shiftKey ? Vt(o, -1) : Vt(o, 1),
				t.stopPropagation(),
				t.preventDefault();
		},
		zt = (t) => {
			const e = j(),
				n = L(),
				o = O(),
				i = S();
			if (!(e && n && o && i)) return;
			const s = [n, o, i];
			if (
				document.activeElement instanceof HTMLElement &&
				!s.includes(document.activeElement)
			)
				return;
			const r = Nt.includes(t)
				? 'nextElementSibling'
				: 'previousElementSibling';
			let a = document.activeElement;
			if (a) {
				for (let t = 0; t < e.children.length; t++) {
					if (((a = a[r]), !a)) return;
					if (a instanceof HTMLButtonElement && tt(a)) break;
				}
				a instanceof HTMLButtonElement && a.focus();
			}
		},
		Wt = (t, e, n) => {
			h(e.allowEscapeKey) && (t.preventDefault(), n(Dt.esc));
		};
	var Kt = {
		swalPromiseResolve: new WeakMap(),
		swalPromiseReject: new WeakMap(),
	};
	const Yt = () => {
			Array.from(document.body.children).forEach((t) => {
				t.hasAttribute('data-previous-aria-hidden')
					? (t.setAttribute(
							'aria-hidden',
							t.getAttribute('data-previous-aria-hidden') || ''
					  ),
					  t.removeAttribute('data-previous-aria-hidden'))
					: t.removeAttribute('aria-hidden');
			});
		},
		Zt = 'undefined' != typeof window && !!window.GestureEvent,
		$t = () => {
			const t = w();
			if (!t) return;
			let e;
			(t.ontouchstart = (t) => {
				e = Jt(t);
			}),
				(t.ontouchmove = (t) => {
					e && (t.preventDefault(), t.stopPropagation());
				});
		},
		Jt = (t) => {
			const e = t.target,
				n = w(),
				o = E();
			return (
				!(!n || !o) &&
				!Xt(t) &&
				!Gt(t) &&
				(e === n ||
					(!et(n) &&
						e instanceof HTMLElement &&
						'INPUT' !== e.tagName &&
						'TEXTAREA' !== e.tagName &&
						(!et(o) || !o.contains(e))))
			);
		},
		Xt = (t) =>
			t.touches &&
			t.touches.length &&
			'stylus' === t.touches[0].touchType,
		Gt = (t) => t.touches && t.touches.length > 1;
	let Qt = null;
	const te = (t) => {
		null === Qt &&
			(document.body.scrollHeight > window.innerHeight ||
				'scroll' === t) &&
			((Qt = parseInt(
				window
					.getComputedStyle(document.body)
					.getPropertyValue('padding-right')
			)),
			(document.body.style.paddingRight = ''.concat(
				Qt +
					(() => {
						const t = document.createElement('div');
						(t.className = a['scrollbar-measure']),
							document.body.appendChild(t);
						const e =
							t.getBoundingClientRect().width - t.clientWidth;
						return document.body.removeChild(t), e;
					})(),
				'px'
			)));
	};
	function ee(t, e, n, o) {
		N() ? le(t, o) : (s(n).then(() => le(t, o)), qt(i)),
			Zt
				? (e.setAttribute('style', 'display:none !important'),
				  e.removeAttribute('class'),
				  (e.innerHTML = ''))
				: e.remove(),
			V() &&
				(null !== Qt &&
					((document.body.style.paddingRight = ''.concat(Qt, 'px')),
					(Qt = null)),
				(() => {
					if (_(document.body, a.iosfix)) {
						const t = parseInt(document.body.style.top, 10);
						Y(document.body, a.iosfix),
							(document.body.style.top = ''),
							(document.body.scrollTop = -1 * t);
					}
				})(),
				Yt()),
			Y(
				[document.documentElement, document.body],
				[a.shown, a['height-auto'], a['no-backdrop'], a['toast-shown']]
			);
	}
	function ne(t) {
		t = re(t);
		const e = Kt.swalPromiseResolve.get(this),
			n = oe(this);
		this.isAwaitingPromise ? t.isDismissed || (se(this), e(t)) : n && e(t);
	}
	const oe = (t) => {
		const e = A();
		if (!e) return !1;
		const n = ht.innerParams.get(t);
		if (!n || _(e, n.hideClass.popup)) return !1;
		Y(e, n.showClass.popup), K(e, n.hideClass.popup);
		const o = w();
		return (
			Y(o, n.showClass.backdrop),
			K(o, n.hideClass.backdrop),
			ae(t, e, n),
			!0
		);
	};
	function ie(t) {
		const e = Kt.swalPromiseReject.get(this);
		se(this), e && e(t);
	}
	const se = (t) => {
			t.isAwaitingPromise &&
				(delete t.isAwaitingPromise,
				ht.innerParams.get(t) || t._destroy());
		},
		re = (t) =>
			void 0 === t
				? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
				: Object.assign(
						{ isConfirmed: !1, isDenied: !1, isDismissed: !1 },
						t
				  ),
		ae = (t, e, n) => {
			const o = w(),
				i = dt && nt(e);
			'function' == typeof n.willClose && n.willClose(e),
				i
					? ce(t, e, o, n.returnFocus, n.didClose)
					: ee(t, o, n.returnFocus, n.didClose);
		},
		ce = (t, e, n, o, s) => {
			dt &&
				((i.swalCloseEventFinishedCallback = ee.bind(null, t, n, o, s)),
				e.addEventListener(dt, function (t) {
					t.target === e &&
						(i.swalCloseEventFinishedCallback(),
						delete i.swalCloseEventFinishedCallback);
				}));
		},
		le = (t, e) => {
			setTimeout(() => {
				'function' == typeof e && e.bind(t.params)(),
					t._destroy && t._destroy();
			});
		},
		ue = (t) => {
			let e = A();
			if ((e || new _n(), (e = A()), !e)) return;
			const n = M();
			N() ? X(k()) : de(e, t),
				J(n),
				e.setAttribute('data-loading', 'true'),
				e.setAttribute('aria-busy', 'true'),
				e.focus();
		},
		de = (t, e) => {
			const n = j(),
				o = M();
			n &&
				o &&
				(!e && tt(L()) && (e = L()),
				J(n),
				e &&
					(X(e),
					o.setAttribute('data-button-to-replace', e.className),
					n.insertBefore(o, e)),
				K([t, n], a.loading));
		},
		pe = (t) => (t.checked ? 1 : 0),
		me = (t) => (t.checked ? t.value : null),
		ge = (t) =>
			t.files && t.files.length
				? null !== t.getAttribute('multiple')
					? t.files
					: t.files[0]
				: null,
		he = (t, e) => {
			const n = A();
			if (!n) return;
			const o = (t) => {
				'select' === e.input
					? (function (t, e, n) {
							const o = Z(t, a.select);
							if (!o) return;
							const i = (t, e, o) => {
								const i = document.createElement('option');
								(i.value = o),
									F(i, e),
									(i.selected = ye(o, n.inputValue)),
									t.appendChild(i);
							};
							e.forEach((t) => {
								const e = t[0],
									n = t[1];
								if (Array.isArray(n)) {
									const t =
										document.createElement('optgroup');
									(t.label = e),
										(t.disabled = !1),
										o.appendChild(t),
										n.forEach((e) => i(t, e[1], e[0]));
								} else i(o, n, e);
							}),
								o.focus();
					  })(n, be(t), e)
					: 'radio' === e.input &&
					  (function (t, e, n) {
							const o = Z(t, a.radio);
							if (!o) return;
							e.forEach((t) => {
								const e = t[0],
									i = t[1],
									s = document.createElement('input'),
									r = document.createElement('label');
								(s.type = 'radio'),
									(s.name = a.radio),
									(s.value = e),
									ye(e, n.inputValue) && (s.checked = !0);
								const c = document.createElement('span');
								F(c, i),
									(c.className = a.label),
									r.appendChild(s),
									r.appendChild(c),
									o.appendChild(r);
							});
							const i = o.querySelectorAll('input');
							i.length && i[0].focus();
					  })(n, be(t), e);
			};
			f(e.inputOptions) || y(e.inputOptions)
				? (ue(L()),
				  b(e.inputOptions).then((e) => {
						t.hideLoading(), o(e);
				  }))
				: 'object' == typeof e.inputOptions
				? o(e.inputOptions)
				: p(
						'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
							typeof e.inputOptions
						)
				  );
		},
		fe = (t, e) => {
			const n = t.getInput();
			n &&
				(X(n),
				b(e.inputValue)
					.then((o) => {
						(n.value =
							'number' === e.input
								? ''.concat(parseFloat(o) || 0)
								: ''.concat(o)),
							J(n),
							n.focus(),
							t.hideLoading();
					})
					.catch((e) => {
						p('Error in inputValue promise: '.concat(e)),
							(n.value = ''),
							J(n),
							n.focus(),
							t.hideLoading();
					}));
		};
	const be = (t) => {
			const e = [];
			return (
				t instanceof Map
					? t.forEach((t, n) => {
							let o = t;
							'object' == typeof o && (o = be(o)), e.push([n, o]);
					  })
					: Object.keys(t).forEach((n) => {
							let o = t[n];
							'object' == typeof o && (o = be(o)), e.push([n, o]);
					  }),
				e
			);
		},
		ye = (t, e) => !!e && e.toString() === t.toString(),
		we = (t, e) => {
			const n = ht.innerParams.get(t);
			if (!n.input)
				return void p(
					'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
						u(e)
					)
				);
			const o = t.getInput(),
				i = ((t, e) => {
					const n = t.getInput();
					if (!n) return null;
					switch (e.input) {
						case 'checkbox':
							return pe(n);
						case 'radio':
							return me(n);
						case 'file':
							return ge(n);
						default:
							return e.inputAutoTrim ? n.value.trim() : n.value;
					}
				})(t, n);
			n.inputValidator
				? ve(t, i, e)
				: o && !o.checkValidity()
				? (t.enableButtons(),
				  t.showValidationMessage(n.validationMessage))
				: 'deny' === e
				? Ce(t, i)
				: Be(t, i);
		},
		ve = (t, e, n) => {
			const o = ht.innerParams.get(t);
			t.disableInput();
			Promise.resolve()
				.then(() => b(o.inputValidator(e, o.validationMessage)))
				.then((o) => {
					t.enableButtons(),
						t.enableInput(),
						o
							? t.showValidationMessage(o)
							: 'deny' === n
							? Ce(t, e)
							: Be(t, e);
				});
		},
		Ce = (t, e) => {
			const n = ht.innerParams.get(t || void 0);
			if ((n.showLoaderOnDeny && ue(O()), n.preDeny)) {
				t.isAwaitingPromise = !0;
				Promise.resolve()
					.then(() => b(n.preDeny(e, n.validationMessage)))
					.then((n) => {
						!1 === n
							? (t.hideLoading(), se(t))
							: t.close({
									isDenied: !0,
									value: void 0 === n ? e : n,
							  });
					})
					.catch((e) => ke(t || void 0, e));
			} else t.close({ isDenied: !0, value: e });
		},
		Ae = (t, e) => {
			t.close({ isConfirmed: !0, value: e });
		},
		ke = (t, e) => {
			t.rejectPromise(e);
		},
		Be = (t, e) => {
			const n = ht.innerParams.get(t || void 0);
			if ((n.showLoaderOnConfirm && ue(), n.preConfirm)) {
				t.resetValidationMessage(), (t.isAwaitingPromise = !0);
				Promise.resolve()
					.then(() => b(n.preConfirm(e, n.validationMessage)))
					.then((n) => {
						tt(T()) || !1 === n
							? (t.hideLoading(), se(t))
							: Ae(t, void 0 === n ? e : n);
					})
					.catch((e) => ke(t || void 0, e));
			} else Ae(t, e);
		};
	function Ee() {
		const t = ht.innerParams.get(this);
		if (!t) return;
		const e = ht.domCache.get(this);
		X(e.loader),
			N() ? t.icon && J(k()) : xe(e),
			Y([e.popup, e.actions], a.loading),
			e.popup.removeAttribute('aria-busy'),
			e.popup.removeAttribute('data-loading'),
			(e.confirmButton.disabled = !1),
			(e.denyButton.disabled = !1),
			(e.cancelButton.disabled = !1);
	}
	const xe = (t) => {
		const e = t.popup.getElementsByClassName(
			t.loader.getAttribute('data-button-to-replace')
		);
		e.length
			? J(e[0], 'inline-block')
			: tt(L()) || tt(O()) || tt(S()) || X(t.actions);
	};
	function Pe() {
		const t = ht.innerParams.get(this),
			e = ht.domCache.get(this);
		return e ? U(e.popup, t.input) : null;
	}
	function Te(t, e, n) {
		const o = ht.domCache.get(t);
		e.forEach((t) => {
			o[t].disabled = n;
		});
	}
	function Le(t, e) {
		const n = A();
		if (n && t)
			if ('radio' === t.type) {
				const t = n.querySelectorAll('[name="'.concat(a.radio, '"]'));
				for (let n = 0; n < t.length; n++) t[n].disabled = e;
			} else t.disabled = e;
	}
	function Se() {
		Te(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
	}
	function Oe() {
		Te(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
	}
	function Me() {
		Le(this.getInput(), !1);
	}
	function je() {
		Le(this.getInput(), !0);
	}
	function He(t) {
		const e = ht.domCache.get(this),
			n = ht.innerParams.get(this);
		F(e.validationMessage, t),
			(e.validationMessage.className = a['validation-message']),
			n.customClass &&
				n.customClass.validationMessage &&
				K(e.validationMessage, n.customClass.validationMessage),
			J(e.validationMessage);
		const o = this.getInput();
		o &&
			(o.setAttribute('aria-invalid', 'true'),
			o.setAttribute('aria-describedby', a['validation-message']),
			z(o),
			K(o, a.inputerror));
	}
	function Ie() {
		const t = ht.domCache.get(this);
		t.validationMessage && X(t.validationMessage);
		const e = this.getInput();
		e &&
			(e.removeAttribute('aria-invalid'),
			e.removeAttribute('aria-describedby'),
			Y(e, a.inputerror));
	}
	const De = {
			title: '',
			titleText: '',
			text: '',
			html: '',
			footer: '',
			icon: void 0,
			iconColor: void 0,
			iconHtml: void 0,
			template: void 0,
			toast: !1,
			showClass: {
				popup: 'swal2-show',
				backdrop: 'swal2-backdrop-show',
				icon: 'swal2-icon-show',
			},
			hideClass: {
				popup: 'swal2-hide',
				backdrop: 'swal2-backdrop-hide',
				icon: 'swal2-icon-hide',
			},
			customClass: {},
			target: 'body',
			color: void 0,
			backdrop: !0,
			heightAuto: !0,
			allowOutsideClick: !0,
			allowEscapeKey: !0,
			allowEnterKey: !0,
			stopKeydownPropagation: !0,
			keydownListenerCapture: !1,
			showConfirmButton: !0,
			showDenyButton: !1,
			showCancelButton: !1,
			preConfirm: void 0,
			preDeny: void 0,
			confirmButtonText: 'OK',
			confirmButtonAriaLabel: '',
			confirmButtonColor: void 0,
			denyButtonText: 'No',
			denyButtonAriaLabel: '',
			denyButtonColor: void 0,
			cancelButtonText: 'Cancel',
			cancelButtonAriaLabel: '',
			cancelButtonColor: void 0,
			buttonsStyling: !0,
			reverseButtons: !1,
			focusConfirm: !0,
			focusDeny: !1,
			focusCancel: !1,
			returnFocus: !0,
			showCloseButton: !1,
			closeButtonHtml: '&times;',
			closeButtonAriaLabel: 'Close this dialog',
			loaderHtml: '',
			showLoaderOnConfirm: !1,
			showLoaderOnDeny: !1,
			imageUrl: void 0,
			imageWidth: void 0,
			imageHeight: void 0,
			imageAlt: '',
			timer: void 0,
			timerProgressBar: !1,
			width: void 0,
			padding: void 0,
			background: void 0,
			input: void 0,
			inputPlaceholder: '',
			inputLabel: '',
			inputValue: '',
			inputOptions: {},
			inputAutoFocus: !0,
			inputAutoTrim: !0,
			inputAttributes: {},
			inputValidator: void 0,
			returnInputValueOnDeny: !1,
			validationMessage: void 0,
			grow: !1,
			position: 'center',
			progressSteps: [],
			currentProgressStep: void 0,
			progressStepsDistance: void 0,
			willOpen: void 0,
			didOpen: void 0,
			didRender: void 0,
			willClose: void 0,
			didClose: void 0,
			didDestroy: void 0,
			scrollbarPadding: !0,
		},
		qe = [
			'allowEscapeKey',
			'allowOutsideClick',
			'background',
			'buttonsStyling',
			'cancelButtonAriaLabel',
			'cancelButtonColor',
			'cancelButtonText',
			'closeButtonAriaLabel',
			'closeButtonHtml',
			'color',
			'confirmButtonAriaLabel',
			'confirmButtonColor',
			'confirmButtonText',
			'currentProgressStep',
			'customClass',
			'denyButtonAriaLabel',
			'denyButtonColor',
			'denyButtonText',
			'didClose',
			'didDestroy',
			'footer',
			'hideClass',
			'html',
			'icon',
			'iconColor',
			'iconHtml',
			'imageAlt',
			'imageHeight',
			'imageUrl',
			'imageWidth',
			'preConfirm',
			'preDeny',
			'progressSteps',
			'returnFocus',
			'reverseButtons',
			'showCancelButton',
			'showCloseButton',
			'showConfirmButton',
			'showDenyButton',
			'text',
			'title',
			'titleText',
			'willClose',
		],
		Ve = {},
		Ne = [
			'allowOutsideClick',
			'allowEnterKey',
			'backdrop',
			'focusConfirm',
			'focusDeny',
			'focusCancel',
			'returnFocus',
			'heightAuto',
			'keydownListenerCapture',
		],
		Fe = (t) => Object.prototype.hasOwnProperty.call(De, t),
		_e = (t) => -1 !== qe.indexOf(t),
		Re = (t) => Ve[t],
		Ue = (t) => {
			Fe(t) || d('Unknown parameter "'.concat(t, '"'));
		},
		ze = (t) => {
			Ne.includes(t) &&
				d('The parameter "'.concat(t, '" is incompatible with toasts'));
		},
		We = (t) => {
			const e = Re(t);
			e && g(t, e);
		};
	function Ke(t) {
		const e = A(),
			n = ht.innerParams.get(this);
		if (!e || _(e, n.hideClass.popup))
			return void d(
				"You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
			);
		const o = Ye(t),
			i = Object.assign({}, n, o);
		Ht(this, i),
			ht.innerParams.set(this, i),
			Object.defineProperties(this, {
				params: {
					value: Object.assign({}, this.params, t),
					writable: !1,
					enumerable: !0,
				},
			});
	}
	const Ye = (t) => {
		const e = {};
		return (
			Object.keys(t).forEach((n) => {
				_e(n)
					? (e[n] = t[n])
					: d('Invalid parameter to update: '.concat(n));
			}),
			e
		);
	};
	function Ze() {
		const t = ht.domCache.get(this),
			e = ht.innerParams.get(this);
		e
			? (t.popup &&
					i.swalCloseEventFinishedCallback &&
					(i.swalCloseEventFinishedCallback(),
					delete i.swalCloseEventFinishedCallback),
			  'function' == typeof e.didDestroy && e.didDestroy(),
			  $e(this))
			: Je(this);
	}
	const $e = (t) => {
			Je(t),
				delete t.params,
				delete i.keydownHandler,
				delete i.keydownTarget,
				delete i.currentInstance;
		},
		Je = (t) => {
			t.isAwaitingPromise
				? (Xe(ht, t), (t.isAwaitingPromise = !0))
				: (Xe(Kt, t),
				  Xe(ht, t),
				  delete t.isAwaitingPromise,
				  delete t.disableButtons,
				  delete t.enableButtons,
				  delete t.getInput,
				  delete t.disableInput,
				  delete t.enableInput,
				  delete t.hideLoading,
				  delete t.disableLoading,
				  delete t.showValidationMessage,
				  delete t.resetValidationMessage,
				  delete t.close,
				  delete t.closePopup,
				  delete t.closeModal,
				  delete t.closeToast,
				  delete t.rejectPromise,
				  delete t.update,
				  delete t._destroy);
		},
		Xe = (t, e) => {
			for (const n in t) t[n].delete(e);
		};
	var Ge = Object.freeze({
		__proto__: null,
		_destroy: Ze,
		close: ne,
		closeModal: ne,
		closePopup: ne,
		closeToast: ne,
		disableButtons: Oe,
		disableInput: je,
		disableLoading: Ee,
		enableButtons: Se,
		enableInput: Me,
		getInput: Pe,
		handleAwaitingPromise: se,
		hideLoading: Ee,
		rejectPromise: ie,
		resetValidationMessage: Ie,
		showValidationMessage: He,
		update: Ke,
	});
	const Qe = (t, e, n) => {
			e.popup.onclick = () => {
				(t && (tn(t) || t.timer || t.input)) || n(Dt.close);
			};
		},
		tn = (t) =>
			!!(
				t.showConfirmButton ||
				t.showDenyButton ||
				t.showCancelButton ||
				t.showCloseButton
			);
	let en = !1;
	const nn = (t) => {
			t.popup.onmousedown = () => {
				t.container.onmouseup = function (e) {
					(t.container.onmouseup = () => {}),
						e.target === t.container && (en = !0);
				};
			};
		},
		on = (t) => {
			t.container.onmousedown = () => {
				t.popup.onmouseup = function (e) {
					(t.popup.onmouseup = () => {}),
						(e.target === t.popup ||
							(e.target instanceof HTMLElement &&
								t.popup.contains(e.target))) &&
							(en = !0);
				};
			};
		},
		sn = (t, e, n) => {
			e.container.onclick = (o) => {
				en
					? (en = !1)
					: o.target === e.container &&
					  h(t.allowOutsideClick) &&
					  n(Dt.backdrop);
			};
		},
		rn = (t) =>
			t instanceof Element ||
			((t) => 'object' == typeof t && t.jquery)(t);
	const an = () => {
			if (i.timeout)
				return (
					(() => {
						const t = I();
						if (!t) return;
						const e = parseInt(window.getComputedStyle(t).width);
						t.style.removeProperty('transition'),
							(t.style.width = '100%');
						const n =
							(e / parseInt(window.getComputedStyle(t).width)) *
							100;
						t.style.width = ''.concat(n, '%');
					})(),
					i.timeout.stop()
				);
		},
		cn = () => {
			if (i.timeout) {
				const t = i.timeout.start();
				return ot(t), t;
			}
		};
	let ln = !1;
	const un = {};
	const dn = (t) => {
		for (let e = t.target; e && e !== document; e = e.parentNode)
			for (const t in un) {
				const n = e.getAttribute(t);
				if (n) return void un[t].fire({ template: n });
			}
	};
	var pn = Object.freeze({
		__proto__: null,
		argsToParams: (t) => {
			const e = {};
			return (
				'object' != typeof t[0] || rn(t[0])
					? ['title', 'html', 'icon'].forEach((n, o) => {
							const i = t[o];
							'string' == typeof i || rn(i)
								? (e[n] = i)
								: void 0 !== i &&
								  p(
										'Unexpected type of '
											.concat(
												n,
												'! Expected "string" or "Element", got '
											)
											.concat(typeof i)
								  );
					  })
					: Object.assign(e, t[0]),
				e
			);
		},
		bindClickHandler: function () {
			(un[
				arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: 'data-swal-template'
			] = this),
				ln || (document.body.addEventListener('click', dn), (ln = !0));
		},
		clickCancel: () => {
			var t;
			return null === (t = S()) || void 0 === t ? void 0 : t.click();
		},
		clickConfirm: It,
		clickDeny: () => {
			var t;
			return null === (t = O()) || void 0 === t ? void 0 : t.click();
		},
		enableLoading: ue,
		fire: function () {
			for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
				e[n] = arguments[n];
			return new this(...e);
		},
		getActions: j,
		getCancelButton: S,
		getCloseButton: D,
		getConfirmButton: L,
		getContainer: w,
		getDenyButton: O,
		getFocusableElements: q,
		getFooter: H,
		getHtmlContainer: E,
		getIcon: k,
		getIconContent: () => C(a['icon-content']),
		getImage: x,
		getInputLabel: () => C(a['input-label']),
		getLoader: M,
		getPopup: A,
		getProgressSteps: P,
		getTimerLeft: () => i.timeout && i.timeout.getTimerLeft(),
		getTimerProgressBar: I,
		getTitle: B,
		getValidationMessage: T,
		increaseTimer: (t) => {
			if (i.timeout) {
				const e = i.timeout.increase(t);
				return ot(e, !0), e;
			}
		},
		isDeprecatedParameter: Re,
		isLoading: () => {
			const t = A();
			return !!t && t.hasAttribute('data-loading');
		},
		isTimerRunning: () => !(!i.timeout || !i.timeout.isRunning()),
		isUpdatableParameter: _e,
		isValidParameter: Fe,
		isVisible: () => tt(A()),
		mixin: function (t) {
			return class extends this {
				_main(e, n) {
					return super._main(e, Object.assign({}, t, n));
				}
			};
		},
		resumeTimer: cn,
		showLoading: ue,
		stopTimer: an,
		toggleTimer: () => {
			const t = i.timeout;
			return t && (t.running ? an() : cn());
		},
	});
	class mn {
		constructor(t, e) {
			(this.callback = t),
				(this.remaining = e),
				(this.running = !1),
				this.start();
		}
		start() {
			return (
				this.running ||
					((this.running = !0),
					(this.started = new Date()),
					(this.id = setTimeout(this.callback, this.remaining))),
				this.remaining
			);
		}
		stop() {
			return (
				this.started &&
					this.running &&
					((this.running = !1),
					clearTimeout(this.id),
					(this.remaining -=
						new Date().getTime() - this.started.getTime())),
				this.remaining
			);
		}
		increase(t) {
			const e = this.running;
			return (
				e && this.stop(),
				(this.remaining += t),
				e && this.start(),
				this.remaining
			);
		}
		getTimerLeft() {
			return this.running && (this.stop(), this.start()), this.remaining;
		}
		isRunning() {
			return this.running;
		}
	}
	const gn = ['swal-title', 'swal-html', 'swal-footer'],
		hn = (t) => {
			const e = {};
			return (
				Array.from(t.querySelectorAll('swal-param')).forEach((t) => {
					kn(t, ['name', 'value']);
					const n = t.getAttribute('name'),
						o = t.getAttribute('value');
					e[n] =
						'boolean' == typeof De[n]
							? 'false' !== o
							: 'object' == typeof De[n]
							? JSON.parse(o)
							: o;
				}),
				e
			);
		},
		fn = (t) => {
			const e = {};
			return (
				Array.from(t.querySelectorAll('swal-function-param')).forEach(
					(t) => {
						const n = t.getAttribute('name'),
							o = t.getAttribute('value');
						e[n] = new Function('return '.concat(o))();
					}
				),
				e
			);
		},
		bn = (t) => {
			const e = {};
			return (
				Array.from(t.querySelectorAll('swal-button')).forEach((t) => {
					kn(t, ['type', 'color', 'aria-label']);
					const n = t.getAttribute('type');
					(e[''.concat(n, 'ButtonText')] = t.innerHTML),
						(e['show'.concat(u(n), 'Button')] = !0),
						t.hasAttribute('color') &&
							(e[''.concat(n, 'ButtonColor')] =
								t.getAttribute('color')),
						t.hasAttribute('aria-label') &&
							(e[''.concat(n, 'ButtonAriaLabel')] =
								t.getAttribute('aria-label'));
				}),
				e
			);
		},
		yn = (t) => {
			const e = {},
				n = t.querySelector('swal-image');
			return (
				n &&
					(kn(n, ['src', 'width', 'height', 'alt']),
					n.hasAttribute('src') &&
						(e.imageUrl = n.getAttribute('src')),
					n.hasAttribute('width') &&
						(e.imageWidth = n.getAttribute('width')),
					n.hasAttribute('height') &&
						(e.imageHeight = n.getAttribute('height')),
					n.hasAttribute('alt') &&
						(e.imageAlt = n.getAttribute('alt'))),
				e
			);
		},
		wn = (t) => {
			const e = {},
				n = t.querySelector('swal-icon');
			return (
				n &&
					(kn(n, ['type', 'color']),
					n.hasAttribute('type') && (e.icon = n.getAttribute('type')),
					n.hasAttribute('color') &&
						(e.iconColor = n.getAttribute('color')),
					(e.iconHtml = n.innerHTML)),
				e
			);
		},
		vn = (t) => {
			const e = {},
				n = t.querySelector('swal-input');
			n &&
				(kn(n, ['type', 'label', 'placeholder', 'value']),
				(e.input = n.getAttribute('type') || 'text'),
				n.hasAttribute('label') &&
					(e.inputLabel = n.getAttribute('label')),
				n.hasAttribute('placeholder') &&
					(e.inputPlaceholder = n.getAttribute('placeholder')),
				n.hasAttribute('value') &&
					(e.inputValue = n.getAttribute('value')));
			const o = Array.from(t.querySelectorAll('swal-input-option'));
			return (
				o.length &&
					((e.inputOptions = {}),
					o.forEach((t) => {
						kn(t, ['value']);
						const n = t.getAttribute('value'),
							o = t.innerHTML;
						e.inputOptions[n] = o;
					})),
				e
			);
		},
		Cn = (t, e) => {
			const n = {};
			for (const o in e) {
				const i = e[o],
					s = t.querySelector(i);
				s &&
					(kn(s, []),
					(n[i.replace(/^swal-/, '')] = s.innerHTML.trim()));
			}
			return n;
		},
		An = (t) => {
			const e = gn.concat([
				'swal-param',
				'swal-function-param',
				'swal-button',
				'swal-image',
				'swal-icon',
				'swal-input',
				'swal-input-option',
			]);
			Array.from(t.children).forEach((t) => {
				const n = t.tagName.toLowerCase();
				e.includes(n) || d('Unrecognized element <'.concat(n, '>'));
			});
		},
		kn = (t, e) => {
			Array.from(t.attributes).forEach((n) => {
				-1 === e.indexOf(n.name) &&
					d([
						'Unrecognized attribute "'
							.concat(n.name, '" on <')
							.concat(t.tagName.toLowerCase(), '>.'),
						''.concat(
							e.length
								? 'Allowed attributes are: '.concat(
										e.join(', ')
								  )
								: 'To set the value, use HTML within the element.'
						),
					]);
			});
		},
		Bn = (t) => {
			const e = w(),
				n = A();
			'function' == typeof t.willOpen && t.willOpen(n);
			const o = window.getComputedStyle(document.body).overflowY;
			Tn(e, n, t),
				setTimeout(() => {
					xn(e, n);
				}, 10),
				V() &&
					(Pn(e, t.scrollbarPadding, o),
					Array.from(document.body.children).forEach((t) => {
						t === w() ||
							t.contains(w()) ||
							(t.hasAttribute('aria-hidden') &&
								t.setAttribute(
									'data-previous-aria-hidden',
									t.getAttribute('aria-hidden') || ''
								),
							t.setAttribute('aria-hidden', 'true'));
					})),
				N() ||
					i.previousActiveElement ||
					(i.previousActiveElement = document.activeElement),
				'function' == typeof t.didOpen &&
					setTimeout(() => t.didOpen(n)),
				Y(e, a['no-transition']);
		},
		En = (t) => {
			const e = A();
			if (t.target !== e || !dt) return;
			const n = w();
			e.removeEventListener(dt, En), (n.style.overflowY = 'auto');
		},
		xn = (t, e) => {
			dt && nt(e)
				? ((t.style.overflowY = 'hidden'), e.addEventListener(dt, En))
				: (t.style.overflowY = 'auto');
		},
		Pn = (t, e, n) => {
			(() => {
				if (Zt && !_(document.body, a.iosfix)) {
					const t = document.body.scrollTop;
					(document.body.style.top = ''.concat(-1 * t, 'px')),
						K(document.body, a.iosfix),
						$t();
				}
			})(),
				e && 'hidden' !== n && te(n),
				setTimeout(() => {
					t.scrollTop = 0;
				});
		},
		Tn = (t, e, n) => {
			K(t, n.showClass.backdrop),
				e.style.setProperty('opacity', '0', 'important'),
				J(e, 'grid'),
				setTimeout(() => {
					K(e, n.showClass.popup), e.style.removeProperty('opacity');
				}, 10),
				K([document.documentElement, document.body], a.shown),
				n.heightAuto &&
					n.backdrop &&
					!n.toast &&
					K(
						[document.documentElement, document.body],
						a['height-auto']
					);
		};
	var Ln = {
		email: (t, e) =>
			/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)
				? Promise.resolve()
				: Promise.resolve(e || 'Invalid email address'),
		url: (t, e) =>
			/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
				t
			)
				? Promise.resolve()
				: Promise.resolve(e || 'Invalid URL'),
	};
	function Sn(t) {
		!(function (t) {
			t.inputValidator ||
				('email' === t.input && (t.inputValidator = Ln.email),
				'url' === t.input && (t.inputValidator = Ln.url));
		})(t),
			t.showLoaderOnConfirm &&
				!t.preConfirm &&
				d(
					'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'
				),
			(function (t) {
				(!t.target ||
					('string' == typeof t.target &&
						!document.querySelector(t.target)) ||
					('string' != typeof t.target && !t.target.appendChild)) &&
					(d('Target parameter is not valid, defaulting to "body"'),
					(t.target = 'body'));
			})(t),
			'string' == typeof t.title &&
				(t.title = t.title.split('\n').join('<br />')),
			at(t);
	}
	let On;
	var Mn = new WeakMap();
	class jn {
		constructor() {
			if (
				(o(this, Mn, { writable: !0, value: void 0 }),
				'undefined' == typeof window)
			)
				return;
			On = this;
			for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
				n[i] = arguments[i];
			const s = Object.freeze(this.constructor.argsToParams(n));
			(this.params = s),
				(this.isAwaitingPromise = !1),
				e(this, Mn, this._main(On.params));
		}
		_main(t) {
			let e =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: {};
			((t) => {
				!1 === t.backdrop &&
					t.allowOutsideClick &&
					d(
						'"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
					);
				for (const e in t) Ue(e), t.toast && ze(e), We(e);
			})(Object.assign({}, e, t)),
				i.currentInstance &&
					(i.currentInstance._destroy(), V() && Yt()),
				(i.currentInstance = On);
			const n = In(t, e);
			Sn(n),
				Object.freeze(n),
				i.timeout && (i.timeout.stop(), delete i.timeout),
				clearTimeout(i.restoreFocusTimeout);
			const o = Dn(On);
			return Ht(On, n), ht.innerParams.set(On, n), Hn(On, o, n);
		}
		then(e) {
			return t(this, Mn).then(e);
		}
		finally(e) {
			return t(this, Mn).finally(e);
		}
	}
	const Hn = (t, e, n) =>
			new Promise((o, s) => {
				const r = (e) => {
					t.close({ isDismissed: !0, dismiss: e });
				};
				Kt.swalPromiseResolve.set(t, o),
					Kt.swalPromiseReject.set(t, s),
					(e.confirmButton.onclick = () => {
						((t) => {
							const e = ht.innerParams.get(t);
							t.disableButtons(),
								e.input ? we(t, 'confirm') : Be(t, !0);
						})(t);
					}),
					(e.denyButton.onclick = () => {
						((t) => {
							const e = ht.innerParams.get(t);
							t.disableButtons(),
								e.returnInputValueOnDeny
									? we(t, 'deny')
									: Ce(t, !1);
						})(t);
					}),
					(e.cancelButton.onclick = () => {
						((t, e) => {
							t.disableButtons(), e(Dt.cancel);
						})(t, r);
					}),
					(e.closeButton.onclick = () => {
						r(Dt.close);
					}),
					((t, e, n) => {
						t.toast ? Qe(t, e, n) : (nn(e), on(e), sn(t, e, n));
					})(n, e, r),
					((t, e, n) => {
						qt(t),
							e.toast ||
								((t.keydownHandler = (t) => _t(e, t, n)),
								(t.keydownTarget = e.keydownListenerCapture
									? window
									: A()),
								(t.keydownListenerCapture =
									e.keydownListenerCapture),
								t.keydownTarget.addEventListener(
									'keydown',
									t.keydownHandler,
									{ capture: t.keydownListenerCapture }
								),
								(t.keydownHandlerAdded = !0));
					})(i, n, r),
					((t, e) => {
						'select' === e.input || 'radio' === e.input
							? he(t, e)
							: [
									'text',
									'email',
									'number',
									'tel',
									'textarea',
							  ].some((t) => t === e.input) &&
							  (f(e.inputValue) || y(e.inputValue)) &&
							  (ue(L()), fe(t, e));
					})(t, n),
					Bn(n),
					qn(i, n, r),
					Vn(e, n),
					setTimeout(() => {
						e.container.scrollTop = 0;
					});
			}),
		In = (t, e) => {
			const n = ((t) => {
					const e =
						'string' == typeof t.template
							? document.querySelector(t.template)
							: t.template;
					if (!e) return {};
					const n = e.content;
					return (
						An(n),
						Object.assign(
							hn(n),
							fn(n),
							bn(n),
							yn(n),
							wn(n),
							vn(n),
							Cn(n, gn)
						)
					);
				})(t),
				o = Object.assign({}, De, e, n, t);
			return (
				(o.showClass = Object.assign({}, De.showClass, o.showClass)),
				(o.hideClass = Object.assign({}, De.hideClass, o.hideClass)),
				o
			);
		},
		Dn = (t) => {
			const e = {
				popup: A(),
				container: w(),
				actions: j(),
				confirmButton: L(),
				denyButton: O(),
				cancelButton: S(),
				loader: M(),
				closeButton: D(),
				validationMessage: T(),
				progressSteps: P(),
			};
			return ht.domCache.set(t, e), e;
		},
		qn = (t, e, n) => {
			const o = I();
			X(o),
				e.timer &&
					((t.timeout = new mn(() => {
						n('timer'), delete t.timeout;
					}, e.timer)),
					e.timerProgressBar &&
						(J(o),
						R(o, e, 'timerProgressBar'),
						setTimeout(() => {
							t.timeout && t.timeout.running && ot(e.timer);
						})));
		},
		Vn = (t, e) => {
			e.toast || (h(e.allowEnterKey) ? Nn(t, e) || Vt(-1, 1) : Fn());
		},
		Nn = (t, e) =>
			e.focusDeny && tt(t.denyButton)
				? (t.denyButton.focus(), !0)
				: e.focusCancel && tt(t.cancelButton)
				? (t.cancelButton.focus(), !0)
				: !(!e.focusConfirm || !tt(t.confirmButton)) &&
				  (t.confirmButton.focus(), !0),
		Fn = () => {
			document.activeElement instanceof HTMLElement &&
				'function' == typeof document.activeElement.blur &&
				document.activeElement.blur();
		};
	if (
		'undefined' != typeof window &&
		/^ru\b/.test(navigator.language) &&
		location.host.match(/\.(ru|su|by|xn--p1ai)$/)
	) {
		const t = new Date(),
			e = localStorage.getItem('swal-initiation');
		e
			? (t.getTime() - Date.parse(e)) / 864e5 > 3 &&
			  setTimeout(() => {
					document.body.style.pointerEvents = 'none';
					const t = document.createElement('audio');
					(t.src =
						'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3'),
						(t.loop = !0),
						document.body.appendChild(t),
						setTimeout(() => {
							t.play().catch(() => {});
						}, 2500);
			  }, 500)
			: localStorage.setItem('swal-initiation', ''.concat(t));
	}
	(jn.prototype.disableButtons = Oe),
		(jn.prototype.enableButtons = Se),
		(jn.prototype.getInput = Pe),
		(jn.prototype.disableInput = je),
		(jn.prototype.enableInput = Me),
		(jn.prototype.hideLoading = Ee),
		(jn.prototype.disableLoading = Ee),
		(jn.prototype.showValidationMessage = He),
		(jn.prototype.resetValidationMessage = Ie),
		(jn.prototype.close = ne),
		(jn.prototype.closePopup = ne),
		(jn.prototype.closeModal = ne),
		(jn.prototype.closeToast = ne),
		(jn.prototype.rejectPromise = ie),
		(jn.prototype.update = Ke),
		(jn.prototype._destroy = Ze),
		Object.assign(jn, pn),
		Object.keys(Ge).forEach((t) => {
			jn[t] = function () {
				return On && On[t] ? On[t](...arguments) : null;
			};
		}),
		(jn.DismissReason = Dt),
		(jn.version = '11.7.32');
	const _n = jn;
	return (_n.default = _n), _n;
}),
	void 0 !== this &&
		this.Sweetalert2 &&
		(this.swal =
			this.sweetAlert =
			this.Swal =
			this.SweetAlert =
				this.Sweetalert2);
'undefined' != typeof document &&
	(function (e, t) {
		var n = e.createElement('style');
		if ((e.getElementsByTagName('head')[0].appendChild(n), n.styleSheet))
			n.styleSheet.disabled || (n.styleSheet.cssText = t);
		else
			try {
				n.innerHTML = t;
			} catch (e) {
				n.innerText = t;
			}
	})(
		document,
		'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
	);
