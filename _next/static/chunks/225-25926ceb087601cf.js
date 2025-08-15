(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [225],
  {
    7597: function (i, a, o) {
      "use strict";
      o.d(a, {
        b: function () {
          return A;
        },
      });
      var s = o(7294),
        u = o(5319),
        p = o(4250);
      let A = s.forwardRef(
        (
          {
            children: i,
            enabled: a = !0,
            speed: o = 1,
            rotationIntensity: A = 1,
            floatIntensity: B = 1,
            floatingRange: S = [-0.1, 0.1],
            autoInvalidate: w = !1,
            ...F
          },
          L
        ) => {
          let _ = s.useRef(null);
          s.useImperativeHandle(L, () => _.current, []);
          let N = s.useRef(1e4 * Math.random());
          return (
            (0, u.F)((i) => {
              var s, u;
              if (!a || 0 === o) return;
              w && i.invalidate();
              let F = N.current + i.clock.elapsedTime;
              (_.current.rotation.x = (Math.cos((F / 4) * o) / 8) * A),
                (_.current.rotation.y = (Math.sin((F / 4) * o) / 8) * A),
                (_.current.rotation.z = (Math.sin((F / 4) * o) / 20) * A);
              let L = Math.sin((F / 4) * o) / 10;
              (L = p.M8C.mapLinear(
                L,
                -0.1,
                0.1,
                null !== (s = null == S ? void 0 : S[0]) && void 0 !== s
                  ? s
                  : -0.1,
                null !== (u = null == S ? void 0 : S[1]) && void 0 !== u
                  ? u
                  : 0.1
              )),
                (_.current.position.y = L * B),
                _.current.updateMatrix();
            }),
            s.createElement(
              "group",
              F,
              s.createElement("group", { ref: _, matrixAutoUpdate: !1 }, i)
            )
          );
        }
      );
    },
    1673: function (i, a, o) {
      "use strict";
      let s;
      o.d(a, {
        L: function () {
          return useGLTF;
        },
      }),
        o(7294);
      var u = o(4250);
      let p = new WeakMap();
      let DRACOLoader = class DRACOLoader extends u.aNw {
        constructor(i) {
          super(i),
            (this.decoderPath = ""),
            (this.decoderConfig = {}),
            (this.decoderBinary = null),
            (this.decoderPending = null),
            (this.workerLimit = 4),
            (this.workerPool = []),
            (this.workerNextTaskID = 1),
            (this.workerSourceURL = ""),
            (this.defaultAttributeIDs = {
              position: "POSITION",
              normal: "NORMAL",
              color: "COLOR",
              uv: "TEX_COORD",
            }),
            (this.defaultAttributeTypes = {
              position: "Float32Array",
              normal: "Float32Array",
              color: "Float32Array",
              uv: "Float32Array",
            });
        }
        setDecoderPath(i) {
          return (this.decoderPath = i), this;
        }
        setDecoderConfig(i) {
          return (this.decoderConfig = i), this;
        }
        setWorkerLimit(i) {
          return (this.workerLimit = i), this;
        }
        load(i, a, o, s) {
          let p = new u.hH6(this.manager);
          p.setPath(this.path),
            p.setResponseType("arraybuffer"),
            p.setRequestHeader(this.requestHeader),
            p.setWithCredentials(this.withCredentials),
            p.load(
              i,
              (i) => {
                let o = {
                  attributeIDs: this.defaultAttributeIDs,
                  attributeTypes: this.defaultAttributeTypes,
                  useUniqueIDs: !1,
                };
                this.decodeGeometry(i, o).then(a).catch(s);
              },
              o,
              s
            );
        }
        decodeDracoFile(i, a, o, s) {
          let u = {
            attributeIDs: o || this.defaultAttributeIDs,
            attributeTypes: s || this.defaultAttributeTypes,
            useUniqueIDs: !!o,
          };
          this.decodeGeometry(i, u).then(a);
        }
        decodeGeometry(i, a) {
          let o;
          for (let i in a.attributeTypes) {
            let o = a.attributeTypes[i];
            void 0 !== o.BYTES_PER_ELEMENT && (a.attributeTypes[i] = o.name);
          }
          let s = JSON.stringify(a);
          if (p.has(i)) {
            let a = p.get(i);
            if (a.key === s) return a.promise;
            if (0 === i.byteLength)
              throw Error(
                "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
              );
          }
          let u = this.workerNextTaskID++,
            A = i.byteLength,
            B = this._getWorker(u, A)
              .then(
                (s) => (
                  (o = s),
                  new Promise((s, p) => {
                    (o._callbacks[u] = { resolve: s, reject: p }),
                      o.postMessage(
                        { type: "decode", id: u, taskConfig: a, buffer: i },
                        [i]
                      );
                  })
                )
              )
              .then((i) => this._createGeometry(i.geometry));
          return (
            B.catch(() => !0).then(() => {
              o && u && this._releaseTask(o, u);
            }),
            p.set(i, { key: s, promise: B }),
            B
          );
        }
        _createGeometry(i) {
          let a = new u.u9r();
          i.index && a.setIndex(new u.TlE(i.index.array, 1));
          for (let o = 0; o < i.attributes.length; o++) {
            let s = i.attributes[o],
              p = s.name,
              A = s.array,
              B = s.itemSize;
            a.setAttribute(p, new u.TlE(A, B));
          }
          return a;
        }
        _loadLibrary(i, a) {
          let o = new u.hH6(this.manager);
          return (
            o.setPath(this.decoderPath),
            o.setResponseType(a),
            o.setWithCredentials(this.withCredentials),
            new Promise((a, s) => {
              o.load(i, a, void 0, s);
            })
          );
        }
        preload() {
          return this._initDecoder(), this;
        }
        _initDecoder() {
          if (this.decoderPending) return this.decoderPending;
          let i =
              "object" != typeof WebAssembly ||
              "js" === this.decoderConfig.type,
            a = [];
          return (
            i
              ? a.push(this._loadLibrary("draco_decoder.js", "text"))
              : (a.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
                a.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
            (this.decoderPending = Promise.all(a).then((a) => {
              let o = a[0];
              i || (this.decoderConfig.wasmBinary = a[1]);
              let s = DRACOWorker.toString(),
                u = [
                  "/* draco decoder */",
                  o,
                  "",
                  "/* worker */",
                  s.substring(s.indexOf("{") + 1, s.lastIndexOf("}")),
                ].join("\n");
              this.workerSourceURL = URL.createObjectURL(new Blob([u]));
            })),
            this.decoderPending
          );
        }
        _getWorker(i, a) {
          return this._initDecoder().then(() => {
            if (this.workerPool.length < this.workerLimit) {
              let i = new Worker(this.workerSourceURL);
              (i._callbacks = {}),
                (i._taskCosts = {}),
                (i._taskLoad = 0),
                i.postMessage({
                  type: "init",
                  decoderConfig: this.decoderConfig,
                }),
                (i.onmessage = function (a) {
                  let o = a.data;
                  switch (o.type) {
                    case "decode":
                      i._callbacks[o.id].resolve(o);
                      break;
                    case "error":
                      i._callbacks[o.id].reject(o);
                      break;
                    default:
                      console.error(
                        'THREE.DRACOLoader: Unexpected message, "' +
                          o.type +
                          '"'
                      );
                  }
                }),
                this.workerPool.push(i);
            } else
              this.workerPool.sort(function (i, a) {
                return i._taskLoad > a._taskLoad ? -1 : 1;
              });
            let o = this.workerPool[this.workerPool.length - 1];
            return (o._taskCosts[i] = a), (o._taskLoad += a), o;
          });
        }
        _releaseTask(i, a) {
          (i._taskLoad -= i._taskCosts[a]),
            delete i._callbacks[a],
            delete i._taskCosts[a];
        }
        debug() {
          console.log(
            "Task load: ",
            this.workerPool.map((i) => i._taskLoad)
          );
        }
        dispose() {
          for (let i = 0; i < this.workerPool.length; ++i)
            this.workerPool[i].terminate();
          return (this.workerPool.length = 0), this;
        }
      };
      function DRACOWorker() {
        let i, a;
        onmessage = function (o) {
          let s = o.data;
          switch (s.type) {
            case "init":
              (i = s.decoderConfig),
                (a = new Promise(function (a) {
                  (i.onModuleLoaded = function (i) {
                    a({ draco: i });
                  }),
                    DracoDecoderModule(i);
                }));
              break;
            case "decode":
              let u = s.buffer,
                p = s.taskConfig;
              a.then((i) => {
                let a = i.draco,
                  o = new a.Decoder(),
                  A = new a.DecoderBuffer();
                A.Init(new Int8Array(u), u.byteLength);
                try {
                  let i = (function (i, a, o, s) {
                      let u, p;
                      let A = s.attributeIDs,
                        B = s.attributeTypes,
                        S = a.GetEncodedGeometryType(o);
                      if (S === i.TRIANGULAR_MESH)
                        (u = new i.Mesh()), (p = a.DecodeBufferToMesh(o, u));
                      else if (S === i.POINT_CLOUD)
                        (u = new i.PointCloud()),
                          (p = a.DecodeBufferToPointCloud(o, u));
                      else
                        throw Error(
                          "THREE.DRACOLoader: Unexpected geometry type."
                        );
                      if (!p.ok() || 0 === u.ptr)
                        throw Error(
                          "THREE.DRACOLoader: Decoding failed: " + p.error_msg()
                        );
                      let w = { index: null, attributes: [] };
                      for (let o in A) {
                        let p, S;
                        let F = self[B[o]];
                        if (s.useUniqueIDs)
                          (S = A[o]), (p = a.GetAttributeByUniqueId(u, S));
                        else {
                          if (-1 === (S = a.GetAttributeId(u, i[A[o]])))
                            continue;
                          p = a.GetAttribute(u, S);
                        }
                        w.attributes.push(
                          (function (i, a, o, s, u, p) {
                            let A = p.num_components(),
                              B = o.num_points(),
                              S = B * A,
                              w = S * u.BYTES_PER_ELEMENT,
                              F = (function (i, a) {
                                switch (a) {
                                  case Float32Array:
                                    return i.DT_FLOAT32;
                                  case Int8Array:
                                    return i.DT_INT8;
                                  case Int16Array:
                                    return i.DT_INT16;
                                  case Int32Array:
                                    return i.DT_INT32;
                                  case Uint8Array:
                                    return i.DT_UINT8;
                                  case Uint16Array:
                                    return i.DT_UINT16;
                                  case Uint32Array:
                                    return i.DT_UINT32;
                                }
                              })(i, u),
                              L = i._malloc(w);
                            a.GetAttributeDataArrayForAllPoints(o, p, F, w, L);
                            let _ = new u(i.HEAPF32.buffer, L, S).slice();
                            return (
                              i._free(L), { name: s, array: _, itemSize: A }
                            );
                          })(i, a, u, o, F, p)
                        );
                      }
                      return (
                        S === i.TRIANGULAR_MESH &&
                          (w.index = (function (i, a, o) {
                            let s = o.num_faces(),
                              u = 3 * s,
                              p = 4 * u,
                              A = i._malloc(p);
                            a.GetTrianglesUInt32Array(o, p, A);
                            let B = new Uint32Array(
                              i.HEAPF32.buffer,
                              A,
                              u
                            ).slice();
                            return i._free(A), { array: B, itemSize: 1 };
                          })(i, a, u)),
                        i.destroy(u),
                        w
                      );
                    })(a, o, A, p),
                    u = i.attributes.map((i) => i.array.buffer);
                  i.index && u.push(i.index.array.buffer),
                    self.postMessage(
                      { type: "decode", id: s.id, geometry: i },
                      u
                    );
                } catch (i) {
                  console.error(i),
                    self.postMessage({
                      type: "error",
                      id: s.id,
                      error: i.message,
                    });
                } finally {
                  a.destroy(A), a.destroy(o);
                }
              });
          }
        };
      }
      let MeshoptDecoder = () => {
        let i;
        if (s) return s;
        let a = new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3,
            1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10,
            0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11,
          ]),
          o = new Uint8Array([
            32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20, 13, 33, 12,
            16, 128, 9, 116, 64, 19, 113, 127, 15, 10, 21, 22, 14, 255, 66, 24,
            54, 136, 107, 18, 23, 192, 26, 114, 118, 132, 17, 77, 101, 130, 144,
            27, 87, 131, 44, 45, 74, 156, 154, 70, 167,
          ]);
        if ("object" != typeof WebAssembly) return { supported: !1 };
        let u =
          "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB";
        WebAssembly.validate(a) &&
          (u =
            "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB");
        let p = WebAssembly.instantiate(
          (function (i) {
            let a = new Uint8Array(i.length);
            for (let o = 0; o < i.length; ++o) {
              let s = i.charCodeAt(o);
              a[o] =
                s > 96
                  ? s - 71
                  : s > 64
                  ? s - 65
                  : s > 47
                  ? s + 4
                  : s > 46
                  ? 63
                  : 62;
            }
            let s = 0;
            for (let u = 0; u < i.length; ++u)
              a[s++] = a[u] < 60 ? o[a[u]] : (a[u] - 60) * 64 + a[++u];
            return a.buffer.slice(0, s);
          })(u),
          {}
        ).then((a) => {
          (i = a.instance).exports.__wasm_call_ctors();
        });
        function decode(a, o, s, u, p, A) {
          let B = i.exports.sbrk,
            S = (s + 3) & -4,
            w = B(S * u),
            F = B(p.length),
            L = new Uint8Array(i.exports.memory.buffer);
          L.set(p, F);
          let _ = a(w, s, u, F, p.length);
          if (
            (0 === _ && A && A(w, S, u),
            o.set(L.subarray(w, w + s * u)),
            B(w - B(0)),
            0 !== _)
          )
            throw Error(`Malformed buffer data: ${_}`);
        }
        let A = {
            0: "",
            1: "meshopt_decodeFilterOct",
            2: "meshopt_decodeFilterQuat",
            3: "meshopt_decodeFilterExp",
            NONE: "",
            OCTAHEDRAL: "meshopt_decodeFilterOct",
            QUATERNION: "meshopt_decodeFilterQuat",
            EXPONENTIAL: "meshopt_decodeFilterExp",
          },
          B = {
            0: "meshopt_decodeVertexBuffer",
            1: "meshopt_decodeIndexBuffer",
            2: "meshopt_decodeIndexSequence",
            ATTRIBUTES: "meshopt_decodeVertexBuffer",
            TRIANGLES: "meshopt_decodeIndexBuffer",
            INDICES: "meshopt_decodeIndexSequence",
          };
        return (s = {
          ready: p,
          supported: !0,
          decodeVertexBuffer(a, o, s, u, p) {
            decode(
              i.exports.meshopt_decodeVertexBuffer,
              a,
              o,
              s,
              u,
              i.exports[A[p]]
            );
          },
          decodeIndexBuffer(a, o, s, u) {
            decode(i.exports.meshopt_decodeIndexBuffer, a, o, s, u);
          },
          decodeIndexSequence(a, o, s, u) {
            decode(i.exports.meshopt_decodeIndexSequence, a, o, s, u);
          },
          decodeGltfBuffer(a, o, s, u, p, S) {
            decode(i.exports[B[p]], a, o, s, u, i.exports[A[S]]);
          },
        });
      };
      function toTrianglesDrawMode(i, a) {
        if (a === u.WwZ)
          return (
            console.warn(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
            ),
            i
          );
        if (a !== u.z$h && a !== u.UlW)
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
              a
            ),
            i
          );
        {
          let o = i.getIndex();
          if (null === o) {
            let a = [],
              s = i.getAttribute("position");
            if (void 0 === s)
              return (
                console.error(
                  "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                ),
                i
              );
            for (let i = 0; i < s.count; i++) a.push(i);
            i.setIndex(a), (o = i.getIndex());
          }
          let s = o.count - 2,
            p = [];
          if (o) {
            if (a === u.z$h)
              for (let i = 1; i <= s; i++)
                p.push(o.getX(0)), p.push(o.getX(i)), p.push(o.getX(i + 1));
            else
              for (let i = 0; i < s; i++)
                i % 2 == 0
                  ? (p.push(o.getX(i)),
                    p.push(o.getX(i + 1)),
                    p.push(o.getX(i + 2)))
                  : (p.push(o.getX(i + 2)),
                    p.push(o.getX(i + 1)),
                    p.push(o.getX(i)));
          }
          p.length / 3 !== s &&
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
            );
          let A = i.clone();
          return A.setIndex(p), A.clearGroups(), A;
        }
      }
      let A = parseInt(u.UZH.replace(/\D+/g, ""));
      function decodeText(i) {
        if ("undefined" != typeof TextDecoder)
          return new TextDecoder().decode(i);
        let a = "";
        for (let o = 0, s = i.length; o < s; o++)
          a += String.fromCharCode(i[o]);
        try {
          return decodeURIComponent(escape(a));
        } catch (i) {
          return a;
        }
      }
      let B = "srgb",
        S = "srgb-linear";
      let GLTFLoader = class GLTFLoader extends u.aNw {
        constructor(i) {
          super(i),
            (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (i) {
              return new GLTFMaterialsClearcoatExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsDispersionExtension(i);
            }),
            this.register(function (i) {
              return new GLTFTextureBasisUExtension(i);
            }),
            this.register(function (i) {
              return new GLTFTextureWebPExtension(i);
            }),
            this.register(function (i) {
              return new GLTFTextureAVIFExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsSheenExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsTransmissionExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsVolumeExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsIorExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsEmissiveStrengthExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsSpecularExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsIridescenceExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsAnisotropyExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMaterialsBumpExtension(i);
            }),
            this.register(function (i) {
              return new GLTFLightsExtension(i);
            }),
            this.register(function (i) {
              return new GLTFMeshoptCompression(i);
            }),
            this.register(function (i) {
              return new GLTFMeshGpuInstancing(i);
            });
        }
        load(i, a, o, s) {
          let p;
          let A = this;
          if ("" !== this.resourcePath) p = this.resourcePath;
          else if ("" !== this.path) {
            let a = u.Zp0.extractUrlBase(i);
            p = u.Zp0.resolveURL(a, this.path);
          } else p = u.Zp0.extractUrlBase(i);
          this.manager.itemStart(i);
          let _onError = function (a) {
              s ? s(a) : console.error(a),
                A.manager.itemError(i),
                A.manager.itemEnd(i);
            },
            B = new u.hH6(this.manager);
          B.setPath(this.path),
            B.setResponseType("arraybuffer"),
            B.setRequestHeader(this.requestHeader),
            B.setWithCredentials(this.withCredentials),
            B.load(
              i,
              function (o) {
                try {
                  A.parse(
                    o,
                    p,
                    function (o) {
                      a(o), A.manager.itemEnd(i);
                    },
                    _onError
                  );
                } catch (i) {
                  _onError(i);
                }
              },
              o,
              _onError
            );
        }
        setDRACOLoader(i) {
          return (this.dracoLoader = i), this;
        }
        setDDSLoader() {
          throw Error(
            'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
          );
        }
        setKTX2Loader(i) {
          return (this.ktx2Loader = i), this;
        }
        setMeshoptDecoder(i) {
          return (this.meshoptDecoder = i), this;
        }
        register(i) {
          return (
            -1 === this.pluginCallbacks.indexOf(i) &&
              this.pluginCallbacks.push(i),
            this
          );
        }
        unregister(i) {
          return (
            -1 !== this.pluginCallbacks.indexOf(i) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(i), 1),
            this
          );
        }
        parse(i, a, o, s) {
          let u;
          let p = {},
            A = {};
          if ("string" == typeof i) u = JSON.parse(i);
          else if (i instanceof ArrayBuffer) {
            let a = decodeText(new Uint8Array(i.slice(0, 4)));
            if (a === F) {
              try {
                p[w.KHR_BINARY_GLTF] = new GLTFBinaryExtension(i);
              } catch (i) {
                s && s(i);
                return;
              }
              u = JSON.parse(p[w.KHR_BINARY_GLTF].content);
            } else u = JSON.parse(decodeText(new Uint8Array(i)));
          } else u = i;
          if (void 0 === u.asset || u.asset.version[0] < 2) {
            s &&
              s(
                Error(
                  "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
                )
              );
            return;
          }
          let B = new GLTFParser(u, {
            path: a || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
          });
          B.fileLoader.setRequestHeader(this.requestHeader);
          for (let i = 0; i < this.pluginCallbacks.length; i++) {
            let a = this.pluginCallbacks[i](B);
            a.name ||
              console.error(
                "THREE.GLTFLoader: Invalid plugin found: missing name"
              ),
              (A[a.name] = a),
              (p[a.name] = !0);
          }
          if (u.extensionsUsed)
            for (let i = 0; i < u.extensionsUsed.length; ++i) {
              let a = u.extensionsUsed[i],
                o = u.extensionsRequired || [];
              switch (a) {
                case w.KHR_MATERIALS_UNLIT:
                  p[a] = new GLTFMaterialsUnlitExtension();
                  break;
                case w.KHR_DRACO_MESH_COMPRESSION:
                  p[a] = new GLTFDracoMeshCompressionExtension(
                    u,
                    this.dracoLoader
                  );
                  break;
                case w.KHR_TEXTURE_TRANSFORM:
                  p[a] = new GLTFTextureTransformExtension();
                  break;
                case w.KHR_MESH_QUANTIZATION:
                  p[a] = new GLTFMeshQuantizationExtension();
                  break;
                default:
                  o.indexOf(a) >= 0 &&
                    void 0 === A[a] &&
                    console.warn(
                      'THREE.GLTFLoader: Unknown extension "' + a + '".'
                    );
              }
            }
          B.setExtensions(p), B.setPlugins(A), B.parse(o, s);
        }
        parseAsync(i, a) {
          let o = this;
          return new Promise(function (s, u) {
            o.parse(i, a, s, u);
          });
        }
      };
      function GLTFRegistry() {
        let i = {};
        return {
          get: function (a) {
            return i[a];
          },
          add: function (a, o) {
            i[a] = o;
          },
          remove: function (a) {
            delete i[a];
          },
          removeAll: function () {
            i = {};
          },
        };
      }
      let w = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_MATERIALS_BUMP: "EXT_materials_bump",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_TEXTURE_AVIF: "EXT_texture_avif",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
        EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
      };
      let GLTFLightsExtension = class GLTFLightsExtension {
        constructor(i) {
          (this.parser = i),
            (this.name = w.KHR_LIGHTS_PUNCTUAL),
            (this.cache = { refs: {}, uses: {} });
        }
        _markDefs() {
          let i = this.parser,
            a = this.parser.json.nodes || [];
          for (let o = 0, s = a.length; o < s; o++) {
            let s = a[o];
            s.extensions &&
              s.extensions[this.name] &&
              void 0 !== s.extensions[this.name].light &&
              i._addNodeRef(this.cache, s.extensions[this.name].light);
          }
        }
        _loadLight(i) {
          let a;
          let o = this.parser,
            s = "light:" + i,
            p = o.cache.get(s);
          if (p) return p;
          let A = o.json,
            B = (A.extensions && A.extensions[this.name]) || {},
            w = B.lights || [],
            F = w[i],
            L = new u.Ilk(16777215);
          void 0 !== F.color && L.setRGB(F.color[0], F.color[1], F.color[2], S);
          let _ = void 0 !== F.range ? F.range : 0;
          switch (F.type) {
            case "directional":
              (a = new u.Ox3(L)).target.position.set(0, 0, -1), a.add(a.target);
              break;
            case "point":
              (a = new u.cek(L)).distance = _;
              break;
            case "spot":
              ((a = new u.PMe(L)).distance = _),
                (F.spot = F.spot || {}),
                (F.spot.innerConeAngle =
                  void 0 !== F.spot.innerConeAngle ? F.spot.innerConeAngle : 0),
                (F.spot.outerConeAngle =
                  void 0 !== F.spot.outerConeAngle
                    ? F.spot.outerConeAngle
                    : Math.PI / 4),
                (a.angle = F.spot.outerConeAngle),
                (a.penumbra =
                  1 - F.spot.innerConeAngle / F.spot.outerConeAngle),
                a.target.position.set(0, 0, -1),
                a.add(a.target);
              break;
            default:
              throw Error("THREE.GLTFLoader: Unexpected light type: " + F.type);
          }
          return (
            a.position.set(0, 0, 0),
            (a.decay = 2),
            assignExtrasToUserData(a, F),
            void 0 !== F.intensity && (a.intensity = F.intensity),
            (a.name = o.createUniqueName(F.name || "light_" + i)),
            (p = Promise.resolve(a)),
            o.cache.add(s, p),
            p
          );
        }
        getDependency(i, a) {
          if ("light" === i) return this._loadLight(a);
        }
        createNodeAttachment(i) {
          let a = this,
            o = this.parser,
            s = o.json,
            u = s.nodes[i],
            p = (u.extensions && u.extensions[this.name]) || {},
            A = p.light;
          return void 0 === A
            ? null
            : this._loadLight(A).then(function (i) {
                return o._getNodeRef(a.cache, A, i);
              });
        }
      };
      let GLTFMaterialsUnlitExtension = class GLTFMaterialsUnlitExtension {
        constructor() {
          this.name = w.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return u.vBJ;
        }
        extendParams(i, a, o) {
          let s = [];
          (i.color = new u.Ilk(1, 1, 1)), (i.opacity = 1);
          let p = a.pbrMetallicRoughness;
          if (p) {
            if (Array.isArray(p.baseColorFactor)) {
              let a = p.baseColorFactor;
              i.color.setRGB(a[0], a[1], a[2], S), (i.opacity = a[3]);
            }
            void 0 !== p.baseColorTexture &&
              s.push(o.assignTexture(i, "map", p.baseColorTexture, B));
          }
          return Promise.all(s);
        }
      };
      let GLTFMaterialsEmissiveStrengthExtension = class GLTFMaterialsEmissiveStrengthExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_EMISSIVE_STRENGTH);
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let u = s.extensions[this.name].emissiveStrength;
          return void 0 !== u && (a.emissiveIntensity = u), Promise.resolve();
        }
      };
      let GLTFMaterialsClearcoatExtension = class GLTFMaterialsClearcoatExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_CLEARCOAT);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let p = [],
            A = s.extensions[this.name];
          if (
            (void 0 !== A.clearcoatFactor && (a.clearcoat = A.clearcoatFactor),
            void 0 !== A.clearcoatTexture &&
              p.push(o.assignTexture(a, "clearcoatMap", A.clearcoatTexture)),
            void 0 !== A.clearcoatRoughnessFactor &&
              (a.clearcoatRoughness = A.clearcoatRoughnessFactor),
            void 0 !== A.clearcoatRoughnessTexture &&
              p.push(
                o.assignTexture(
                  a,
                  "clearcoatRoughnessMap",
                  A.clearcoatRoughnessTexture
                )
              ),
            void 0 !== A.clearcoatNormalTexture &&
              (p.push(
                o.assignTexture(
                  a,
                  "clearcoatNormalMap",
                  A.clearcoatNormalTexture
                )
              ),
              void 0 !== A.clearcoatNormalTexture.scale))
          ) {
            let i = A.clearcoatNormalTexture.scale;
            a.clearcoatNormalScale = new u.FM8(i, i);
          }
          return Promise.all(p);
        }
      };
      let GLTFMaterialsDispersionExtension = class GLTFMaterialsDispersionExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_DISPERSION);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let u = s.extensions[this.name];
          return (
            (a.dispersion = void 0 !== u.dispersion ? u.dispersion : 0),
            Promise.resolve()
          );
        }
      };
      let GLTFMaterialsIridescenceExtension = class GLTFMaterialsIridescenceExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_IRIDESCENCE);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let u = [],
            p = s.extensions[this.name];
          return (
            void 0 !== p.iridescenceFactor &&
              (a.iridescence = p.iridescenceFactor),
            void 0 !== p.iridescenceTexture &&
              u.push(
                o.assignTexture(a, "iridescenceMap", p.iridescenceTexture)
              ),
            void 0 !== p.iridescenceIor &&
              (a.iridescenceIOR = p.iridescenceIor),
            void 0 === a.iridescenceThicknessRange &&
              (a.iridescenceThicknessRange = [100, 400]),
            void 0 !== p.iridescenceThicknessMinimum &&
              (a.iridescenceThicknessRange[0] = p.iridescenceThicknessMinimum),
            void 0 !== p.iridescenceThicknessMaximum &&
              (a.iridescenceThicknessRange[1] = p.iridescenceThicknessMaximum),
            void 0 !== p.iridescenceThicknessTexture &&
              u.push(
                o.assignTexture(
                  a,
                  "iridescenceThicknessMap",
                  p.iridescenceThicknessTexture
                )
              ),
            Promise.all(u)
          );
        }
      };
      let GLTFMaterialsSheenExtension = class GLTFMaterialsSheenExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_SHEEN);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let p = [];
          (a.sheenColor = new u.Ilk(0, 0, 0)),
            (a.sheenRoughness = 0),
            (a.sheen = 1);
          let A = s.extensions[this.name];
          if (void 0 !== A.sheenColorFactor) {
            let i = A.sheenColorFactor;
            a.sheenColor.setRGB(i[0], i[1], i[2], S);
          }
          return (
            void 0 !== A.sheenRoughnessFactor &&
              (a.sheenRoughness = A.sheenRoughnessFactor),
            void 0 !== A.sheenColorTexture &&
              p.push(
                o.assignTexture(a, "sheenColorMap", A.sheenColorTexture, B)
              ),
            void 0 !== A.sheenRoughnessTexture &&
              p.push(
                o.assignTexture(a, "sheenRoughnessMap", A.sheenRoughnessTexture)
              ),
            Promise.all(p)
          );
        }
      };
      let GLTFMaterialsTransmissionExtension = class GLTFMaterialsTransmissionExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_TRANSMISSION);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let u = [],
            p = s.extensions[this.name];
          return (
            void 0 !== p.transmissionFactor &&
              (a.transmission = p.transmissionFactor),
            void 0 !== p.transmissionTexture &&
              u.push(
                o.assignTexture(a, "transmissionMap", p.transmissionTexture)
              ),
            Promise.all(u)
          );
        }
      };
      let GLTFMaterialsVolumeExtension = class GLTFMaterialsVolumeExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_VOLUME);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let p = [],
            A = s.extensions[this.name];
          (a.thickness = void 0 !== A.thicknessFactor ? A.thicknessFactor : 0),
            void 0 !== A.thicknessTexture &&
              p.push(o.assignTexture(a, "thicknessMap", A.thicknessTexture)),
            (a.attenuationDistance = A.attenuationDistance || 1 / 0);
          let B = A.attenuationColor || [1, 1, 1];
          return (
            (a.attenuationColor = new u.Ilk().setRGB(B[0], B[1], B[2], S)),
            Promise.all(p)
          );
        }
      };
      let GLTFMaterialsIorExtension = class GLTFMaterialsIorExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_IOR);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let u = s.extensions[this.name];
          return (a.ior = void 0 !== u.ior ? u.ior : 1.5), Promise.resolve();
        }
      };
      let GLTFMaterialsSpecularExtension = class GLTFMaterialsSpecularExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_SPECULAR);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let p = [],
            A = s.extensions[this.name];
          (a.specularIntensity =
            void 0 !== A.specularFactor ? A.specularFactor : 1),
            void 0 !== A.specularTexture &&
              p.push(
                o.assignTexture(a, "specularIntensityMap", A.specularTexture)
              );
          let w = A.specularColorFactor || [1, 1, 1];
          return (
            (a.specularColor = new u.Ilk().setRGB(w[0], w[1], w[2], S)),
            void 0 !== A.specularColorTexture &&
              p.push(
                o.assignTexture(
                  a,
                  "specularColorMap",
                  A.specularColorTexture,
                  B
                )
              ),
            Promise.all(p)
          );
        }
      };
      let GLTFMaterialsBumpExtension = class GLTFMaterialsBumpExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.EXT_MATERIALS_BUMP);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let u = [],
            p = s.extensions[this.name];
          return (
            (a.bumpScale = void 0 !== p.bumpFactor ? p.bumpFactor : 1),
            void 0 !== p.bumpTexture &&
              u.push(o.assignTexture(a, "bumpMap", p.bumpTexture)),
            Promise.all(u)
          );
        }
      };
      let GLTFMaterialsAnisotropyExtension = class GLTFMaterialsAnisotropyExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_MATERIALS_ANISOTROPY);
        }
        getMaterialType(i) {
          let a = this.parser,
            o = a.json.materials[i];
          return o.extensions && o.extensions[this.name] ? u.EJi : null;
        }
        extendMaterialParams(i, a) {
          let o = this.parser,
            s = o.json.materials[i];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          let u = [],
            p = s.extensions[this.name];
          return (
            void 0 !== p.anisotropyStrength &&
              (a.anisotropy = p.anisotropyStrength),
            void 0 !== p.anisotropyRotation &&
              (a.anisotropyRotation = p.anisotropyRotation),
            void 0 !== p.anisotropyTexture &&
              u.push(o.assignTexture(a, "anisotropyMap", p.anisotropyTexture)),
            Promise.all(u)
          );
        }
      };
      let GLTFTextureBasisUExtension = class GLTFTextureBasisUExtension {
        constructor(i) {
          (this.parser = i), (this.name = w.KHR_TEXTURE_BASISU);
        }
        loadTexture(i) {
          let a = this.parser,
            o = a.json,
            s = o.textures[i];
          if (!s.extensions || !s.extensions[this.name]) return null;
          let u = s.extensions[this.name],
            p = a.options.ktx2Loader;
          if (!p) {
            if (
              !(
                o.extensionsRequired &&
                o.extensionsRequired.indexOf(this.name) >= 0
              )
            )
              return null;
            throw Error(
              "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
            );
          }
          return a.loadTextureImage(i, u.source, p);
        }
      };
      let GLTFTextureWebPExtension = class GLTFTextureWebPExtension {
        constructor(i) {
          (this.parser = i),
            (this.name = w.EXT_TEXTURE_WEBP),
            (this.isSupported = null);
        }
        loadTexture(i) {
          let a = this.name,
            o = this.parser,
            s = o.json,
            u = s.textures[i];
          if (!u.extensions || !u.extensions[a]) return null;
          let p = u.extensions[a],
            A = s.images[p.source],
            B = o.textureLoader;
          if (A.uri) {
            let i = o.options.manager.getHandler(A.uri);
            null !== i && (B = i);
          }
          return this.detectSupport().then(function (u) {
            if (u) return o.loadTextureImage(i, p.source, B);
            if (s.extensionsRequired && s.extensionsRequired.indexOf(a) >= 0)
              throw Error(
                "THREE.GLTFLoader: WebP required by asset but unsupported."
              );
            return o.loadTexture(i);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (i) {
                let a = new Image();
                (a.src =
                  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
                  (a.onload = a.onerror =
                    function () {
                      i(1 === a.height);
                    });
              })),
            this.isSupported
          );
        }
      };
      let GLTFTextureAVIFExtension = class GLTFTextureAVIFExtension {
        constructor(i) {
          (this.parser = i),
            (this.name = w.EXT_TEXTURE_AVIF),
            (this.isSupported = null);
        }
        loadTexture(i) {
          let a = this.name,
            o = this.parser,
            s = o.json,
            u = s.textures[i];
          if (!u.extensions || !u.extensions[a]) return null;
          let p = u.extensions[a],
            A = s.images[p.source],
            B = o.textureLoader;
          if (A.uri) {
            let i = o.options.manager.getHandler(A.uri);
            null !== i && (B = i);
          }
          return this.detectSupport().then(function (u) {
            if (u) return o.loadTextureImage(i, p.source, B);
            if (s.extensionsRequired && s.extensionsRequired.indexOf(a) >= 0)
              throw Error(
                "THREE.GLTFLoader: AVIF required by asset but unsupported."
              );
            return o.loadTexture(i);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (i) {
                let a = new Image();
                (a.src =
                  "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
                  (a.onload = a.onerror =
                    function () {
                      i(1 === a.height);
                    });
              })),
            this.isSupported
          );
        }
      };
      let GLTFMeshoptCompression = class GLTFMeshoptCompression {
        constructor(i) {
          (this.name = w.EXT_MESHOPT_COMPRESSION), (this.parser = i);
        }
        loadBufferView(i) {
          let a = this.parser.json,
            o = a.bufferViews[i];
          if (!o.extensions || !o.extensions[this.name]) return null;
          {
            let i = o.extensions[this.name],
              s = this.parser.getDependency("buffer", i.buffer),
              u = this.parser.options.meshoptDecoder;
            if (!u || !u.supported) {
              if (
                !(
                  a.extensionsRequired &&
                  a.extensionsRequired.indexOf(this.name) >= 0
                )
              )
                return null;
              throw Error(
                "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
              );
            }
            return s.then(function (a) {
              let o = i.byteOffset || 0,
                s = i.byteLength || 0,
                p = i.count,
                A = i.byteStride,
                B = new Uint8Array(a, o, s);
              return u.decodeGltfBufferAsync
                ? u
                    .decodeGltfBufferAsync(p, A, B, i.mode, i.filter)
                    .then(function (i) {
                      return i.buffer;
                    })
                : u.ready.then(function () {
                    let a = new ArrayBuffer(p * A);
                    return (
                      u.decodeGltfBuffer(
                        new Uint8Array(a),
                        p,
                        A,
                        B,
                        i.mode,
                        i.filter
                      ),
                      a
                    );
                  });
            });
          }
        }
      };
      let GLTFMeshGpuInstancing = class GLTFMeshGpuInstancing {
        constructor(i) {
          (this.name = w.EXT_MESH_GPU_INSTANCING), (this.parser = i);
        }
        createNodeMesh(i) {
          let a = this.parser.json,
            o = a.nodes[i];
          if (!o.extensions || !o.extensions[this.name] || void 0 === o.mesh)
            return null;
          let s = a.meshes[o.mesh];
          for (let i of s.primitives)
            if (
              i.mode !== N.TRIANGLES &&
              i.mode !== N.TRIANGLE_STRIP &&
              i.mode !== N.TRIANGLE_FAN &&
              void 0 !== i.mode
            )
              return null;
          let p = o.extensions[this.name],
            A = p.attributes,
            B = [],
            S = {};
          for (let i in A)
            B.push(
              this.parser
                .getDependency("accessor", A[i])
                .then((a) => ((S[i] = a), S[i]))
            );
          return B.length < 1
            ? null
            : (B.push(this.parser.createNodeMesh(i)),
              Promise.all(B).then((i) => {
                let a = i.pop(),
                  o = a.isGroup ? a.children : [a],
                  s = i[0].count,
                  p = [];
                for (let i of o) {
                  let a = new u.yGw(),
                    o = new u.Pa4(),
                    A = new u._fP(),
                    B = new u.Pa4(1, 1, 1),
                    w = new u.SPe(i.geometry, i.material, s);
                  for (let i = 0; i < s; i++)
                    S.TRANSLATION && o.fromBufferAttribute(S.TRANSLATION, i),
                      S.ROTATION && A.fromBufferAttribute(S.ROTATION, i),
                      S.SCALE && B.fromBufferAttribute(S.SCALE, i),
                      w.setMatrixAt(i, a.compose(o, A, B));
                  for (let a in S)
                    if ("_COLOR_0" === a) {
                      let i = S[a];
                      w.instanceColor = new u.lb7(
                        i.array,
                        i.itemSize,
                        i.normalized
                      );
                    } else
                      "TRANSLATION" !== a &&
                        "ROTATION" !== a &&
                        "SCALE" !== a &&
                        i.geometry.setAttribute(a, S[a]);
                  u.Tme.prototype.copy.call(w, i),
                    this.parser.assignFinalMaterial(w),
                    p.push(w);
                }
                return a.isGroup ? (a.clear(), a.add(...p), a) : p[0];
              }));
        }
      };
      let F = "glTF",
        L = { JSON: 1313821514, BIN: 5130562 };
      let GLTFBinaryExtension = class GLTFBinaryExtension {
        constructor(i) {
          (this.name = w.KHR_BINARY_GLTF),
            (this.content = null),
            (this.body = null);
          let a = new DataView(i, 0, 12);
          if (
            ((this.header = {
              magic: decodeText(new Uint8Array(i.slice(0, 4))),
              version: a.getUint32(4, !0),
              length: a.getUint32(8, !0),
            }),
            this.header.magic !== F)
          )
            throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
          if (this.header.version < 2)
            throw Error("THREE.GLTFLoader: Legacy binary file detected.");
          let o = this.header.length - 12,
            s = new DataView(i, 12),
            u = 0;
          for (; u < o; ) {
            let a = s.getUint32(u, !0);
            u += 4;
            let o = s.getUint32(u, !0);
            if (((u += 4), o === L.JSON)) {
              let o = new Uint8Array(i, 12 + u, a);
              this.content = decodeText(o);
            } else if (o === L.BIN) {
              let o = 12 + u;
              this.body = i.slice(o, o + a);
            }
            u += a;
          }
          if (null === this.content)
            throw Error("THREE.GLTFLoader: JSON content not found.");
        }
      };
      let GLTFDracoMeshCompressionExtension = class GLTFDracoMeshCompressionExtension {
        constructor(i, a) {
          if (!a)
            throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
          (this.name = w.KHR_DRACO_MESH_COMPRESSION),
            (this.json = i),
            (this.dracoLoader = a),
            this.dracoLoader.preload();
        }
        decodePrimitive(i, a) {
          let o = this.json,
            s = this.dracoLoader,
            u = i.extensions[this.name].bufferView,
            p = i.extensions[this.name].attributes,
            A = {},
            B = {},
            w = {};
          for (let i in p) {
            let a = W[i] || i.toLowerCase();
            A[a] = p[i];
          }
          for (let a in i.attributes) {
            let s = W[a] || a.toLowerCase();
            if (void 0 !== p[a]) {
              let u = o.accessors[i.attributes[a]],
                p = U[u.componentType];
              (w[s] = p.name), (B[s] = !0 === u.normalized);
            }
          }
          return a.getDependency("bufferView", u).then(function (i) {
            return new Promise(function (a, o) {
              s.decodeDracoFile(
                i,
                function (i) {
                  for (let a in i.attributes) {
                    let o = i.attributes[a],
                      s = B[a];
                    void 0 !== s && (o.normalized = s);
                  }
                  a(i);
                },
                A,
                w,
                S,
                o
              );
            });
          });
        }
      };
      let GLTFTextureTransformExtension = class GLTFTextureTransformExtension {
        constructor() {
          this.name = w.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(i, a) {
          return (
            ((void 0 === a.texCoord || a.texCoord === i.channel) &&
              void 0 === a.offset &&
              void 0 === a.rotation &&
              void 0 === a.scale) ||
              ((i = i.clone()),
              void 0 !== a.texCoord && (i.channel = a.texCoord),
              void 0 !== a.offset && i.offset.fromArray(a.offset),
              void 0 !== a.rotation && (i.rotation = a.rotation),
              void 0 !== a.scale && i.repeat.fromArray(a.scale),
              (i.needsUpdate = !0)),
            i
          );
        }
      };
      let GLTFMeshQuantizationExtension = class GLTFMeshQuantizationExtension {
        constructor() {
          this.name = w.KHR_MESH_QUANTIZATION;
        }
      };
      let GLTFCubicSplineInterpolant = class GLTFCubicSplineInterpolant extends u._C8 {
        constructor(i, a, o, s) {
          super(i, a, o, s);
        }
        copySampleValue_(i) {
          let a = this.resultBuffer,
            o = this.sampleValues,
            s = this.valueSize,
            u = i * s * 3 + s;
          for (let i = 0; i !== s; i++) a[i] = o[u + i];
          return a;
        }
        interpolate_(i, a, o, s) {
          let u = this.resultBuffer,
            p = this.sampleValues,
            A = this.valueSize,
            B = 2 * A,
            S = 3 * A,
            w = s - a,
            F = (o - a) / w,
            L = F * F,
            _ = L * F,
            N = i * S,
            U = N - S,
            j = -2 * _ + 3 * L,
            Q = _ - L,
            X = 1 - j,
            W = Q - L + F;
          for (let i = 0; i !== A; i++) {
            let a = p[U + i + A],
              o = p[U + i + B] * w,
              s = p[N + i + A],
              S = p[N + i] * w;
            u[i] = X * a + W * o + j * s + Q * S;
          }
          return u;
        }
      };
      let _ = new u._fP();
      let GLTFCubicSplineQuaternionInterpolant = class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
        interpolate_(i, a, o, s) {
          let u = super.interpolate_(i, a, o, s);
          return _.fromArray(u).normalize().toArray(u), u;
        }
      };
      let N = {
          POINTS: 0,
          LINES: 1,
          LINE_LOOP: 2,
          LINE_STRIP: 3,
          TRIANGLES: 4,
          TRIANGLE_STRIP: 5,
          TRIANGLE_FAN: 6,
        },
        U = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array,
        },
        j = {
          9728: u.TyD,
          9729: u.wem,
          9984: u.YLQ,
          9985: u.qyh,
          9986: u.aH4,
          9987: u.D1R,
        },
        Q = { 33071: u.uWy, 33648: u.OoA, 10497: u.rpg },
        X = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16,
        },
        W = {
          POSITION: "position",
          NORMAL: "normal",
          TANGENT: "tangent",
          ...(A >= 152
            ? {
                TEXCOORD_0: "uv",
                TEXCOORD_1: "uv1",
                TEXCOORD_2: "uv2",
                TEXCOORD_3: "uv3",
              }
            : { TEXCOORD_0: "uv", TEXCOORD_1: "uv2" }),
          COLOR_0: "color",
          WEIGHTS_0: "skinWeight",
          JOINTS_0: "skinIndex",
        },
        Y = {
          scale: "scale",
          translation: "position",
          rotation: "quaternion",
          weights: "morphTargetInfluences",
        },
        V = { CUBICSPLINE: void 0, LINEAR: u.NMF, STEP: u.Syv },
        q = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
      function addUnknownExtensionsToUserData(i, a, o) {
        for (let s in o.extensions)
          void 0 === i[s] &&
            ((a.userData.gltfExtensions = a.userData.gltfExtensions || {}),
            (a.userData.gltfExtensions[s] = o.extensions[s]));
      }
      function assignExtrasToUserData(i, a) {
        void 0 !== a.extras &&
          ("object" == typeof a.extras
            ? Object.assign(i.userData, a.extras)
            : console.warn(
                "THREE.GLTFLoader: Ignoring primitive type .extras, " + a.extras
              ));
      }
      function createAttributesKey(i) {
        let a = "",
          o = Object.keys(i).sort();
        for (let s = 0, u = o.length; s < u; s++)
          a += o[s] + ":" + i[o[s]] + ";";
        return a;
      }
      function getNormalizedComponentScale(i) {
        switch (i) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw Error(
              "THREE.GLTFLoader: Unsupported normalized accessor component type."
            );
        }
      }
      let $ = new u.yGw();
      let GLTFParser = class GLTFParser {
        constructor(i = {}, a = {}) {
          (this.json = i),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = a),
            (this.cache = new GLTFRegistry()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.nodeCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.sourceCache = {}),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {});
          let o = !1,
            s = !1,
            p = -1;
          "undefined" != typeof navigator &&
            void 0 !== navigator.userAgent &&
            ((o =
              !0 ===
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent)),
            (p = (s = navigator.userAgent.indexOf("Firefox") > -1)
              ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]
              : -1)),
            "undefined" == typeof createImageBitmap || o || (s && p < 98)
              ? (this.textureLoader = new u.dpR(this.options.manager))
              : (this.textureLoader = new u.QRU(this.options.manager)),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new u.hH6(this.options.manager)),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin &&
              this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(i) {
          this.extensions = i;
        }
        setPlugins(i) {
          this.plugins = i;
        }
        parse(i, a) {
          let o = this,
            s = this.json,
            u = this.extensions;
          this.cache.removeAll(),
            (this.nodeCache = {}),
            this._invokeAll(function (i) {
              return i._markDefs && i._markDefs();
            }),
            Promise.all(
              this._invokeAll(function (i) {
                return i.beforeRoot && i.beforeRoot();
              })
            )
              .then(function () {
                return Promise.all([
                  o.getDependencies("scene"),
                  o.getDependencies("animation"),
                  o.getDependencies("camera"),
                ]);
              })
              .then(function (a) {
                let p = {
                  scene: a[0][s.scene || 0],
                  scenes: a[0],
                  animations: a[1],
                  cameras: a[2],
                  asset: s.asset,
                  parser: o,
                  userData: {},
                };
                return (
                  addUnknownExtensionsToUserData(u, p, s),
                  assignExtrasToUserData(p, s),
                  Promise.all(
                    o._invokeAll(function (i) {
                      return i.afterRoot && i.afterRoot(p);
                    })
                  ).then(function () {
                    for (let i of p.scenes) i.updateMatrixWorld();
                    i(p);
                  })
                );
              })
              .catch(a);
        }
        _markDefs() {
          let i = this.json.nodes || [],
            a = this.json.skins || [],
            o = this.json.meshes || [];
          for (let o = 0, s = a.length; o < s; o++) {
            let s = a[o].joints;
            for (let a = 0, o = s.length; a < o; a++) i[s[a]].isBone = !0;
          }
          for (let a = 0, s = i.length; a < s; a++) {
            let s = i[a];
            void 0 !== s.mesh &&
              (this._addNodeRef(this.meshCache, s.mesh),
              void 0 !== s.skin && (o[s.mesh].isSkinnedMesh = !0)),
              void 0 !== s.camera &&
                this._addNodeRef(this.cameraCache, s.camera);
          }
        }
        _addNodeRef(i, a) {
          void 0 !== a &&
            (void 0 === i.refs[a] && (i.refs[a] = i.uses[a] = 0), i.refs[a]++);
        }
        _getNodeRef(i, a, o) {
          if (i.refs[a] <= 1) return o;
          let s = o.clone(),
            updateMappings = (i, a) => {
              let o = this.associations.get(i);
              for (let [s, u] of (null != o && this.associations.set(a, o),
              i.children.entries()))
                updateMappings(u, a.children[s]);
            };
          return (
            updateMappings(o, s), (s.name += "_instance_" + i.uses[a]++), s
          );
        }
        _invokeOne(i) {
          let a = Object.values(this.plugins);
          a.push(this);
          for (let o = 0; o < a.length; o++) {
            let s = i(a[o]);
            if (s) return s;
          }
          return null;
        }
        _invokeAll(i) {
          let a = Object.values(this.plugins);
          a.unshift(this);
          let o = [];
          for (let s = 0; s < a.length; s++) {
            let u = i(a[s]);
            u && o.push(u);
          }
          return o;
        }
        getDependency(i, a) {
          let o = i + ":" + a,
            s = this.cache.get(o);
          if (!s) {
            switch (i) {
              case "scene":
                s = this.loadScene(a);
                break;
              case "node":
                s = this._invokeOne(function (i) {
                  return i.loadNode && i.loadNode(a);
                });
                break;
              case "mesh":
                s = this._invokeOne(function (i) {
                  return i.loadMesh && i.loadMesh(a);
                });
                break;
              case "accessor":
                s = this.loadAccessor(a);
                break;
              case "bufferView":
                s = this._invokeOne(function (i) {
                  return i.loadBufferView && i.loadBufferView(a);
                });
                break;
              case "buffer":
                s = this.loadBuffer(a);
                break;
              case "material":
                s = this._invokeOne(function (i) {
                  return i.loadMaterial && i.loadMaterial(a);
                });
                break;
              case "texture":
                s = this._invokeOne(function (i) {
                  return i.loadTexture && i.loadTexture(a);
                });
                break;
              case "skin":
                s = this.loadSkin(a);
                break;
              case "animation":
                s = this._invokeOne(function (i) {
                  return i.loadAnimation && i.loadAnimation(a);
                });
                break;
              case "camera":
                s = this.loadCamera(a);
                break;
              default:
                if (
                  !(s = this._invokeOne(function (o) {
                    return (
                      o != this && o.getDependency && o.getDependency(i, a)
                    );
                  }))
                )
                  throw Error("Unknown type: " + i);
            }
            this.cache.add(o, s);
          }
          return s;
        }
        getDependencies(i) {
          let a = this.cache.get(i);
          if (!a) {
            let o = this,
              s = this.json[i + ("mesh" === i ? "es" : "s")] || [];
            (a = Promise.all(
              s.map(function (a, s) {
                return o.getDependency(i, s);
              })
            )),
              this.cache.add(i, a);
          }
          return a;
        }
        loadBuffer(i) {
          let a = this.json.buffers[i],
            o = this.fileLoader;
          if (a.type && "arraybuffer" !== a.type)
            throw Error(
              "THREE.GLTFLoader: " + a.type + " buffer type is not supported."
            );
          if (void 0 === a.uri && 0 === i)
            return Promise.resolve(this.extensions[w.KHR_BINARY_GLTF].body);
          let s = this.options;
          return new Promise(function (i, p) {
            o.load(u.Zp0.resolveURL(a.uri, s.path), i, void 0, function () {
              p(
                Error(
                  'THREE.GLTFLoader: Failed to load buffer "' + a.uri + '".'
                )
              );
            });
          });
        }
        loadBufferView(i) {
          let a = this.json.bufferViews[i];
          return this.getDependency("buffer", a.buffer).then(function (i) {
            let o = a.byteLength || 0,
              s = a.byteOffset || 0;
            return i.slice(s, s + o);
          });
        }
        loadAccessor(i) {
          let a = this,
            o = this.json,
            s = this.json.accessors[i];
          if (void 0 === s.bufferView && void 0 === s.sparse) {
            let i = X[s.type],
              a = U[s.componentType],
              o = !0 === s.normalized,
              p = new a(s.count * i);
            return Promise.resolve(new u.TlE(p, i, o));
          }
          let p = [];
          return (
            void 0 !== s.bufferView
              ? p.push(this.getDependency("bufferView", s.bufferView))
              : p.push(null),
            void 0 !== s.sparse &&
              (p.push(
                this.getDependency("bufferView", s.sparse.indices.bufferView)
              ),
              p.push(
                this.getDependency("bufferView", s.sparse.values.bufferView)
              )),
            Promise.all(p).then(function (i) {
              let p, A;
              let B = i[0],
                S = X[s.type],
                w = U[s.componentType],
                F = w.BYTES_PER_ELEMENT,
                L = F * S,
                _ = s.byteOffset || 0,
                N =
                  void 0 !== s.bufferView
                    ? o.bufferViews[s.bufferView].byteStride
                    : void 0,
                j = !0 === s.normalized;
              if (N && N !== L) {
                let i = Math.floor(_ / N),
                  o =
                    "InterleavedBuffer:" +
                    s.bufferView +
                    ":" +
                    s.componentType +
                    ":" +
                    i +
                    ":" +
                    s.count,
                  L = a.cache.get(o);
                L ||
                  ((p = new w(B, i * N, (s.count * N) / F)),
                  (L = new u.vpT(p, N / F)),
                  a.cache.add(o, L)),
                  (A = new u.kB5(L, S, (_ % N) / F, j));
              } else (p = null === B ? new w(s.count * S) : new w(B, _, s.count * S)), (A = new u.TlE(p, S, j));
              if (void 0 !== s.sparse) {
                let a = X.SCALAR,
                  o = U[s.sparse.indices.componentType],
                  p = s.sparse.indices.byteOffset || 0,
                  F = s.sparse.values.byteOffset || 0,
                  L = new o(i[1], p, s.sparse.count * a),
                  _ = new w(i[2], F, s.sparse.count * S);
                null !== B &&
                  (A = new u.TlE(A.array.slice(), A.itemSize, A.normalized));
                for (let i = 0, a = L.length; i < a; i++) {
                  let a = L[i];
                  if (
                    (A.setX(a, _[i * S]),
                    S >= 2 && A.setY(a, _[i * S + 1]),
                    S >= 3 && A.setZ(a, _[i * S + 2]),
                    S >= 4 && A.setW(a, _[i * S + 3]),
                    S >= 5)
                  )
                    throw Error(
                      "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                    );
                }
              }
              return A;
            })
          );
        }
        loadTexture(i) {
          let a = this.json,
            o = this.options,
            s = a.textures[i],
            u = s.source,
            p = a.images[u],
            A = this.textureLoader;
          if (p.uri) {
            let i = o.manager.getHandler(p.uri);
            null !== i && (A = i);
          }
          return this.loadTextureImage(i, u, A);
        }
        loadTextureImage(i, a, o) {
          let s = this,
            p = this.json,
            A = p.textures[i],
            B = p.images[a],
            S = (B.uri || B.bufferView) + ":" + A.sampler;
          if (this.textureCache[S]) return this.textureCache[S];
          let w = this.loadImageSource(a, o)
            .then(function (a) {
              (a.flipY = !1),
                (a.name = A.name || B.name || ""),
                "" === a.name &&
                  "string" == typeof B.uri &&
                  !1 === B.uri.startsWith("data:image/") &&
                  (a.name = B.uri);
              let o = p.samplers || {},
                S = o[A.sampler] || {};
              return (
                (a.magFilter = j[S.magFilter] || u.wem),
                (a.minFilter = j[S.minFilter] || u.D1R),
                (a.wrapS = Q[S.wrapS] || u.rpg),
                (a.wrapT = Q[S.wrapT] || u.rpg),
                s.associations.set(a, { textures: i }),
                a
              );
            })
            .catch(function () {
              return null;
            });
          return (this.textureCache[S] = w), w;
        }
        loadImageSource(i, a) {
          let o = this.json,
            s = this.options;
          if (void 0 !== this.sourceCache[i])
            return this.sourceCache[i].then((i) => i.clone());
          let p = o.images[i],
            A = self.URL || self.webkitURL,
            B = p.uri || "",
            S = !1;
          if (void 0 !== p.bufferView)
            B = this.getDependency("bufferView", p.bufferView).then(function (
              i
            ) {
              S = !0;
              let a = new Blob([i], { type: p.mimeType });
              return (B = A.createObjectURL(a));
            });
          else if (void 0 === p.uri)
            throw Error(
              "THREE.GLTFLoader: Image " + i + " is missing URI and bufferView"
            );
          let w = Promise.resolve(B)
            .then(function (i) {
              return new Promise(function (o, p) {
                let A = o;
                !0 === a.isImageBitmapLoader &&
                  (A = function (i) {
                    let a = new u.xEZ(i);
                    (a.needsUpdate = !0), o(a);
                  }),
                  a.load(u.Zp0.resolveURL(i, s.path), A, void 0, p);
              });
            })
            .then(function (i) {
              var a;
              return (
                !0 === S && A.revokeObjectURL(B),
                assignExtrasToUserData(i, p),
                (i.userData.mimeType =
                  p.mimeType ||
                  ((a = p.uri).search(/\.jpe?g($|\?)/i) > 0 ||
                  0 === a.search(/^data\:image\/jpeg/)
                    ? "image/jpeg"
                    : a.search(/\.webp($|\?)/i) > 0 ||
                      0 === a.search(/^data\:image\/webp/)
                    ? "image/webp"
                    : "image/png")),
                i
              );
            })
            .catch(function (i) {
              throw (
                (console.error("THREE.GLTFLoader: Couldn't load texture", B), i)
              );
            });
          return (this.sourceCache[i] = w), w;
        }
        assignTexture(i, a, o, s) {
          let u = this;
          return this.getDependency("texture", o.index).then(function (p) {
            if (!p) return null;
            if (
              (void 0 !== o.texCoord &&
                o.texCoord > 0 &&
                ((p = p.clone()).channel = o.texCoord),
              u.extensions[w.KHR_TEXTURE_TRANSFORM])
            ) {
              let i =
                void 0 !== o.extensions
                  ? o.extensions[w.KHR_TEXTURE_TRANSFORM]
                  : void 0;
              if (i) {
                let a = u.associations.get(p);
                (p = u.extensions[w.KHR_TEXTURE_TRANSFORM].extendTexture(p, i)),
                  u.associations.set(p, a);
              }
            }
            return (
              void 0 !== s &&
                ("number" == typeof s && (s = 3001 === s ? B : S),
                "colorSpace" in p
                  ? (p.colorSpace = s)
                  : (p.encoding = s === B ? 3001 : 3e3)),
              (i[a] = p),
              p
            );
          });
        }
        assignFinalMaterial(i) {
          let a = i.geometry,
            o = i.material,
            s = void 0 === a.attributes.tangent,
            p = void 0 !== a.attributes.color,
            A = void 0 === a.attributes.normal;
          if (i.isPoints) {
            let i = "PointsMaterial:" + o.uuid,
              a = this.cache.get(i);
            a ||
              ((a = new u.UY4()),
              u.F5T.prototype.copy.call(a, o),
              a.color.copy(o.color),
              (a.map = o.map),
              (a.sizeAttenuation = !1),
              this.cache.add(i, a)),
              (o = a);
          } else if (i.isLine) {
            let i = "LineBasicMaterial:" + o.uuid,
              a = this.cache.get(i);
            a ||
              ((a = new u.nls()),
              u.F5T.prototype.copy.call(a, o),
              a.color.copy(o.color),
              (a.map = o.map),
              this.cache.add(i, a)),
              (o = a);
          }
          if (s || p || A) {
            let i = "ClonedMaterial:" + o.uuid + ":";
            s && (i += "derivative-tangents:"),
              p && (i += "vertex-colors:"),
              A && (i += "flat-shading:");
            let a = this.cache.get(i);
            a ||
              ((a = o.clone()),
              p && (a.vertexColors = !0),
              A && (a.flatShading = !0),
              s &&
                (a.normalScale && (a.normalScale.y *= -1),
                a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)),
              this.cache.add(i, a),
              this.associations.set(a, this.associations.get(o))),
              (o = a);
          }
          i.material = o;
        }
        getMaterialType() {
          return u.Wid;
        }
        loadMaterial(i) {
          let a;
          let o = this,
            s = this.json,
            p = this.extensions,
            A = s.materials[i],
            F = {},
            L = A.extensions || {},
            _ = [];
          if (L[w.KHR_MATERIALS_UNLIT]) {
            let i = p[w.KHR_MATERIALS_UNLIT];
            (a = i.getMaterialType()), _.push(i.extendParams(F, A, o));
          } else {
            let s = A.pbrMetallicRoughness || {};
            if (
              ((F.color = new u.Ilk(1, 1, 1)),
              (F.opacity = 1),
              Array.isArray(s.baseColorFactor))
            ) {
              let i = s.baseColorFactor;
              F.color.setRGB(i[0], i[1], i[2], S), (F.opacity = i[3]);
            }
            void 0 !== s.baseColorTexture &&
              _.push(o.assignTexture(F, "map", s.baseColorTexture, B)),
              (F.metalness =
                void 0 !== s.metallicFactor ? s.metallicFactor : 1),
              (F.roughness =
                void 0 !== s.roughnessFactor ? s.roughnessFactor : 1),
              void 0 !== s.metallicRoughnessTexture &&
                (_.push(
                  o.assignTexture(F, "metalnessMap", s.metallicRoughnessTexture)
                ),
                _.push(
                  o.assignTexture(F, "roughnessMap", s.metallicRoughnessTexture)
                )),
              (a = this._invokeOne(function (a) {
                return a.getMaterialType && a.getMaterialType(i);
              })),
              _.push(
                Promise.all(
                  this._invokeAll(function (a) {
                    return (
                      a.extendMaterialParams && a.extendMaterialParams(i, F)
                    );
                  })
                )
              );
          }
          !0 === A.doubleSided && (F.side = u.ehD);
          let N = A.alphaMode || q.OPAQUE;
          if (
            (N === q.BLEND
              ? ((F.transparent = !0), (F.depthWrite = !1))
              : ((F.transparent = !1),
                N === q.MASK &&
                  (F.alphaTest =
                    void 0 !== A.alphaCutoff ? A.alphaCutoff : 0.5)),
            void 0 !== A.normalTexture &&
              a !== u.vBJ &&
              (_.push(o.assignTexture(F, "normalMap", A.normalTexture)),
              (F.normalScale = new u.FM8(1, 1)),
              void 0 !== A.normalTexture.scale))
          ) {
            let i = A.normalTexture.scale;
            F.normalScale.set(i, i);
          }
          if (
            (void 0 !== A.occlusionTexture &&
              a !== u.vBJ &&
              (_.push(o.assignTexture(F, "aoMap", A.occlusionTexture)),
              void 0 !== A.occlusionTexture.strength &&
                (F.aoMapIntensity = A.occlusionTexture.strength)),
            void 0 !== A.emissiveFactor && a !== u.vBJ)
          ) {
            let i = A.emissiveFactor;
            F.emissive = new u.Ilk().setRGB(i[0], i[1], i[2], S);
          }
          return (
            void 0 !== A.emissiveTexture &&
              a !== u.vBJ &&
              _.push(o.assignTexture(F, "emissiveMap", A.emissiveTexture, B)),
            Promise.all(_).then(function () {
              let s = new a(F);
              return (
                A.name && (s.name = A.name),
                assignExtrasToUserData(s, A),
                o.associations.set(s, { materials: i }),
                A.extensions && addUnknownExtensionsToUserData(p, s, A),
                s
              );
            })
          );
        }
        createUniqueName(i) {
          let a = u.iUV.sanitizeNodeName(i || "");
          return a in this.nodeNamesUsed
            ? a + "_" + ++this.nodeNamesUsed[a]
            : ((this.nodeNamesUsed[a] = 0), a);
        }
        loadGeometries(i) {
          let a = this,
            o = this.extensions,
            s = this.primitiveCache,
            p = [];
          for (let A = 0, B = i.length; A < B; A++) {
            let B = i[A],
              S = (function (i) {
                let a;
                let o =
                  i.extensions && i.extensions[w.KHR_DRACO_MESH_COMPRESSION];
                if (
                  ((a = o
                    ? "draco:" +
                      o.bufferView +
                      ":" +
                      o.indices +
                      ":" +
                      createAttributesKey(o.attributes)
                    : i.indices +
                      ":" +
                      createAttributesKey(i.attributes) +
                      ":" +
                      i.mode),
                  void 0 !== i.targets)
                )
                  for (let o = 0, s = i.targets.length; o < s; o++)
                    a += ":" + createAttributesKey(i.targets[o]);
                return a;
              })(B),
              F = s[S];
            if (F) p.push(F.promise);
            else {
              let i;
              (i =
                B.extensions && B.extensions[w.KHR_DRACO_MESH_COMPRESSION]
                  ? (function (i) {
                      return o[w.KHR_DRACO_MESH_COMPRESSION]
                        .decodePrimitive(i, a)
                        .then(function (o) {
                          return addPrimitiveAttributes(o, i, a);
                        });
                    })(B)
                  : addPrimitiveAttributes(new u.u9r(), B, a)),
                (s[S] = { primitive: B, promise: i }),
                p.push(i);
            }
          }
          return Promise.all(p);
        }
        loadMesh(i) {
          let a = this,
            o = this.json,
            s = this.extensions,
            p = o.meshes[i],
            A = p.primitives,
            B = [];
          for (let i = 0, a = A.length; i < a; i++) {
            var S;
            let a =
              void 0 === A[i].material
                ? (void 0 === (S = this.cache).DefaultMaterial &&
                    (S.DefaultMaterial = new u.Wid({
                      color: 16777215,
                      emissive: 0,
                      metalness: 1,
                      roughness: 1,
                      transparent: !1,
                      depthTest: !0,
                      side: u.Wl3,
                    })),
                  S.DefaultMaterial)
                : this.getDependency("material", A[i].material);
            B.push(a);
          }
          return (
            B.push(a.loadGeometries(A)),
            Promise.all(B).then(function (o) {
              let B = o.slice(0, o.length - 1),
                S = o[o.length - 1],
                w = [];
              for (let o = 0, F = S.length; o < F; o++) {
                let F;
                let L = S[o],
                  _ = A[o],
                  U = B[o];
                if (
                  _.mode === N.TRIANGLES ||
                  _.mode === N.TRIANGLE_STRIP ||
                  _.mode === N.TRIANGLE_FAN ||
                  void 0 === _.mode
                )
                  !0 ===
                    (F =
                      !0 === p.isSkinnedMesh
                        ? new u.TUv(L, U)
                        : new u.Kj0(L, U)).isSkinnedMesh &&
                    F.normalizeSkinWeights(),
                    _.mode === N.TRIANGLE_STRIP
                      ? (F.geometry = toTrianglesDrawMode(F.geometry, u.UlW))
                      : _.mode === N.TRIANGLE_FAN &&
                        (F.geometry = toTrianglesDrawMode(F.geometry, u.z$h));
                else if (_.mode === N.LINES) F = new u.ejS(L, U);
                else if (_.mode === N.LINE_STRIP) F = new u.x12(L, U);
                else if (_.mode === N.LINE_LOOP) F = new u.blk(L, U);
                else if (_.mode === N.POINTS) F = new u.woe(L, U);
                else
                  throw Error(
                    "THREE.GLTFLoader: Primitive mode unsupported: " + _.mode
                  );
                Object.keys(F.geometry.morphAttributes).length > 0 &&
                  (function (i, a) {
                    if ((i.updateMorphTargets(), void 0 !== a.weights))
                      for (let o = 0, s = a.weights.length; o < s; o++)
                        i.morphTargetInfluences[o] = a.weights[o];
                    if (a.extras && Array.isArray(a.extras.targetNames)) {
                      let o = a.extras.targetNames;
                      if (i.morphTargetInfluences.length === o.length) {
                        i.morphTargetDictionary = {};
                        for (let a = 0, s = o.length; a < s; a++)
                          i.morphTargetDictionary[o[a]] = a;
                      } else
                        console.warn(
                          "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
                        );
                    }
                  })(F, p),
                  (F.name = a.createUniqueName(p.name || "mesh_" + i)),
                  assignExtrasToUserData(F, p),
                  _.extensions && addUnknownExtensionsToUserData(s, F, _),
                  a.assignFinalMaterial(F),
                  w.push(F);
              }
              for (let o = 0, s = w.length; o < s; o++)
                a.associations.set(w[o], { meshes: i, primitives: o });
              if (1 === w.length)
                return (
                  p.extensions && addUnknownExtensionsToUserData(s, w[0], p),
                  w[0]
                );
              let F = new u.ZAu();
              p.extensions && addUnknownExtensionsToUserData(s, F, p),
                a.associations.set(F, { meshes: i });
              for (let i = 0, a = w.length; i < a; i++) F.add(w[i]);
              return F;
            })
          );
        }
        loadCamera(i) {
          let a;
          let o = this.json.cameras[i],
            s = o[o.type];
          if (!s) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
          }
          return (
            "perspective" === o.type
              ? (a = new u.cPb(
                  u.M8C.radToDeg(s.yfov),
                  s.aspectRatio || 1,
                  s.znear || 1,
                  s.zfar || 2e6
                ))
              : "orthographic" === o.type &&
                (a = new u.iKG(
                  -s.xmag,
                  s.xmag,
                  s.ymag,
                  -s.ymag,
                  s.znear,
                  s.zfar
                )),
            o.name && (a.name = this.createUniqueName(o.name)),
            assignExtrasToUserData(a, o),
            Promise.resolve(a)
          );
        }
        loadSkin(i) {
          let a = this.json.skins[i],
            o = [];
          for (let i = 0, s = a.joints.length; i < s; i++)
            o.push(this._loadNodeShallow(a.joints[i]));
          return (
            void 0 !== a.inverseBindMatrices
              ? o.push(this.getDependency("accessor", a.inverseBindMatrices))
              : o.push(null),
            Promise.all(o).then(function (i) {
              let o = i.pop(),
                s = [],
                p = [];
              for (let A = 0, B = i.length; A < B; A++) {
                let B = i[A];
                if (B) {
                  s.push(B);
                  let i = new u.yGw();
                  null !== o && i.fromArray(o.array, 16 * A), p.push(i);
                } else
                  console.warn(
                    'THREE.GLTFLoader: Joint "%s" could not be found.',
                    a.joints[A]
                  );
              }
              return new u.OdW(s, p);
            })
          );
        }
        loadAnimation(i) {
          let a = this.json,
            o = this,
            s = a.animations[i],
            p = s.name ? s.name : "animation_" + i,
            A = [],
            B = [],
            S = [],
            w = [],
            F = [];
          for (let i = 0, a = s.channels.length; i < a; i++) {
            let a = s.channels[i],
              o = s.samplers[a.sampler],
              u = a.target,
              p = u.node,
              L = void 0 !== s.parameters ? s.parameters[o.input] : o.input,
              _ = void 0 !== s.parameters ? s.parameters[o.output] : o.output;
            void 0 !== u.node &&
              (A.push(this.getDependency("node", p)),
              B.push(this.getDependency("accessor", L)),
              S.push(this.getDependency("accessor", _)),
              w.push(o),
              F.push(u));
          }
          return Promise.all([
            Promise.all(A),
            Promise.all(B),
            Promise.all(S),
            Promise.all(w),
            Promise.all(F),
          ]).then(function (i) {
            let a = i[0],
              s = i[1],
              A = i[2],
              B = i[3],
              S = i[4],
              w = [];
            for (let i = 0, u = a.length; i < u; i++) {
              let u = a[i],
                p = s[i],
                F = A[i],
                L = B[i],
                _ = S[i];
              if (void 0 === u) continue;
              u.updateMatrix && u.updateMatrix();
              let N = o._createAnimationTracks(u, p, F, L, _);
              if (N) for (let i = 0; i < N.length; i++) w.push(N[i]);
            }
            return new u.m7l(p, void 0, w);
          });
        }
        createNodeMesh(i) {
          let a = this.json,
            o = this,
            s = a.nodes[i];
          return void 0 === s.mesh
            ? null
            : o.getDependency("mesh", s.mesh).then(function (i) {
                let a = o._getNodeRef(o.meshCache, s.mesh, i);
                return (
                  void 0 !== s.weights &&
                    a.traverse(function (i) {
                      if (i.isMesh)
                        for (let a = 0, o = s.weights.length; a < o; a++)
                          i.morphTargetInfluences[a] = s.weights[a];
                    }),
                  a
                );
              });
        }
        loadNode(i) {
          let a = this.json,
            o = a.nodes[i],
            s = this._loadNodeShallow(i),
            u = [],
            p = o.children || [];
          for (let i = 0, a = p.length; i < a; i++)
            u.push(this.getDependency("node", p[i]));
          let A =
            void 0 === o.skin
              ? Promise.resolve(null)
              : this.getDependency("skin", o.skin);
          return Promise.all([s, Promise.all(u), A]).then(function (i) {
            let a = i[0],
              o = i[1],
              s = i[2];
            null !== s &&
              a.traverse(function (i) {
                i.isSkinnedMesh && i.bind(s, $);
              });
            for (let i = 0, s = o.length; i < s; i++) a.add(o[i]);
            return a;
          });
        }
        _loadNodeShallow(i) {
          let a = this.json,
            o = this.extensions,
            s = this;
          if (void 0 !== this.nodeCache[i]) return this.nodeCache[i];
          let p = a.nodes[i],
            A = p.name ? s.createUniqueName(p.name) : "",
            B = [],
            S = s._invokeOne(function (a) {
              return a.createNodeMesh && a.createNodeMesh(i);
            });
          return (
            S && B.push(S),
            void 0 !== p.camera &&
              B.push(
                s.getDependency("camera", p.camera).then(function (i) {
                  return s._getNodeRef(s.cameraCache, p.camera, i);
                })
              ),
            s
              ._invokeAll(function (a) {
                return a.createNodeAttachment && a.createNodeAttachment(i);
              })
              .forEach(function (i) {
                B.push(i);
              }),
            (this.nodeCache[i] = Promise.all(B).then(function (a) {
              let B;
              if (
                (B =
                  !0 === p.isBone
                    ? new u.N$j()
                    : a.length > 1
                    ? new u.ZAu()
                    : 1 === a.length
                    ? a[0]
                    : new u.Tme()) !== a[0]
              )
                for (let i = 0, o = a.length; i < o; i++) B.add(a[i]);
              if (
                (p.name && ((B.userData.name = p.name), (B.name = A)),
                assignExtrasToUserData(B, p),
                p.extensions && addUnknownExtensionsToUserData(o, B, p),
                void 0 !== p.matrix)
              ) {
                let i = new u.yGw();
                i.fromArray(p.matrix), B.applyMatrix4(i);
              } else void 0 !== p.translation && B.position.fromArray(p.translation), void 0 !== p.rotation && B.quaternion.fromArray(p.rotation), void 0 !== p.scale && B.scale.fromArray(p.scale);
              return (
                s.associations.has(B) || s.associations.set(B, {}),
                (s.associations.get(B).nodes = i),
                B
              );
            })),
            this.nodeCache[i]
          );
        }
        loadScene(i) {
          let a = this.extensions,
            o = this.json.scenes[i],
            s = this,
            p = new u.ZAu();
          o.name && (p.name = s.createUniqueName(o.name)),
            assignExtrasToUserData(p, o),
            o.extensions && addUnknownExtensionsToUserData(a, p, o);
          let A = o.nodes || [],
            B = [];
          for (let i = 0, a = A.length; i < a; i++)
            B.push(s.getDependency("node", A[i]));
          return Promise.all(B).then(function (i) {
            for (let a = 0, o = i.length; a < o; a++) p.add(i[a]);
            return (
              (s.associations = ((i) => {
                let a = new Map();
                for (let [i, o] of s.associations)
                  (i instanceof u.F5T || i instanceof u.xEZ) && a.set(i, o);
                return (
                  i.traverse((i) => {
                    let o = s.associations.get(i);
                    null != o && a.set(i, o);
                  }),
                  a
                );
              })(p)),
              p
            );
          });
        }
        _createAnimationTracks(i, a, o, s, p) {
          let A;
          let B = [],
            S = i.name ? i.name : i.uuid,
            w = [];
          switch (
            (Y[p.path] === Y.weights
              ? i.traverse(function (i) {
                  i.morphTargetInfluences && w.push(i.name ? i.name : i.uuid);
                })
              : w.push(S),
            Y[p.path])
          ) {
            case Y.weights:
              A = u.dUE;
              break;
            case Y.rotation:
              A = u.iLg;
              break;
            case Y.position:
            case Y.scale:
              A = u.yC1;
              break;
            default:
              A = 1 === o.itemSize ? u.dUE : u.yC1;
          }
          let F = void 0 !== s.interpolation ? V[s.interpolation] : u.NMF,
            L = this._getArrayFromAccessor(o);
          for (let i = 0, o = w.length; i < o; i++) {
            let o = new A(w[i] + "." + Y[p.path], a.array, L, F);
            "CUBICSPLINE" === s.interpolation &&
              this._createCubicSplineTrackInterpolant(o),
              B.push(o);
          }
          return B;
        }
        _getArrayFromAccessor(i) {
          let a = i.array;
          if (i.normalized) {
            let i = getNormalizedComponentScale(a.constructor),
              o = new Float32Array(a.length);
            for (let s = 0, u = a.length; s < u; s++) o[s] = a[s] * i;
            a = o;
          }
          return a;
        }
        _createCubicSplineTrackInterpolant(i) {
          (i.createInterpolant = function (i) {
            let a =
              this instanceof u.iLg
                ? GLTFCubicSplineQuaternionInterpolant
                : GLTFCubicSplineInterpolant;
            return new a(this.times, this.values, this.getValueSize() / 3, i);
          }),
            (i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
              !0);
        }
      };
      function addPrimitiveAttributes(i, a, o) {
        let s = a.attributes,
          p = [];
        for (let a in s) {
          let u = W[a] || a.toLowerCase();
          u in i.attributes ||
            p.push(
              (function (a, s) {
                return o.getDependency("accessor", a).then(function (a) {
                  i.setAttribute(s, a);
                });
              })(s[a], u)
            );
        }
        if (void 0 !== a.indices && !i.index) {
          let s = o.getDependency("accessor", a.indices).then(function (a) {
            i.setIndex(a);
          });
          p.push(s);
        }
        return (
          assignExtrasToUserData(i, a),
          !(function (i, a, o) {
            let s = a.attributes,
              p = new u.ZzF();
            if (void 0 === s.POSITION) return;
            {
              let i = o.json.accessors[s.POSITION],
                a = i.min,
                A = i.max;
              if (void 0 !== a && void 0 !== A) {
                if (
                  (p.set(
                    new u.Pa4(a[0], a[1], a[2]),
                    new u.Pa4(A[0], A[1], A[2])
                  ),
                  i.normalized)
                ) {
                  let a = getNormalizedComponentScale(U[i.componentType]);
                  p.min.multiplyScalar(a), p.max.multiplyScalar(a);
                }
              } else {
                console.warn(
                  "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                );
                return;
              }
            }
            let A = a.targets;
            if (void 0 !== A) {
              let i = new u.Pa4(),
                a = new u.Pa4();
              for (let s = 0, u = A.length; s < u; s++) {
                let u = A[s];
                if (void 0 !== u.POSITION) {
                  let s = o.json.accessors[u.POSITION],
                    p = s.min,
                    A = s.max;
                  if (void 0 !== p && void 0 !== A) {
                    if (
                      (a.setX(Math.max(Math.abs(p[0]), Math.abs(A[0]))),
                      a.setY(Math.max(Math.abs(p[1]), Math.abs(A[1]))),
                      a.setZ(Math.max(Math.abs(p[2]), Math.abs(A[2]))),
                      s.normalized)
                    ) {
                      let i = getNormalizedComponentScale(U[s.componentType]);
                      a.multiplyScalar(i);
                    }
                    i.max(a);
                  } else
                    console.warn(
                      "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                    );
                }
              }
              p.expandByVector(i);
            }
            i.boundingBox = p;
            let B = new u.aLr();
            p.getCenter(B.center),
              (B.radius = p.min.distanceTo(p.max) / 2),
              (i.boundingSphere = B);
          })(i, a, o),
          Promise.all(p).then(function () {
            return void 0 !== a.targets
              ? (function (i, a, o) {
                  let s = !1,
                    u = !1,
                    p = !1;
                  for (let i = 0, o = a.length; i < o; i++) {
                    let o = a[i];
                    if (
                      (void 0 !== o.POSITION && (s = !0),
                      void 0 !== o.NORMAL && (u = !0),
                      void 0 !== o.COLOR_0 && (p = !0),
                      s && u && p)
                    )
                      break;
                  }
                  if (!s && !u && !p) return Promise.resolve(i);
                  let A = [],
                    B = [],
                    S = [];
                  for (let w = 0, F = a.length; w < F; w++) {
                    let F = a[w];
                    if (s) {
                      let a =
                        void 0 !== F.POSITION
                          ? o.getDependency("accessor", F.POSITION)
                          : i.attributes.position;
                      A.push(a);
                    }
                    if (u) {
                      let a =
                        void 0 !== F.NORMAL
                          ? o.getDependency("accessor", F.NORMAL)
                          : i.attributes.normal;
                      B.push(a);
                    }
                    if (p) {
                      let a =
                        void 0 !== F.COLOR_0
                          ? o.getDependency("accessor", F.COLOR_0)
                          : i.attributes.color;
                      S.push(a);
                    }
                  }
                  return Promise.all([
                    Promise.all(A),
                    Promise.all(B),
                    Promise.all(S),
                  ]).then(function (a) {
                    let o = a[0],
                      A = a[1],
                      B = a[2];
                    return (
                      s && (i.morphAttributes.position = o),
                      u && (i.morphAttributes.normal = A),
                      p && (i.morphAttributes.color = B),
                      (i.morphTargetsRelative = !0),
                      i
                    );
                  });
                })(i, a.targets, o)
              : i;
          })
        );
      }
      var et = o(5319);
      let en = null,
        er = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
      function extensions(i = !0, a = !0, o) {
        return (s) => {
          o && o(s),
            i &&
              (en || (en = new DRACOLoader()),
              en.setDecoderPath("string" == typeof i ? i : er),
              s.setDRACOLoader(en)),
            a &&
              s.setMeshoptDecoder(
                "function" == typeof MeshoptDecoder
                  ? MeshoptDecoder()
                  : MeshoptDecoder
              );
        };
      }
      let useGLTF = (i, a, o, s) =>
        (0, et.H)(GLTFLoader, i, extensions(a, o, s));
      (useGLTF.preload = (i, a, o, s) =>
        et.H.preload(GLTFLoader, i, extensions(a, o, s))),
        (useGLTF.clear = (i) => et.H.clear(GLTFLoader, i)),
        (useGLTF.setDecoderPath = (i) => {
          er = i;
        });
    },
    5319: function (i, a, o) {
      "use strict";
      let s, u, p;
      o.d(a, {
        B: function () {
          return Block;
        },
        D: function () {
          return useThree;
        },
        E: function () {
          return ErrorBoundary;
        },
        F: function () {
          return useFrame;
        },
        H: function () {
          return useLoader;
        },
        a: function () {
          return q;
        },
        b: function () {
          return createRoot;
        },
        c: function () {
          return createPointerEvents;
        },
        d: function () {
          return unmountComponentAtNode;
        },
        e: function () {
          return extend;
        },
        i: function () {
          return isRef;
        },
        u: function () {
          return useMutableCallback;
        },
      });
      var A,
        B,
        S = o(4250),
        w = o(9477),
        F = o(7294),
        L = o(2576);
      let _ =
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        N = _ ? F.useEffect : F.useLayoutEffect,
        isPromise = (i) => "object" == typeof i && "function" == typeof i.then,
        U = [];
      function shallowEqualArrays(i, a, o = (i, a) => i === a) {
        if (i === a) return !0;
        if (!i || !a) return !1;
        let s = i.length;
        if (a.length !== s) return !1;
        for (let u = 0; u < s; u++) if (!o(i[u], a[u])) return !1;
        return !0;
      }
      function query(i, a = null, o = !1, s = {}) {
        for (let u of (null === a && (a = [i]), U))
          if (shallowEqualArrays(a, u.keys, u.equal)) {
            if (o) return;
            if (Object.prototype.hasOwnProperty.call(u, "error")) throw u.error;
            if (Object.prototype.hasOwnProperty.call(u, "response"))
              return (
                s.lifespan &&
                  s.lifespan > 0 &&
                  (u.timeout && clearTimeout(u.timeout),
                  (u.timeout = setTimeout(u.remove, s.lifespan))),
                u.response
              );
            if (!o) throw u.promise;
          }
        let u = {
          keys: a,
          equal: s.equal,
          remove: () => {
            let i = U.indexOf(u);
            -1 !== i && U.splice(i, 1);
          },
          promise: (isPromise(i) ? i : i(...a))
            .then((i) => {
              (u.response = i),
                s.lifespan &&
                  s.lifespan > 0 &&
                  (u.timeout = setTimeout(u.remove, s.lifespan));
            })
            .catch((i) => (u.error = i)),
        };
        if ((U.push(u), !o)) throw u.promise;
      }
      let suspend = (i, a, o) => query(i, a, !1, o),
        preload = (i, a, o) => void query(i, a, !0, o),
        clear = (i) => {
          if (void 0 === i || 0 === i.length) U.splice(0, U.length);
          else {
            let a = U.find((a) => shallowEqualArrays(i, a.keys, a.equal));
            a && a.remove();
          }
        };
      var j = o(5893),
        Q = o(6525),
        X = o.n(Q),
        W = o(3840),
        Y = o(3454);
      let V = {},
        extend = (i) => void Object.assign(V, i),
        hasColorSpace = (i) => "colorSpace" in i || "outputColorSpace" in i,
        getColorManagement = () => {
          var i;
          return null != (i = V.ColorManagement) ? i : null;
        },
        isOrthographicCamera = (i) => i && i.isOrthographicCamera,
        isRef = (i) => i && i.hasOwnProperty("current"),
        q =
          "undefined" != typeof window &&
          ((null != (A = window.document) && A.createElement) ||
            (null == (B = window.navigator) ? void 0 : B.product) ===
              "ReactNative")
            ? F.useLayoutEffect
            : F.useEffect;
      function useMutableCallback(i) {
        let a = F.useRef(i);
        return q(() => void (a.current = i), [i]), a;
      }
      function Block({ set: i }) {
        return q(() => (i(new Promise(() => null)), () => i(!1)), [i]), null;
      }
      let ErrorBoundary = class ErrorBoundary extends F.Component {
        constructor(...i) {
          super(...i), (this.state = { error: !1 });
        }
        componentDidCatch(i) {
          this.props.set(i);
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      };
      ErrorBoundary.getDerivedStateFromError = () => ({ error: !0 });
      let $ = "__default",
        et = new Map(),
        isDiffSet = (i) => i && !!i.memoized && !!i.changes;
      function calculateDpr(i) {
        var a;
        let o =
          "undefined" != typeof window
            ? null != (a = window.devicePixelRatio)
              ? a
              : 2
            : 1;
        return Array.isArray(i) ? Math.min(Math.max(i[0], o), i[1]) : i;
      }
      let getRootState = (i) => {
        var a;
        return null == (a = i.__r3f) ? void 0 : a.root.getState();
      };
      function findInitialRoot(i) {
        let a = i.__r3f.root;
        for (; a.getState().previousRoot; ) a = a.getState().previousRoot;
        return a;
      }
      let en = {
        obj: (i) => i === Object(i) && !en.arr(i) && "function" != typeof i,
        fun: (i) => "function" == typeof i,
        str: (i) => "string" == typeof i,
        num: (i) => "number" == typeof i,
        boo: (i) => "boolean" == typeof i,
        und: (i) => void 0 === i,
        arr: (i) => Array.isArray(i),
        equ(
          i,
          a,
          {
            arrays: o = "shallow",
            objects: s = "reference",
            strict: u = !0,
          } = {}
        ) {
          let p;
          if (typeof i != typeof a || !!i != !!a) return !1;
          if (en.str(i) || en.num(i) || en.boo(i)) return i === a;
          let A = en.obj(i);
          if (A && "reference" === s) return i === a;
          let B = en.arr(i);
          if (B && "reference" === o) return i === a;
          if ((B || A) && i === a) return !0;
          for (p in i) if (!(p in a)) return !1;
          if (A && "shallow" === o && "shallow" === s) {
            for (p in u ? a : i)
              if (!en.equ(i[p], a[p], { strict: u, objects: "reference" }))
                return !1;
          } else for (p in u ? a : i) if (i[p] !== a[p]) return !1;
          if (en.und(p)) {
            if (
              (B && 0 === i.length && 0 === a.length) ||
              (A && 0 === Object.keys(i).length && 0 === Object.keys(a).length)
            )
              return !0;
            if (i !== a) return !1;
          }
          return !0;
        },
      };
      function prepare(i, a) {
        return (
          (i.__r3f = {
            type: "",
            root: null,
            previousAttach: null,
            memoizedProps: {},
            eventCount: 0,
            handlers: {},
            objects: [],
            parent: null,
            ...a,
          }),
          i
        );
      }
      function resolve(i, a) {
        let o = i;
        if (!a.includes("-")) return { target: o, key: a };
        {
          let s = a.split("-"),
            u = s.pop();
          return { target: (o = s.reduce((i, a) => i[a], i)), key: u };
        }
      }
      let er = /-\d+$/;
      function attach(i, a, o) {
        if (en.str(o)) {
          if (er.test(o)) {
            let a = o.replace(er, ""),
              { target: s, key: u } = resolve(i, a);
            Array.isArray(s[u]) || (s[u] = []);
          }
          let { target: s, key: u } = resolve(i, o);
          (a.__r3f.previousAttach = s[u]), (s[u] = a);
        } else a.__r3f.previousAttach = o(i, a);
      }
      function detach(i, a, o) {
        var s, u;
        if (en.str(o)) {
          let { target: s, key: u } = resolve(i, o),
            p = a.__r3f.previousAttach;
          void 0 === p ? delete s[u] : (s[u] = p);
        } else
          null == (s = a.__r3f) ||
            null == s.previousAttach ||
            s.previousAttach(i, a);
        null == (u = a.__r3f) || delete u.previousAttach;
      }
      function diffProps(
        i,
        { children: a, key: o, ref: s, ...u },
        { children: p, key: A, ref: B, ...S } = {},
        w = !1
      ) {
        let F = i.__r3f,
          L = Object.entries(u),
          _ = [];
        if (w) {
          let i = Object.keys(S);
          for (let a = 0; a < i.length; a++)
            u.hasOwnProperty(i[a]) || L.unshift([i[a], $ + "remove"]);
        }
        L.forEach(([a, o]) => {
          var s;
          if (
            (null != (s = i.__r3f) && s.primitive && "object" === a) ||
            en.equ(o, S[a])
          )
            return;
          if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(a))
            return _.push([a, o, !0, []]);
          let p = [];
          for (let i in (a.includes("-") && (p = a.split("-")),
          _.push([a, o, !1, p]),
          u)) {
            let o = u[i];
            i.startsWith(`${a}-`) && _.push([i, o, !1, i.split("-")]);
          }
        });
        let N = { ...u };
        return (
          null != F &&
            F.memoizedProps &&
            null != F &&
            F.memoizedProps.args &&
            (N.args = F.memoizedProps.args),
          null != F &&
            F.memoizedProps &&
            null != F &&
            F.memoizedProps.attach &&
            (N.attach = F.memoizedProps.attach),
          { memoized: N, changes: _ }
        );
      }
      let ea = void 0 !== Y && !1;
      function applyProps$1(i, a) {
        var o, s, u;
        let p = i.__r3f,
          A = null == p ? void 0 : p.root,
          B = null == A ? void 0 : null == A.getState ? void 0 : A.getState(),
          { memoized: w, changes: F } = isDiffSet(a) ? a : diffProps(i, a),
          L = null == p ? void 0 : p.eventCount;
        i.__r3f && (i.__r3f.memoizedProps = w);
        for (let a = 0; a < F.length; a++) {
          let [o, A, w, L] = F[a];
          if (hasColorSpace(i)) {
            let i = "srgb",
              a = "srgb-linear";
            "encoding" === o
              ? ((o = "colorSpace"), (A = 3001 === A ? i : a))
              : "outputEncoding" === o &&
                ((o = "outputColorSpace"), (A = 3001 === A ? i : a));
          }
          let _ = i,
            N = _[o];
          if (L.length && !((N = L.reduce((i, a) => i[a], i)) && N.set)) {
            let [a, ...s] = L.reverse();
            (_ = s.reverse().reduce((i, a) => i[a], i)), (o = a);
          }
          if (A === $ + "remove") {
            if (_.constructor) {
              let i = et.get(_.constructor);
              i || ((i = new _.constructor()), et.set(_.constructor, i)),
                (A = i[o]);
            } else A = 0;
          }
          if (w && p)
            A ? (p.handlers[o] = A) : delete p.handlers[o],
              (p.eventCount = Object.keys(p.handlers).length);
          else if (N && N.set && (N.copy || N instanceof S.S9g)) {
            if (Array.isArray(A)) N.fromArray ? N.fromArray(A) : N.set(...A);
            else if (
              N.copy &&
              A &&
              A.constructor &&
              (ea
                ? N.constructor.name === A.constructor.name
                : N.constructor === A.constructor)
            )
              N.copy(A);
            else if (void 0 !== A) {
              let i = null == (s = N) ? void 0 : s.isColor;
              !i && N.setScalar
                ? N.setScalar(A)
                : N instanceof S.S9g && A instanceof S.S9g
                ? (N.mask = A.mask)
                : N.set(A),
                !getColorManagement() &&
                  B &&
                  !B.linear &&
                  i &&
                  N.convertSRGBToLinear();
            }
          } else if (
            ((_[o] = A),
            null != (u = _[o]) &&
              u.isTexture &&
              _[o].format === S.wk1 &&
              _[o].type === S.ywz &&
              B)
          ) {
            let i = _[o];
            hasColorSpace(i) && hasColorSpace(B.gl)
              ? (i.colorSpace = B.gl.outputColorSpace)
              : (i.encoding = B.gl.outputEncoding);
          }
          invalidateInstance(i);
        }
        if (p && p.parent && i.raycast && L !== p.eventCount) {
          let a = findInitialRoot(i).getState().internal,
            o = a.interaction.indexOf(i);
          o > -1 && a.interaction.splice(o, 1),
            p.eventCount && a.interaction.push(i);
        }
        let _ = 1 === F.length && "onUpdate" === F[0][0];
        return (
          !_ &&
            F.length &&
            null != (o = i.__r3f) &&
            o.parent &&
            updateInstance(i),
          i
        );
      }
      function invalidateInstance(i) {
        var a, o;
        let s =
          null == (a = i.__r3f)
            ? void 0
            : null == (o = a.root)
            ? void 0
            : null == o.getState
            ? void 0
            : o.getState();
        s && 0 === s.internal.frames && s.invalidate();
      }
      function updateInstance(i) {
        null == i.onUpdate || i.onUpdate(i);
      }
      function makeId(i) {
        return (i.eventObject || i.object).uuid + "/" + i.index + i.instanceId;
      }
      function releaseInternalPointerCapture(i, a, o, s) {
        let u = o.get(a);
        u &&
          (o.delete(a),
          0 === o.size && (i.delete(s), u.target.releasePointerCapture(s)));
      }
      let isRenderer = (i) => !!(null != i && i.render),
        eo = F.createContext(null),
        events_776716bd_esm_createStore = (i, a) => {
          let o = (function (i) {
              let a =
                  "function" == typeof i
                    ? (function (i) {
                        let a;
                        let o = new Set(),
                          setState = (i, s) => {
                            let u = "function" == typeof i ? i(a) : i;
                            if (u !== a) {
                              let i = a;
                              (a = s ? u : Object.assign({}, a, u)),
                                o.forEach((o) => o(a, i));
                            }
                          },
                          getState = () => a,
                          subscribeWithSelector = (
                            i,
                            s = getState,
                            u = Object.is
                          ) => {
                            console.warn(
                              "[DEPRECATED] Please use `subscribeWithSelector` middleware"
                            );
                            let p = s(a);
                            function listenerToAdd() {
                              let o = s(a);
                              if (!u(p, o)) {
                                let a = p;
                                i((p = o), a);
                              }
                            }
                            return (
                              o.add(listenerToAdd),
                              () => o.delete(listenerToAdd)
                            );
                          },
                          s = {
                            setState,
                            getState,
                            subscribe: (i, a, s) =>
                              a || s
                                ? subscribeWithSelector(i, a, s)
                                : (o.add(i), () => o.delete(i)),
                            destroy: () => o.clear(),
                          };
                        return (a = i(setState, getState, s)), s;
                      })(i)
                    : i,
                useStore = (i = a.getState, o = Object.is) => {
                  let s;
                  let [, u] = (0, F.useReducer)((i) => i + 1, 0),
                    p = a.getState(),
                    A = (0, F.useRef)(p),
                    B = (0, F.useRef)(i),
                    S = (0, F.useRef)(o),
                    w = (0, F.useRef)(!1),
                    L = (0, F.useRef)();
                  void 0 === L.current && (L.current = i(p));
                  let _ = !1;
                  (A.current !== p ||
                    B.current !== i ||
                    S.current !== o ||
                    w.current) &&
                    ((s = i(p)), (_ = !o(L.current, s))),
                    N(() => {
                      _ && (L.current = s),
                        (A.current = p),
                        (B.current = i),
                        (S.current = o),
                        (w.current = !1);
                    });
                  let U = (0, F.useRef)(p);
                  N(() => {
                    let listener = () => {
                        try {
                          let i = a.getState(),
                            o = B.current(i);
                          S.current(L.current, o) ||
                            ((A.current = i), (L.current = o), u());
                        } catch (i) {
                          (w.current = !0), u();
                        }
                      },
                      i = a.subscribe(listener);
                    return a.getState() !== U.current && listener(), i;
                  }, []);
                  let j = _ ? s : L.current;
                  return (0, F.useDebugValue)(j), j;
                };
              return (
                Object.assign(useStore, a),
                (useStore[Symbol.iterator] = function () {
                  console.warn(
                    "[useStore, api] = create() is deprecated and will be removed in v4"
                  );
                  let i = [useStore, a];
                  return {
                    next() {
                      let a = i.length <= 0;
                      return { value: i.shift(), done: a };
                    },
                  };
                }),
                useStore
              );
            })((o, s) => {
              let u;
              let p = new S.Pa4(),
                A = new S.Pa4(),
                B = new S.Pa4();
              function getCurrentViewport(i = s().camera, a = A, o = s().size) {
                let { width: u, height: S, top: w, left: F } = o,
                  L = u / S;
                a.isVector3 ? B.copy(a) : B.set(...a);
                let _ = i.getWorldPosition(p).distanceTo(B);
                if (isOrthographicCamera(i))
                  return {
                    width: u / i.zoom,
                    height: S / i.zoom,
                    top: w,
                    left: F,
                    factor: 1,
                    distance: _,
                    aspect: L,
                  };
                {
                  let a = (i.fov * Math.PI) / 180,
                    o = 2 * Math.tan(a / 2) * _,
                    s = o * (u / S);
                  return {
                    width: s,
                    height: o,
                    top: w,
                    left: F,
                    factor: u / s,
                    distance: _,
                    aspect: L,
                  };
                }
              }
              let setPerformanceCurrent = (i) =>
                  o((a) => ({ performance: { ...a.performance, current: i } })),
                w = new S.FM8(),
                L = {
                  set: o,
                  get: s,
                  gl: null,
                  camera: null,
                  raycaster: null,
                  events: { priority: 1, enabled: !0, connected: !1 },
                  xr: null,
                  scene: null,
                  invalidate: (a = 1) => i(s(), a),
                  advance: (i, o) => a(i, o, s()),
                  legacy: !1,
                  linear: !1,
                  flat: !1,
                  controls: null,
                  clock: new S.SUY(),
                  pointer: w,
                  mouse: w,
                  frameloop: "always",
                  onPointerMissed: void 0,
                  performance: {
                    current: 1,
                    min: 0.5,
                    max: 1,
                    debounce: 200,
                    regress: () => {
                      let i = s();
                      u && clearTimeout(u),
                        i.performance.current !== i.performance.min &&
                          setPerformanceCurrent(i.performance.min),
                        (u = setTimeout(
                          () => setPerformanceCurrent(s().performance.max),
                          i.performance.debounce
                        ));
                    },
                  },
                  size: {
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    updateStyle: !1,
                  },
                  viewport: {
                    initialDpr: 0,
                    dpr: 0,
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    aspect: 0,
                    distance: 0,
                    factor: 0,
                    getCurrentViewport,
                  },
                  setEvents: (i) =>
                    o((a) => ({ ...a, events: { ...a.events, ...i } })),
                  setSize: (i, a, u, p, B) => {
                    let S = s().camera,
                      w = {
                        width: i,
                        height: a,
                        top: p || 0,
                        left: B || 0,
                        updateStyle: u,
                      };
                    o((i) => ({
                      size: w,
                      viewport: {
                        ...i.viewport,
                        ...getCurrentViewport(S, A, w),
                      },
                    }));
                  },
                  setDpr: (i) =>
                    o((a) => {
                      let o = calculateDpr(i);
                      return {
                        viewport: {
                          ...a.viewport,
                          dpr: o,
                          initialDpr: a.viewport.initialDpr || o,
                        },
                      };
                    }),
                  setFrameloop: (i = "always") => {
                    let a = s().clock;
                    a.stop(),
                      (a.elapsedTime = 0),
                      "never" !== i && (a.start(), (a.elapsedTime = 0)),
                      o(() => ({ frameloop: i }));
                  },
                  previousRoot: void 0,
                  internal: {
                    active: !1,
                    priority: 0,
                    frames: 0,
                    lastEvent: F.createRef(),
                    interaction: [],
                    hovered: new Map(),
                    subscribers: [],
                    initialClick: [0, 0],
                    initialHits: [],
                    capturedMap: new Map(),
                    subscribe: (i, a, o) => {
                      let u = s().internal;
                      return (
                        (u.priority = u.priority + (a > 0 ? 1 : 0)),
                        u.subscribers.push({ ref: i, priority: a, store: o }),
                        (u.subscribers = u.subscribers.sort(
                          (i, a) => i.priority - a.priority
                        )),
                        () => {
                          let o = s().internal;
                          null != o &&
                            o.subscribers &&
                            ((o.priority = o.priority - (a > 0 ? 1 : 0)),
                            (o.subscribers = o.subscribers.filter(
                              (a) => a.ref !== i
                            )));
                        }
                      );
                    },
                  },
                };
              return L;
            }),
            s = o.getState(),
            u = s.size,
            p = s.viewport.dpr,
            A = s.camera;
          return (
            o.subscribe(() => {
              let {
                camera: i,
                size: a,
                viewport: s,
                gl: B,
                set: S,
              } = o.getState();
              if (a.width !== u.width || a.height !== u.height || s.dpr !== p) {
                var w;
                (u = a),
                  (p = s.dpr),
                  i.manual ||
                    (isOrthographicCamera(i)
                      ? ((i.left = -(a.width / 2)),
                        (i.right = a.width / 2),
                        (i.top = a.height / 2),
                        (i.bottom = -(a.height / 2)))
                      : (i.aspect = a.width / a.height),
                    i.updateProjectionMatrix(),
                    i.updateMatrixWorld()),
                  B.setPixelRatio(s.dpr);
                let o =
                  null != (w = a.updateStyle)
                    ? w
                    : "undefined" != typeof HTMLCanvasElement &&
                      B.domElement instanceof HTMLCanvasElement;
                B.setSize(a.width, a.height, o);
              }
              i !== A &&
                ((A = i),
                S((a) => ({
                  viewport: {
                    ...a.viewport,
                    ...a.viewport.getCurrentViewport(i),
                  },
                })));
            }),
            o.subscribe((a) => i(a)),
            o
          );
        },
        el = new Set(),
        es = new Set(),
        eu = new Set();
      function run(i, a) {
        if (i.size) for (let { callback: o } of i.values()) o(a);
      }
      function flushGlobalEffects(i, a) {
        switch (i) {
          case "before":
            return run(el, a);
          case "after":
            return run(es, a);
          case "tail":
            return run(eu, a);
        }
      }
      function render$1(i, a, o) {
        let A = a.clock.getDelta();
        for (
          "never" === a.frameloop &&
            "number" == typeof i &&
            ((A = i - a.clock.elapsedTime),
            (a.clock.oldTime = a.clock.elapsedTime),
            (a.clock.elapsedTime = i)),
            u = a.internal.subscribers,
            s = 0;
          s < u.length;
          s++
        )
          (p = u[s]).ref.current(p.store.getState(), A, o);
        return (
          !a.internal.priority && a.gl.render && a.gl.render(a.scene, a.camera),
          (a.internal.frames = Math.max(0, a.internal.frames - 1)),
          "always" === a.frameloop ? 1 : a.internal.frames
        );
      }
      function useStore() {
        let i = F.useContext(eo);
        if (!i)
          throw Error(
            "R3F: Hooks can only be used within the Canvas component!"
          );
        return i;
      }
      function useThree(i = (i) => i, a) {
        return useStore()(i, a);
      }
      function useFrame(i, a = 0) {
        let o = useStore(),
          s = o.getState().internal.subscribe,
          u = useMutableCallback(i);
        return q(() => s(u, a, o), [a, s, o]), null;
      }
      let ec = new WeakMap();
      function loadingFn(i, a) {
        return function (o, ...s) {
          let u = ec.get(o);
          return (
            u || ((u = new o()), ec.set(o, u)),
            i && i(u),
            Promise.all(
              s.map(
                (i) =>
                  new Promise((o, s) =>
                    u.load(
                      i,
                      (i) => {
                        i.scene &&
                          Object.assign(
                            i,
                            (function (i) {
                              let a = { nodes: {}, materials: {} };
                              return (
                                i &&
                                  i.traverse((i) => {
                                    i.name && (a.nodes[i.name] = i),
                                      i.material &&
                                        !a.materials[i.material.name] &&
                                        (a.materials[i.material.name] =
                                          i.material);
                                  }),
                                a
                              );
                            })(i.scene)
                          ),
                          o(i);
                      },
                      a,
                      (a) =>
                        s(
                          Error(
                            `Could not load ${i}: ${
                              null == a ? void 0 : a.message
                            }`
                          )
                        )
                    )
                  )
              )
            )
          );
        };
      }
      function useLoader(i, a, o, s) {
        let u = Array.isArray(a) ? a : [a],
          p = suspend(loadingFn(o, s), [i, ...u], { equal: en.equ });
        return Array.isArray(a) ? p : p[0];
      }
      (useLoader.preload = function (i, a, o) {
        let s = Array.isArray(a) ? a : [a];
        return preload(loadingFn(o), [i, ...s]);
      }),
        (useLoader.clear = function (i, a) {
          let o = Array.isArray(a) ? a : [a];
          return clear([i, ...o]);
        });
      let ed = new Map(),
        { invalidate: eh, advance: ep } = (function (i) {
          let a,
            o,
            s,
            u = !1,
            p = !1;
          function loop(A) {
            for (let S of ((o = requestAnimationFrame(loop)),
            (u = !0),
            (a = 0),
            flushGlobalEffects("before", A),
            (p = !0),
            i.values())) {
              var B;
              (s = S.store.getState()).internal.active &&
                ("always" === s.frameloop || s.internal.frames > 0) &&
                !(null != (B = s.gl.xr) && B.isPresenting) &&
                (a += render$1(A, s));
            }
            if (((p = !1), flushGlobalEffects("after", A), 0 === a))
              return (
                flushGlobalEffects("tail", A), (u = !1), cancelAnimationFrame(o)
              );
          }
          return {
            loop,
            invalidate: function invalidate(a, o = 1) {
              var s;
              if (!a)
                return i.forEach((i) => invalidate(i.store.getState(), o));
              (null != (s = a.gl.xr) && s.isPresenting) ||
                !a.internal.active ||
                "never" === a.frameloop ||
                (o > 1
                  ? (a.internal.frames = Math.min(60, a.internal.frames + o))
                  : p
                  ? (a.internal.frames = 2)
                  : (a.internal.frames = 1),
                u || ((u = !0), requestAnimationFrame(loop)));
            },
            advance: function (a, o = !0, s, u) {
              if ((o && flushGlobalEffects("before", a), s)) render$1(a, s, u);
              else for (let o of i.values()) render$1(a, o.store.getState());
              o && flushGlobalEffects("after", a);
            },
          };
        })(ed),
        { reconciler: em, applyProps: eA } = (function (i, a) {
          function createInstance(i, { args: a = [], attach: o, ...s }, u) {
            let p,
              A = `${i[0].toUpperCase()}${i.slice(1)}`;
            if ("primitive" === i) {
              if (void 0 === s.object)
                throw Error("R3F: Primitives without 'object' are invalid!");
              let a = s.object;
              p = prepare(a, { type: i, root: u, attach: o, primitive: !0 });
            } else {
              let s = V[A];
              if (!s)
                throw Error(
                  `R3F: ${A} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`
                );
              if (!Array.isArray(a))
                throw Error("R3F: The args prop must be an array!");
              p = prepare(new s(...a), {
                type: i,
                root: u,
                attach: o,
                memoizedProps: { args: a },
              });
            }
            return (
              void 0 === p.__r3f.attach &&
                (p.isBufferGeometry
                  ? (p.__r3f.attach = "geometry")
                  : p.isMaterial && (p.__r3f.attach = "material")),
              "inject" !== A && applyProps$1(p, s),
              p
            );
          }
          function appendChild(i, a) {
            let o = !1;
            if (a) {
              var s, u;
              null != (s = a.__r3f) && s.attach
                ? attach(i, a, a.__r3f.attach)
                : a.isObject3D && i.isObject3D && (i.add(a), (o = !0)),
                o || null == (u = i.__r3f) || u.objects.push(a),
                a.__r3f || prepare(a, {}),
                (a.__r3f.parent = i),
                updateInstance(a),
                invalidateInstance(a);
            }
          }
          function insertBefore(i, a, o) {
            let s = !1;
            if (a) {
              var u, p;
              if (null != (u = a.__r3f) && u.attach)
                attach(i, a, a.__r3f.attach);
              else if (a.isObject3D && i.isObject3D) {
                (a.parent = i),
                  a.dispatchEvent({ type: "added" }),
                  i.dispatchEvent({ type: "childadded", child: a });
                let u = i.children.filter((i) => i !== a),
                  p = u.indexOf(o);
                (i.children = [...u.slice(0, p), a, ...u.slice(p)]), (s = !0);
              }
              s || null == (p = i.__r3f) || p.objects.push(a),
                a.__r3f || prepare(a, {}),
                (a.__r3f.parent = i),
                updateInstance(a),
                invalidateInstance(a);
            }
          }
          function removeRecursive(i, a, o = !1) {
            i && [...i].forEach((i) => removeChild(a, i, o));
          }
          function removeChild(i, a, o) {
            if (a) {
              var s, u, p, A, B;
              a.__r3f && (a.__r3f.parent = null),
                null != (s = i.__r3f) &&
                  s.objects &&
                  (i.__r3f.objects = i.__r3f.objects.filter((i) => i !== a)),
                null != (u = a.__r3f) && u.attach
                  ? detach(i, a, a.__r3f.attach)
                  : a.isObject3D &&
                    i.isObject3D &&
                    (i.remove(a),
                    null != (A = a.__r3f) &&
                      A.root &&
                      (function (i, a) {
                        let { internal: o } = i.getState();
                        (o.interaction = o.interaction.filter((i) => i !== a)),
                          (o.initialHits = o.initialHits.filter(
                            (i) => i !== a
                          )),
                          o.hovered.forEach((i, s) => {
                            (i.eventObject === a || i.object === a) &&
                              o.hovered.delete(s);
                          }),
                          o.capturedMap.forEach((i, s) => {
                            releaseInternalPointerCapture(
                              o.capturedMap,
                              a,
                              i,
                              s
                            );
                          });
                      })(findInitialRoot(a), a));
              let S = null == (p = a.__r3f) ? void 0 : p.primitive,
                w = !S && (void 0 === o ? null !== a.dispose : o);
              if (
                (S ||
                  (removeRecursive(
                    null == (B = a.__r3f) ? void 0 : B.objects,
                    a,
                    w
                  ),
                  removeRecursive(a.children, a, w)),
                delete a.__r3f,
                w && a.dispose && "Scene" !== a.type)
              ) {
                let callback = () => {
                  try {
                    a.dispose();
                  } catch (i) {}
                };
                "undefined" == typeof IS_REACT_ACT_ENVIRONMENT
                  ? (0, W.unstable_scheduleCallback)(
                      W.unstable_IdlePriority,
                      callback
                    )
                  : callback();
              }
              invalidateInstance(i);
            }
          }
          let handleTextInstance = () => {},
            o = X()({
              createInstance,
              removeChild,
              appendChild,
              appendInitialChild: appendChild,
              insertBefore,
              supportsMutation: !0,
              isPrimaryRenderer: !1,
              supportsPersistence: !1,
              supportsHydration: !1,
              noTimeout: -1,
              appendChildToContainer: (i, a) => {
                if (!a) return;
                let o = i.getState().scene;
                o.__r3f && ((o.__r3f.root = i), appendChild(o, a));
              },
              removeChildFromContainer: (i, a) => {
                a && removeChild(i.getState().scene, a);
              },
              insertInContainerBefore: (i, a, o) => {
                if (!a || !o) return;
                let s = i.getState().scene;
                s.__r3f && insertBefore(s, a, o);
              },
              getRootHostContext: () => null,
              getChildHostContext: (i) => i,
              finalizeInitialChildren(i) {
                var a;
                let o = null != (a = null == i ? void 0 : i.__r3f) ? a : {};
                return !!o.handlers;
              },
              prepareUpdate(i, a, o, s) {
                var u;
                let p = null != (u = null == i ? void 0 : i.__r3f) ? u : {};
                if (p.primitive && s.object && s.object !== i) return [!0];
                {
                  let { args: a = [], children: u, ...p } = s,
                    { args: A = [], children: B, ...S } = o;
                  if (!Array.isArray(a))
                    throw Error("R3F: the args prop must be an array!");
                  if (a.some((i, a) => i !== A[a])) return [!0];
                  let w = diffProps(i, p, S, !0);
                  return w.changes.length ? [!1, w] : null;
                }
              },
              commitUpdate(i, [a, o], s, u, p, A) {
                a
                  ? (function (i, a, o, s) {
                      var u;
                      let p = null == (u = i.__r3f) ? void 0 : u.parent;
                      if (!p) return;
                      let A = createInstance(a, o, i.__r3f.root);
                      if (i.children) {
                        for (let a of i.children) a.__r3f && appendChild(A, a);
                        i.children = i.children.filter((i) => !i.__r3f);
                      }
                      if (
                        (i.__r3f.objects.forEach((i) => appendChild(A, i)),
                        (i.__r3f.objects = []),
                        i.__r3f.autoRemovedBeforeAppend || removeChild(p, i),
                        A.parent && (A.__r3f.autoRemovedBeforeAppend = !0),
                        appendChild(p, A),
                        A.raycast && A.__r3f.eventCount)
                      ) {
                        let i = findInitialRoot(A).getState();
                        i.internal.interaction.push(A);
                      }
                      [s, s.alternate].forEach((i) => {
                        null !== i &&
                          ((i.stateNode = A),
                          i.ref &&
                            ("function" == typeof i.ref
                              ? i.ref(A)
                              : (i.ref.current = A)));
                      });
                    })(i, s, p, A)
                  : applyProps$1(i, o);
              },
              commitMount(i, a, o, s) {
                var u;
                let p = null != (u = i.__r3f) ? u : {};
                i.raycast &&
                  p.handlers &&
                  p.eventCount &&
                  findInitialRoot(i).getState().internal.interaction.push(i);
              },
              getPublicInstance: (i) => i,
              prepareForCommit: () => null,
              preparePortalMount: (i) => prepare(i.getState().scene),
              resetAfterCommit: () => {},
              shouldSetTextContent: () => !1,
              clearContainer: () => !1,
              hideInstance(i) {
                var a;
                let { attach: o, parent: s } = null != (a = i.__r3f) ? a : {};
                o && s && detach(s, i, o),
                  i.isObject3D && (i.visible = !1),
                  invalidateInstance(i);
              },
              unhideInstance(i, a) {
                var o;
                let { attach: s, parent: u } = null != (o = i.__r3f) ? o : {};
                s && u && attach(u, i, s),
                  ((i.isObject3D && null == a.visible) || a.visible) &&
                    (i.visible = !0),
                  invalidateInstance(i);
              },
              createTextInstance: handleTextInstance,
              hideTextInstance: handleTextInstance,
              unhideTextInstance: handleTextInstance,
              getCurrentEventPriority: () => (a ? a() : L.DefaultEventPriority),
              beforeActiveInstanceBlur: () => {},
              afterActiveInstanceBlur: () => {},
              detachDeletedInstance: () => {},
              now:
                "undefined" != typeof performance && en.fun(performance.now)
                  ? performance.now
                  : en.fun(Date.now)
                  ? Date.now
                  : () => 0,
              scheduleTimeout: en.fun(setTimeout) ? setTimeout : void 0,
              cancelTimeout: en.fun(clearTimeout) ? clearTimeout : void 0,
            });
          return { reconciler: o, applyProps: applyProps$1 };
        })(0, function () {
          var i;
          let a =
            ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window);
          if (!a) return L.DefaultEventPriority;
          let o = null == (i = a.event) ? void 0 : i.type;
          switch (o) {
            case "click":
            case "contextmenu":
            case "dblclick":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
              return L.DiscreteEventPriority;
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerenter":
            case "pointerleave":
            case "wheel":
              return L.ContinuousEventPriority;
            default:
              return L.DefaultEventPriority;
          }
        }),
        eg = { objects: "shallow", strict: !1 },
        createRendererInstance = (i, a) => {
          let o = "function" == typeof i ? i(a) : i;
          return isRenderer(o)
            ? o
            : new w.WebGLRenderer({
                powerPreference: "high-performance",
                canvas: a,
                antialias: !0,
                alpha: !0,
                ...i,
              });
        };
      function createRoot(i) {
        let a, o;
        let s = ed.get(i),
          u = null == s ? void 0 : s.fiber,
          p = null == s ? void 0 : s.store;
        s && console.warn("R3F.createRoot should only be called once!");
        let A = "function" == typeof reportError ? reportError : console.error,
          B = p || events_776716bd_esm_createStore(eh, ep),
          w =
            u ||
            em.createContainer(
              B,
              L.ConcurrentRoot,
              null,
              !1,
              null,
              "",
              A,
              null
            );
        s || ed.set(i, { fiber: w, store: B });
        let F = !1;
        return {
          configure(s = {}) {
            var u, p;
            let {
                gl: A,
                size: w,
                scene: L,
                events: _,
                onCreated: N,
                shadows: U = !1,
                linear: j = !1,
                flat: Q = !1,
                legacy: X = !1,
                orthographic: W = !1,
                frameloop: Y = "always",
                dpr: V = [1, 2],
                performance: q,
                raycaster: $,
                camera: et,
                onPointerMissed: er,
              } = s,
              ea = B.getState(),
              eo = ea.gl;
            ea.gl || ea.set({ gl: (eo = createRendererInstance(A, i)) });
            let el = ea.raycaster;
            el || ea.set({ raycaster: (el = new S.iMs()) });
            let { params: es, ...eu } = $ || {};
            if (
              (en.equ(eu, el, eg) || eA(el, { ...eu }),
              en.equ(es, el.params, eg) ||
                eA(el, { params: { ...el.params, ...es } }),
              !ea.camera || (ea.camera === o && !en.equ(o, et, eg)))
            ) {
              o = et;
              let i = et instanceof S.V1s,
                a = i
                  ? et
                  : W
                  ? new S.iKG(0, 0, 0, 0, 0.1, 1e3)
                  : new S.cPb(75, 0, 0.1, 1e3);
              i ||
                ((a.position.z = 5),
                et &&
                  (eA(a, et),
                  ("aspect" in et ||
                    "left" in et ||
                    "right" in et ||
                    "bottom" in et ||
                    "top" in et) &&
                    ((a.manual = !0), a.updateProjectionMatrix())),
                ea.camera || (null != et && et.rotation) || a.lookAt(0, 0, 0)),
                ea.set({ camera: a }),
                (el.camera = a);
            }
            if (!ea.scene) {
              let i;
              null != L && L.isScene
                ? (i = L)
                : ((i = new S.xsS()), L && eA(i, L)),
                ea.set({ scene: prepare(i) });
            }
            if (!ea.xr) {
              let handleXRFrame = (i, a) => {
                  let o = B.getState();
                  "never" !== o.frameloop && ep(i, !0, o, a);
                },
                handleSessionChange = () => {
                  let i = B.getState();
                  (i.gl.xr.enabled = i.gl.xr.isPresenting),
                    i.gl.xr.setAnimationLoop(
                      i.gl.xr.isPresenting ? handleXRFrame : null
                    ),
                    i.gl.xr.isPresenting || eh(i);
                },
                i = {
                  connect() {
                    let i = B.getState().gl;
                    i.xr.addEventListener("sessionstart", handleSessionChange),
                      i.xr.addEventListener("sessionend", handleSessionChange);
                  },
                  disconnect() {
                    let i = B.getState().gl;
                    i.xr.removeEventListener(
                      "sessionstart",
                      handleSessionChange
                    ),
                      i.xr.removeEventListener(
                        "sessionend",
                        handleSessionChange
                      );
                  },
                };
              "function" ==
                typeof (null == (u = eo.xr) ? void 0 : u.addEventListener) &&
                i.connect(),
                ea.set({ xr: i });
            }
            if (eo.shadowMap) {
              let i = eo.shadowMap.enabled,
                a = eo.shadowMap.type;
              if (((eo.shadowMap.enabled = !!U), en.boo(U)))
                eo.shadowMap.type = S.ntZ;
              else if (en.str(U)) {
                let i = {
                  basic: S._MY,
                  percentage: S._iA,
                  soft: S.ntZ,
                  variance: S.dwk,
                };
                eo.shadowMap.type = null != (p = i[U]) ? p : S.ntZ;
              } else en.obj(U) && Object.assign(eo.shadowMap, U);
              (i !== eo.shadowMap.enabled || a !== eo.shadowMap.type) &&
                (eo.shadowMap.needsUpdate = !0);
            }
            let ec = getColorManagement();
            ec &&
              ("enabled" in ec
                ? (ec.enabled = !X)
                : "legacyMode" in ec && (ec.legacyMode = X)),
              F ||
                eA(eo, {
                  outputEncoding: j ? 3e3 : 3001,
                  toneMapping: Q ? S.uL9 : S.LY2,
                }),
              ea.legacy !== X && ea.set(() => ({ legacy: X })),
              ea.linear !== j && ea.set(() => ({ linear: j })),
              ea.flat !== Q && ea.set(() => ({ flat: Q })),
              !A ||
                en.fun(A) ||
                isRenderer(A) ||
                en.equ(A, eo, eg) ||
                eA(eo, A),
              _ && !ea.events.handlers && ea.set({ events: _(B) });
            let ed = (function (i, a) {
              let o =
                "undefined" != typeof HTMLCanvasElement &&
                i instanceof HTMLCanvasElement;
              if (a) {
                let {
                  width: i,
                  height: s,
                  top: u,
                  left: p,
                  updateStyle: A = o,
                } = a;
                return { width: i, height: s, top: u, left: p, updateStyle: A };
              }
              if (
                "undefined" != typeof HTMLCanvasElement &&
                i instanceof HTMLCanvasElement &&
                i.parentElement
              ) {
                let {
                  width: a,
                  height: s,
                  top: u,
                  left: p,
                } = i.parentElement.getBoundingClientRect();
                return { width: a, height: s, top: u, left: p, updateStyle: o };
              }
              return "undefined" != typeof OffscreenCanvas &&
                i instanceof OffscreenCanvas
                ? {
                    width: i.width,
                    height: i.height,
                    top: 0,
                    left: 0,
                    updateStyle: o,
                  }
                : { width: 0, height: 0, top: 0, left: 0 };
            })(i, w);
            return (
              en.equ(ed, ea.size, eg) ||
                ea.setSize(
                  ed.width,
                  ed.height,
                  ed.updateStyle,
                  ed.top,
                  ed.left
                ),
              V && ea.viewport.dpr !== calculateDpr(V) && ea.setDpr(V),
              ea.frameloop !== Y && ea.setFrameloop(Y),
              ea.onPointerMissed || ea.set({ onPointerMissed: er }),
              q &&
                !en.equ(q, ea.performance, eg) &&
                ea.set((i) => ({ performance: { ...i.performance, ...q } })),
              (a = N),
              (F = !0),
              this
            );
          },
          render(o) {
            return (
              F || this.configure(),
              em.updateContainer(
                (0, j.jsx)(Provider, {
                  store: B,
                  children: o,
                  onCreated: a,
                  rootElement: i,
                }),
                w,
                null,
                () => void 0
              ),
              B
            );
          },
          unmount() {
            unmountComponentAtNode(i);
          },
        };
      }
      function Provider({
        store: i,
        children: a,
        onCreated: o,
        rootElement: s,
      }) {
        return (
          q(() => {
            let a = i.getState();
            a.set((i) => ({ internal: { ...i.internal, active: !0 } })),
              o && o(a),
              i.getState().events.connected ||
                null == a.events.connect ||
                a.events.connect(s);
          }, []),
          (0, j.jsx)(eo.Provider, { value: i, children: a })
        );
      }
      function unmountComponentAtNode(i, a) {
        let o = ed.get(i),
          s = null == o ? void 0 : o.fiber;
        if (s) {
          let u = null == o ? void 0 : o.store.getState();
          u && (u.internal.active = !1),
            em.updateContainer(null, s, null, () => {
              u &&
                setTimeout(() => {
                  try {
                    var o, s, p, A;
                    null == u.events.disconnect || u.events.disconnect(),
                      null == (o = u.gl) ||
                        null == (s = o.renderLists) ||
                        null == s.dispose ||
                        s.dispose(),
                      null == (p = u.gl) ||
                        null == p.forceContextLoss ||
                        p.forceContextLoss(),
                      null != (A = u.gl) && A.xr && u.xr.disconnect(),
                      (function (i) {
                        for (let a in (i.dispose &&
                          "Scene" !== i.type &&
                          i.dispose(),
                        i))
                          null == a.dispose || a.dispose(), delete i[a];
                      })(u),
                      ed.delete(i),
                      a && a(i);
                  } catch (i) {}
                }, 500);
            });
        }
      }
      em.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: F.version,
      }),
        F.unstable_act;
      let eB = {
        onClick: ["click", !1],
        onContextMenu: ["contextmenu", !1],
        onDoubleClick: ["dblclick", !1],
        onWheel: ["wheel", !0],
        onPointerDown: ["pointerdown", !0],
        onPointerUp: ["pointerup", !0],
        onPointerLeave: ["pointerleave", !0],
        onPointerMove: ["pointermove", !0],
        onPointerCancel: ["pointercancel", !0],
        onLostPointerCapture: ["lostpointercapture", !0],
      };
      function createPointerEvents(i) {
        let { handlePointer: a } = (function (i) {
          function filterPointerEvents(i) {
            return i.filter((i) =>
              ["Move", "Over", "Enter", "Out", "Leave"].some((a) => {
                var o;
                return null == (o = i.__r3f)
                  ? void 0
                  : o.handlers["onPointer" + a];
              })
            );
          }
          function cancelPointer(a) {
            let { internal: o } = i.getState();
            for (let i of o.hovered.values())
              if (
                !a.length ||
                !a.find(
                  (a) =>
                    a.object === i.object &&
                    a.index === i.index &&
                    a.instanceId === i.instanceId
                )
              ) {
                let s = i.eventObject,
                  u = s.__r3f,
                  p = null == u ? void 0 : u.handlers;
                if ((o.hovered.delete(makeId(i)), null != u && u.eventCount)) {
                  let o = { ...i, intersections: a };
                  null == p.onPointerOut || p.onPointerOut(o),
                    null == p.onPointerLeave || p.onPointerLeave(o);
                }
              }
          }
          function pointerMissed(i, a) {
            for (let o = 0; o < a.length; o++) {
              let s = a[o].__r3f;
              null == s ||
                null == s.handlers.onPointerMissed ||
                s.handlers.onPointerMissed(i);
            }
          }
          return {
            handlePointer: function (a) {
              switch (a) {
                case "onPointerLeave":
                case "onPointerCancel":
                  return () => cancelPointer([]);
                case "onLostPointerCapture":
                  return (a) => {
                    let { internal: o } = i.getState();
                    "pointerId" in a &&
                      o.capturedMap.has(a.pointerId) &&
                      requestAnimationFrame(() => {
                        o.capturedMap.has(a.pointerId) &&
                          (o.capturedMap.delete(a.pointerId),
                          cancelPointer([]));
                      });
                  };
              }
              return function (o) {
                let { onPointerMissed: s, internal: u } = i.getState();
                u.lastEvent.current = o;
                let p = "onPointerMove" === a,
                  A =
                    "onClick" === a ||
                    "onContextMenu" === a ||
                    "onDoubleClick" === a,
                  B = (function (a, o) {
                    let s = i.getState(),
                      u = new Set(),
                      p = [],
                      A = o
                        ? o(s.internal.interaction)
                        : s.internal.interaction;
                    for (let i = 0; i < A.length; i++) {
                      let a = getRootState(A[i]);
                      a && (a.raycaster.camera = void 0);
                    }
                    s.previousRoot ||
                      null == s.events.compute ||
                      s.events.compute(a, s);
                    let B = A.flatMap(function (i) {
                      let o = getRootState(i);
                      if (
                        !o ||
                        !o.events.enabled ||
                        null === o.raycaster.camera
                      )
                        return [];
                      if (void 0 === o.raycaster.camera) {
                        var s;
                        null == o.events.compute ||
                          o.events.compute(
                            a,
                            o,
                            null == (s = o.previousRoot) ? void 0 : s.getState()
                          ),
                          void 0 === o.raycaster.camera &&
                            (o.raycaster.camera = null);
                      }
                      return o.raycaster.camera
                        ? o.raycaster.intersectObject(i, !0)
                        : [];
                    })
                      .sort((i, a) => {
                        let o = getRootState(i.object),
                          s = getRootState(a.object);
                        return (
                          (o && s && s.events.priority - o.events.priority) ||
                          i.distance - a.distance
                        );
                      })
                      .filter((i) => {
                        let a = makeId(i);
                        return !u.has(a) && (u.add(a), !0);
                      });
                    for (let i of (s.events.filter &&
                      (B = s.events.filter(B, s)),
                    B)) {
                      let a = i.object;
                      for (; a; ) {
                        var S;
                        null != (S = a.__r3f) &&
                          S.eventCount &&
                          p.push({ ...i, eventObject: a }),
                          (a = a.parent);
                      }
                    }
                    if (
                      "pointerId" in a &&
                      s.internal.capturedMap.has(a.pointerId)
                    )
                      for (let i of s.internal.capturedMap
                        .get(a.pointerId)
                        .values())
                        u.has(makeId(i.intersection)) || p.push(i.intersection);
                    return p;
                  })(o, p ? filterPointerEvents : void 0),
                  w = A
                    ? (function (a) {
                        let { internal: o } = i.getState(),
                          s = a.offsetX - o.initialClick[0],
                          u = a.offsetY - o.initialClick[1];
                        return Math.round(Math.sqrt(s * s + u * u));
                      })(o)
                    : 0;
                "onPointerDown" === a &&
                  ((u.initialClick = [o.offsetX, o.offsetY]),
                  (u.initialHits = B.map((i) => i.eventObject))),
                  A &&
                    !B.length &&
                    w <= 2 &&
                    (pointerMissed(o, u.interaction), s && s(o)),
                  p && cancelPointer(B),
                  (function (a, o, s, u) {
                    let p = i.getState();
                    if (a.length) {
                      let i = { stopped: !1 };
                      for (let A of a) {
                        let B = getRootState(A.object) || p,
                          {
                            raycaster: w,
                            pointer: F,
                            camera: L,
                            internal: _,
                          } = B,
                          N = new S.Pa4(F.x, F.y, 0).unproject(L),
                          hasPointerCapture = (i) => {
                            var a, o;
                            return (
                              null !=
                                (a =
                                  null == (o = _.capturedMap.get(i))
                                    ? void 0
                                    : o.has(A.eventObject)) && a
                            );
                          },
                          setPointerCapture = (i) => {
                            let a = { intersection: A, target: o.target };
                            _.capturedMap.has(i)
                              ? _.capturedMap.get(i).set(A.eventObject, a)
                              : _.capturedMap.set(
                                  i,
                                  new Map([[A.eventObject, a]])
                                ),
                              o.target.setPointerCapture(i);
                          },
                          releasePointerCapture = (i) => {
                            let a = _.capturedMap.get(i);
                            a &&
                              releaseInternalPointerCapture(
                                _.capturedMap,
                                A.eventObject,
                                a,
                                i
                              );
                          },
                          U = {};
                        for (let i in o) {
                          let a = o[i];
                          "function" != typeof a && (U[i] = a);
                        }
                        let j = {
                          ...A,
                          ...U,
                          pointer: F,
                          intersections: a,
                          stopped: i.stopped,
                          delta: s,
                          unprojectedPoint: N,
                          ray: w.ray,
                          camera: L,
                          stopPropagation() {
                            let s =
                              "pointerId" in o &&
                              _.capturedMap.get(o.pointerId);
                            if (
                              (!s || s.has(A.eventObject)) &&
                              ((j.stopped = i.stopped = !0),
                              _.hovered.size &&
                                Array.from(_.hovered.values()).find(
                                  (i) => i.eventObject === A.eventObject
                                ))
                            ) {
                              let i = a.slice(0, a.indexOf(A));
                              cancelPointer([...i, A]);
                            }
                          },
                          target: {
                            hasPointerCapture,
                            setPointerCapture,
                            releasePointerCapture,
                          },
                          currentTarget: {
                            hasPointerCapture,
                            setPointerCapture,
                            releasePointerCapture,
                          },
                          nativeEvent: o,
                        };
                        if ((u(j), !0 === i.stopped)) break;
                      }
                    }
                  })(B, o, w, function (i) {
                    let s = i.eventObject,
                      B = s.__r3f,
                      S = null == B ? void 0 : B.handlers;
                    if (null != B && B.eventCount) {
                      if (p) {
                        if (
                          S.onPointerOver ||
                          S.onPointerEnter ||
                          S.onPointerOut ||
                          S.onPointerLeave
                        ) {
                          let a = makeId(i),
                            o = u.hovered.get(a);
                          o
                            ? o.stopped && i.stopPropagation()
                            : (u.hovered.set(a, i),
                              null == S.onPointerOver || S.onPointerOver(i),
                              null == S.onPointerEnter || S.onPointerEnter(i));
                        }
                        null == S.onPointerMove || S.onPointerMove(i);
                      } else {
                        let p = S[a];
                        p
                          ? (!A || u.initialHits.includes(s)) &&
                            (pointerMissed(
                              o,
                              u.interaction.filter(
                                (i) => !u.initialHits.includes(i)
                              )
                            ),
                            p(i))
                          : A &&
                            u.initialHits.includes(s) &&
                            pointerMissed(
                              o,
                              u.interaction.filter(
                                (i) => !u.initialHits.includes(i)
                              )
                            );
                      }
                    }
                  });
              };
            },
          };
        })(i);
        return {
          priority: 1,
          enabled: !0,
          compute(i, a, o) {
            a.pointer.set(
              (i.offsetX / a.size.width) * 2 - 1,
              -(2 * (i.offsetY / a.size.height)) + 1
            ),
              a.raycaster.setFromCamera(a.pointer, a.camera);
          },
          connected: void 0,
          handlers: Object.keys(eB).reduce((i, o) => ({ ...i, [o]: a(o) }), {}),
          update: () => {
            var a;
            let { events: o, internal: s } = i.getState();
            null != (a = s.lastEvent) &&
              a.current &&
              o.handlers &&
              o.handlers.onPointerMove(s.lastEvent.current);
          },
          connect: (a) => {
            var o;
            let { set: s, events: u } = i.getState();
            null == u.disconnect || u.disconnect(),
              s((i) => ({ events: { ...i.events, connected: a } })),
              Object.entries(null != (o = u.handlers) ? o : []).forEach(
                ([i, o]) => {
                  let [s, u] = eB[i];
                  a.addEventListener(s, o, { passive: u });
                }
              );
          },
          disconnect: () => {
            let { set: a, events: o } = i.getState();
            if (o.connected) {
              var s;
              Object.entries(null != (s = o.handlers) ? s : []).forEach(
                ([i, a]) => {
                  if (o && o.connected instanceof HTMLElement) {
                    let [s] = eB[i];
                    o.connected.removeEventListener(s, a);
                  }
                }
              ),
                a((i) => ({ events: { ...i.events, connected: void 0 } }));
            }
          },
        };
      }
    },
    9095: function (i, a, o) {
      "use strict";
      o.d(a, {
        Xz: function () {
          return Y;
        },
      });
      var s,
        u,
        p = o(5319),
        A = o(7294),
        B = o(9477);
      function g(i, a) {
        let o;
        return (...s) => {
          window.clearTimeout(o), (o = window.setTimeout(() => i(...s), a));
        };
      }
      let S = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        D = (i, a) => S.every((o) => i[o] === a[o]);
      var w = Object.defineProperty,
        F = Object.defineProperties,
        L = Object.getOwnPropertyDescriptors,
        _ = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        U = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (i, a, o) =>
          a in i
            ? w(i, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (i[a] = o),
        __spreadValues = (i, a) => {
          for (var o in a || (a = {}))
            N.call(a, o) && __defNormalProp(i, o, a[o]);
          if (_)
            for (var o of _(a)) U.call(a, o) && __defNormalProp(i, o, a[o]);
          return i;
        },
        __spreadProps = (i, a) => F(i, L(a));
      function wrapContext(i) {
        try {
          return Object.defineProperties(i, {
            _currentRenderer: { get: () => null, set() {} },
            _currentRenderer2: { get: () => null, set() {} },
          });
        } catch (a) {
          return i;
        }
      }
      "undefined" != typeof window &&
      ((null == (s = window.document) ? void 0 : s.createElement) ||
        (null == (u = window.navigator) ? void 0 : u.product) === "ReactNative")
        ? A.useLayoutEffect
        : A.useEffect;
      let j = console.error;
      console.error = function () {
        let i = [...arguments].join("");
        if (
          (null == i ? void 0 : i.startsWith("Warning:")) &&
          i.includes("useContext")
        ) {
          console.error = j;
          return;
        }
        return j.apply(this, arguments);
      };
      let Q = wrapContext(A.createContext(null));
      let FiberProvider = class FiberProvider extends A.Component {
        render() {
          return A.createElement(
            Q.Provider,
            { value: this._reactInternals },
            this.props.children
          );
        }
      };
      var X = o(5893);
      o(2576), o(6525), o(3840);
      let W = A.forwardRef(function (
          {
            children: i,
            fallback: a,
            resize: o,
            style: s,
            gl: u,
            events: S = p.c,
            eventSource: w,
            eventPrefix: F,
            shadows: L,
            linear: _,
            flat: N,
            legacy: U,
            orthographic: j,
            frameloop: W,
            dpr: Y,
            performance: V,
            raycaster: q,
            camera: $,
            scene: et,
            onPointerMissed: en,
            onCreated: er,
            ...ea
          },
          eo
        ) {
          A.useMemo(() => (0, p.e)(B), []);
          let el = (function () {
              let i = (function () {
                let i = (function () {
                    let i = A.useContext(Q);
                    if (null === i)
                      throw Error(
                        "its-fine: useFiber must be called within a <FiberProvider />!"
                      );
                    let a = A.useId(),
                      o = A.useMemo(() => {
                        for (let o of [i, null == i ? void 0 : i.alternate]) {
                          if (!o) continue;
                          let i = (function traverseFiber(i, a, o) {
                            if (!i) return;
                            if (!0 === o(i)) return i;
                            let s = a ? i.return : i.child;
                            for (; s; ) {
                              let i = traverseFiber(s, a, o);
                              if (i) return i;
                              s = a ? null : s.sibling;
                            }
                          })(o, !1, (i) => {
                            let o = i.memoizedState;
                            for (; o; ) {
                              if (o.memoizedState === a) return !0;
                              o = o.next;
                            }
                          });
                          if (i) return i;
                        }
                      }, [i, a]);
                    return o;
                  })(),
                  [a] = A.useState(() => new Map());
                a.clear();
                let o = i;
                for (; o; ) {
                  if (o.type && "object" == typeof o.type) {
                    let i =
                        void 0 === o.type._context &&
                        o.type.Provider === o.type,
                      s = i ? o.type : o.type._context;
                    s &&
                      s !== Q &&
                      !a.has(s) &&
                      a.set(s, A.useContext(wrapContext(s)));
                  }
                  o = o.return;
                }
                return a;
              })();
              return A.useMemo(
                () =>
                  Array.from(i.keys()).reduce(
                    (a, o) => (s) =>
                      A.createElement(
                        a,
                        null,
                        A.createElement(
                          o.Provider,
                          __spreadProps(__spreadValues({}, s), {
                            value: i.get(o),
                          })
                        )
                      ),
                    (i) => A.createElement(FiberProvider, __spreadValues({}, i))
                  ),
                [i]
              );
            })(),
            [es, eu] = (function (
              { debounce: i, scroll: a, polyfill: o, offsetSize: s } = {
                debounce: 0,
                scroll: !1,
                offsetSize: !1,
              }
            ) {
              var u;
              let p =
                o ||
                ("undefined" == typeof window
                  ? class {}
                  : window.ResizeObserver);
              if (!p)
                throw Error(
                  "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
                );
              let [B, S] = (0, A.useState)({
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                  bottom: 0,
                  right: 0,
                  x: 0,
                  y: 0,
                }),
                w = (0, A.useRef)({
                  element: null,
                  scrollContainers: null,
                  resizeObserver: null,
                  lastBounds: B,
                  orientationHandler: null,
                }),
                F = i ? ("number" == typeof i ? i : i.scroll) : null,
                L = i ? ("number" == typeof i ? i : i.resize) : null,
                _ = (0, A.useRef)(!1);
              (0, A.useEffect)(
                () => ((_.current = !0), () => void (_.current = !1))
              );
              let [N, U, j] = (0, A.useMemo)(() => {
                let r = () => {
                  if (!w.current.element) return;
                  let {
                      left: i,
                      top: a,
                      width: o,
                      height: u,
                      bottom: p,
                      right: A,
                      x: B,
                      y: F,
                    } = w.current.element.getBoundingClientRect(),
                    L = {
                      left: i,
                      top: a,
                      width: o,
                      height: u,
                      bottom: p,
                      right: A,
                      x: B,
                      y: F,
                    };
                  w.current.element instanceof HTMLElement &&
                    s &&
                    ((L.height = w.current.element.offsetHeight),
                    (L.width = w.current.element.offsetWidth)),
                    Object.freeze(L),
                    _.current &&
                      !D(w.current.lastBounds, L) &&
                      S((w.current.lastBounds = L));
                };
                return [r, L ? g(r, L) : r, F ? g(r, F) : r];
              }, [S, s, F, L]);
              function v() {
                w.current.scrollContainers &&
                  (w.current.scrollContainers.forEach((i) =>
                    i.removeEventListener("scroll", j, !0)
                  ),
                  (w.current.scrollContainers = null)),
                  w.current.resizeObserver &&
                    (w.current.resizeObserver.disconnect(),
                    (w.current.resizeObserver = null)),
                  w.current.orientationHandler &&
                    ("orientation" in screen &&
                    "removeEventListener" in screen.orientation
                      ? screen.orientation.removeEventListener(
                          "change",
                          w.current.orientationHandler
                        )
                      : "onorientationchange" in window &&
                        window.removeEventListener(
                          "orientationchange",
                          w.current.orientationHandler
                        ));
              }
              function b() {
                w.current.element &&
                  ((w.current.resizeObserver = new p(j)),
                  w.current.resizeObserver.observe(w.current.element),
                  a &&
                    w.current.scrollContainers &&
                    w.current.scrollContainers.forEach((i) =>
                      i.addEventListener("scroll", j, {
                        capture: !0,
                        passive: !0,
                      })
                    ),
                  (w.current.orientationHandler = () => {
                    j();
                  }),
                  "orientation" in screen &&
                  "addEventListener" in screen.orientation
                    ? screen.orientation.addEventListener(
                        "change",
                        w.current.orientationHandler
                      )
                    : "onorientationchange" in window &&
                      window.addEventListener(
                        "orientationchange",
                        w.current.orientationHandler
                      ));
              }
              return (
                (u = !!a),
                (0, A.useEffect)(() => {
                  if (u)
                    return (
                      window.addEventListener("scroll", j, {
                        capture: !0,
                        passive: !0,
                      }),
                      () => void window.removeEventListener("scroll", j, !0)
                    );
                }, [j, u]),
                (0, A.useEffect)(
                  () => (
                    window.addEventListener("resize", U),
                    () => void window.removeEventListener("resize", U)
                  ),
                  [U]
                ),
                (0, A.useEffect)(() => {
                  v(), b();
                }, [a, j, U]),
                (0, A.useEffect)(() => v, []),
                [
                  (i) => {
                    i &&
                      i !== w.current.element &&
                      (v(),
                      (w.current.element = i),
                      (w.current.scrollContainers = (function E(i) {
                        let a = [];
                        if (!i || i === document.body) return a;
                        let {
                          overflow: o,
                          overflowX: s,
                          overflowY: u,
                        } = window.getComputedStyle(i);
                        return (
                          [o, s, u].some(
                            (i) => "auto" === i || "scroll" === i
                          ) && a.push(i),
                          [...a, ...E(i.parentElement)]
                        );
                      })(i)),
                      b());
                  },
                  B,
                  N,
                ]
              );
            })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...o }),
            ec = A.useRef(null),
            ed = A.useRef(null);
          A.useImperativeHandle(eo, () => ec.current);
          let eh = (0, p.u)(en),
            [ep, em] = A.useState(!1),
            [eA, eg] = A.useState(!1);
          if (ep) throw ep;
          if (eA) throw eA;
          let eB = A.useRef(null);
          (0, p.a)(() => {
            let a = ec.current;
            eu.width > 0 &&
              eu.height > 0 &&
              a &&
              (eB.current || (eB.current = (0, p.b)(a)),
              eB.current.configure({
                gl: u,
                events: S,
                shadows: L,
                linear: _,
                flat: N,
                legacy: U,
                orthographic: j,
                frameloop: W,
                dpr: Y,
                performance: V,
                raycaster: q,
                camera: $,
                scene: et,
                size: eu,
                onPointerMissed: (...i) =>
                  null == eh.current ? void 0 : eh.current(...i),
                onCreated: (i) => {
                  null == i.events.connect ||
                    i.events.connect(
                      w ? ((0, p.i)(w) ? w.current : w) : ed.current
                    ),
                    F &&
                      i.setEvents({
                        compute: (i, a) => {
                          let o = i[F + "X"],
                            s = i[F + "Y"];
                          a.pointer.set(
                            (o / a.size.width) * 2 - 1,
                            -(2 * (s / a.size.height)) + 1
                          ),
                            a.raycaster.setFromCamera(a.pointer, a.camera);
                        },
                      }),
                    null == er || er(i);
                },
              }),
              eB.current.render(
                (0, X.jsx)(el, {
                  children: (0, X.jsx)(p.E, {
                    set: eg,
                    children: (0, X.jsx)(A.Suspense, {
                      fallback: (0, X.jsx)(p.B, { set: em }),
                      children: null != i ? i : null,
                    }),
                  }),
                })
              ));
          }),
            A.useEffect(() => {
              let i = ec.current;
              if (i) return () => (0, p.d)(i);
            }, []);
          let eC = w ? "none" : "auto";
          return (0, X.jsx)("div", {
            ref: ed,
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: eC,
              ...s,
            },
            ...ea,
            children: (0, X.jsx)("div", {
              ref: es,
              style: { width: "100%", height: "100%" },
              children: (0, X.jsx)("canvas", {
                ref: ec,
                style: { display: "block" },
                children: a,
              }),
            }),
          });
        }),
        Y = A.forwardRef(function (i, a) {
          return (0,
          X.jsx)(FiberProvider, { children: (0, X.jsx)(W, { ...i, ref: a }) });
        });
    },
    6010: function (i, a, o) {
      "use strict";
      a.Z = function () {
        for (var i, a, o = 0, s = ""; o < arguments.length; )
          (i = arguments[o++]) &&
            (a = (function r(i) {
              var a,
                o,
                s = "";
              if ("string" == typeof i || "number" == typeof i) s += i;
              else if ("object" == typeof i) {
                if (Array.isArray(i))
                  for (a = 0; a < i.length; a++)
                    i[a] && (o = r(i[a])) && (s && (s += " "), (s += o));
                else for (a in i) i[a] && (s && (s += " "), (s += a));
              }
              return s;
            })(i)) &&
            (s && (s += " "), (s += a));
        return s;
      };
    },
    2962: function (i, a, o) {
      "use strict";
      o.d(a, {
        PB: function () {
          return NextSeo;
        },
      });
      var s = o(7294),
        u = o(9008),
        p = o.n(u);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (i) {
              for (var a = 1; a < arguments.length; a++) {
                var o = arguments[a];
                for (var s in o)
                  Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
              }
              return i;
            }).apply(this, arguments);
      }
      var A = ["keyOverride"],
        B = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        buildOpenGraphMediaTags = function (i, a, o) {
          void 0 === a && (a = []);
          var u = void 0 === o ? {} : o,
            p = u.defaultWidth,
            A = u.defaultHeight;
          return a.reduce(function (a, o, u) {
            return (
              a.push(
                s.createElement("meta", {
                  key: "og:" + i + ":0" + u,
                  property: "og:" + i,
                  content: o.url,
                })
              ),
              o.alt &&
                a.push(
                  s.createElement("meta", {
                    key: "og:" + i + ":alt0" + u,
                    property: "og:" + i + ":alt",
                    content: o.alt,
                  })
                ),
              o.secureUrl &&
                a.push(
                  s.createElement("meta", {
                    key: "og:" + i + ":secure_url0" + u,
                    property: "og:" + i + ":secure_url",
                    content: o.secureUrl.toString(),
                  })
                ),
              o.type &&
                a.push(
                  s.createElement("meta", {
                    key: "og:" + i + ":type0" + u,
                    property: "og:" + i + ":type",
                    content: o.type.toString(),
                  })
                ),
              o.width
                ? a.push(
                    s.createElement("meta", {
                      key: "og:" + i + ":width0" + u,
                      property: "og:" + i + ":width",
                      content: o.width.toString(),
                    })
                  )
                : p &&
                  a.push(
                    s.createElement("meta", {
                      key: "og:" + i + ":width0" + u,
                      property: "og:" + i + ":width",
                      content: p.toString(),
                    })
                  ),
              o.height
                ? a.push(
                    s.createElement("meta", {
                      key: "og:" + i + ":height" + u,
                      property: "og:" + i + ":height",
                      content: o.height.toString(),
                    })
                  )
                : A &&
                  a.push(
                    s.createElement("meta", {
                      key: "og:" + i + ":height" + u,
                      property: "og:" + i + ":height",
                      content: A.toString(),
                    })
                  ),
              a
            );
          }, []);
        },
        buildTags = function (i) {
          var a,
            o,
            u,
            p,
            S,
            w = [];
          i.titleTemplate && (B.templateTitle = i.titleTemplate);
          var F = "";
          i.title
            ? ((F = i.title),
              B.templateTitle &&
                (F = B.templateTitle.replace(/%s/g, function () {
                  return F;
                })))
            : i.defaultTitle && (F = i.defaultTitle),
            F && w.push(s.createElement("title", { key: "title" }, F));
          var L = i.noindex || B.noindex || i.dangerouslySetAllPagesToNoIndex,
            _ = i.nofollow || B.nofollow || i.dangerouslySetAllPagesToNoFollow,
            N = "";
          if (i.robotsProps) {
            var U = i.robotsProps,
              j = U.nosnippet,
              Q = U.maxSnippet,
              X = U.maxImagePreview,
              W = U.maxVideoPreview,
              Y = U.noarchive,
              V = U.noimageindex,
              q = U.notranslate,
              $ = U.unavailableAfter;
            N =
              (j ? ",nosnippet" : "") +
              (Q ? ",max-snippet:" + Q : "") +
              (X ? ",max-image-preview:" + X : "") +
              (Y ? ",noarchive" : "") +
              ($ ? ",unavailable_after:" + $ : "") +
              (V ? ",noimageindex" : "") +
              (W ? ",max-video-preview:" + W : "") +
              (q ? ",notranslate" : "");
          }
          if (
            (L || _
              ? (i.dangerouslySetAllPagesToNoIndex && (B.noindex = !0),
                i.dangerouslySetAllPagesToNoFollow && (B.nofollow = !0),
                w.push(
                  s.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (L ? "noindex" : "index") +
                      "," +
                      (_ ? "nofollow" : "follow") +
                      N,
                  })
                ))
              : w.push(
                  s.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + N,
                  })
                ),
            i.description &&
              w.push(
                s.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: i.description,
                })
              ),
            i.themeColor &&
              w.push(
                s.createElement("meta", {
                  key: "theme-color",
                  name: "theme-color",
                  content: i.themeColor,
                })
              ),
            i.mobileAlternate &&
              w.push(
                s.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: i.mobileAlternate.media,
                  href: i.mobileAlternate.href,
                })
              ),
            i.languageAlternates &&
              i.languageAlternates.length > 0 &&
              i.languageAlternates.forEach(function (i) {
                w.push(
                  s.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + i.hrefLang,
                    hrefLang: i.hrefLang,
                    href: i.href,
                  })
                );
              }),
            i.twitter &&
              (i.twitter.cardType &&
                w.push(
                  s.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: i.twitter.cardType,
                  })
                ),
              i.twitter.site &&
                w.push(
                  s.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: i.twitter.site,
                  })
                ),
              i.twitter.handle &&
                w.push(
                  s.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: i.twitter.handle,
                  })
                )),
            i.facebook &&
              i.facebook.appId &&
              w.push(
                s.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: i.facebook.appId,
                })
              ),
            ((null != (a = i.openGraph) && a.title) || F) &&
              w.push(
                s.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (p = i.openGraph) ? void 0 : p.title) || F,
                })
              ),
            ((null != (o = i.openGraph) && o.description) || i.description) &&
              w.push(
                s.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (S = i.openGraph) ? void 0 : S.description) ||
                    i.description,
                })
              ),
            i.openGraph)
          ) {
            if (
              ((i.openGraph.url || i.canonical) &&
                w.push(
                  s.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: i.openGraph.url || i.canonical,
                  })
                ),
              i.openGraph.type)
            ) {
              var et = i.openGraph.type.toLowerCase();
              w.push(
                s.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: et,
                })
              ),
                "profile" === et && i.openGraph.profile
                  ? (i.openGraph.profile.firstName &&
                      w.push(
                        s.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: i.openGraph.profile.firstName,
                        })
                      ),
                    i.openGraph.profile.lastName &&
                      w.push(
                        s.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: i.openGraph.profile.lastName,
                        })
                      ),
                    i.openGraph.profile.username &&
                      w.push(
                        s.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: i.openGraph.profile.username,
                        })
                      ),
                    i.openGraph.profile.gender &&
                      w.push(
                        s.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: i.openGraph.profile.gender,
                        })
                      ))
                  : "book" === et && i.openGraph.book
                  ? (i.openGraph.book.authors &&
                      i.openGraph.book.authors.length &&
                      i.openGraph.book.authors.forEach(function (i, a) {
                        w.push(
                          s.createElement("meta", {
                            key: "book:author:0" + a,
                            property: "book:author",
                            content: i,
                          })
                        );
                      }),
                    i.openGraph.book.isbn &&
                      w.push(
                        s.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: i.openGraph.book.isbn,
                        })
                      ),
                    i.openGraph.book.releaseDate &&
                      w.push(
                        s.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: i.openGraph.book.releaseDate,
                        })
                      ),
                    i.openGraph.book.tags &&
                      i.openGraph.book.tags.length &&
                      i.openGraph.book.tags.forEach(function (i, a) {
                        w.push(
                          s.createElement("meta", {
                            key: "book:tag:0" + a,
                            property: "book:tag",
                            content: i,
                          })
                        );
                      }))
                  : "article" === et && i.openGraph.article
                  ? (i.openGraph.article.publishedTime &&
                      w.push(
                        s.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: i.openGraph.article.publishedTime,
                        })
                      ),
                    i.openGraph.article.modifiedTime &&
                      w.push(
                        s.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: i.openGraph.article.modifiedTime,
                        })
                      ),
                    i.openGraph.article.expirationTime &&
                      w.push(
                        s.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: i.openGraph.article.expirationTime,
                        })
                      ),
                    i.openGraph.article.authors &&
                      i.openGraph.article.authors.length &&
                      i.openGraph.article.authors.forEach(function (i, a) {
                        w.push(
                          s.createElement("meta", {
                            key: "article:author:0" + a,
                            property: "article:author",
                            content: i,
                          })
                        );
                      }),
                    i.openGraph.article.section &&
                      w.push(
                        s.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: i.openGraph.article.section,
                        })
                      ),
                    i.openGraph.article.tags &&
                      i.openGraph.article.tags.length &&
                      i.openGraph.article.tags.forEach(function (i, a) {
                        w.push(
                          s.createElement("meta", {
                            key: "article:tag:0" + a,
                            property: "article:tag",
                            content: i,
                          })
                        );
                      }))
                  : ("video.movie" === et ||
                      "video.episode" === et ||
                      "video.tv_show" === et ||
                      "video.other" === et) &&
                    i.openGraph.video &&
                    (i.openGraph.video.actors &&
                      i.openGraph.video.actors.length &&
                      i.openGraph.video.actors.forEach(function (i, a) {
                        i.profile &&
                          w.push(
                            s.createElement("meta", {
                              key: "video:actor:0" + a,
                              property: "video:actor",
                              content: i.profile,
                            })
                          ),
                          i.role &&
                            w.push(
                              s.createElement("meta", {
                                key: "video:actor:role:0" + a,
                                property: "video:actor:role",
                                content: i.role,
                              })
                            );
                      }),
                    i.openGraph.video.directors &&
                      i.openGraph.video.directors.length &&
                      i.openGraph.video.directors.forEach(function (i, a) {
                        w.push(
                          s.createElement("meta", {
                            key: "video:director:0" + a,
                            property: "video:director",
                            content: i,
                          })
                        );
                      }),
                    i.openGraph.video.writers &&
                      i.openGraph.video.writers.length &&
                      i.openGraph.video.writers.forEach(function (i, a) {
                        w.push(
                          s.createElement("meta", {
                            key: "video:writer:0" + a,
                            property: "video:writer",
                            content: i,
                          })
                        );
                      }),
                    i.openGraph.video.duration &&
                      w.push(
                        s.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: i.openGraph.video.duration.toString(),
                        })
                      ),
                    i.openGraph.video.releaseDate &&
                      w.push(
                        s.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: i.openGraph.video.releaseDate,
                        })
                      ),
                    i.openGraph.video.tags &&
                      i.openGraph.video.tags.length &&
                      i.openGraph.video.tags.forEach(function (i, a) {
                        w.push(
                          s.createElement("meta", {
                            key: "video:tag:0" + a,
                            property: "video:tag",
                            content: i,
                          })
                        );
                      }),
                    i.openGraph.video.series &&
                      w.push(
                        s.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: i.openGraph.video.series,
                        })
                      ));
            }
            i.defaultOpenGraphImageWidth &&
              (B.defaultOpenGraphImageWidth = i.defaultOpenGraphImageWidth),
              i.defaultOpenGraphImageHeight &&
                (B.defaultOpenGraphImageHeight = i.defaultOpenGraphImageHeight),
              i.openGraph.images &&
                i.openGraph.images.length &&
                w.push.apply(
                  w,
                  buildOpenGraphMediaTags("image", i.openGraph.images, {
                    defaultWidth: B.defaultOpenGraphImageWidth,
                    defaultHeight: B.defaultOpenGraphImageHeight,
                  })
                ),
              i.defaultOpenGraphVideoWidth &&
                (B.defaultOpenGraphVideoWidth = i.defaultOpenGraphVideoWidth),
              i.defaultOpenGraphVideoHeight &&
                (B.defaultOpenGraphVideoHeight = i.defaultOpenGraphVideoHeight),
              i.openGraph.videos &&
                i.openGraph.videos.length &&
                w.push.apply(
                  w,
                  buildOpenGraphMediaTags("video", i.openGraph.videos, {
                    defaultWidth: B.defaultOpenGraphVideoWidth,
                    defaultHeight: B.defaultOpenGraphVideoHeight,
                  })
                ),
              i.openGraph.audio &&
                w.push.apply(
                  w,
                  buildOpenGraphMediaTags("audio", i.openGraph.audio)
                ),
              i.openGraph.locale &&
                w.push(
                  s.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: i.openGraph.locale,
                  })
                ),
              (i.openGraph.siteName || i.openGraph.site_name) &&
                w.push(
                  s.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: i.openGraph.siteName || i.openGraph.site_name,
                  })
                );
          }
          return (
            i.canonical &&
              w.push(
                s.createElement("link", {
                  rel: "canonical",
                  href: i.canonical,
                  key: "canonical",
                })
              ),
            i.additionalMetaTags &&
              i.additionalMetaTags.length > 0 &&
              i.additionalMetaTags.forEach(function (i) {
                var a,
                  o,
                  u = i.keyOverride,
                  p = (function (i, a) {
                    if (null == i) return {};
                    var o,
                      s,
                      u = {},
                      p = Object.keys(i);
                    for (s = 0; s < p.length; s++)
                      (o = p[s]), a.indexOf(o) >= 0 || (u[o] = i[o]);
                    return u;
                  })(i, A);
                w.push(
                  s.createElement(
                    "meta",
                    _extends(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (a =
                            null != (o = null != u ? u : p.name)
                              ? o
                              : p.property)
                            ? a
                            : p.httpEquiv),
                      },
                      p
                    )
                  )
                );
              }),
            null != (u = i.additionalLinkTags) &&
              u.length &&
              i.additionalLinkTags.forEach(function (i) {
                var a;
                w.push(
                  s.createElement(
                    "link",
                    _extends(
                      {
                        key:
                          "link" +
                          (null != (a = i.keyOverride) ? a : i.href) +
                          i.rel,
                      },
                      i
                    )
                  )
                );
              }),
            w
          );
        },
        WithHead = function (i) {
          return s.createElement(p(), null, buildTags(i));
        },
        NextSeo = function (i) {
          var a = i.title,
            o = i.themeColor,
            u = i.noindex,
            p = void 0 !== u && u,
            A = i.nofollow,
            B = i.robotsProps,
            S = i.description,
            w = i.canonical,
            F = i.openGraph,
            L = i.facebook,
            _ = i.twitter,
            N = i.additionalMetaTags,
            U = i.titleTemplate,
            j = i.defaultTitle,
            Q = i.mobileAlternate,
            X = i.languageAlternates,
            W = i.additionalLinkTags,
            Y = i.useAppDir,
            V = void 0 !== Y && Y;
          return s.createElement(
            s.Fragment,
            null,
            V
              ? buildTags({
                  title: a,
                  themeColor: o,
                  noindex: p,
                  nofollow: A,
                  robotsProps: B,
                  description: S,
                  canonical: w,
                  facebook: L,
                  openGraph: F,
                  additionalMetaTags: N,
                  twitter: _,
                  titleTemplate: U,
                  defaultTitle: j,
                  mobileAlternate: Q,
                  languageAlternates: X,
                  additionalLinkTags: W,
                })
              : s.createElement(WithHead, {
                  title: a,
                  themeColor: o,
                  noindex: p,
                  nofollow: A,
                  robotsProps: B,
                  description: S,
                  canonical: w,
                  facebook: L,
                  openGraph: F,
                  additionalMetaTags: N,
                  twitter: _,
                  titleTemplate: U,
                  defaultTitle: j,
                  mobileAlternate: Q,
                  languageAlternates: X,
                  additionalLinkTags: W,
                })
          );
        };
      RegExp(
        "[" +
          Object.keys(
            Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
            })
          ).join("") +
          "]",
        "g"
      );
    },
    7498: function (i, a) {
      "use strict";
      var o, s;
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (function (i, a) {
          for (var o in a)
            Object.defineProperty(i, o, { enumerable: !0, get: a[o] });
        })(a, {
          PrefetchKind: function () {
            return o;
          },
          ACTION_REFRESH: function () {
            return u;
          },
          ACTION_NAVIGATE: function () {
            return p;
          },
          ACTION_RESTORE: function () {
            return A;
          },
          ACTION_SERVER_PATCH: function () {
            return B;
          },
          ACTION_PREFETCH: function () {
            return S;
          },
          ACTION_FAST_REFRESH: function () {
            return w;
          },
          ACTION_SERVER_ACTION: function () {
            return F;
          },
        });
      let u = "refresh",
        p = "navigate",
        A = "restore",
        B = "server-patch",
        S = "prefetch",
        w = "fast-refresh",
        F = "server-action";
      ((s = o || (o = {})).AUTO = "auto"),
        (s.FULL = "full"),
        (s.TEMPORARY = "temporary"),
        ("function" == typeof a.default ||
          ("object" == typeof a.default && null !== a.default)) &&
          void 0 === a.default.__esModule &&
          (Object.defineProperty(a.default, "__esModule", { value: !0 }),
          Object.assign(a.default, a),
          (i.exports = a.default));
    },
    30: function (i, a, o) {
      "use strict";
      function getDomainLocale(i, a, o, s) {
        return !1;
      }
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        o(2866),
        ("function" == typeof a.default ||
          ("object" == typeof a.default && null !== a.default)) &&
          void 0 === a.default.__esModule &&
          (Object.defineProperty(a.default, "__esModule", { value: !0 }),
          Object.assign(a.default, a),
          (i.exports = a.default));
    },
    3271: function (i, a, o) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "Image", {
          enumerable: !0,
          get: function () {
            return j;
          },
        });
      let s = o(8754),
        u = o(1757),
        p = u._(o(7294)),
        A = s._(o(3935)),
        B = s._(o(9201)),
        S = o(3914),
        w = o(5494),
        F = o(869);
      o(1905);
      let L = o(1823),
        _ = s._(o(4545)),
        N = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function handleLoading(i, a, o, s, u, p) {
        let A = null == i ? void 0 : i.src;
        if (!i || i["data-loaded-src"] === A) return;
        i["data-loaded-src"] = A;
        let B = "decode" in i ? i.decode() : Promise.resolve();
        B.catch(() => {}).then(() => {
          if (i.parentElement && i.isConnected) {
            if (("empty" !== a && u(!0), null == o ? void 0 : o.current)) {
              let a = new Event("load");
              Object.defineProperty(a, "target", { writable: !1, value: i });
              let s = !1,
                u = !1;
              o.current({
                ...a,
                nativeEvent: a,
                currentTarget: i,
                target: i,
                isDefaultPrevented: () => s,
                isPropagationStopped: () => u,
                persist: () => {},
                preventDefault: () => {
                  (s = !0), a.preventDefault();
                },
                stopPropagation: () => {
                  (u = !0), a.stopPropagation();
                },
              });
            }
            (null == s ? void 0 : s.current) && s.current(i);
          }
        });
      }
      function getDynamicProps(i) {
        let [a, o] = p.version.split("."),
          s = parseInt(a, 10),
          u = parseInt(o, 10);
        return s > 18 || (18 === s && u >= 3)
          ? { fetchPriority: i }
          : { fetchpriority: i };
      }
      let U = (0, p.forwardRef)((i, a) => {
        let {
          src: o,
          srcSet: s,
          sizes: u,
          height: A,
          width: B,
          decoding: S,
          className: w,
          style: F,
          fetchPriority: L,
          placeholder: _,
          loading: N,
          unoptimized: U,
          fill: j,
          onLoadRef: Q,
          onLoadingCompleteRef: X,
          setBlurComplete: W,
          setShowAltText: Y,
          onLoad: V,
          onError: q,
          ...$
        } = i;
        return p.default.createElement("img", {
          ...$,
          ...getDynamicProps(L),
          loading: N,
          width: B,
          height: A,
          decoding: S,
          "data-nimg": j ? "fill" : "1",
          className: w,
          style: F,
          sizes: u,
          srcSet: s,
          src: o,
          ref: (0, p.useCallback)(
            (i) => {
              a &&
                ("function" == typeof a
                  ? a(i)
                  : "object" == typeof a && (a.current = i)),
                i &&
                  (q && (i.src = i.src),
                  i.complete && handleLoading(i, _, Q, X, W, U));
            },
            [o, _, Q, X, W, q, U, a]
          ),
          onLoad: (i) => {
            let a = i.currentTarget;
            handleLoading(a, _, Q, X, W, U);
          },
          onError: (i) => {
            Y(!0), "empty" !== _ && W(!0), q && q(i);
          },
        });
      });
      function ImagePreload(i) {
        let { isAppRouter: a, imgAttributes: o } = i,
          s = {
            as: "image",
            imageSrcSet: o.srcSet,
            imageSizes: o.sizes,
            crossOrigin: o.crossOrigin,
            referrerPolicy: o.referrerPolicy,
            ...getDynamicProps(o.fetchPriority),
          };
        return a && A.default.preload
          ? (A.default.preload(o.src, s), null)
          : p.default.createElement(
              B.default,
              null,
              p.default.createElement("link", {
                key: "__nimg-" + o.src + o.srcSet + o.sizes,
                rel: "preload",
                href: o.srcSet ? void 0 : o.src,
                ...s,
              })
            );
      }
      let j = (0, p.forwardRef)((i, a) => {
        let o = (0, p.useContext)(L.RouterContext),
          s = (0, p.useContext)(F.ImageConfigContext),
          u = (0, p.useMemo)(() => {
            let i = N || s || w.imageConfigDefault,
              a = [...i.deviceSizes, ...i.imageSizes].sort((i, a) => i - a),
              o = i.deviceSizes.sort((i, a) => i - a);
            return { ...i, allSizes: a, deviceSizes: o };
          }, [s]),
          { onLoad: A, onLoadingComplete: B } = i,
          j = (0, p.useRef)(A);
        (0, p.useEffect)(() => {
          j.current = A;
        }, [A]);
        let Q = (0, p.useRef)(B);
        (0, p.useEffect)(() => {
          Q.current = B;
        }, [B]);
        let [X, W] = (0, p.useState)(!1),
          [Y, V] = (0, p.useState)(!1),
          { props: q, meta: $ } = (0, S.getImgProps)(i, {
            defaultLoader: _.default,
            imgConf: u,
            blurComplete: X,
            showAltText: Y,
          });
        return p.default.createElement(
          p.default.Fragment,
          null,
          p.default.createElement(U, {
            ...q,
            unoptimized: $.unoptimized,
            placeholder: $.placeholder,
            fill: $.fill,
            onLoadRef: j,
            onLoadingCompleteRef: Q,
            setBlurComplete: W,
            setShowAltText: V,
            ref: a,
          }),
          $.priority
            ? p.default.createElement(ImagePreload, {
                isAppRouter: !o,
                imgAttributes: q,
              })
            : null
        );
      });
      ("function" == typeof a.default ||
        ("object" == typeof a.default && null !== a.default)) &&
        void 0 === a.default.__esModule &&
        (Object.defineProperty(a.default, "__esModule", { value: !0 }),
        Object.assign(a.default, a),
        (i.exports = a.default));
    },
    5170: function (i, a, o) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          get: function () {
            return W;
          },
        });
      let s = o(8754),
        u = s._(o(7294)),
        p = o(4450),
        A = o(2227),
        B = o(4364),
        S = o(109),
        w = o(3607),
        F = o(1823),
        L = o(9031),
        _ = o(920),
        N = o(30),
        U = o(7192),
        j = o(7498),
        Q = new Set();
      function prefetch(i, a, o, s, u, p) {
        if (!p && !(0, A.isLocalURL)(a)) return;
        if (!s.bypassPrefetchedCheck) {
          let u =
              void 0 !== s.locale
                ? s.locale
                : "locale" in i
                ? i.locale
                : void 0,
            p = a + "%" + o + "%" + u;
          if (Q.has(p)) return;
          Q.add(p);
        }
        let B = p ? i.prefetch(a, u) : i.prefetch(a, o, s);
        Promise.resolve(B).catch((i) => {});
      }
      function formatStringOrUrl(i) {
        return "string" == typeof i ? i : (0, B.formatUrl)(i);
      }
      let X = u.default.forwardRef(function (i, a) {
          let o, s;
          let {
            href: B,
            as: Q,
            children: X,
            prefetch: W = null,
            passHref: Y,
            replace: V,
            shallow: q,
            scroll: $,
            locale: et,
            onClick: en,
            onMouseEnter: er,
            onTouchStart: ea,
            legacyBehavior: eo = !1,
            ...el
          } = i;
          (o = X),
            eo &&
              ("string" == typeof o || "number" == typeof o) &&
              (o = u.default.createElement("a", null, o));
          let es = u.default.useContext(F.RouterContext),
            eu = u.default.useContext(L.AppRouterContext),
            ec = null != es ? es : eu,
            ed = !es,
            eh = !1 !== W,
            ep = null === W ? j.PrefetchKind.AUTO : j.PrefetchKind.FULL,
            { href: em, as: eA } = u.default.useMemo(() => {
              if (!es) {
                let i = formatStringOrUrl(B);
                return { href: i, as: Q ? formatStringOrUrl(Q) : i };
              }
              let [i, a] = (0, p.resolveHref)(es, B, !0);
              return { href: i, as: Q ? (0, p.resolveHref)(es, Q) : a || i };
            }, [es, B, Q]),
            eg = u.default.useRef(em),
            eB = u.default.useRef(eA);
          eo && (s = u.default.Children.only(o));
          let eC = eo ? s && "object" == typeof s && s.ref : a,
            [ev, eb, ey] = (0, _.useIntersection)({ rootMargin: "200px" }),
            eE = u.default.useCallback(
              (i) => {
                (eB.current !== eA || eg.current !== em) &&
                  (ey(), (eB.current = eA), (eg.current = em)),
                  ev(i),
                  eC &&
                    ("function" == typeof eC
                      ? eC(i)
                      : "object" == typeof eC && (eC.current = i));
              },
              [eA, eC, em, ey, ev]
            );
          u.default.useEffect(() => {
            ec &&
              eb &&
              eh &&
              prefetch(ec, em, eA, { locale: et }, { kind: ep }, ed);
          }, [eA, em, eb, et, eh, null == es ? void 0 : es.locale, ec, ed, ep]);
          let eM = {
            ref: eE,
            onClick(i) {
              eo || "function" != typeof en || en(i),
                eo &&
                  s.props &&
                  "function" == typeof s.props.onClick &&
                  s.props.onClick(i),
                ec &&
                  !i.defaultPrevented &&
                  (function (i, a, o, s, p, B, S, w, F, L) {
                    let { nodeName: _ } = i.currentTarget,
                      N = "A" === _.toUpperCase();
                    if (
                      N &&
                      ((function (i) {
                        let a = i.currentTarget,
                          o = a.getAttribute("target");
                        return (
                          (o && "_self" !== o) ||
                          i.metaKey ||
                          i.ctrlKey ||
                          i.shiftKey ||
                          i.altKey ||
                          (i.nativeEvent && 2 === i.nativeEvent.which)
                        );
                      })(i) ||
                        (!F && !(0, A.isLocalURL)(o)))
                    )
                      return;
                    i.preventDefault();
                    let navigate = () => {
                      let i = null == S || S;
                      "beforePopState" in a
                        ? a[p ? "replace" : "push"](o, s, {
                            shallow: B,
                            locale: w,
                            scroll: i,
                          })
                        : a[p ? "replace" : "push"](s || o, {
                            forceOptimisticNavigation: !L,
                            scroll: i,
                          });
                    };
                    F ? u.default.startTransition(navigate) : navigate();
                  })(i, ec, em, eA, V, q, $, et, ed, eh);
            },
            onMouseEnter(i) {
              eo || "function" != typeof er || er(i),
                eo &&
                  s.props &&
                  "function" == typeof s.props.onMouseEnter &&
                  s.props.onMouseEnter(i),
                ec &&
                  (eh || !ed) &&
                  prefetch(
                    ec,
                    em,
                    eA,
                    { locale: et, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: ep },
                    ed
                  );
            },
            onTouchStart(i) {
              eo || "function" != typeof ea || ea(i),
                eo &&
                  s.props &&
                  "function" == typeof s.props.onTouchStart &&
                  s.props.onTouchStart(i),
                ec &&
                  (eh || !ed) &&
                  prefetch(
                    ec,
                    em,
                    eA,
                    { locale: et, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: ep },
                    ed
                  );
            },
          };
          if ((0, S.isAbsoluteUrl)(eA)) eM.href = eA;
          else if (!eo || Y || ("a" === s.type && !("href" in s.props))) {
            let i = void 0 !== et ? et : null == es ? void 0 : es.locale,
              a =
                (null == es ? void 0 : es.isLocaleDomain) &&
                (0, N.getDomainLocale)(
                  eA,
                  i,
                  null == es ? void 0 : es.locales,
                  null == es ? void 0 : es.domainLocales
                );
            eM.href =
              a ||
              (0, U.addBasePath)(
                (0, w.addLocale)(eA, i, null == es ? void 0 : es.defaultLocale)
              );
          }
          return eo
            ? u.default.cloneElement(s, eM)
            : u.default.createElement("a", { ...el, ...eM }, o);
        }),
        W = X;
      ("function" == typeof a.default ||
        ("object" == typeof a.default && null !== a.default)) &&
        void 0 === a.default.__esModule &&
        (Object.defineProperty(a.default, "__esModule", { value: !0 }),
        Object.assign(a.default, a),
        (i.exports = a.default));
    },
    920: function (i, a, o) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      let s = o(7294),
        u = o(3436),
        p = "function" == typeof IntersectionObserver,
        A = new Map(),
        B = [];
      function useIntersection(i) {
        let { rootRef: a, rootMargin: o, disabled: S } = i,
          w = S || !p,
          [F, L] = (0, s.useState)(!1),
          _ = (0, s.useRef)(null),
          N = (0, s.useCallback)((i) => {
            _.current = i;
          }, []);
        (0, s.useEffect)(() => {
          if (p) {
            if (w || F) return;
            let i = _.current;
            if (i && i.tagName) {
              let s = (function (i, a, o) {
                let {
                  id: s,
                  observer: u,
                  elements: p,
                } = (function (i) {
                  let a;
                  let o = { root: i.root || null, margin: i.rootMargin || "" },
                    s = B.find(
                      (i) => i.root === o.root && i.margin === o.margin
                    );
                  if (s && (a = A.get(s))) return a;
                  let u = new Map(),
                    p = new IntersectionObserver((i) => {
                      i.forEach((i) => {
                        let a = u.get(i.target),
                          o = i.isIntersecting || i.intersectionRatio > 0;
                        a && o && a(o);
                      });
                    }, i);
                  return (
                    (a = { id: o, observer: p, elements: u }),
                    B.push(o),
                    A.set(o, a),
                    a
                  );
                })(o);
                return (
                  p.set(i, a),
                  u.observe(i),
                  function () {
                    if ((p.delete(i), u.unobserve(i), 0 === p.size)) {
                      u.disconnect(), A.delete(s);
                      let i = B.findIndex(
                        (i) => i.root === s.root && i.margin === s.margin
                      );
                      i > -1 && B.splice(i, 1);
                    }
                  }
                );
              })(i, (i) => i && L(i), {
                root: null == a ? void 0 : a.current,
                rootMargin: o,
              });
              return s;
            }
          } else if (!F) {
            let i = (0, u.requestIdleCallback)(() => L(!0));
            return () => (0, u.cancelIdleCallback)(i);
          }
        }, [w, o, a, F, _.current]);
        let U = (0, s.useCallback)(() => {
          L(!1);
        }, []);
        return [N, F, U];
      }
      ("function" == typeof a.default ||
        ("object" == typeof a.default && null !== a.default)) &&
        void 0 === a.default.__esModule &&
        (Object.defineProperty(a.default, "__esModule", { value: !0 }),
        Object.assign(a.default, a),
        (i.exports = a.default));
    },
    3914: function (i, a, o) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "getImgProps", {
          enumerable: !0,
          get: function () {
            return getImgProps;
          },
        }),
        o(1905);
      let s = o(2393),
        u = o(5494);
      function isStaticRequire(i) {
        return void 0 !== i.default;
      }
      function getInt(i) {
        return void 0 === i
          ? i
          : "number" == typeof i
          ? Number.isFinite(i)
            ? i
            : NaN
          : "string" == typeof i && /^[0-9]+$/.test(i)
          ? parseInt(i, 10)
          : NaN;
      }
      function getImgProps(i, a) {
        var o;
        let p,
          A,
          B,
          {
            src: S,
            sizes: w,
            unoptimized: F = !1,
            priority: L = !1,
            loading: _,
            className: N,
            quality: U,
            width: j,
            height: Q,
            fill: X = !1,
            style: W,
            onLoad: Y,
            onLoadingComplete: V,
            placeholder: q = "empty",
            blurDataURL: $,
            fetchPriority: et,
            layout: en,
            objectFit: er,
            objectPosition: ea,
            lazyBoundary: eo,
            lazyRoot: el,
            ...es
          } = i,
          {
            imgConf: eu,
            showAltText: ec,
            blurComplete: ed,
            defaultLoader: eh,
          } = a,
          ep = eu || u.imageConfigDefault;
        if ("allSizes" in ep) p = ep;
        else {
          let i = [...ep.deviceSizes, ...ep.imageSizes].sort((i, a) => i - a),
            a = ep.deviceSizes.sort((i, a) => i - a);
          p = { ...ep, allSizes: i, deviceSizes: a };
        }
        let em = es.loader || eh;
        delete es.loader, delete es.srcSet;
        let eA = "__next_img_default" in em;
        if (eA) {
          if ("custom" === p.loader)
            throw Error(
              'Image with src "' +
                S +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let i = em;
          em = (a) => {
            let { config: o, ...s } = a;
            return i(s);
          };
        }
        if (en) {
          "fill" === en && (X = !0);
          let i = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[en];
          i && (W = { ...W, ...i });
          let a = { responsive: "100vw", fill: "100vw" }[en];
          a && !w && (w = a);
        }
        let eg = "",
          eB = getInt(j),
          eC = getInt(Q);
        if (
          "object" == typeof (o = S) &&
          (isStaticRequire(o) || void 0 !== o.src)
        ) {
          let i = isStaticRequire(S) ? S.default : S;
          if (!i.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(i)
            );
          if (!i.height || !i.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(i)
            );
          if (
            ((A = i.blurWidth),
            (B = i.blurHeight),
            ($ = $ || i.blurDataURL),
            (eg = i.src),
            !X)
          ) {
            if (eB || eC) {
              if (eB && !eC) {
                let a = eB / i.width;
                eC = Math.round(i.height * a);
              } else if (!eB && eC) {
                let a = eC / i.height;
                eB = Math.round(i.width * a);
              }
            } else (eB = i.width), (eC = i.height);
          }
        }
        let ev = !L && ("lazy" === _ || void 0 === _);
        (!(S = "string" == typeof S ? S : eg) ||
          S.startsWith("data:") ||
          S.startsWith("blob:")) &&
          ((F = !0), (ev = !1)),
          p.unoptimized && (F = !0),
          eA && S.endsWith(".svg") && !p.dangerouslyAllowSVG && (F = !0),
          L && (et = "high");
        let eb = getInt(U),
          ey = Object.assign(
            X
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: er,
                  objectPosition: ea,
                }
              : {},
            ec ? {} : { color: "transparent" },
            W
          ),
          eE =
            ed || "empty" === q
              ? null
              : "blur" === q
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, s.getImageBlurSvg)({
                  widthInt: eB,
                  heightInt: eC,
                  blurWidth: A,
                  blurHeight: B,
                  blurDataURL: $ || "",
                  objectFit: ey.objectFit,
                }) +
                '")'
              : 'url("' + q + '")',
          eM = eE
            ? {
                backgroundSize: ey.objectFit || "cover",
                backgroundPosition: ey.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: eE,
              }
            : {},
          eS = (function (i) {
            let {
              config: a,
              src: o,
              unoptimized: s,
              width: u,
              quality: p,
              sizes: A,
              loader: B,
            } = i;
            if (s) return { src: o, srcSet: void 0, sizes: void 0 };
            let { widths: S, kind: w } = (function (i, a, o) {
                let { deviceSizes: s, allSizes: u } = i;
                if (o) {
                  let i = /(^|\s)(1?\d?\d)vw/g,
                    a = [];
                  for (let s; (s = i.exec(o)); s) a.push(parseInt(s[2]));
                  if (a.length) {
                    let i = 0.01 * Math.min(...a);
                    return {
                      widths: u.filter((a) => a >= s[0] * i),
                      kind: "w",
                    };
                  }
                  return { widths: u, kind: "w" };
                }
                if ("number" != typeof a) return { widths: s, kind: "w" };
                let p = [
                  ...new Set(
                    [a, 2 * a].map(
                      (i) => u.find((a) => a >= i) || u[u.length - 1]
                    )
                  ),
                ];
                return { widths: p, kind: "x" };
              })(a, u, A),
              F = S.length - 1;
            return {
              sizes: A || "w" !== w ? A : "100vw",
              srcSet: S.map(
                (i, s) =>
                  B({ config: a, src: o, quality: p, width: i }) +
                  " " +
                  ("w" === w ? i : s + 1) +
                  w
              ).join(", "),
              src: B({ config: a, src: o, quality: p, width: S[F] }),
            };
          })({
            config: p,
            src: S,
            unoptimized: F,
            width: eB,
            quality: eb,
            sizes: w,
            loader: em,
          }),
          ew = {
            ...es,
            loading: ev ? "lazy" : _,
            fetchPriority: et,
            width: eB,
            height: eC,
            decoding: "async",
            className: N,
            style: { ...ey, ...eM },
            sizes: eS.sizes,
            srcSet: eS.srcSet,
            src: eS.src,
          },
          eI = { unoptimized: F, priority: L, placeholder: q, fill: X };
        return { props: ew, meta: eI };
      }
    },
    2393: function (i, a) {
      "use strict";
      function getImageBlurSvg(i) {
        let {
            widthInt: a,
            heightInt: o,
            blurWidth: s,
            blurHeight: u,
            blurDataURL: p,
            objectFit: A,
          } = i,
          B = s ? 40 * s : a,
          S = u ? 40 * u : o,
          w = B && S ? "viewBox='0 0 " + B + " " + S + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          w +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (w
            ? "none"
            : "contain" === A
            ? "xMidYMid"
            : "cover" === A
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          p +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return getImageBlurSvg;
          },
        });
    },
    645: function (i, a, o) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (function (i, a) {
          for (var o in a)
            Object.defineProperty(i, o, { enumerable: !0, get: a[o] });
        })(a, {
          unstable_getImgProps: function () {
            return unstable_getImgProps;
          },
          default: function () {
            return S;
          },
        });
      let s = o(8754),
        u = o(3914),
        p = o(1905),
        A = o(3271),
        B = s._(o(4545)),
        unstable_getImgProps = (i) => {
          (0, p.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: a } = (0, u.getImgProps)(i, {
            defaultLoader: B.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [i, o] of Object.entries(a)) void 0 === o && delete a[i];
          return { props: a };
        },
        S = A.Image;
    },
    4545: function (i, a) {
      "use strict";
      function defaultLoader(i) {
        let { config: a, src: o, width: s, quality: u } = i;
        return (
          o
        );
      }
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }),
        (defaultLoader.__next_img_default = !0);
      let o = defaultLoader;
    },
    5675: function (i, a, o) {
      i.exports = o(645);
    },
    1664: function (i, a, o) {
      i.exports = o(5170);
    },
    1163: function (i, a, o) {
      i.exports = o(9974);
    },
    6511: function (i, a) {
      "use strict";
      /**
       * @license React
       * react-reconciler-constants.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ (a.ConcurrentRoot = 1),
        (a.ContinuousEventPriority = 4),
        (a.DefaultEventPriority = 16),
        (a.DiscreteEventPriority = 1);
    },
    7287: function (i, a, o) {
      /**
       * @license React
       * react-reconciler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ i.exports = function (i) {
        "use strict";
        var a,
          s,
          u,
          p,
          A,
          B = {},
          S = o(7294),
          w = o(3840),
          F = Object.assign;
        function n(i) {
          for (
            var a =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + i,
              o = 1;
            o < arguments.length;
            o++
          )
            a += "&args[]=" + encodeURIComponent(arguments[o]);
          return (
            "Minified React error #" +
            i +
            "; visit " +
            a +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var L = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for("react.element"),
          N = Symbol.for("react.portal"),
          U = Symbol.for("react.fragment"),
          j = Symbol.for("react.strict_mode"),
          Q = Symbol.for("react.profiler"),
          X = Symbol.for("react.provider"),
          W = Symbol.for("react.context"),
          Y = Symbol.for("react.forward_ref"),
          V = Symbol.for("react.suspense"),
          q = Symbol.for("react.suspense_list"),
          $ = Symbol.for("react.memo"),
          et = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var en = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var er = Symbol.iterator;
        function ua(i) {
          return null === i || "object" != typeof i
            ? null
            : "function" == typeof (i = (er && i[er]) || i["@@iterator"])
            ? i
            : null;
        }
        function va(i) {
          if (null == i) return null;
          if ("function" == typeof i) return i.displayName || i.name || null;
          if ("string" == typeof i) return i;
          switch (i) {
            case U:
              return "Fragment";
            case N:
              return "Portal";
            case Q:
              return "Profiler";
            case j:
              return "StrictMode";
            case V:
              return "Suspense";
            case q:
              return "SuspenseList";
          }
          if ("object" == typeof i)
            switch (i.$$typeof) {
              case W:
                return (i.displayName || "Context") + ".Consumer";
              case X:
                return (i._context.displayName || "Context") + ".Provider";
              case Y:
                var a = i.render;
                return (
                  (i = i.displayName) ||
                    (i =
                      "" !== (i = a.displayName || a.name || "")
                        ? "ForwardRef(" + i + ")"
                        : "ForwardRef"),
                  i
                );
              case $:
                return null !== (a = i.displayName || null)
                  ? a
                  : va(i.type) || "Memo";
              case et:
                (a = i._payload), (i = i._init);
                try {
                  return va(i(a));
                } catch (i) {}
            }
          return null;
        }
        function ya(i) {
          var a = i,
            o = i;
          if (i.alternate) for (; a.return; ) a = a.return;
          else {
            i = a;
            do 0 != (4098 & (a = i).flags) && (o = a.return), (i = a.return);
            while (i);
          }
          return 3 === a.tag ? o : null;
        }
        function za(i) {
          if (ya(i) !== i) throw Error(n(188));
        }
        function Aa(i) {
          var a = i.alternate;
          if (!a) {
            if (null === (a = ya(i))) throw Error(n(188));
            return a !== i ? null : i;
          }
          for (var o = i, s = a; ; ) {
            var u = o.return;
            if (null === u) break;
            var p = u.alternate;
            if (null === p) {
              if (null !== (s = u.return)) {
                o = s;
                continue;
              }
              break;
            }
            if (u.child === p.child) {
              for (p = u.child; p; ) {
                if (p === o) return za(u), i;
                if (p === s) return za(u), a;
                p = p.sibling;
              }
              throw Error(n(188));
            }
            if (o.return !== s.return) (o = u), (s = p);
            else {
              for (var A = !1, B = u.child; B; ) {
                if (B === o) {
                  (A = !0), (o = u), (s = p);
                  break;
                }
                if (B === s) {
                  (A = !0), (s = u), (o = p);
                  break;
                }
                B = B.sibling;
              }
              if (!A) {
                for (B = p.child; B; ) {
                  if (B === o) {
                    (A = !0), (o = p), (s = u);
                    break;
                  }
                  if (B === s) {
                    (A = !0), (s = p), (o = u);
                    break;
                  }
                  B = B.sibling;
                }
                if (!A) throw Error(n(189));
              }
            }
            if (o.alternate !== s) throw Error(n(190));
          }
          if (3 !== o.tag) throw Error(n(188));
          return o.stateNode.current === o ? i : a;
        }
        function Ba(i) {
          return null !== (i = Aa(i))
            ? (function Ca(i) {
                if (5 === i.tag || 6 === i.tag) return i;
                for (i = i.child; null !== i; ) {
                  var a = Ca(i);
                  if (null !== a) return a;
                  i = i.sibling;
                }
                return null;
              })(i)
            : null;
        }
        var ea,
          eo = Array.isArray,
          el = i.getPublicInstance,
          es = i.getRootHostContext,
          eu = i.getChildHostContext,
          ec = i.prepareForCommit,
          ed = i.resetAfterCommit,
          eh = i.createInstance,
          ep = i.appendInitialChild,
          em = i.finalizeInitialChildren,
          eA = i.prepareUpdate,
          eg = i.shouldSetTextContent,
          eB = i.createTextInstance,
          eC = i.scheduleTimeout,
          ev = i.cancelTimeout,
          eb = i.noTimeout,
          ey = i.isPrimaryRenderer,
          eE = i.supportsMutation,
          eM = i.supportsPersistence,
          eS = i.supportsHydration,
          ew = i.getInstanceFromNode,
          eI = i.preparePortalMount,
          eF = i.getCurrentEventPriority,
          eT = i.detachDeletedInstance,
          eR = i.supportsMicrotasks,
          eG = i.scheduleMicrotask,
          ex = i.supportsTestSelectors,
          eD = i.findFiberRoot,
          eP = i.getBoundingRect,
          eH = i.getTextContent,
          ek = i.isHiddenSubtree,
          eL = i.matchAccessibilityRole,
          e_ = i.setFocusIfFocusable,
          eO = i.setupIntersectionObserver,
          eJ = i.appendChild,
          eN = i.appendChildToContainer,
          eU = i.commitTextUpdate,
          eK = i.commitMount,
          ej = i.commitUpdate,
          ez = i.insertBefore,
          eQ = i.insertInContainerBefore,
          eX = i.removeChild,
          eW = i.removeChildFromContainer,
          eY = i.resetTextContent,
          eZ = i.hideInstance,
          eV = i.hideTextInstance,
          eq = i.unhideInstance,
          e$ = i.unhideTextInstance,
          e0 = i.clearContainer,
          e1 = i.cloneInstance,
          e9 = i.createContainerChildSet,
          e2 = i.appendChildToContainerChildSet,
          e8 = i.finalizeContainerChildren,
          e3 = i.replaceContainerChildren,
          e4 = i.cloneHiddenInstance,
          e6 = i.cloneHiddenTextInstance,
          e5 = i.canHydrateInstance,
          e7 = i.canHydrateTextInstance,
          te = i.canHydrateSuspenseInstance,
          tt = i.isSuspenseInstancePending,
          tn = i.isSuspenseInstanceFallback,
          tr = i.registerSuspenseInstanceRetry,
          ti = i.getNextHydratableSibling,
          ta = i.getFirstHydratableChild,
          to = i.getFirstHydratableChildWithinContainer,
          tl = i.getFirstHydratableChildWithinSuspenseInstance,
          ts = i.hydrateInstance,
          tu = i.hydrateTextInstance,
          tc = i.hydrateSuspenseInstance,
          th = i.getNextHydratableInstanceAfterSuspenseInstance,
          tp = i.commitHydratedContainer,
          tm = i.commitHydratedSuspenseInstance,
          tA = i.clearSuspenseBoundary,
          tB = i.clearSuspenseBoundaryFromContainer,
          tC = i.shouldDeleteUnhydratedTailInstances,
          tv = i.didNotMatchHydratedContainerTextInstance,
          tb = i.didNotMatchHydratedTextInstance;
        function ac(i) {
          if (void 0 === ea)
            try {
              throw Error();
            } catch (i) {
              var a = i.stack.trim().match(/\n( *(at )?)/);
              ea = (a && a[1]) || "";
            }
          return "\n" + ea + i;
        }
        var ty = !1;
        function cc(i, a) {
          if (!i || ty) return "";
          ty = !0;
          var o = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (a) {
              if (
                ((a = function () {
                  throw Error();
                }),
                Object.defineProperty(a.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(a, []);
                } catch (i) {
                  var s = i;
                }
                Reflect.construct(i, [], a);
              } else {
                try {
                  a.call();
                } catch (i) {
                  s = i;
                }
                i.call(a.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (i) {
                s = i;
              }
              i();
            }
          } catch (a) {
            if (a && s && "string" == typeof a.stack) {
              for (
                var u = a.stack.split("\n"),
                  p = s.stack.split("\n"),
                  A = u.length - 1,
                  B = p.length - 1;
                1 <= A && 0 <= B && u[A] !== p[B];

              )
                B--;
              for (; 1 <= A && 0 <= B; A--, B--)
                if (u[A] !== p[B]) {
                  if (1 !== A || 1 !== B)
                    do
                      if ((A--, 0 > --B || u[A] !== p[B])) {
                        var S = "\n" + u[A].replace(" at new ", " at ");
                        return (
                          i.displayName &&
                            S.includes("<anonymous>") &&
                            (S = S.replace("<anonymous>", i.displayName)),
                          S
                        );
                      }
                    while (1 <= A && 0 <= B);
                  break;
                }
            }
          } finally {
            (ty = !1), (Error.prepareStackTrace = o);
          }
          return (i = i ? i.displayName || i.name : "") ? ac(i) : "";
        }
        var tE = Object.prototype.hasOwnProperty,
          tM = [],
          tS = -1;
        function gc(i) {
          return { current: i };
        }
        function x(i) {
          0 > tS || ((i.current = tM[tS]), (tM[tS] = null), tS--);
        }
        function y(i, a) {
          (tM[++tS] = i.current), (i.current = a);
        }
        var tw = {},
          tI = gc(tw),
          tF = gc(!1),
          tT = tw;
        function jc(i, a) {
          var o = i.type.contextTypes;
          if (!o) return tw;
          var s = i.stateNode;
          if (s && s.__reactInternalMemoizedUnmaskedChildContext === a)
            return s.__reactInternalMemoizedMaskedChildContext;
          var u,
            p = {};
          for (u in o) p[u] = a[u];
          return (
            s &&
              (((i = i.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (i.__reactInternalMemoizedMaskedChildContext = p)),
            p
          );
        }
        function C(i) {
          return null != (i = i.childContextTypes);
        }
        function kc() {
          x(tF), x(tI);
        }
        function lc(i, a, o) {
          if (tI.current !== tw) throw Error(n(168));
          y(tI, a), y(tF, o);
        }
        function mc(i, a, o) {
          var s = i.stateNode;
          if (
            ((a = a.childContextTypes), "function" != typeof s.getChildContext)
          )
            return o;
          for (var u in (s = s.getChildContext()))
            if (!(u in a))
              throw Error(
                n(
                  108,
                  (function (i) {
                    var a = i.type;
                    switch (i.tag) {
                      case 24:
                        return "Cache";
                      case 9:
                        return (a.displayName || "Context") + ".Consumer";
                      case 10:
                        return (
                          (a._context.displayName || "Context") + ".Provider"
                        );
                      case 18:
                        return "DehydratedFragment";
                      case 11:
                        return (
                          (i = (i = a.render).displayName || i.name || ""),
                          a.displayName ||
                            ("" !== i ? "ForwardRef(" + i + ")" : "ForwardRef")
                        );
                      case 7:
                        return "Fragment";
                      case 5:
                        return a;
                      case 4:
                        return "Portal";
                      case 3:
                        return "Root";
                      case 6:
                        return "Text";
                      case 16:
                        return va(a);
                      case 8:
                        return a === j ? "StrictMode" : "Mode";
                      case 22:
                        return "Offscreen";
                      case 12:
                        return "Profiler";
                      case 21:
                        return "Scope";
                      case 13:
                        return "Suspense";
                      case 19:
                        return "SuspenseList";
                      case 25:
                        return "TracingMarker";
                      case 1:
                      case 0:
                      case 17:
                      case 2:
                      case 14:
                      case 15:
                        if ("function" == typeof a)
                          return a.displayName || a.name || null;
                        if ("string" == typeof a) return a;
                    }
                    return null;
                  })(i) || "Unknown",
                  u
                )
              );
          return F({}, o, s);
        }
        function nc(i) {
          return (
            (i =
              ((i = i.stateNode) &&
                i.__reactInternalMemoizedMergedChildContext) ||
              tw),
            (tT = tI.current),
            y(tI, i),
            y(tF, tF.current),
            !0
          );
        }
        function oc(i, a, o) {
          var s = i.stateNode;
          if (!s) throw Error(n(169));
          o
            ? ((i = mc(i, a, tT)),
              (s.__reactInternalMemoizedMergedChildContext = i),
              x(tF),
              x(tI),
              y(tI, i))
            : x(tF),
            y(tF, o);
        }
        var tR = Math.clz32
            ? Math.clz32
            : function (i) {
                return 0 == (i >>>= 0) ? 32 : (31 - ((tG(i) / tx) | 0)) | 0;
              },
          tG = Math.log,
          tx = Math.LN2,
          tD = 64,
          tP = 4194304;
        function vc(i) {
          switch (i & -i) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & i;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & i;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return i;
          }
        }
        function wc(i, a) {
          var o = i.pendingLanes;
          if (0 === o) return 0;
          var s = 0,
            u = i.suspendedLanes,
            p = i.pingedLanes,
            A = 268435455 & o;
          if (0 !== A) {
            var B = A & ~u;
            0 !== B ? (s = vc(B)) : 0 != (p &= A) && (s = vc(p));
          } else 0 != (A = o & ~u) ? (s = vc(A)) : 0 !== p && (s = vc(p));
          if (0 === s) return 0;
          if (
            0 !== a &&
            a !== s &&
            0 == (a & u) &&
            ((u = s & -s) >= (p = a & -a) || (16 === u && 0 != (4194240 & p)))
          )
            return a;
          if ((0 != (4 & s) && (s |= 16 & o), 0 !== (a = i.entangledLanes)))
            for (i = i.entanglements, a &= s; 0 < a; )
              (u = 1 << (o = 31 - tR(a))), (s |= i[o]), (a &= ~u);
          return s;
        }
        function zc(i) {
          return 0 != (i = -1073741825 & i.pendingLanes)
            ? i
            : 1073741824 & i
            ? 1073741824
            : 0;
        }
        function Ac(i) {
          for (var a = [], o = 0; 31 > o; o++) a.push(i);
          return a;
        }
        function Bc(i, a, o) {
          (i.pendingLanes |= a),
            536870912 !== a && ((i.suspendedLanes = 0), (i.pingedLanes = 0)),
            ((i = i.eventTimes)[(a = 31 - tR(a))] = o);
        }
        function Dc(i, a) {
          var o = (i.entangledLanes |= a);
          for (i = i.entanglements; o; ) {
            var s = 31 - tR(o),
              u = 1 << s;
            (u & a) | (i[s] & a) && (i[s] |= a), (o &= ~u);
          }
        }
        var tH = 0;
        function Ec(i) {
          return 1 < (i &= -i)
            ? 4 < i
              ? 0 != (268435455 & i)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var tk = w.unstable_scheduleCallback,
          tL = w.unstable_cancelCallback,
          t_ = w.unstable_shouldYield,
          tO = w.unstable_requestPaint,
          tJ = w.unstable_now,
          tN = w.unstable_ImmediatePriority,
          tU = w.unstable_UserBlockingPriority,
          tK = w.unstable_NormalPriority,
          tj = w.unstable_IdlePriority,
          tz = null,
          tQ = null,
          tX =
            "function" == typeof Object.is
              ? Object.is
              : function (i, a) {
                  return (
                    (i === a && (0 !== i || 1 / i == 1 / a)) ||
                    (i != i && a != a)
                  );
                },
          tW = null,
          tY = !1,
          tZ = !1;
        function Vc(i) {
          null === tW ? (tW = [i]) : tW.push(i);
        }
        function Xc() {
          if (!tZ && null !== tW) {
            tZ = !0;
            var i = 0,
              a = tH;
            try {
              var o = tW;
              for (tH = 1; i < o.length; i++) {
                var s = o[i];
                do s = s(!0);
                while (null !== s);
              }
              (tW = null), (tY = !1);
            } catch (a) {
              throw (null !== tW && (tW = tW.slice(i + 1)), tk(tN, Xc), a);
            } finally {
              (tH = a), (tZ = !1);
            }
          }
          return null;
        }
        var tV = L.ReactCurrentBatchConfig;
        function Zc(i, a) {
          if (tX(i, a)) return !0;
          if (
            "object" != typeof i ||
            null === i ||
            "object" != typeof a ||
            null === a
          )
            return !1;
          var o = Object.keys(i),
            s = Object.keys(a);
          if (o.length !== s.length) return !1;
          for (s = 0; s < o.length; s++) {
            var u = o[s];
            if (!tE.call(a, u) || !tX(i[u], a[u])) return !1;
          }
          return !0;
        }
        function ad(i, a) {
          if (i && i.defaultProps)
            for (var o in ((a = F({}, a)), (i = i.defaultProps)))
              void 0 === a[o] && (a[o] = i[o]);
          return a;
        }
        var tq = gc(null),
          t$ = null,
          t0 = null,
          t1 = null;
        function fd() {
          t1 = t0 = t$ = null;
        }
        function gd(i, a, o) {
          ey
            ? (y(tq, a._currentValue), (a._currentValue = o))
            : (y(tq, a._currentValue2), (a._currentValue2 = o));
        }
        function hd(i) {
          var a = tq.current;
          x(tq), ey ? (i._currentValue = a) : (i._currentValue2 = a);
        }
        function id(i, a, o) {
          for (; null !== i; ) {
            var s = i.alternate;
            if (
              ((i.childLanes & a) !== a
                ? ((i.childLanes |= a), null !== s && (s.childLanes |= a))
                : null !== s && (s.childLanes & a) !== a && (s.childLanes |= a),
              i === o)
            )
              break;
            i = i.return;
          }
        }
        function jd(i, a) {
          (t$ = i),
            (t1 = t0 = null),
            null !== (i = i.dependencies) &&
              null !== i.firstContext &&
              (0 != (i.lanes & a) && (n_ = !0), (i.firstContext = null));
        }
        function ld(i) {
          var a = ey ? i._currentValue : i._currentValue2;
          if (t1 !== i) {
            if (
              ((i = { context: i, memoizedValue: a, next: null }), null === t0)
            ) {
              if (null === t$) throw Error(n(308));
              (t0 = i), (t$.dependencies = { lanes: 0, firstContext: i });
            } else t0 = t0.next = i;
          }
          return a;
        }
        var t9 = null,
          t2 = !1;
        function od(i) {
          i.updateQueue = {
            baseState: i.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function pd(i, a) {
          (i = i.updateQueue),
            a.updateQueue === i &&
              (a.updateQueue = {
                baseState: i.baseState,
                firstBaseUpdate: i.firstBaseUpdate,
                lastBaseUpdate: i.lastBaseUpdate,
                shared: i.shared,
                effects: i.effects,
              });
        }
        function qd(i, a) {
          return {
            eventTime: i,
            lane: a,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function rd(i, a) {
          var o = i.updateQueue;
          null !== o &&
            ((o = o.shared),
            null !== n9 && 0 != (1 & i.mode) && 0 == (2 & n1)
              ? (null === (i = o.interleaved)
                  ? ((a.next = a), null === t9 ? (t9 = [o]) : t9.push(o))
                  : ((a.next = i.next), (i.next = a)),
                (o.interleaved = a))
              : (null === (i = o.pending)
                  ? (a.next = a)
                  : ((a.next = i.next), (i.next = a)),
                (o.pending = a)));
        }
        function sd(i, a, o) {
          if (
            null !== (a = a.updateQueue) &&
            ((a = a.shared), 0 != (4194240 & o))
          ) {
            var s = a.lanes;
            (s &= i.pendingLanes), (o |= s), (a.lanes = o), Dc(i, o);
          }
        }
        function td(i, a) {
          var o = i.updateQueue,
            s = i.alternate;
          if (null !== s && o === (s = s.updateQueue)) {
            var u = null,
              p = null;
            if (null !== (o = o.firstBaseUpdate)) {
              do {
                var A = {
                  eventTime: o.eventTime,
                  lane: o.lane,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                };
                null === p ? (u = p = A) : (p = p.next = A), (o = o.next);
              } while (null !== o);
              null === p ? (u = p = a) : (p = p.next = a);
            } else u = p = a;
            (o = {
              baseState: s.baseState,
              firstBaseUpdate: u,
              lastBaseUpdate: p,
              shared: s.shared,
              effects: s.effects,
            }),
              (i.updateQueue = o);
            return;
          }
          null === (i = o.lastBaseUpdate)
            ? (o.firstBaseUpdate = a)
            : (i.next = a),
            (o.lastBaseUpdate = a);
        }
        function ud(i, a, o, s) {
          var u = i.updateQueue;
          t2 = !1;
          var p = u.firstBaseUpdate,
            A = u.lastBaseUpdate,
            B = u.shared.pending;
          if (null !== B) {
            u.shared.pending = null;
            var S = B,
              w = S.next;
            (S.next = null), null === A ? (p = w) : (A.next = w), (A = S);
            var L = i.alternate;
            null !== L &&
              (B = (L = L.updateQueue).lastBaseUpdate) !== A &&
              (null === B ? (L.firstBaseUpdate = w) : (B.next = w),
              (L.lastBaseUpdate = S));
          }
          if (null !== p) {
            var _ = u.baseState;
            for (A = 0, L = w = S = null, B = p; ; ) {
              var N = B.lane,
                U = B.eventTime;
              if ((s & N) === N) {
                null !== L &&
                  (L = L.next =
                    {
                      eventTime: U,
                      lane: 0,
                      tag: B.tag,
                      payload: B.payload,
                      callback: B.callback,
                      next: null,
                    });
                e: {
                  var j = i,
                    Q = B;
                  switch (((N = a), (U = o), Q.tag)) {
                    case 1:
                      if ("function" == typeof (j = Q.payload)) {
                        _ = j.call(U, _, N);
                        break e;
                      }
                      _ = j;
                      break e;
                    case 3:
                      j.flags = (-65537 & j.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (N =
                          "function" == typeof (j = Q.payload)
                            ? j.call(U, _, N)
                            : j)
                      )
                        break e;
                      _ = F({}, _, N);
                      break e;
                    case 2:
                      t2 = !0;
                  }
                }
                null !== B.callback &&
                  0 !== B.lane &&
                  ((i.flags |= 64),
                  null === (N = u.effects) ? (u.effects = [B]) : N.push(B));
              } else
                (U = {
                  eventTime: U,
                  lane: N,
                  tag: B.tag,
                  payload: B.payload,
                  callback: B.callback,
                  next: null,
                }),
                  null === L ? ((w = L = U), (S = _)) : (L = L.next = U),
                  (A |= N);
              if (null === (B = B.next)) {
                if (null === (B = u.shared.pending)) break;
                (B = (N = B).next),
                  (N.next = null),
                  (u.lastBaseUpdate = N),
                  (u.shared.pending = null);
              }
            }
            if (
              (null === L && (S = _),
              (u.baseState = S),
              (u.firstBaseUpdate = w),
              (u.lastBaseUpdate = L),
              null !== (a = u.shared.interleaved))
            ) {
              u = a;
              do (A |= u.lane), (u = u.next);
              while (u !== a);
            } else null === p && (u.shared.lanes = 0);
            (n7 |= A), (i.lanes = A), (i.memoizedState = _);
          }
        }
        function wd(i, a, o) {
          if (((i = a.effects), (a.effects = null), null !== i))
            for (a = 0; a < i.length; a++) {
              var s = i[a],
                u = s.callback;
              if (null !== u) {
                if (((s.callback = null), (s = o), "function" != typeof u))
                  throw Error(n(191, u));
                u.call(s);
              }
            }
        }
        var t8 = new S.Component().refs;
        function yd(i, a, o, s) {
          (o = null == (o = o(s, (a = i.memoizedState))) ? a : F({}, a, o)),
            (i.memoizedState = o),
            0 === i.lanes && (i.updateQueue.baseState = o);
        }
        var t3 = {
          isMounted: function (i) {
            return !!(i = i._reactInternals) && ya(i) === i;
          },
          enqueueSetState: function (i, a, o) {
            i = i._reactInternals;
            var s = H(),
              u = zd(i),
              p = qd(s, u);
            (p.payload = a),
              null != o && (p.callback = o),
              rd(i, p),
              null !== (a = Ad(i, u, s)) && sd(a, i, u);
          },
          enqueueReplaceState: function (i, a, o) {
            i = i._reactInternals;
            var s = H(),
              u = zd(i),
              p = qd(s, u);
            (p.tag = 1),
              (p.payload = a),
              null != o && (p.callback = o),
              rd(i, p),
              null !== (a = Ad(i, u, s)) && sd(a, i, u);
          },
          enqueueForceUpdate: function (i, a) {
            i = i._reactInternals;
            var o = H(),
              s = zd(i),
              u = qd(o, s);
            (u.tag = 2),
              null != a && (u.callback = a),
              rd(i, u),
              null !== (a = Ad(i, s, o)) && sd(a, i, s);
          },
        };
        function Cd(i, a, o, s, u, p, A) {
          return "function" == typeof (i = i.stateNode).shouldComponentUpdate
            ? i.shouldComponentUpdate(s, p, A)
            : !a.prototype ||
                !a.prototype.isPureReactComponent ||
                !Zc(o, s) ||
                !Zc(u, p);
        }
        function Dd(i, a, o) {
          var s = !1,
            u = tw,
            p = a.contextType;
          return (
            "object" == typeof p && null !== p
              ? (p = ld(p))
              : ((u = C(a) ? tT : tI.current),
                (p = (s = null != (s = a.contextTypes)) ? jc(i, u) : tw)),
            (a = new a(o, p)),
            (i.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null),
            (a.updater = t3),
            (i.stateNode = a),
            (a._reactInternals = i),
            s &&
              (((i = i.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                u),
              (i.__reactInternalMemoizedMaskedChildContext = p)),
            a
          );
        }
        function Ed(i, a, o, s) {
          (i = a.state),
            "function" == typeof a.componentWillReceiveProps &&
              a.componentWillReceiveProps(o, s),
            "function" == typeof a.UNSAFE_componentWillReceiveProps &&
              a.UNSAFE_componentWillReceiveProps(o, s),
            a.state !== i && t3.enqueueReplaceState(a, a.state, null);
        }
        function Fd(i, a, o, s) {
          var u = i.stateNode;
          (u.props = o), (u.state = i.memoizedState), (u.refs = t8), od(i);
          var p = a.contextType;
          "object" == typeof p && null !== p
            ? (u.context = ld(p))
            : ((p = C(a) ? tT : tI.current), (u.context = jc(i, p))),
            (u.state = i.memoizedState),
            "function" == typeof (p = a.getDerivedStateFromProps) &&
              (yd(i, a, p, o), (u.state = i.memoizedState)),
            "function" == typeof a.getDerivedStateFromProps ||
              "function" == typeof u.getSnapshotBeforeUpdate ||
              ("function" != typeof u.UNSAFE_componentWillMount &&
                "function" != typeof u.componentWillMount) ||
              ((a = u.state),
              "function" == typeof u.componentWillMount &&
                u.componentWillMount(),
              "function" == typeof u.UNSAFE_componentWillMount &&
                u.UNSAFE_componentWillMount(),
              a !== u.state && t3.enqueueReplaceState(u, u.state, null),
              ud(i, o, u, s),
              (u.state = i.memoizedState)),
            "function" == typeof u.componentDidMount && (i.flags |= 4194308);
        }
        var t4 = [],
          t6 = 0,
          t5 = null,
          t7 = 0,
          nt = [],
          nn = 0,
          nr = null,
          ni = 1,
          na = "";
        function Pd(i, a) {
          (t4[t6++] = t7), (t4[t6++] = t5), (t5 = i), (t7 = a);
        }
        function Qd(i, a, o) {
          (nt[nn++] = ni), (nt[nn++] = na), (nt[nn++] = nr), (nr = i);
          var s = ni;
          i = na;
          var u = 32 - tR(s) - 1;
          (s &= ~(1 << u)), (o += 1);
          var p = 32 - tR(a) + u;
          if (30 < p) {
            var A = u - (u % 5);
            (p = (s & ((1 << A) - 1)).toString(32)),
              (s >>= A),
              (u -= A),
              (ni = (1 << (32 - tR(a) + u)) | (o << u) | s),
              (na = p + i);
          } else (ni = (1 << p) | (o << u) | s), (na = i);
        }
        function Rd(i) {
          null !== i.return && (Pd(i, 1), Qd(i, 1, 0));
        }
        function Sd(i) {
          for (; i === t5; )
            (t5 = t4[--t6]), (t4[t6] = null), (t7 = t4[--t6]), (t4[t6] = null);
          for (; i === nr; )
            (nr = nt[--nn]),
              (nt[nn] = null),
              (na = nt[--nn]),
              (nt[nn] = null),
              (ni = nt[--nn]),
              (nt[nn] = null);
        }
        var no = null,
          nl = null,
          ns = !1,
          nu = !1,
          nd = null;
        function Xd(i, a) {
          var o = Yd(5, null, null, 0);
          (o.elementType = "DELETED"),
            (o.stateNode = a),
            (o.return = i),
            null === (a = i.deletions)
              ? ((i.deletions = [o]), (i.flags |= 16))
              : a.push(o);
        }
        function Zd(i, a) {
          switch (i.tag) {
            case 5:
              return (
                null !== (a = e5(a, i.type, i.pendingProps)) &&
                ((i.stateNode = a), (no = i), (nl = ta(a)), !0)
              );
            case 6:
              return (
                null !== (a = e7(a, i.pendingProps)) &&
                ((i.stateNode = a), (no = i), (nl = null), !0)
              );
            case 13:
              if (null !== (a = te(a))) {
                var o = null !== nr ? { id: ni, overflow: na } : null;
                return (
                  (i.memoizedState = {
                    dehydrated: a,
                    treeContext: o,
                    retryLane: 1073741824,
                  }),
                  ((o = Yd(18, null, null, 0)).stateNode = a),
                  (o.return = i),
                  (i.child = o),
                  (no = i),
                  (nl = null),
                  !0
                );
              }
              return !1;
            default:
              return !1;
          }
        }
        function $d(i) {
          return 0 != (1 & i.mode) && 0 == (128 & i.flags);
        }
        function ae(i) {
          if (ns) {
            var a = nl;
            if (a) {
              var o = a;
              if (!Zd(i, a)) {
                if ($d(i)) throw Error(n(418));
                a = ti(o);
                var s = no;
                a && Zd(i, a)
                  ? Xd(s, o)
                  : ((i.flags = (-4097 & i.flags) | 2), (ns = !1), (no = i));
              }
            } else {
              if ($d(i)) throw Error(n(418));
              (i.flags = (-4097 & i.flags) | 2), (ns = !1), (no = i);
            }
          }
        }
        function be(i) {
          for (
            i = i.return;
            null !== i && 5 !== i.tag && 3 !== i.tag && 13 !== i.tag;

          )
            i = i.return;
          no = i;
        }
        function ce(i) {
          if (!eS || i !== no) return !1;
          if (!ns) return be(i), (ns = !0), !1;
          if (
            3 !== i.tag &&
            (5 !== i.tag || (tC(i.type) && !eg(i.type, i.memoizedProps)))
          ) {
            var a = nl;
            if (a) {
              if ($d(i)) {
                for (i = nl; i; ) i = ti(i);
                throw Error(n(418));
              }
              for (; a; ) Xd(i, a), (a = ti(a));
            }
          }
          if ((be(i), 13 === i.tag)) {
            if (!eS) throw Error(n(316));
            if (!(i = null !== (i = i.memoizedState) ? i.dehydrated : null))
              throw Error(n(317));
            nl = th(i);
          } else nl = no ? ti(i.stateNode) : null;
          return !0;
        }
        function de() {
          eS && ((nl = no = null), (nu = ns = !1));
        }
        function ee(i) {
          null === nd ? (nd = [i]) : nd.push(i);
        }
        function fe(i, a, o) {
          if (
            null !== (i = o.ref) &&
            "function" != typeof i &&
            "object" != typeof i
          ) {
            if (o._owner) {
              if ((o = o._owner)) {
                if (1 !== o.tag) throw Error(n(309));
                var s = o.stateNode;
              }
              if (!s) throw Error(n(147, i));
              var u = s,
                p = "" + i;
              return null !== a &&
                null !== a.ref &&
                "function" == typeof a.ref &&
                a.ref._stringRef === p
                ? a.ref
                : (((a = function (i) {
                    var a = u.refs;
                    a === t8 && (a = u.refs = {}),
                      null === i ? delete a[p] : (a[p] = i);
                  })._stringRef = p),
                  a);
            }
            if ("string" != typeof i) throw Error(n(284));
            if (!o._owner) throw Error(n(290, i));
          }
          return i;
        }
        function ge(i, a) {
          throw Error(
            n(
              31,
              "[object Object]" === (i = Object.prototype.toString.call(a))
                ? "object with keys {" + Object.keys(a).join(", ") + "}"
                : i
            )
          );
        }
        function he(i) {
          return (0, i._init)(i._payload);
        }
        function ie(i) {
          function b(a, o) {
            if (i) {
              var s = a.deletions;
              null === s ? ((a.deletions = [o]), (a.flags |= 16)) : s.push(o);
            }
          }
          function c(a, o) {
            if (!i) return null;
            for (; null !== o; ) b(a, o), (o = o.sibling);
            return null;
          }
          function d(i, a) {
            for (i = new Map(); null !== a; )
              null !== a.key ? i.set(a.key, a) : i.set(a.index, a),
                (a = a.sibling);
            return i;
          }
          function e(i, a) {
            return ((i = je(i, a)).index = 0), (i.sibling = null), i;
          }
          function f(a, o, s) {
            return ((a.index = s), i)
              ? null !== (s = a.alternate)
                ? (s = s.index) < o
                  ? ((a.flags |= 2), o)
                  : s
                : ((a.flags |= 2), o)
              : ((a.flags |= 1048576), o);
          }
          function g(a) {
            return i && null === a.alternate && (a.flags |= 2), a;
          }
          function h(i, a, o, s) {
            return (
              null === a || 6 !== a.tag
                ? ((a = ke(o, i.mode, s)).return = i)
                : ((a = e(a, o)).return = i),
              a
            );
          }
          function k(i, a, o, s) {
            var u = o.type;
            return u === U
              ? m(i, a, o.props.children, s, o.key)
              : (null !== a &&
                (a.elementType === u ||
                  ("object" == typeof u &&
                    null !== u &&
                    u.$$typeof === et &&
                    he(u) === a.type))
                  ? ((s = e(a, o.props)).ref = fe(i, a, o))
                  : ((s = le(o.type, o.key, o.props, null, i.mode, s)).ref = fe(
                      i,
                      a,
                      o
                    )),
                (s.return = i),
                s);
          }
          function l(i, a, o, s) {
            return (
              null === a ||
              4 !== a.tag ||
              a.stateNode.containerInfo !== o.containerInfo ||
              a.stateNode.implementation !== o.implementation
                ? ((a = me(o, i.mode, s)).return = i)
                : ((a = e(a, o.children || [])).return = i),
              a
            );
          }
          function m(i, a, o, s, u) {
            return (
              null === a || 7 !== a.tag
                ? ((a = ne(o, i.mode, s, u)).return = i)
                : ((a = e(a, o)).return = i),
              a
            );
          }
          function v(i, a, o) {
            if (("string" == typeof a && "" !== a) || "number" == typeof a)
              return ((a = ke("" + a, i.mode, o)).return = i), a;
            if ("object" == typeof a && null !== a) {
              switch (a.$$typeof) {
                case _:
                  return (
                    ((o = le(a.type, a.key, a.props, null, i.mode, o)).ref = fe(
                      i,
                      null,
                      a
                    )),
                    (o.return = i),
                    o
                  );
                case N:
                  return ((a = me(a, i.mode, o)).return = i), a;
                case et:
                  return v(i, (0, a._init)(a._payload), o);
              }
              if (eo(a) || ua(a))
                return ((a = ne(a, i.mode, o, null)).return = i), a;
              ge(i, a);
            }
            return null;
          }
          function r(i, a, o, s) {
            var u = null !== a ? a.key : null;
            if (("string" == typeof o && "" !== o) || "number" == typeof o)
              return null !== u ? null : h(i, a, "" + o, s);
            if ("object" == typeof o && null !== o) {
              switch (o.$$typeof) {
                case _:
                  return o.key === u ? k(i, a, o, s) : null;
                case N:
                  return o.key === u ? l(i, a, o, s) : null;
                case et:
                  return r(i, a, (u = o._init)(o._payload), s);
              }
              if (eo(o) || ua(o))
                return null !== u ? null : m(i, a, o, s, null);
              ge(i, o);
            }
            return null;
          }
          function z(i, a, o, s, u) {
            if (("string" == typeof s && "" !== s) || "number" == typeof s)
              return h(a, (i = i.get(o) || null), "" + s, u);
            if ("object" == typeof s && null !== s) {
              switch (s.$$typeof) {
                case _:
                  return k(
                    a,
                    (i = i.get(null === s.key ? o : s.key) || null),
                    s,
                    u
                  );
                case N:
                  return l(
                    a,
                    (i = i.get(null === s.key ? o : s.key) || null),
                    s,
                    u
                  );
                case et:
                  return z(i, a, o, (0, s._init)(s._payload), u);
              }
              if (eo(s) || ua(s))
                return m(a, (i = i.get(o) || null), s, u, null);
              ge(a, s);
            }
            return null;
          }
          return function da(a, o, s, u) {
            if (
              ("object" == typeof s &&
                null !== s &&
                s.type === U &&
                null === s.key &&
                (s = s.props.children),
              "object" == typeof s && null !== s)
            ) {
              switch (s.$$typeof) {
                case _:
                  e: {
                    for (var p = s.key, A = o; null !== A; ) {
                      if (A.key === p) {
                        if ((p = s.type) === U) {
                          if (7 === A.tag) {
                            c(a, A.sibling),
                              ((o = e(A, s.props.children)).return = a),
                              (a = o);
                            break e;
                          }
                        } else if (
                          A.elementType === p ||
                          ("object" == typeof p &&
                            null !== p &&
                            p.$$typeof === et &&
                            he(p) === A.type)
                        ) {
                          c(a, A.sibling),
                            ((o = e(A, s.props)).ref = fe(a, A, s)),
                            (o.return = a),
                            (a = o);
                          break e;
                        }
                        c(a, A);
                        break;
                      }
                      b(a, A), (A = A.sibling);
                    }
                    s.type === U
                      ? (((o = ne(s.props.children, a.mode, u, s.key)).return =
                          a),
                        (a = o))
                      : (((u = le(
                          s.type,
                          s.key,
                          s.props,
                          null,
                          a.mode,
                          u
                        )).ref = fe(a, o, s)),
                        (u.return = a),
                        (a = u));
                  }
                  return g(a);
                case N:
                  e: {
                    for (A = s.key; null !== o; ) {
                      if (o.key === A) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === s.containerInfo &&
                          o.stateNode.implementation === s.implementation
                        ) {
                          c(a, o.sibling),
                            ((o = e(o, s.children || [])).return = a),
                            (a = o);
                          break e;
                        }
                        c(a, o);
                        break;
                      }
                      b(a, o), (o = o.sibling);
                    }
                    ((o = me(s, a.mode, u)).return = a), (a = o);
                  }
                  return g(a);
                case et:
                  return da(a, o, (A = s._init)(s._payload), u);
              }
              if (eo(s))
                return (function (a, o, s, u) {
                  for (
                    var p = null, A = null, B = o, S = (o = 0), w = null;
                    null !== B && S < s.length;
                    S++
                  ) {
                    B.index > S ? ((w = B), (B = null)) : (w = B.sibling);
                    var F = r(a, B, s[S], u);
                    if (null === F) {
                      null === B && (B = w);
                      break;
                    }
                    i && B && null === F.alternate && b(a, B),
                      (o = f(F, o, S)),
                      null === A ? (p = F) : (A.sibling = F),
                      (A = F),
                      (B = w);
                  }
                  if (S === s.length) return c(a, B), ns && Pd(a, S), p;
                  if (null === B) {
                    for (; S < s.length; S++)
                      null !== (B = v(a, s[S], u)) &&
                        ((o = f(B, o, S)),
                        null === A ? (p = B) : (A.sibling = B),
                        (A = B));
                    return ns && Pd(a, S), p;
                  }
                  for (B = d(a, B); S < s.length; S++)
                    null !== (w = z(B, a, S, s[S], u)) &&
                      (i &&
                        null !== w.alternate &&
                        B.delete(null === w.key ? S : w.key),
                      (o = f(w, o, S)),
                      null === A ? (p = w) : (A.sibling = w),
                      (A = w));
                  return (
                    i &&
                      B.forEach(function (i) {
                        return b(a, i);
                      }),
                    ns && Pd(a, S),
                    p
                  );
                })(a, o, s, u);
              if (ua(s))
                return (function (a, o, s, u) {
                  var p = ua(s);
                  if ("function" != typeof p) throw Error(n(150));
                  if (null == (s = p.call(s))) throw Error(n(151));
                  for (
                    var A = (p = null),
                      B = o,
                      S = (o = 0),
                      w = null,
                      F = s.next();
                    null !== B && !F.done;
                    S++, F = s.next()
                  ) {
                    B.index > S ? ((w = B), (B = null)) : (w = B.sibling);
                    var L = r(a, B, F.value, u);
                    if (null === L) {
                      null === B && (B = w);
                      break;
                    }
                    i && B && null === L.alternate && b(a, B),
                      (o = f(L, o, S)),
                      null === A ? (p = L) : (A.sibling = L),
                      (A = L),
                      (B = w);
                  }
                  if (F.done) return c(a, B), ns && Pd(a, S), p;
                  if (null === B) {
                    for (; !F.done; S++, F = s.next())
                      null !== (F = v(a, F.value, u)) &&
                        ((o = f(F, o, S)),
                        null === A ? (p = F) : (A.sibling = F),
                        (A = F));
                    return ns && Pd(a, S), p;
                  }
                  for (B = d(a, B); !F.done; S++, F = s.next())
                    null !== (F = z(B, a, S, F.value, u)) &&
                      (i &&
                        null !== F.alternate &&
                        B.delete(null === F.key ? S : F.key),
                      (o = f(F, o, S)),
                      null === A ? (p = F) : (A.sibling = F),
                      (A = F));
                  return (
                    i &&
                      B.forEach(function (i) {
                        return b(a, i);
                      }),
                    ns && Pd(a, S),
                    p
                  );
                })(a, o, s, u);
              ge(a, s);
            }
            return ("string" == typeof s && "" !== s) || "number" == typeof s
              ? ((s = "" + s),
                null !== o && 6 === o.tag
                  ? (c(a, o.sibling), ((o = e(o, s)).return = a))
                  : (c(a, o), ((o = ke(s, a.mode, u)).return = a)),
                g((a = o)))
              : c(a, o);
          };
        }
        var nh = ie(!0),
          np = ie(!1),
          nm = {},
          nA = gc(nm),
          nB = gc(nm),
          nC = gc(nm);
        function ue(i) {
          if (i === nm) throw Error(n(174));
          return i;
        }
        function ve(i, a) {
          y(nC, a), y(nB, i), y(nA, nm), (i = es(a)), x(nA), y(nA, i);
        }
        function we() {
          x(nA), x(nB), x(nC);
        }
        function xe(i) {
          var a = ue(nC.current),
            o = ue(nA.current);
          (a = eu(o, i.type, a)), o !== a && (y(nB, i), y(nA, a));
        }
        function ye(i) {
          nB.current === i && (x(nA), x(nB));
        }
        var nv = gc(0);
        function ze(i) {
          for (var a = i; null !== a; ) {
            if (13 === a.tag) {
              var o = a.memoizedState;
              if (null !== o && (null === (o = o.dehydrated) || tt(o) || tn(o)))
                return a;
            } else if (19 === a.tag && void 0 !== a.memoizedProps.revealOrder) {
              if (0 != (128 & a.flags)) return a;
            } else if (null !== a.child) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === i) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === i) return null;
              a = a.return;
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
          return null;
        }
        var nb = [];
        function Be() {
          for (var i = 0; i < nb.length; i++) {
            var a = nb[i];
            ey
              ? (a._workInProgressVersionPrimary = null)
              : (a._workInProgressVersionSecondary = null);
          }
          nb.length = 0;
        }
        var ny = L.ReactCurrentDispatcher,
          nE = L.ReactCurrentBatchConfig,
          nM = 0,
          nS = null,
          nw = null,
          nI = null,
          nF = !1,
          nT = !1,
          nR = 0,
          nG = 0;
        function O() {
          throw Error(n(321));
        }
        function Je(i, a) {
          if (null === a) return !1;
          for (var o = 0; o < a.length && o < i.length; o++)
            if (!tX(i[o], a[o])) return !1;
          return !0;
        }
        function Ke(i, a, o, s, u, p) {
          if (
            ((nM = p),
            (nS = a),
            (a.memoizedState = null),
            (a.updateQueue = null),
            (a.lanes = 0),
            (ny.current = null === i || null === i.memoizedState ? nD : nP),
            (i = o(s, u)),
            nT)
          ) {
            p = 0;
            do {
              if (((nT = !1), (nR = 0), 25 <= p)) throw Error(n(301));
              (p += 1),
                (nI = nw = null),
                (a.updateQueue = null),
                (ny.current = nH),
                (i = o(s, u));
            } while (nT);
          }
          if (
            ((ny.current = nx),
            (a = null !== nw && null !== nw.next),
            (nM = 0),
            (nI = nw = nS = null),
            (nF = !1),
            a)
          )
            throw Error(n(300));
          return i;
        }
        function Pe() {
          var i = 0 !== nR;
          return (nR = 0), i;
        }
        function Qe() {
          var i = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === nI ? (nS.memoizedState = nI = i) : (nI = nI.next = i), nI
          );
        }
        function Re() {
          if (null === nw) {
            var i = nS.alternate;
            i = null !== i ? i.memoizedState : null;
          } else i = nw.next;
          var a = null === nI ? nS.memoizedState : nI.next;
          if (null !== a) (nI = a), (nw = i);
          else {
            if (null === i) throw Error(n(310));
            (i = {
              memoizedState: (nw = i).memoizedState,
              baseState: nw.baseState,
              baseQueue: nw.baseQueue,
              queue: nw.queue,
              next: null,
            }),
              null === nI ? (nS.memoizedState = nI = i) : (nI = nI.next = i);
          }
          return nI;
        }
        function Se(i, a) {
          return "function" == typeof a ? a(i) : a;
        }
        function Te(i) {
          var a = Re(),
            o = a.queue;
          if (null === o) throw Error(n(311));
          o.lastRenderedReducer = i;
          var s = nw,
            u = s.baseQueue,
            p = o.pending;
          if (null !== p) {
            if (null !== u) {
              var A = u.next;
              (u.next = p.next), (p.next = A);
            }
            (s.baseQueue = u = p), (o.pending = null);
          }
          if (null !== u) {
            (p = u.next), (s = s.baseState);
            var B = (A = null),
              S = null,
              w = p;
            do {
              var F = w.lane;
              if ((nM & F) === F)
                null !== S &&
                  (S = S.next =
                    {
                      lane: 0,
                      action: w.action,
                      hasEagerState: w.hasEagerState,
                      eagerState: w.eagerState,
                      next: null,
                    }),
                  (s = w.hasEagerState ? w.eagerState : i(s, w.action));
              else {
                var L = {
                  lane: F,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                };
                null === S ? ((B = S = L), (A = s)) : (S = S.next = L),
                  (nS.lanes |= F),
                  (n7 |= F);
              }
              w = w.next;
            } while (null !== w && w !== p);
            null === S ? (A = s) : (S.next = B),
              tX(s, a.memoizedState) || (n_ = !0),
              (a.memoizedState = s),
              (a.baseState = A),
              (a.baseQueue = S),
              (o.lastRenderedState = s);
          }
          if (null !== (i = o.interleaved)) {
            u = i;
            do (p = u.lane), (nS.lanes |= p), (n7 |= p), (u = u.next);
            while (u !== i);
          } else null === u && (o.lanes = 0);
          return [a.memoizedState, o.dispatch];
        }
        function Ue(i) {
          var a = Re(),
            o = a.queue;
          if (null === o) throw Error(n(311));
          o.lastRenderedReducer = i;
          var s = o.dispatch,
            u = o.pending,
            p = a.memoizedState;
          if (null !== u) {
            o.pending = null;
            var A = (u = u.next);
            do (p = i(p, A.action)), (A = A.next);
            while (A !== u);
            tX(p, a.memoizedState) || (n_ = !0),
              (a.memoizedState = p),
              null === a.baseQueue && (a.baseState = p),
              (o.lastRenderedState = p);
          }
          return [p, s];
        }
        function Ve() {}
        function We(i, a) {
          var o = nS,
            s = Re(),
            u = a(),
            p = !tX(s.memoizedState, u);
          if (
            (p && ((s.memoizedState = u), (n_ = !0)),
            (s = s.queue),
            Xe(Ye.bind(null, o, s, i), [i]),
            s.getSnapshot !== a ||
              p ||
              (null !== nI && 1 & nI.memoizedState.tag))
          ) {
            if (
              ((o.flags |= 2048),
              Ze(9, $e.bind(null, o, s, u, a), void 0, null),
              null === n9)
            )
              throw Error(n(349));
            0 != (30 & nM) || af(o, a, u);
          }
          return u;
        }
        function af(i, a, o) {
          (i.flags |= 16384),
            (i = { getSnapshot: a, value: o }),
            null === (a = nS.updateQueue)
              ? ((a = { lastEffect: null, stores: null }),
                (nS.updateQueue = a),
                (a.stores = [i]))
              : null === (o = a.stores)
              ? (a.stores = [i])
              : o.push(i);
        }
        function $e(i, a, o, s) {
          (a.value = o), (a.getSnapshot = s), bf(a) && Ad(i, 1, -1);
        }
        function Ye(i, a, o) {
          return o(function () {
            bf(a) && Ad(i, 1, -1);
          });
        }
        function bf(i) {
          var a = i.getSnapshot;
          i = i.value;
          try {
            var o = a();
            return !tX(i, o);
          } catch (i) {
            return !0;
          }
        }
        function cf(i) {
          var a = Qe();
          return (
            "function" == typeof i && (i = i()),
            (a.memoizedState = a.baseState = i),
            (i = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Se,
              lastRenderedState: i,
            }),
            (a.queue = i),
            (i = i.dispatch = df.bind(null, nS, i)),
            [a.memoizedState, i]
          );
        }
        function Ze(i, a, o, s) {
          return (
            (i = { tag: i, create: a, destroy: o, deps: s, next: null }),
            null === (a = nS.updateQueue)
              ? ((a = { lastEffect: null, stores: null }),
                (nS.updateQueue = a),
                (a.lastEffect = i.next = i))
              : null === (o = a.lastEffect)
              ? (a.lastEffect = i.next = i)
              : ((s = o.next), (o.next = i), (i.next = s), (a.lastEffect = i)),
            i
          );
        }
        function ef() {
          return Re().memoizedState;
        }
        function ff(i, a, o, s) {
          var u = Qe();
          (nS.flags |= i),
            (u.memoizedState = Ze(1 | a, o, void 0, void 0 === s ? null : s));
        }
        function gf(i, a, o, s) {
          var u = Re();
          s = void 0 === s ? null : s;
          var p = void 0;
          if (null !== nw) {
            var A = nw.memoizedState;
            if (((p = A.destroy), null !== s && Je(s, A.deps))) {
              u.memoizedState = Ze(a, o, p, s);
              return;
            }
          }
          (nS.flags |= i), (u.memoizedState = Ze(1 | a, o, p, s));
        }
        function hf(i, a) {
          return ff(8390656, 8, i, a);
        }
        function Xe(i, a) {
          return gf(2048, 8, i, a);
        }
        function jf(i, a) {
          return gf(4, 2, i, a);
        }
        function kf(i, a) {
          return gf(4, 4, i, a);
        }
        function lf(i, a) {
          return "function" == typeof a
            ? (a((i = i())),
              function () {
                a(null);
              })
            : null != a
            ? ((i = i()),
              (a.current = i),
              function () {
                a.current = null;
              })
            : void 0;
        }
        function mf(i, a, o) {
          return (
            (o = null != o ? o.concat([i]) : null),
            gf(4, 4, lf.bind(null, a, i), o)
          );
        }
        function nf() {}
        function of(i, a) {
          var o = Re();
          a = void 0 === a ? null : a;
          var s = o.memoizedState;
          return null !== s && null !== a && Je(a, s[1])
            ? s[0]
            : ((o.memoizedState = [i, a]), i);
        }
        function pf(i, a) {
          var o = Re();
          a = void 0 === a ? null : a;
          var s = o.memoizedState;
          return null !== s && null !== a && Je(a, s[1])
            ? s[0]
            : ((i = i()), (o.memoizedState = [i, a]), i);
        }
        function qf(i, a) {
          var o = tH;
          (tH = 0 !== o && 4 > o ? o : 4), i(!0);
          var s = nE.transition;
          nE.transition = {};
          try {
            i(!1), a();
          } finally {
            (tH = o), (nE.transition = s);
          }
        }
        function rf() {
          return Re().memoizedState;
        }
        function sf(i, a, o) {
          var s = zd(i);
          (o = {
            lane: s,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            tf(i)
              ? uf(a, o)
              : (vf(i, a, o),
                null !== (i = Ad(i, s, (o = H()))) && wf(i, a, s));
        }
        function df(i, a, o) {
          var s = zd(i),
            u = {
              lane: s,
              action: o,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (tf(i)) uf(a, u);
          else {
            vf(i, a, u);
            var p = i.alternate;
            if (
              0 === i.lanes &&
              (null === p || 0 === p.lanes) &&
              null !== (p = a.lastRenderedReducer)
            )
              try {
                var A = a.lastRenderedState,
                  B = p(A, o);
                if (((u.hasEagerState = !0), (u.eagerState = B), tX(B, A)))
                  return;
              } catch (i) {
              } finally {
              }
            null !== (i = Ad(i, s, (o = H()))) && wf(i, a, s);
          }
        }
        function tf(i) {
          var a = i.alternate;
          return i === nS || (null !== a && a === nS);
        }
        function uf(i, a) {
          nT = nF = !0;
          var o = i.pending;
          null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
            (i.pending = a);
        }
        function vf(i, a, o) {
          null !== n9 && 0 != (1 & i.mode) && 0 == (2 & n1)
            ? (null === (i = a.interleaved)
                ? ((o.next = o), null === t9 ? (t9 = [a]) : t9.push(a))
                : ((o.next = i.next), (i.next = o)),
              (a.interleaved = o))
            : (null === (i = a.pending)
                ? (o.next = o)
                : ((o.next = i.next), (i.next = o)),
              (a.pending = o));
        }
        function wf(i, a, o) {
          if (0 != (4194240 & o)) {
            var s = a.lanes;
            (s &= i.pendingLanes), (o |= s), (a.lanes = o), Dc(i, o);
          }
        }
        var nx = {
            readContext: ld,
            useCallback: O,
            useContext: O,
            useEffect: O,
            useImperativeHandle: O,
            useInsertionEffect: O,
            useLayoutEffect: O,
            useMemo: O,
            useReducer: O,
            useRef: O,
            useState: O,
            useDebugValue: O,
            useDeferredValue: O,
            useTransition: O,
            useMutableSource: O,
            useSyncExternalStore: O,
            useId: O,
            unstable_isNewReconciler: !1,
          },
          nD = {
            readContext: ld,
            useCallback: function (i, a) {
              return (Qe().memoizedState = [i, void 0 === a ? null : a]), i;
            },
            useContext: ld,
            useEffect: hf,
            useImperativeHandle: function (i, a, o) {
              return (
                (o = null != o ? o.concat([i]) : null),
                ff(4194308, 4, lf.bind(null, a, i), o)
              );
            },
            useLayoutEffect: function (i, a) {
              return ff(4194308, 4, i, a);
            },
            useInsertionEffect: function (i, a) {
              return ff(4, 2, i, a);
            },
            useMemo: function (i, a) {
              var o = Qe();
              return (
                (a = void 0 === a ? null : a),
                (i = i()),
                (o.memoizedState = [i, a]),
                i
              );
            },
            useReducer: function (i, a, o) {
              var s = Qe();
              return (
                (a = void 0 !== o ? o(a) : a),
                (s.memoizedState = s.baseState = a),
                (i = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: i,
                  lastRenderedState: a,
                }),
                (s.queue = i),
                (i = i.dispatch = sf.bind(null, nS, i)),
                [s.memoizedState, i]
              );
            },
            useRef: function (i) {
              return (i = { current: i }), (Qe().memoizedState = i);
            },
            useState: cf,
            useDebugValue: nf,
            useDeferredValue: function (i) {
              var a = cf(i),
                o = a[0],
                s = a[1];
              return (
                hf(
                  function () {
                    var a = nE.transition;
                    nE.transition = {};
                    try {
                      s(i);
                    } finally {
                      nE.transition = a;
                    }
                  },
                  [i]
                ),
                o
              );
            },
            useTransition: function () {
              var i = cf(!1),
                a = i[0];
              return (
                (i = qf.bind(null, i[1])), (Qe().memoizedState = i), [a, i]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (i, a, o) {
              var s = nS,
                u = Qe();
              if (ns) {
                if (void 0 === o) throw Error(n(407));
                o = o();
              } else {
                if (((o = a()), null === n9)) throw Error(n(349));
                0 != (30 & nM) || af(s, a, o);
              }
              u.memoizedState = o;
              var p = { value: o, getSnapshot: a };
              return (
                (u.queue = p),
                hf(Ye.bind(null, s, p, i), [i]),
                (s.flags |= 2048),
                Ze(9, $e.bind(null, s, p, o, a), void 0, null),
                o
              );
            },
            useId: function () {
              var i = Qe(),
                a = n9.identifierPrefix;
              if (ns) {
                var o = na,
                  s = ni;
                (a =
                  ":" +
                  a +
                  "R" +
                  (o = (s & ~(1 << (32 - tR(s) - 1))).toString(32) + o)),
                  0 < (o = nR++) && (a += "H" + o.toString(32)),
                  (a += ":");
              } else a = ":" + a + "r" + (o = nG++).toString(32) + ":";
              return (i.memoizedState = a);
            },
            unstable_isNewReconciler: !1,
          },
          nP = {
            readContext: ld,
            useCallback: of,
            useContext: ld,
            useEffect: Xe,
            useImperativeHandle: mf,
            useInsertionEffect: jf,
            useLayoutEffect: kf,
            useMemo: pf,
            useReducer: Te,
            useRef: ef,
            useState: function () {
              return Te(Se);
            },
            useDebugValue: nf,
            useDeferredValue: function (i) {
              var a = Te(Se),
                o = a[0],
                s = a[1];
              return (
                Xe(
                  function () {
                    var a = nE.transition;
                    nE.transition = {};
                    try {
                      s(i);
                    } finally {
                      nE.transition = a;
                    }
                  },
                  [i]
                ),
                o
              );
            },
            useTransition: function () {
              return [Te(Se)[0], Re().memoizedState];
            },
            useMutableSource: Ve,
            useSyncExternalStore: We,
            useId: rf,
            unstable_isNewReconciler: !1,
          },
          nH = {
            readContext: ld,
            useCallback: of,
            useContext: ld,
            useEffect: Xe,
            useImperativeHandle: mf,
            useInsertionEffect: jf,
            useLayoutEffect: kf,
            useMemo: pf,
            useReducer: Ue,
            useRef: ef,
            useState: function () {
              return Ue(Se);
            },
            useDebugValue: nf,
            useDeferredValue: function (i) {
              var a = Ue(Se),
                o = a[0],
                s = a[1];
              return (
                Xe(
                  function () {
                    var a = nE.transition;
                    nE.transition = {};
                    try {
                      s(i);
                    } finally {
                      nE.transition = a;
                    }
                  },
                  [i]
                ),
                o
              );
            },
            useTransition: function () {
              return [Ue(Se)[0], Re().memoizedState];
            },
            useMutableSource: Ve,
            useSyncExternalStore: We,
            useId: rf,
            unstable_isNewReconciler: !1,
          };
        function xf(i, a) {
          try {
            var o = "",
              s = a;
            do
              (o += (function (i) {
                switch (i.tag) {
                  case 5:
                    return ac(i.type);
                  case 16:
                    return ac("Lazy");
                  case 13:
                    return ac("Suspense");
                  case 19:
                    return ac("SuspenseList");
                  case 0:
                  case 2:
                  case 15:
                    return (i = cc(i.type, !1));
                  case 11:
                    return (i = cc(i.type.render, !1));
                  case 1:
                    return (i = cc(i.type, !0));
                  default:
                    return "";
                }
              })(s)),
                (s = s.return);
            while (s);
            var u = o;
          } catch (i) {
            u = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: i, source: a, stack: u };
        }
        function yf(i, a) {
          try {
            console.error(a.value);
          } catch (i) {
            setTimeout(function () {
              throw i;
            });
          }
        }
        var nk = "function" == typeof WeakMap ? WeakMap : Map;
        function Af(i, a, o) {
          ((o = qd(-1, o)).tag = 3), (o.payload = { element: null });
          var s = a.value;
          return (
            (o.callback = function () {
              ro || ((ro = !0), (rl = s)), yf(i, a);
            }),
            o
          );
        }
        function Df(i, a, o) {
          (o = qd(-1, o)).tag = 3;
          var s = i.type.getDerivedStateFromError;
          if ("function" == typeof s) {
            var u = a.value;
            (o.payload = function () {
              return s(u);
            }),
              (o.callback = function () {
                yf(i, a);
              });
          }
          var p = i.stateNode;
          return (
            null !== p &&
              "function" == typeof p.componentDidCatch &&
              (o.callback = function () {
                yf(i, a),
                  "function" != typeof s &&
                    (null === rs ? (rs = new Set([this])) : rs.add(this));
                var o = a.stack;
                this.componentDidCatch(a.value, {
                  componentStack: null !== o ? o : "",
                });
              }),
            o
          );
        }
        function Ff(i, a, o) {
          var s = i.pingCache;
          if (null === s) {
            s = i.pingCache = new nk();
            var u = new Set();
            s.set(a, u);
          } else void 0 === (u = s.get(a)) && ((u = new Set()), s.set(a, u));
          u.has(o) || (u.add(o), (i = Gf.bind(null, i, a, o)), a.then(i, i));
        }
        function Hf(i) {
          do {
            var a;
            if (
              ((a = 13 === i.tag) &&
                (a = null === (a = i.memoizedState) || null !== a.dehydrated),
              a)
            )
              return i;
            i = i.return;
          } while (null !== i);
          return null;
        }
        function If(i, a, o, s, u) {
          return (
            0 == (1 & i.mode)
              ? i === a
                ? (i.flags |= 65536)
                : ((i.flags |= 128),
                  (o.flags |= 131072),
                  (o.flags &= -52805),
                  1 === o.tag &&
                    (null === o.alternate
                      ? (o.tag = 17)
                      : (((a = qd(-1, 1)).tag = 2), rd(o, a))),
                  (o.lanes |= 1))
              : ((i.flags |= 65536), (i.lanes = u)),
            i
          );
        }
        function Jf(i) {
          i.flags |= 4;
        }
        function Kf(i, a) {
          if (null !== i && i.child === a.child) return !0;
          if (0 != (16 & a.flags)) return !1;
          for (i = a.child; null !== i; ) {
            if (0 != (12854 & i.flags) || 0 != (12854 & i.subtreeFlags))
              return !1;
            i = i.sibling;
          }
          return !0;
        }
        if (eE)
          (a = function (i, a) {
            for (var o = a.child; null !== o; ) {
              if (5 === o.tag || 6 === o.tag) ep(i, o.stateNode);
              else if (4 !== o.tag && null !== o.child) {
                (o.child.return = o), (o = o.child);
                continue;
              }
              if (o === a) break;
              for (; null === o.sibling; ) {
                if (null === o.return || o.return === a) return;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
          }),
            (s = function () {}),
            (u = function (i, a, o, s, u) {
              (i = i.memoizedProps) !== s &&
                ((o = eA(a.stateNode, o, i, s, u, ue(nA.current))),
                (a.updateQueue = o) && Jf(a));
            }),
            (p = function (i, a, o, s) {
              o !== s && Jf(a);
            });
        else if (eM) {
          a = function (i, o, s, u) {
            for (var p = o.child; null !== p; ) {
              if (5 === p.tag) {
                var A = p.stateNode;
                s && u && (A = e4(A, p.type, p.memoizedProps, p)), ep(i, A);
              } else if (6 === p.tag)
                (A = p.stateNode),
                  s && u && (A = e6(A, p.memoizedProps, p)),
                  ep(i, A);
              else if (4 !== p.tag) {
                if (22 === p.tag && null !== p.memoizedState)
                  null !== (A = p.child) && (A.return = p), a(i, p, !0, !0);
                else if (null !== p.child) {
                  (p.child.return = p), (p = p.child);
                  continue;
                }
              }
              if (p === o) break;
              for (; null === p.sibling; ) {
                if (null === p.return || p.return === o) return;
                p = p.return;
              }
              (p.sibling.return = p.return), (p = p.sibling);
            }
          };
          var Pf = function (i, a, o, s) {
            for (var u = a.child; null !== u; ) {
              if (5 === u.tag) {
                var p = u.stateNode;
                o && s && (p = e4(p, u.type, u.memoizedProps, u)), e2(i, p);
              } else if (6 === u.tag)
                (p = u.stateNode),
                  o && s && (p = e6(p, u.memoizedProps, u)),
                  e2(i, p);
              else if (4 !== u.tag) {
                if (22 === u.tag && null !== u.memoizedState)
                  null !== (p = u.child) && (p.return = u), Pf(i, u, !0, !0);
                else if (null !== u.child) {
                  (u.child.return = u), (u = u.child);
                  continue;
                }
              }
              if (u === a) break;
              for (; null === u.sibling; ) {
                if (null === u.return || u.return === a) return;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
          };
          (s = function (i, a) {
            var o = a.stateNode;
            if (!Kf(i, a)) {
              var s = e9((i = o.containerInfo));
              Pf(s, a, !1, !1), (o.pendingChildren = s), Jf(a), e8(i, s);
            }
          }),
            (u = function (i, o, s, u, p) {
              var A = i.stateNode,
                B = i.memoizedProps;
              if ((i = Kf(i, o)) && B === u) o.stateNode = A;
              else {
                var S = o.stateNode,
                  w = ue(nA.current),
                  F = null;
                B !== u && (F = eA(S, s, B, u, p, w)),
                  i && null === F
                    ? (o.stateNode = A)
                    : (em((A = e1(A, F, s, B, u, o, i, S)), s, u, p, w) &&
                        Jf(o),
                      (o.stateNode = A),
                      i ? Jf(o) : a(A, o, !1, !1));
              }
            }),
            (p = function (i, a, o, s) {
              o !== s
                ? ((i = ue(nC.current)),
                  (o = ue(nA.current)),
                  (a.stateNode = eB(s, i, o, a)),
                  Jf(a))
                : (a.stateNode = i.stateNode);
            });
        } else (s = function () {}), (u = function () {}), (p = function () {});
        function Qf(i, a) {
          if (!ns)
            switch (i.tailMode) {
              case "hidden":
                a = i.tail;
                for (var o = null; null !== a; )
                  null !== a.alternate && (o = a), (a = a.sibling);
                null === o ? (i.tail = null) : (o.sibling = null);
                break;
              case "collapsed":
                o = i.tail;
                for (var s = null; null !== o; )
                  null !== o.alternate && (s = o), (o = o.sibling);
                null === s
                  ? a || null === i.tail
                    ? (i.tail = null)
                    : (i.tail.sibling = null)
                  : (s.sibling = null);
            }
        }
        function P(i) {
          var a = null !== i.alternate && i.alternate.child === i.child,
            o = 0,
            s = 0;
          if (a)
            for (var u = i.child; null !== u; )
              (o |= u.lanes | u.childLanes),
                (s |= 14680064 & u.subtreeFlags),
                (s |= 14680064 & u.flags),
                (u.return = i),
                (u = u.sibling);
          else
            for (u = i.child; null !== u; )
              (o |= u.lanes | u.childLanes),
                (s |= u.subtreeFlags),
                (s |= u.flags),
                (u.return = i),
                (u = u.sibling);
          return (i.subtreeFlags |= s), (i.childLanes = o), a;
        }
        var nL = L.ReactCurrentOwner,
          n_ = !1;
        function R(i, a, o, s) {
          a.child = null === i ? np(a, null, o, s) : nh(a, i.child, o, s);
        }
        function Yf(i, a, o, s, u) {
          o = o.render;
          var p = a.ref;
          return (jd(a, u),
          (s = Ke(i, a, o, s, p, u)),
          (o = Pe()),
          null === i || n_)
            ? (ns && o && Rd(a), (a.flags |= 1), R(i, a, s, u), a.child)
            : ((a.updateQueue = i.updateQueue),
              (a.flags &= -2053),
              (i.lanes &= ~u),
              Zf(i, a, u));
        }
        function $f(i, a, o, s, u) {
          if (null === i) {
            var p = o.type;
            return "function" != typeof p ||
              ag(p) ||
              void 0 !== p.defaultProps ||
              null !== o.compare ||
              void 0 !== o.defaultProps
              ? (((i = le(o.type, null, s, a, a.mode, u)).ref = a.ref),
                (i.return = a),
                (a.child = i))
              : ((a.tag = 15), (a.type = p), bg(i, a, p, s, u));
          }
          if (((p = i.child), 0 == (i.lanes & u))) {
            var A = p.memoizedProps;
            if (
              (o = null !== (o = o.compare) ? o : Zc)(A, s) &&
              i.ref === a.ref
            )
              return Zf(i, a, u);
          }
          return (
            (a.flags |= 1),
            ((i = je(p, s)).ref = a.ref),
            (i.return = a),
            (a.child = i)
          );
        }
        function bg(i, a, o, s, u) {
          if (null !== i && Zc(i.memoizedProps, s) && i.ref === a.ref) {
            if (((n_ = !1), 0 == (i.lanes & u)))
              return (a.lanes = i.lanes), Zf(i, a, u);
            0 != (131072 & i.flags) && (n_ = !0);
          }
          return cg(i, a, o, s, u);
        }
        function dg(i, a, o) {
          var s = a.pendingProps,
            u = s.children,
            p = null !== i ? i.memoizedState : null;
          if ("hidden" === s.mode) {
            if (0 == (1 & a.mode))
              (a.memoizedState = { baseLanes: 0, cachePool: null }),
                y(n4, n3),
                (n3 |= o);
            else {
              if (0 == (1073741824 & o))
                return (
                  (i = null !== p ? p.baseLanes | o : o),
                  (a.lanes = a.childLanes = 1073741824),
                  (a.memoizedState = { baseLanes: i, cachePool: null }),
                  (a.updateQueue = null),
                  y(n4, n3),
                  (n3 |= i),
                  null
                );
              (a.memoizedState = { baseLanes: 0, cachePool: null }),
                (s = null !== p ? p.baseLanes : o),
                y(n4, n3),
                (n3 |= s);
            }
          } else
            null !== p
              ? ((s = p.baseLanes | o), (a.memoizedState = null))
              : (s = o),
              y(n4, n3),
              (n3 |= s);
          return R(i, a, u, o), a.child;
        }
        function fg(i, a) {
          var o = a.ref;
          ((null === i && null !== o) || (null !== i && i.ref !== o)) &&
            ((a.flags |= 512), (a.flags |= 2097152));
        }
        function cg(i, a, o, s, u) {
          var p = C(o) ? tT : tI.current;
          return ((p = jc(a, p)),
          jd(a, u),
          (o = Ke(i, a, o, s, p, u)),
          (s = Pe()),
          null === i || n_)
            ? (ns && s && Rd(a), (a.flags |= 1), R(i, a, o, u), a.child)
            : ((a.updateQueue = i.updateQueue),
              (a.flags &= -2053),
              (i.lanes &= ~u),
              Zf(i, a, u));
        }
        function gg(i, a, o, s, u) {
          if (C(o)) {
            var p = !0;
            nc(a);
          } else p = !1;
          if ((jd(a, u), null === a.stateNode))
            null !== i &&
              ((i.alternate = null), (a.alternate = null), (a.flags |= 2)),
              Dd(a, o, s),
              Fd(a, o, s, u),
              (s = !0);
          else if (null === i) {
            var A = a.stateNode,
              B = a.memoizedProps;
            A.props = B;
            var S = A.context,
              w = o.contextType;
            w =
              "object" == typeof w && null !== w
                ? ld(w)
                : jc(a, (w = C(o) ? tT : tI.current));
            var F = o.getDerivedStateFromProps,
              L =
                "function" == typeof F ||
                "function" == typeof A.getSnapshotBeforeUpdate;
            L ||
              ("function" != typeof A.UNSAFE_componentWillReceiveProps &&
                "function" != typeof A.componentWillReceiveProps) ||
              ((B !== s || S !== w) && Ed(a, A, s, w)),
              (t2 = !1);
            var _ = a.memoizedState;
            (A.state = _),
              ud(a, s, A, u),
              (S = a.memoizedState),
              B !== s || _ !== S || tF.current || t2
                ? ("function" == typeof F &&
                    (yd(a, o, F, s), (S = a.memoizedState)),
                  (B = t2 || Cd(a, o, B, s, _, S, w))
                    ? (L ||
                        ("function" != typeof A.UNSAFE_componentWillMount &&
                          "function" != typeof A.componentWillMount) ||
                        ("function" == typeof A.componentWillMount &&
                          A.componentWillMount(),
                        "function" == typeof A.UNSAFE_componentWillMount &&
                          A.UNSAFE_componentWillMount()),
                      "function" == typeof A.componentDidMount &&
                        (a.flags |= 4194308))
                    : ("function" == typeof A.componentDidMount &&
                        (a.flags |= 4194308),
                      (a.memoizedProps = s),
                      (a.memoizedState = S)),
                  (A.props = s),
                  (A.state = S),
                  (A.context = w),
                  (s = B))
                : ("function" == typeof A.componentDidMount &&
                    (a.flags |= 4194308),
                  (s = !1));
          } else {
            (A = a.stateNode),
              pd(i, a),
              (B = a.memoizedProps),
              (w = a.type === a.elementType ? B : ad(a.type, B)),
              (A.props = w),
              (L = a.pendingProps),
              (_ = A.context),
              (S =
                "object" == typeof (S = o.contextType) && null !== S
                  ? ld(S)
                  : jc(a, (S = C(o) ? tT : tI.current)));
            var N = o.getDerivedStateFromProps;
            (F =
              "function" == typeof N ||
              "function" == typeof A.getSnapshotBeforeUpdate) ||
              ("function" != typeof A.UNSAFE_componentWillReceiveProps &&
                "function" != typeof A.componentWillReceiveProps) ||
              ((B !== L || _ !== S) && Ed(a, A, s, S)),
              (t2 = !1),
              (_ = a.memoizedState),
              (A.state = _),
              ud(a, s, A, u);
            var U = a.memoizedState;
            B !== L || _ !== U || tF.current || t2
              ? ("function" == typeof N &&
                  (yd(a, o, N, s), (U = a.memoizedState)),
                (w = t2 || Cd(a, o, w, s, _, U, S) || !1)
                  ? (F ||
                      ("function" != typeof A.UNSAFE_componentWillUpdate &&
                        "function" != typeof A.componentWillUpdate) ||
                      ("function" == typeof A.componentWillUpdate &&
                        A.componentWillUpdate(s, U, S),
                      "function" == typeof A.UNSAFE_componentWillUpdate &&
                        A.UNSAFE_componentWillUpdate(s, U, S)),
                    "function" == typeof A.componentDidUpdate && (a.flags |= 4),
                    "function" == typeof A.getSnapshotBeforeUpdate &&
                      (a.flags |= 1024))
                  : ("function" != typeof A.componentDidUpdate ||
                      (B === i.memoizedProps && _ === i.memoizedState) ||
                      (a.flags |= 4),
                    "function" != typeof A.getSnapshotBeforeUpdate ||
                      (B === i.memoizedProps && _ === i.memoizedState) ||
                      (a.flags |= 1024),
                    (a.memoizedProps = s),
                    (a.memoizedState = U)),
                (A.props = s),
                (A.state = U),
                (A.context = S),
                (s = w))
              : ("function" != typeof A.componentDidUpdate ||
                  (B === i.memoizedProps && _ === i.memoizedState) ||
                  (a.flags |= 4),
                "function" != typeof A.getSnapshotBeforeUpdate ||
                  (B === i.memoizedProps && _ === i.memoizedState) ||
                  (a.flags |= 1024),
                (s = !1));
          }
          return hg(i, a, o, s, p, u);
        }
        function hg(i, a, o, s, u, p) {
          fg(i, a);
          var A = 0 != (128 & a.flags);
          if (!s && !A) return u && oc(a, o, !1), Zf(i, a, p);
          (s = a.stateNode), (nL.current = a);
          var B =
            A && "function" != typeof o.getDerivedStateFromError
              ? null
              : s.render();
          return (
            (a.flags |= 1),
            null !== i && A
              ? ((a.child = nh(a, i.child, null, p)),
                (a.child = nh(a, null, B, p)))
              : R(i, a, B, p),
            (a.memoizedState = s.state),
            u && oc(a, o, !0),
            a.child
          );
        }
        function ig(i) {
          var a = i.stateNode;
          a.pendingContext
            ? lc(i, a.pendingContext, a.pendingContext !== a.context)
            : a.context && lc(i, a.context, !1),
            ve(i, a.containerInfo);
        }
        function jg(i, a, o, s, u) {
          return de(), ee(u), (a.flags |= 256), R(i, a, o, s), a.child;
        }
        var nO = { dehydrated: null, treeContext: null, retryLane: 0 };
        function lg(i) {
          return { baseLanes: i, cachePool: null };
        }
        function mg(i, a, o) {
          var s,
            u,
            p,
            A,
            B,
            S,
            w,
            F,
            L,
            _,
            N,
            U,
            j,
            Q,
            X = a.pendingProps,
            W = nv.current,
            Y = !1,
            V = 0 != (128 & a.flags);
          if (
            ((Q = V) ||
              (Q = (null === i || null !== i.memoizedState) && 0 != (2 & W)),
            Q
              ? ((Y = !0), (a.flags &= -129))
              : (null === i || null !== i.memoizedState) && (W |= 1),
            y(nv, 1 & W),
            null === i)
          )
            return (ae(a),
            null !== (i = a.memoizedState) && null !== (i = i.dehydrated))
              ? (0 == (1 & a.mode)
                  ? (a.lanes = 1)
                  : tn(i)
                  ? (a.lanes = 8)
                  : (a.lanes = 1073741824),
                null)
              : ((W = X.children),
                (i = X.fallback),
                Y
                  ? ((X = a.mode),
                    (Y = a.child),
                    (W = { mode: "hidden", children: W }),
                    0 == (1 & X) && null !== Y
                      ? ((Y.childLanes = 0), (Y.pendingProps = W))
                      : (Y = ng(W, X, 0, null)),
                    (i = ne(i, X, o, null)),
                    (Y.return = a),
                    (i.return = a),
                    (Y.sibling = i),
                    (a.child = Y),
                    (a.child.memoizedState = lg(o)),
                    (a.memoizedState = nO),
                    i)
                  : og(a, W));
          if (null !== (W = i.memoizedState) && null !== (Q = W.dehydrated)) {
            if (V)
              return 256 & a.flags
                ? ((a.flags &= -257), pg(i, a, o, Error(n(422))))
                : null !== a.memoizedState
                ? ((a.child = i.child), (a.flags |= 128), null)
                : ((Y = X.fallback),
                  (W = a.mode),
                  (X = ng(
                    { mode: "visible", children: X.children },
                    W,
                    0,
                    null
                  )),
                  (Y = ne(Y, W, o, null)),
                  (Y.flags |= 2),
                  (X.return = a),
                  (Y.return = a),
                  (X.sibling = Y),
                  (a.child = X),
                  0 != (1 & a.mode) && nh(a, i.child, null, o),
                  (a.child.memoizedState = lg(o)),
                  (a.memoizedState = nO),
                  Y);
            if (0 == (1 & a.mode)) a = pg(i, a, o, null);
            else if (tn(Q)) a = pg(i, a, o, Error(n(419)));
            else if (((X = 0 != (o & i.childLanes)), n_ || X)) {
              if (null !== (X = n9)) {
                switch (o & -o) {
                  case 4:
                    Y = 2;
                    break;
                  case 16:
                    Y = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    Y = 32;
                    break;
                  case 536870912:
                    Y = 268435456;
                    break;
                  default:
                    Y = 0;
                }
                0 !== (X = 0 != (Y & (X.suspendedLanes | o)) ? 0 : Y) &&
                  X !== W.retryLane &&
                  ((W.retryLane = X), Ad(i, X, -1));
              }
              Tf(), (a = pg(i, a, o, Error(n(421))));
            } else
              tt(Q)
                ? ((a.flags |= 128),
                  (a.child = i.child),
                  tr(Q, (a = qg.bind(null, i))),
                  (a = null))
                : ((o = W.treeContext),
                  eS &&
                    ((nl = tl(Q)),
                    (no = a),
                    (ns = !0),
                    (nd = null),
                    (nu = !1),
                    null !== o &&
                      ((nt[nn++] = ni),
                      (nt[nn++] = na),
                      (nt[nn++] = nr),
                      (ni = o.id),
                      (na = o.overflow),
                      (nr = a))),
                  (a = og(a, a.pendingProps.children)),
                  (a.flags |= 4096));
            return a;
          }
          return Y
            ? ((s = i),
              (u = a),
              (p = X.children),
              (A = X.fallback),
              (B = o),
              (S = u.mode),
              (w = (s = s.child).sibling),
              (F = { mode: "hidden", children: p }),
              0 == (1 & S) && u.child !== s
                ? (((p = u.child).childLanes = 0),
                  (p.pendingProps = F),
                  (u.deletions = null))
                : ((p = je(s, F)).subtreeFlags = 14680064 & s.subtreeFlags),
              null !== w
                ? (A = je(w, A))
                : ((A = ne(A, S, B, null)), (A.flags |= 2)),
              (A.return = u),
              (p.return = u),
              (p.sibling = A),
              (u.child = p),
              (X = A),
              (Y = a.child),
              (W = i.child.memoizedState),
              (Y.memoizedState =
                null === W
                  ? lg(o)
                  : { baseLanes: W.baseLanes | o, cachePool: null }),
              (Y.childLanes = i.childLanes & ~o),
              (a.memoizedState = nO),
              X)
            : ((L = i),
              (_ = a),
              (N = X.children),
              (U = o),
              (L = (j = L.child).sibling),
              (N = je(j, { mode: "visible", children: N })),
              0 == (1 & _.mode) && (N.lanes = U),
              (N.return = _),
              (N.sibling = null),
              null !== L &&
                (null === (U = _.deletions)
                  ? ((_.deletions = [L]), (_.flags |= 16))
                  : U.push(L)),
              (o = _.child = N),
              (a.memoizedState = null),
              o);
        }
        function og(i, a) {
          return (
            ((a = ng(
              { mode: "visible", children: a },
              i.mode,
              0,
              null
            )).return = i),
            (i.child = a)
          );
        }
        function pg(i, a, o, s) {
          return (
            null !== s && ee(s),
            nh(a, i.child, null, o),
            (i = og(a, a.pendingProps.children)),
            (i.flags |= 2),
            (a.memoizedState = null),
            i
          );
        }
        function tg(i, a, o) {
          i.lanes |= a;
          var s = i.alternate;
          null !== s && (s.lanes |= a), id(i.return, a, o);
        }
        function ug(i, a, o, s, u) {
          var p = i.memoizedState;
          null === p
            ? (i.memoizedState = {
                isBackwards: a,
                rendering: null,
                renderingStartTime: 0,
                last: s,
                tail: o,
                tailMode: u,
              })
            : ((p.isBackwards = a),
              (p.rendering = null),
              (p.renderingStartTime = 0),
              (p.last = s),
              (p.tail = o),
              (p.tailMode = u));
        }
        function vg(i, a, o) {
          var s = a.pendingProps,
            u = s.revealOrder,
            p = s.tail;
          if ((R(i, a, s.children, o), 0 != (2 & (s = nv.current))))
            (s = (1 & s) | 2), (a.flags |= 128);
          else {
            if (null !== i && 0 != (128 & i.flags))
              e: for (i = a.child; null !== i; ) {
                if (13 === i.tag) null !== i.memoizedState && tg(i, o, a);
                else if (19 === i.tag) tg(i, o, a);
                else if (null !== i.child) {
                  (i.child.return = i), (i = i.child);
                  continue;
                }
                if (i === a) break;
                for (; null === i.sibling; ) {
                  if (null === i.return || i.return === a) break e;
                  i = i.return;
                }
                (i.sibling.return = i.return), (i = i.sibling);
              }
            s &= 1;
          }
          if ((y(nv, s), 0 == (1 & a.mode))) a.memoizedState = null;
          else
            switch (u) {
              case "forwards":
                for (u = null, o = a.child; null !== o; )
                  null !== (i = o.alternate) && null === ze(i) && (u = o),
                    (o = o.sibling);
                null === (o = u)
                  ? ((u = a.child), (a.child = null))
                  : ((u = o.sibling), (o.sibling = null)),
                  ug(a, !1, u, o, p);
                break;
              case "backwards":
                for (o = null, u = a.child, a.child = null; null !== u; ) {
                  if (null !== (i = u.alternate) && null === ze(i)) {
                    a.child = u;
                    break;
                  }
                  (i = u.sibling), (u.sibling = o), (o = u), (u = i);
                }
                ug(a, !0, o, null, p);
                break;
              case "together":
                ug(a, !1, null, null, void 0);
                break;
              default:
                a.memoizedState = null;
            }
          return a.child;
        }
        function Zf(i, a, o) {
          if (
            (null !== i && (a.dependencies = i.dependencies),
            (n7 |= a.lanes),
            0 == (o & a.childLanes))
          )
            return null;
          if (null !== i && a.child !== i.child) throw Error(n(153));
          if (null !== a.child) {
            for (
              o = je((i = a.child), i.pendingProps), a.child = o, o.return = a;
              null !== i.sibling;

            )
              (i = i.sibling),
                ((o = o.sibling = je(i, i.pendingProps)).return = a);
            o.sibling = null;
          }
          return a.child;
        }
        var nJ = !1,
          nN = !1,
          nU = "function" == typeof WeakSet ? WeakSet : Set,
          nK = null;
        function Bg(i, a) {
          var o = i.ref;
          if (null !== o) {
            if ("function" == typeof o)
              try {
                o(null);
              } catch (o) {
                T(i, a, o);
              }
            else o.current = null;
          }
        }
        function Cg(i, a, o) {
          try {
            o();
          } catch (o) {
            T(i, a, o);
          }
        }
        var nj = !1;
        function Fg(i, a, o) {
          var s = a.updateQueue;
          if (null !== (s = null !== s ? s.lastEffect : null)) {
            var u = (s = s.next);
            do {
              if ((u.tag & i) === i) {
                var p = u.destroy;
                (u.destroy = void 0), void 0 !== p && Cg(a, o, p);
              }
              u = u.next;
            } while (u !== s);
          }
        }
        function Gg(i, a) {
          if (
            null !== (a = null !== (a = a.updateQueue) ? a.lastEffect : null)
          ) {
            var o = (a = a.next);
            do {
              if ((o.tag & i) === i) {
                var s = o.create;
                o.destroy = s();
              }
              o = o.next;
            } while (o !== a);
          }
        }
        function Hg(i) {
          var a = i.ref;
          if (null !== a) {
            var o = i.stateNode;
            (i = 5 === i.tag ? el(o) : o),
              "function" == typeof a ? a(i) : (a.current = i);
          }
        }
        function Ig(i, a, o) {
          if (tQ && "function" == typeof tQ.onCommitFiberUnmount)
            try {
              tQ.onCommitFiberUnmount(tz, a);
            } catch (i) {}
          switch (a.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (i = a.updateQueue) && null !== (i = i.lastEffect)) {
                var s = (i = i.next);
                do {
                  var u = s,
                    p = u.destroy;
                  (u = u.tag),
                    void 0 !== p &&
                      (0 != (2 & u)
                        ? Cg(a, o, p)
                        : 0 != (4 & u) && Cg(a, o, p)),
                    (s = s.next);
                } while (s !== i);
              }
              break;
            case 1:
              if (
                (Bg(a, o),
                "function" == typeof (i = a.stateNode).componentWillUnmount)
              )
                try {
                  (i.props = a.memoizedProps),
                    (i.state = a.memoizedState),
                    i.componentWillUnmount();
                } catch (i) {
                  T(a, o, i);
                }
              break;
            case 5:
              Bg(a, o);
              break;
            case 4:
              eE
                ? Jg(i, a, o)
                : eM &&
                  eM &&
                  ((o = e9((a = a.stateNode.containerInfo))), e3(a, o));
          }
        }
        function Kg(i, a, o) {
          for (var s = a; ; )
            if ((Ig(i, s, o), null === s.child || (eE && 4 === s.tag))) {
              if (s === a) break;
              for (; null === s.sibling; ) {
                if (null === s.return || s.return === a) return;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            } else (s.child.return = s), (s = s.child);
        }
        function Mg(i) {
          return 5 === i.tag || 3 === i.tag || 4 === i.tag;
        }
        function Ng(i) {
          e: for (;;) {
            for (; null === i.sibling; ) {
              if (null === i.return || Mg(i.return)) return null;
              i = i.return;
            }
            for (
              i.sibling.return = i.return, i = i.sibling;
              5 !== i.tag && 6 !== i.tag && 18 !== i.tag;

            ) {
              if (2 & i.flags || null === i.child || 4 === i.tag) continue e;
              (i.child.return = i), (i = i.child);
            }
            if (!(2 & i.flags)) return i.stateNode;
          }
        }
        function Og(i) {
          if (eE) {
            e: {
              for (var a = i.return; null !== a; ) {
                if (Mg(a)) break e;
                a = a.return;
              }
              throw Error(n(160));
            }
            var o = a;
            switch (o.tag) {
              case 5:
                (a = o.stateNode),
                  32 & o.flags && (eY(a), (o.flags &= -33)),
                  (o = Ng(i)),
                  (function Pg(i, a, o) {
                    var s = i.tag;
                    if (5 === s || 6 === s)
                      (i = i.stateNode), a ? ez(o, i, a) : eJ(o, i);
                    else if (4 !== s && null !== (i = i.child))
                      for (Pg(i, a, o), i = i.sibling; null !== i; )
                        Pg(i, a, o), (i = i.sibling);
                  })(i, o, a);
                break;
              case 3:
              case 4:
                (a = o.stateNode.containerInfo),
                  (o = Ng(i)),
                  (function Qg(i, a, o) {
                    var s = i.tag;
                    if (5 === s || 6 === s)
                      (i = i.stateNode), a ? eQ(o, i, a) : eN(o, i);
                    else if (4 !== s && null !== (i = i.child))
                      for (Qg(i, a, o), i = i.sibling; null !== i; )
                        Qg(i, a, o), (i = i.sibling);
                  })(i, o, a);
                break;
              default:
                throw Error(n(161));
            }
          }
        }
        function Jg(i, a, o) {
          for (var s, u, p = a, A = !1; ; ) {
            if (!A) {
              A = p.return;
              e: for (;;) {
                if (null === A) throw Error(n(160));
                switch (((s = A.stateNode), A.tag)) {
                  case 5:
                    u = !1;
                    break e;
                  case 3:
                  case 4:
                    (s = s.containerInfo), (u = !0);
                    break e;
                }
                A = A.return;
              }
              A = !0;
            }
            if (5 === p.tag || 6 === p.tag)
              Kg(i, p, o), u ? eW(s, p.stateNode) : eX(s, p.stateNode);
            else if (18 === p.tag) u ? tB(s, p.stateNode) : tA(s, p.stateNode);
            else if (4 === p.tag) {
              if (null !== p.child) {
                (s = p.stateNode.containerInfo),
                  (u = !0),
                  (p.child.return = p),
                  (p = p.child);
                continue;
              }
            } else if ((Ig(i, p, o), null !== p.child)) {
              (p.child.return = p), (p = p.child);
              continue;
            }
            if (p === a) break;
            for (; null === p.sibling; ) {
              if (null === p.return || p.return === a) return;
              4 === (p = p.return).tag && (A = !1);
            }
            (p.sibling.return = p.return), (p = p.sibling);
          }
        }
        function Rg(i, a) {
          if (eE) {
            switch (a.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Fg(3, a, a.return), Gg(3, a), Fg(5, a, a.return);
                return;
              case 1:
              case 12:
              case 17:
                return;
              case 5:
                var o = a.stateNode;
                if (null != o) {
                  var s = a.memoizedProps;
                  i = null !== i ? i.memoizedProps : s;
                  var u = a.type,
                    p = a.updateQueue;
                  (a.updateQueue = null), null !== p && ej(o, p, u, i, s, a);
                }
                return;
              case 6:
                if (null === a.stateNode) throw Error(n(162));
                (o = a.memoizedProps),
                  eU(a.stateNode, null !== i ? i.memoizedProps : o, o);
                return;
              case 3:
                eS &&
                  null !== i &&
                  i.memoizedState.isDehydrated &&
                  tp(a.stateNode.containerInfo);
                return;
              case 13:
              case 19:
                Sg(a);
                return;
            }
            throw Error(n(163));
          }
          switch (a.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Fg(3, a, a.return), Gg(3, a), Fg(5, a, a.return);
              return;
            case 12:
            case 22:
            case 23:
              return;
            case 13:
            case 19:
              Sg(a);
              return;
            case 3:
              eS &&
                null !== i &&
                i.memoizedState.isDehydrated &&
                tp(a.stateNode.containerInfo);
          }
          e: if (eM) {
            switch (a.tag) {
              case 1:
              case 5:
              case 6:
                break e;
              case 3:
              case 4:
                e3((a = a.stateNode).containerInfo, a.pendingChildren);
                break e;
            }
            throw Error(n(163));
          }
        }
        function Sg(i) {
          var a = i.updateQueue;
          if (null !== a) {
            i.updateQueue = null;
            var o = i.stateNode;
            null === o && (o = i.stateNode = new nU()),
              a.forEach(function (a) {
                var s = Tg.bind(null, i, a);
                o.has(a) || (o.add(a), a.then(s, s));
              });
          }
        }
        function $g(i) {
          for (; null !== nK; ) {
            var a = nK;
            if (0 != (8772 & a.flags)) {
              var o = a.alternate;
              try {
                if (0 != (8772 & a.flags))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nN || Gg(5, a);
                      break;
                    case 1:
                      var s = a.stateNode;
                      if (4 & a.flags && !nN) {
                        if (null === o) s.componentDidMount();
                        else {
                          var u =
                            a.elementType === a.type
                              ? o.memoizedProps
                              : ad(a.type, o.memoizedProps);
                          s.componentDidUpdate(
                            u,
                            o.memoizedState,
                            s.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      }
                      var p = a.updateQueue;
                      null !== p && wd(a, p, s);
                      break;
                    case 3:
                      var A = a.updateQueue;
                      if (null !== A) {
                        if (((o = null), null !== a.child))
                          switch (a.child.tag) {
                            case 5:
                              o = el(a.child.stateNode);
                              break;
                            case 1:
                              o = a.child.stateNode;
                          }
                        wd(a, A, o);
                      }
                      break;
                    case 5:
                      var B = a.stateNode;
                      null === o &&
                        4 & a.flags &&
                        eK(B, a.type, a.memoizedProps, a);
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (eS && null === a.memoizedState) {
                        var S = a.alternate;
                        if (null !== S) {
                          var w = S.memoizedState;
                          if (null !== w) {
                            var F = w.dehydrated;
                            null !== F && tm(F);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(n(163));
                  }
                nN || (512 & a.flags && Hg(a));
              } catch (i) {
                T(a, a.return, i);
              }
            }
            if (a === i) {
              nK = null;
              break;
            }
            if (null !== (o = a.sibling)) {
              (o.return = a.return), (nK = o);
              break;
            }
            nK = a.return;
          }
        }
        function Wg(i) {
          for (; null !== nK; ) {
            var a = nK;
            if (a === i) {
              nK = null;
              break;
            }
            var o = a.sibling;
            if (null !== o) {
              (o.return = a.return), (nK = o);
              break;
            }
            nK = a.return;
          }
        }
        function Zg(i) {
          for (; null !== nK; ) {
            var a = nK;
            try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  var o = a.return;
                  try {
                    Gg(4, a);
                  } catch (i) {
                    T(a, o, i);
                  }
                  break;
                case 1:
                  var s = a.stateNode;
                  if ("function" == typeof s.componentDidMount) {
                    var u = a.return;
                    try {
                      s.componentDidMount();
                    } catch (i) {
                      T(a, u, i);
                    }
                  }
                  var p = a.return;
                  try {
                    Hg(a);
                  } catch (i) {
                    T(a, p, i);
                  }
                  break;
                case 5:
                  var A = a.return;
                  try {
                    Hg(a);
                  } catch (i) {
                    T(a, A, i);
                  }
              }
            } catch (i) {
              T(a, a.return, i);
            }
            if (a === i) {
              nK = null;
              break;
            }
            var B = a.sibling;
            if (null !== B) {
              (B.return = a.return), (nK = B);
              break;
            }
            nK = a.return;
          }
        }
        var nz = 0,
          nQ = 1,
          nX = 2,
          nW = 3,
          nY = 4;
        if ("function" == typeof Symbol && Symbol.for) {
          var nZ = Symbol.for;
          (nz = nZ("selector.component")),
            (nQ = nZ("selector.has_pseudo_class")),
            (nX = nZ("selector.role")),
            (nW = nZ("selector.test_id")),
            (nY = nZ("selector.text"));
        }
        function gh(i) {
          var a = ew(i);
          if (null != a) {
            if ("string" != typeof a.memoizedProps["data-testname"])
              throw Error(n(364));
            return a;
          }
          if (null === (i = eD(i))) throw Error(n(362));
          return i.stateNode.current;
        }
        function hh(i, a) {
          switch (a.$$typeof) {
            case nz:
              if (i.type === a.value) return !0;
              break;
            case nQ:
              e: {
                (a = a.value), (i = [i, 0]);
                for (var o = 0; o < i.length; ) {
                  var s = i[o++],
                    u = i[o++],
                    p = a[u];
                  if (5 !== s.tag || !ek(s)) {
                    for (; null != p && hh(s, p); ) p = a[++u];
                    if (u === a.length) {
                      a = !0;
                      break e;
                    }
                    for (s = s.child; null !== s; )
                      i.push(s, u), (s = s.sibling);
                  }
                }
                a = !1;
              }
              return a;
            case nX:
              if (5 === i.tag && eL(i.stateNode, a.value)) return !0;
              break;
            case nY:
              if (
                (5 === i.tag || 6 === i.tag) &&
                null !== (i = eH(i)) &&
                0 <= i.indexOf(a.value)
              )
                return !0;
              break;
            case nW:
              if (
                5 === i.tag &&
                "string" == typeof (i = i.memoizedProps["data-testname"]) &&
                i.toLowerCase() === a.value.toLowerCase()
              )
                return !0;
              break;
            default:
              throw Error(n(365));
          }
          return !1;
        }
        function ih(i) {
          switch (i.$$typeof) {
            case nz:
              return "<" + (va(i.value) || "Unknown") + ">";
            case nQ:
              return ":has(" + (ih(i) || "") + ")";
            case nX:
              return '[role="' + i.value + '"]';
            case nY:
              return '"' + i.value + '"';
            case nW:
              return '[data-testname="' + i.value + '"]';
            default:
              throw Error(n(365));
          }
        }
        function jh(i, a) {
          var o = [];
          i = [i, 0];
          for (var s = 0; s < i.length; ) {
            var u = i[s++],
              p = i[s++],
              A = a[p];
            if (5 !== u.tag || !ek(u)) {
              for (; null != A && hh(u, A); ) A = a[++p];
              if (p === a.length) o.push(u);
              else
                for (u = u.child; null !== u; ) i.push(u, p), (u = u.sibling);
            }
          }
          return o;
        }
        function kh(i, a) {
          if (!ex) throw Error(n(363));
          (i = jh((i = gh(i)), a)), (a = []), (i = Array.from(i));
          for (var o = 0; o < i.length; ) {
            var s = i[o++];
            if (5 === s.tag) ek(s) || a.push(s.stateNode);
            else for (s = s.child; null !== s; ) i.push(s), (s = s.sibling);
          }
          return a;
        }
        var nV = Math.ceil,
          nq = L.ReactCurrentDispatcher,
          n$ = L.ReactCurrentOwner,
          n0 = L.ReactCurrentBatchConfig,
          n1 = 0,
          n9 = null,
          n2 = null,
          n8 = 0,
          n3 = 0,
          n4 = gc(0),
          n6 = 0,
          n5 = null,
          n7 = 0,
          re = 0,
          rt = 0,
          rn = null,
          rr = null,
          ri = 0,
          ra = 1 / 0;
        function sh() {
          ra = tJ() + 500;
        }
        var ro = !1,
          rl = null,
          rs = null,
          ru = !1,
          rc = null,
          rh = 0,
          rp = 0,
          rm = null,
          rA = -1,
          rg = 0;
        function H() {
          return 0 != (6 & n1) ? tJ() : -1 !== rA ? rA : (rA = tJ());
        }
        function zd(i) {
          return 0 == (1 & i.mode)
            ? 1
            : 0 != (2 & n1) && 0 !== n8
            ? n8 & -n8
            : null !== tV.transition
            ? (0 === rg &&
                ((i = tD), 0 == (4194240 & (tD <<= 1)) && (tD = 64), (rg = i)),
              rg)
            : 0 !== (i = tH)
            ? i
            : eF();
        }
        function Ad(i, a, o) {
          if (50 < rp) throw ((rp = 0), (rm = null), Error(n(185)));
          var s = Ah(i, a);
          return null === s
            ? null
            : (Bc(s, a, o),
              (0 == (2 & n1) || s !== n9) &&
                (s === n9 &&
                  (0 == (2 & n1) && (re |= a), 4 === n6 && Bh(s, n8)),
                Z(s, o),
                1 === a && 0 === n1 && 0 == (1 & i.mode) && (sh(), tY && Xc())),
              s);
        }
        function Ah(i, a) {
          i.lanes |= a;
          var o = i.alternate;
          for (null !== o && (o.lanes |= a), o = i, i = i.return; null !== i; )
            (i.childLanes |= a),
              null !== (o = i.alternate) && (o.childLanes |= a),
              (o = i),
              (i = i.return);
          return 3 === o.tag ? o.stateNode : null;
        }
        function Z(i, a) {
          var o,
            s,
            u,
            p = i.callbackNode;
          !(function (i, a) {
            for (
              var o = i.suspendedLanes,
                s = i.pingedLanes,
                u = i.expirationTimes,
                p = i.pendingLanes;
              0 < p;

            ) {
              var A = 31 - tR(p),
                B = 1 << A,
                S = u[A];
              -1 === S
                ? (0 == (B & o) || 0 != (B & s)) &&
                  (u[A] = (function (i, a) {
                    switch (i) {
                      case 1:
                      case 2:
                      case 4:
                        return a + 250;
                      case 8:
                      case 16:
                      case 32:
                      case 64:
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                        return a + 5e3;
                      default:
                        return -1;
                    }
                  })(B, a))
                : S <= a && (i.expiredLanes |= B),
                (p &= ~B);
            }
          })(i, a);
          var A = wc(i, i === n9 ? n8 : 0);
          if (0 === A)
            null !== p && tL(p),
              (i.callbackNode = null),
              (i.callbackPriority = 0);
          else if (((a = A & -A), i.callbackPriority !== a)) {
            if ((null != p && tL(p), 1 === a))
              0 === i.tag
                ? ((u = Ch.bind(null, i)), (tY = !0), Vc(u))
                : Vc(Ch.bind(null, i)),
                eR
                  ? eG(function () {
                      0 === n1 && Xc();
                    })
                  : tk(tN, Xc),
                (p = null);
            else {
              switch (Ec(A)) {
                case 1:
                  p = tN;
                  break;
                case 4:
                  p = tU;
                  break;
                case 16:
                default:
                  p = tK;
                  break;
                case 536870912:
                  p = tj;
              }
              p = tk(p, Eh.bind(null, i));
            }
            (i.callbackPriority = a), (i.callbackNode = p);
          }
        }
        function Eh(i, a) {
          if (((rA = -1), (rg = 0), 0 != (6 & n1))) throw Error(n(327));
          var o = i.callbackNode;
          if (Fh() && i.callbackNode !== o) return null;
          var s = wc(i, i === n9 ? n8 : 0);
          if (0 === s) return null;
          if (0 != (30 & s) || 0 != (s & i.expiredLanes) || a) a = Gh(i, s);
          else {
            a = s;
            var u = n1;
            n1 |= 2;
            var p = Hh();
            for ((n9 !== i || n8 !== a) && (sh(), Ih(i, a)); ; )
              try {
                !(function () {
                  for (; null !== n2 && !t_(); ) Rh(n2);
                })();
                break;
              } catch (a) {
                Kh(i, a);
              }
            fd(),
              (nq.current = p),
              (n1 = u),
              null !== n2 ? (a = 0) : ((n9 = null), (n8 = 0), (a = n6));
          }
          if (0 !== a) {
            if (
              (2 === a && 0 !== (u = zc(i)) && ((s = u), (a = Lh(i, u))),
              1 === a)
            )
              throw ((o = n5), Ih(i, 0), Bh(i, s), Z(i, tJ()), o);
            if (6 === a) Bh(i, s);
            else {
              if (
                ((u = i.current.alternate),
                0 == (30 & s) &&
                  !(function (i) {
                    for (var a = i; ; ) {
                      if (16384 & a.flags) {
                        var o = a.updateQueue;
                        if (null !== o && null !== (o = o.stores))
                          for (var s = 0; s < o.length; s++) {
                            var u = o[s],
                              p = u.getSnapshot;
                            u = u.value;
                            try {
                              if (!tX(p(), u)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((o = a.child), 16384 & a.subtreeFlags && null !== o))
                        (o.return = a), (a = o);
                      else {
                        if (a === i) break;
                        for (; null === a.sibling; ) {
                          if (null === a.return || a.return === i) return !0;
                          a = a.return;
                        }
                        (a.sibling.return = a.return), (a = a.sibling);
                      }
                    }
                    return !0;
                  })(u) &&
                  (2 === (a = Gh(i, s)) &&
                    0 !== (p = zc(i)) &&
                    ((s = p), (a = Lh(i, p))),
                  1 === a))
              )
                throw ((o = n5), Ih(i, 0), Bh(i, s), Z(i, tJ()), o);
              switch (((i.finishedWork = u), (i.finishedLanes = s), a)) {
                case 0:
                case 1:
                  throw Error(n(345));
                case 2:
                case 5:
                  Nh(i, rr);
                  break;
                case 3:
                  if (
                    (Bh(i, s),
                    (130023424 & s) === s && 10 < (a = ri + 500 - tJ()))
                  ) {
                    if (0 !== wc(i, 0)) break;
                    if (((u = i.suspendedLanes) & s) !== s) {
                      H(), (i.pingedLanes |= i.suspendedLanes & u);
                      break;
                    }
                    i.timeoutHandle = eC(Nh.bind(null, i, rr), a);
                    break;
                  }
                  Nh(i, rr);
                  break;
                case 4:
                  if ((Bh(i, s), (4194240 & s) === s)) break;
                  for (u = -1, a = i.eventTimes; 0 < s; ) {
                    var A = 31 - tR(s);
                    (p = 1 << A), (A = a[A]) > u && (u = A), (s &= ~p);
                  }
                  if (
                    ((s = u),
                    10 <
                      (s =
                        (120 > (s = tJ() - s)
                          ? 120
                          : 480 > s
                          ? 480
                          : 1080 > s
                          ? 1080
                          : 1920 > s
                          ? 1920
                          : 3e3 > s
                          ? 3e3
                          : 4320 > s
                          ? 4320
                          : 1960 * nV(s / 1960)) - s))
                  ) {
                    i.timeoutHandle = eC(Nh.bind(null, i, rr), s);
                    break;
                  }
                  Nh(i, rr);
                  break;
                default:
                  throw Error(n(329));
              }
            }
          }
          return Z(i, tJ()), i.callbackNode === o ? Eh.bind(null, i) : null;
        }
        function Lh(i, a) {
          var o = rn;
          return (
            i.current.memoizedState.isDehydrated && (Ih(i, a).flags |= 256),
            2 !== (i = Gh(i, a)) && ((a = rr), (rr = o), null !== a && Sf(a)),
            i
          );
        }
        function Sf(i) {
          null === rr ? (rr = i) : rr.push.apply(rr, i);
        }
        function Bh(i, a) {
          for (
            a &= ~rt,
              a &= ~re,
              i.suspendedLanes |= a,
              i.pingedLanes &= ~a,
              i = i.expirationTimes;
            0 < a;

          ) {
            var o = 31 - tR(a),
              s = 1 << o;
            (i[o] = -1), (a &= ~s);
          }
        }
        function Ch(i) {
          if (0 != (6 & n1)) throw Error(n(327));
          Fh();
          var a = wc(i, 0);
          if (0 == (1 & a)) return Z(i, tJ()), null;
          var o = Gh(i, a);
          if (0 !== i.tag && 2 === o) {
            var s = zc(i);
            0 !== s && ((a = s), (o = Lh(i, s)));
          }
          if (1 === o) throw ((o = n5), Ih(i, 0), Bh(i, a), Z(i, tJ()), o);
          if (6 === o) throw Error(n(345));
          return (
            (i.finishedWork = i.current.alternate),
            (i.finishedLanes = a),
            Nh(i, rr),
            Z(i, tJ()),
            null
          );
        }
        function Oh(i) {
          null !== rc && 0 === rc.tag && 0 == (6 & n1) && Fh();
          var a = n1;
          n1 |= 1;
          var o = n0.transition,
            s = tH;
          try {
            if (((n0.transition = null), (tH = 1), i)) return i();
          } finally {
            (tH = s), (n0.transition = o), 0 == (6 & (n1 = a)) && Xc();
          }
        }
        function Vf() {
          (n3 = n4.current), x(n4);
        }
        function Ih(i, a) {
          (i.finishedWork = null), (i.finishedLanes = 0);
          var o = i.timeoutHandle;
          if ((o !== eb && ((i.timeoutHandle = eb), ev(o)), null !== n2))
            for (o = n2.return; null !== o; ) {
              var s = o;
              switch ((Sd(s), s.tag)) {
                case 1:
                  null != (s = s.type.childContextTypes) && kc();
                  break;
                case 3:
                  we(), x(tF), x(tI), Be();
                  break;
                case 5:
                  ye(s);
                  break;
                case 4:
                  we();
                  break;
                case 13:
                case 19:
                  x(nv);
                  break;
                case 10:
                  hd(s.type._context);
                  break;
                case 22:
                case 23:
                  Vf();
              }
              o = o.return;
            }
          if (
            ((n9 = i),
            (n2 = i = je(i.current, null)),
            (n8 = n3 = a),
            (n6 = 0),
            (n5 = null),
            (rt = re = n7 = 0),
            (rr = rn = null),
            null !== t9)
          ) {
            for (a = 0; a < t9.length; a++)
              if (null !== (s = (o = t9[a]).interleaved)) {
                o.interleaved = null;
                var u = s.next,
                  p = o.pending;
                if (null !== p) {
                  var A = p.next;
                  (p.next = u), (s.next = A);
                }
                o.pending = s;
              }
            t9 = null;
          }
          return i;
        }
        function Kh(i, a) {
          for (;;) {
            var o = n2;
            try {
              if ((fd(), (ny.current = nx), nF)) {
                for (var s = nS.memoizedState; null !== s; ) {
                  var u = s.queue;
                  null !== u && (u.pending = null), (s = s.next);
                }
                nF = !1;
              }
              if (
                ((nM = 0),
                (nI = nw = nS = null),
                (nT = !1),
                (nR = 0),
                (n$.current = null),
                null === o || null === o.return)
              ) {
                (n6 = 1), (n5 = a), (n2 = null);
                break;
              }
              e: {
                var p = i,
                  A = o.return,
                  B = o,
                  S = a;
                if (
                  ((a = n8),
                  (B.flags |= 32768),
                  null !== S &&
                    "object" == typeof S &&
                    "function" == typeof S.then)
                ) {
                  var w = S,
                    F = B,
                    L = F.tag;
                  if (0 == (1 & F.mode) && (0 === L || 11 === L || 15 === L)) {
                    var _ = F.alternate;
                    _
                      ? ((F.updateQueue = _.updateQueue),
                        (F.memoizedState = _.memoizedState),
                        (F.lanes = _.lanes))
                      : ((F.updateQueue = null), (F.memoizedState = null));
                  }
                  var N = Hf(A);
                  if (null !== N) {
                    (N.flags &= -257),
                      If(N, A, B, p, a),
                      1 & N.mode && Ff(p, w, a),
                      (a = N),
                      (S = w);
                    var U = a.updateQueue;
                    if (null === U) {
                      var j = new Set();
                      j.add(S), (a.updateQueue = j);
                    } else U.add(S);
                    break e;
                  }
                  if (0 == (1 & a)) {
                    Ff(p, w, a), Tf();
                    break e;
                  }
                  S = Error(n(426));
                } else if (ns && 1 & B.mode) {
                  var Q = Hf(A);
                  if (null !== Q) {
                    0 == (65536 & Q.flags) && (Q.flags |= 256),
                      If(Q, A, B, p, a),
                      ee(S);
                    break e;
                  }
                }
                (p = S),
                  4 !== n6 && (n6 = 2),
                  null === rn ? (rn = [p]) : rn.push(p),
                  (S = xf(S, B)),
                  (B = A);
                do {
                  switch (B.tag) {
                    case 3:
                      (B.flags |= 65536), (a &= -a), (B.lanes |= a);
                      var X = Af(B, S, a);
                      td(B, X);
                      break e;
                    case 1:
                      p = S;
                      var W = B.type,
                        Y = B.stateNode;
                      if (
                        0 == (128 & B.flags) &&
                        ("function" == typeof W.getDerivedStateFromError ||
                          (null !== Y &&
                            "function" == typeof Y.componentDidCatch &&
                            (null === rs || !rs.has(Y))))
                      ) {
                        (B.flags |= 65536), (a &= -a), (B.lanes |= a);
                        var V = Df(B, p, a);
                        td(B, V);
                        break e;
                      }
                  }
                  B = B.return;
                } while (null !== B);
              }
              Ph(o);
            } catch (i) {
              (a = i), n2 === o && null !== o && (n2 = o = o.return);
              continue;
            }
            break;
          }
        }
        function Hh() {
          var i = nq.current;
          return (nq.current = nx), null === i ? nx : i;
        }
        function Tf() {
          (0 === n6 || 3 === n6 || 2 === n6) && (n6 = 4),
            null === n9 ||
              (0 == (268435455 & n7) && 0 == (268435455 & re)) ||
              Bh(n9, n8);
        }
        function Gh(i, a) {
          var o = n1;
          n1 |= 2;
          var s = Hh();
          for ((n9 === i && n8 === a) || Ih(i, a); ; )
            try {
              !(function () {
                for (; null !== n2; ) Rh(n2);
              })();
              break;
            } catch (a) {
              Kh(i, a);
            }
          if ((fd(), (n1 = o), (nq.current = s), null !== n2))
            throw Error(n(261));
          return (n9 = null), (n8 = 0), n6;
        }
        function Rh(i) {
          var a = A(i.alternate, i, n3);
          (i.memoizedProps = i.pendingProps),
            null === a ? Ph(i) : (n2 = a),
            (n$.current = null);
        }
        function Ph(i) {
          var o = i;
          do {
            var A = o.alternate;
            if (((i = o.return), 0 == (32768 & o.flags))) {
              if (
                null !==
                (A = (function (i, o, A) {
                  var B = o.pendingProps;
                  switch ((Sd(o), o.tag)) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                      return P(o), null;
                    case 1:
                    case 17:
                      return C(o.type) && kc(), P(o), null;
                    case 3:
                      return (
                        (B = o.stateNode),
                        we(),
                        x(tF),
                        x(tI),
                        Be(),
                        B.pendingContext &&
                          ((B.context = B.pendingContext),
                          (B.pendingContext = null)),
                        (null === i || null === i.child) &&
                          (ce(o)
                            ? Jf(o)
                            : null === i ||
                              (i.memoizedState.isDehydrated &&
                                0 == (256 & o.flags)) ||
                              ((o.flags |= 1024),
                              null !== nd && (Sf(nd), (nd = null)))),
                        s(i, o),
                        P(o),
                        null
                      );
                    case 5:
                      ye(o), (A = ue(nC.current));
                      var S = o.type;
                      if (null !== i && null != o.stateNode)
                        u(i, o, S, B, A),
                          i.ref !== o.ref &&
                            ((o.flags |= 512), (o.flags |= 2097152));
                      else {
                        if (!B) {
                          if (null === o.stateNode) throw Error(n(166));
                          return P(o), null;
                        }
                        if (((i = ue(nA.current)), ce(o))) {
                          if (!eS) throw Error(n(175));
                          (i = ts(
                            o.stateNode,
                            o.type,
                            o.memoizedProps,
                            A,
                            i,
                            o,
                            !nu
                          )),
                            (o.updateQueue = i),
                            null !== i && Jf(o);
                        } else {
                          var w = eh(S, B, A, i, o);
                          a(w, o, !1, !1),
                            (o.stateNode = w),
                            em(w, S, B, A, i) && Jf(o);
                        }
                        null !== o.ref &&
                          ((o.flags |= 512), (o.flags |= 2097152));
                      }
                      return P(o), null;
                    case 6:
                      if (i && null != o.stateNode) p(i, o, i.memoizedProps, B);
                      else {
                        if ("string" != typeof B && null === o.stateNode)
                          throw Error(n(166));
                        if (
                          ((i = ue(nC.current)), (A = ue(nA.current)), ce(o))
                        ) {
                          if (!eS) throw Error(n(176));
                          if (
                            (A = tu(
                              (i = o.stateNode),
                              (B = o.memoizedProps),
                              o,
                              !nu
                            )) &&
                            null !== (S = no)
                          )
                            switch (((w = 0 != (1 & S.mode)), S.tag)) {
                              case 3:
                                tv(S.stateNode.containerInfo, i, B, w);
                                break;
                              case 5:
                                tb(
                                  S.type,
                                  S.memoizedProps,
                                  S.stateNode,
                                  i,
                                  B,
                                  w
                                );
                            }
                          A && Jf(o);
                        } else o.stateNode = eB(B, i, A, o);
                      }
                      return P(o), null;
                    case 13:
                      if (
                        (x(nv),
                        (B = o.memoizedState),
                        ns &&
                          null !== nl &&
                          0 != (1 & o.mode) &&
                          0 == (128 & o.flags))
                      ) {
                        for (i = nl; i; ) i = ti(i);
                        return de(), (o.flags |= 98560), o;
                      }
                      if (null !== B && null !== B.dehydrated) {
                        if (((B = ce(o)), null === i)) {
                          if (!B) throw Error(n(318));
                          if (!eS) throw Error(n(344));
                          if (
                            !(i =
                              null !== (i = o.memoizedState)
                                ? i.dehydrated
                                : null)
                          )
                            throw Error(n(317));
                          tc(i, o);
                        } else
                          de(),
                            0 == (128 & o.flags) && (o.memoizedState = null),
                            (o.flags |= 4);
                        return P(o), null;
                      }
                      if (
                        (null !== nd && (Sf(nd), (nd = null)),
                        0 != (128 & o.flags))
                      )
                        return (o.lanes = A), o;
                      return (
                        (B = null !== B),
                        (A = !1),
                        null === i ? ce(o) : (A = null !== i.memoizedState),
                        B &&
                          !A &&
                          ((o.child.flags |= 8192),
                          0 != (1 & o.mode) &&
                            (null === i || 0 != (1 & nv.current)
                              ? 0 === n6 && (n6 = 3)
                              : Tf())),
                        null !== o.updateQueue && (o.flags |= 4),
                        P(o),
                        null
                      );
                    case 4:
                      return (
                        we(),
                        s(i, o),
                        null === i && eI(o.stateNode.containerInfo),
                        P(o),
                        null
                      );
                    case 10:
                      return hd(o.type._context), P(o), null;
                    case 19:
                      if ((x(nv), null === (S = o.memoizedState)))
                        return P(o), null;
                      if (
                        ((B = 0 != (128 & o.flags)), null === (w = S.rendering))
                      ) {
                        if (B) Qf(S, !1);
                        else {
                          if (0 !== n6 || (null !== i && 0 != (128 & i.flags)))
                            for (i = o.child; null !== i; ) {
                              if (null !== (w = ze(i))) {
                                for (
                                  o.flags |= 128,
                                    Qf(S, !1),
                                    null !== (i = w.updateQueue) &&
                                      ((o.updateQueue = i), (o.flags |= 4)),
                                    o.subtreeFlags = 0,
                                    i = A,
                                    B = o.child;
                                  null !== B;

                                )
                                  (A = B),
                                    (S = i),
                                    (A.flags &= 14680066),
                                    null === (w = A.alternate)
                                      ? ((A.childLanes = 0),
                                        (A.lanes = S),
                                        (A.child = null),
                                        (A.subtreeFlags = 0),
                                        (A.memoizedProps = null),
                                        (A.memoizedState = null),
                                        (A.updateQueue = null),
                                        (A.dependencies = null),
                                        (A.stateNode = null))
                                      : ((A.childLanes = w.childLanes),
                                        (A.lanes = w.lanes),
                                        (A.child = w.child),
                                        (A.subtreeFlags = 0),
                                        (A.deletions = null),
                                        (A.memoizedProps = w.memoizedProps),
                                        (A.memoizedState = w.memoizedState),
                                        (A.updateQueue = w.updateQueue),
                                        (A.type = w.type),
                                        (S = w.dependencies),
                                        (A.dependencies =
                                          null === S
                                            ? null
                                            : {
                                                lanes: S.lanes,
                                                firstContext: S.firstContext,
                                              })),
                                    (B = B.sibling);
                                return y(nv, (1 & nv.current) | 2), o.child;
                              }
                              i = i.sibling;
                            }
                          null !== S.tail &&
                            tJ() > ra &&
                            ((o.flags |= 128),
                            (B = !0),
                            Qf(S, !1),
                            (o.lanes = 4194304));
                        }
                      } else {
                        if (!B) {
                          if (null !== (i = ze(w))) {
                            if (
                              ((o.flags |= 128),
                              (B = !0),
                              null !== (i = i.updateQueue) &&
                                ((o.updateQueue = i), (o.flags |= 4)),
                              Qf(S, !0),
                              null === S.tail &&
                                "hidden" === S.tailMode &&
                                !w.alternate &&
                                !ns)
                            )
                              return P(o), null;
                          } else
                            2 * tJ() - S.renderingStartTime > ra &&
                              1073741824 !== A &&
                              ((o.flags |= 128),
                              (B = !0),
                              Qf(S, !1),
                              (o.lanes = 4194304));
                        }
                        S.isBackwards
                          ? ((w.sibling = o.child), (o.child = w))
                          : (null !== (i = S.last)
                              ? (i.sibling = w)
                              : (o.child = w),
                            (S.last = w));
                      }
                      if (null !== S.tail)
                        return (
                          (o = S.tail),
                          (S.rendering = o),
                          (S.tail = o.sibling),
                          (S.renderingStartTime = tJ()),
                          (o.sibling = null),
                          (i = nv.current),
                          y(nv, B ? (1 & i) | 2 : 1 & i),
                          o
                        );
                      return P(o), null;
                    case 22:
                    case 23:
                      return (
                        Vf(),
                        (B = null !== o.memoizedState),
                        null !== i &&
                          (null !== i.memoizedState) !== B &&
                          (o.flags |= 8192),
                        B && 0 != (1 & o.mode)
                          ? 0 != (1073741824 & n3) &&
                            (P(o),
                            eE && 6 & o.subtreeFlags && (o.flags |= 8192))
                          : P(o),
                        null
                      );
                    case 24:
                    case 25:
                      return null;
                  }
                  throw Error(n(156, o.tag));
                })(A, o, n3))
              ) {
                n2 = A;
                return;
              }
            } else {
              if (
                null !==
                (A = (function (i, a) {
                  switch ((Sd(a), a.tag)) {
                    case 1:
                      return (
                        C(a.type) && kc(),
                        65536 & (i = a.flags)
                          ? ((a.flags = (-65537 & i) | 128), a)
                          : null
                      );
                    case 3:
                      return (
                        we(),
                        x(tF),
                        x(tI),
                        Be(),
                        0 != (65536 & (i = a.flags)) && 0 == (128 & i)
                          ? ((a.flags = (-65537 & i) | 128), a)
                          : null
                      );
                    case 5:
                      return ye(a), null;
                    case 13:
                      if (
                        (x(nv),
                        null !== (i = a.memoizedState) && null !== i.dehydrated)
                      ) {
                        if (null === a.alternate) throw Error(n(340));
                        de();
                      }
                      return 65536 & (i = a.flags)
                        ? ((a.flags = (-65537 & i) | 128), a)
                        : null;
                    case 19:
                      return x(nv), null;
                    case 4:
                      return we(), null;
                    case 10:
                      return hd(a.type._context), null;
                    case 22:
                    case 23:
                      return Vf(), null;
                    default:
                      return null;
                  }
                })(A, o))
              ) {
                (A.flags &= 32767), (n2 = A);
                return;
              }
              if (null !== i)
                (i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null);
              else {
                (n6 = 6), (n2 = null);
                return;
              }
            }
            if (null !== (o = o.sibling)) {
              n2 = o;
              return;
            }
            n2 = o = i;
          } while (null !== o);
          0 === n6 && (n6 = 5);
        }
        function Nh(i, a) {
          var o = tH,
            s = n0.transition;
          try {
            (n0.transition = null),
              (tH = 1),
              (function (i, a, o) {
                do Fh();
                while (null !== rc);
                if (0 != (6 & n1)) throw Error(n(327));
                var s = i.finishedWork,
                  u = i.finishedLanes;
                if (null !== s) {
                  if (
                    ((i.finishedWork = null),
                    (i.finishedLanes = 0),
                    s === i.current)
                  )
                    throw Error(n(177));
                  (i.callbackNode = null), (i.callbackPriority = 0);
                  var p = s.lanes | s.childLanes;
                  if (
                    ((function (i, a) {
                      var o = i.pendingLanes & ~a;
                      (i.pendingLanes = a),
                        (i.suspendedLanes = 0),
                        (i.pingedLanes = 0),
                        (i.expiredLanes &= a),
                        (i.mutableReadLanes &= a),
                        (i.entangledLanes &= a),
                        (a = i.entanglements);
                      var s = i.eventTimes;
                      for (i = i.expirationTimes; 0 < o; ) {
                        var u = 31 - tR(o),
                          p = 1 << u;
                        (a[u] = 0), (s[u] = -1), (i[u] = -1), (o &= ~p);
                      }
                    })(i, p),
                    i === n9 && ((n2 = n9 = null), (n8 = 0)),
                    (0 == (2064 & s.subtreeFlags) && 0 == (2064 & s.flags)) ||
                      ru ||
                      ((ru = !0),
                      (A = tK),
                      (B = function () {
                        return Fh(), null;
                      }),
                      tk(A, B)),
                    (p = 0 != (15990 & s.flags)),
                    0 != (15990 & s.subtreeFlags) || p)
                  ) {
                    (p = n0.transition), (n0.transition = null);
                    var A,
                      B,
                      S,
                      w,
                      F = tH;
                    tH = 1;
                    var L = n1;
                    (n1 |= 4),
                      (n$.current = null),
                      (function (i, a) {
                        for (ec(i.containerInfo), nK = a; null !== nK; )
                          if (
                            ((a = (i = nK).child),
                            0 != (1028 & i.subtreeFlags) && null !== a)
                          )
                            (a.return = i), (nK = a);
                          else
                            for (; null !== nK; ) {
                              i = nK;
                              try {
                                var o = i.alternate;
                                if (0 != (1024 & i.flags))
                                  switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                      break;
                                    case 1:
                                      if (null !== o) {
                                        var s = o.memoizedProps,
                                          u = o.memoizedState,
                                          p = i.stateNode,
                                          A = p.getSnapshotBeforeUpdate(
                                            i.elementType === i.type
                                              ? s
                                              : ad(i.type, s),
                                            u
                                          );
                                        p.__reactInternalSnapshotBeforeUpdate =
                                          A;
                                      }
                                      break;
                                    case 3:
                                      eE && e0(i.stateNode.containerInfo);
                                      break;
                                    default:
                                      throw Error(n(163));
                                  }
                              } catch (a) {
                                T(i, i.return, a);
                              }
                              if (null !== (a = i.sibling)) {
                                (a.return = i.return), (nK = a);
                                break;
                              }
                              nK = i.return;
                            }
                        (o = nj), (nj = !1);
                      })(i, s),
                      (function (i, a) {
                        for (nK = a; null !== nK; ) {
                          var o = (a = nK).deletions;
                          if (null !== o)
                            for (var s = 0; s < o.length; s++) {
                              var u = o[s];
                              try {
                                var p = i;
                                eE ? Jg(p, u, a) : Kg(p, u, a);
                                var A = u.alternate;
                                null !== A && (A.return = null),
                                  (u.return = null);
                              } catch (i) {
                                T(u, a, i);
                              }
                            }
                          if (
                            ((o = a.child),
                            0 != (12854 & a.subtreeFlags) && null !== o)
                          )
                            (o.return = a), (nK = o);
                          else
                            for (; null !== nK; ) {
                              a = nK;
                              try {
                                var B = a.flags;
                                if (
                                  (32 & B && eE && eY(a.stateNode), 512 & B)
                                ) {
                                  var S = a.alternate;
                                  if (null !== S) {
                                    var w = S.ref;
                                    null !== w &&
                                      ("function" == typeof w
                                        ? w(null)
                                        : (w.current = null));
                                  }
                                }
                                if (8192 & B)
                                  switch (a.tag) {
                                    case 13:
                                      if (null !== a.memoizedState) {
                                        var F = a.alternate;
                                        (null === F ||
                                          null === F.memoizedState) &&
                                          (ri = tJ());
                                      }
                                      break;
                                    case 22:
                                      var L = null !== a.memoizedState,
                                        _ = a.alternate,
                                        N =
                                          null !== _ &&
                                          null !== _.memoizedState;
                                      if (((o = a), eE)) {
                                        e: if (
                                          ((s = o), (u = L), (p = null), eE)
                                        )
                                          for (var U = s; ; ) {
                                            if (5 === U.tag) {
                                              if (null === p) {
                                                p = U;
                                                var j = U.stateNode;
                                                u
                                                  ? eZ(j)
                                                  : eq(
                                                      U.stateNode,
                                                      U.memoizedProps
                                                    );
                                              }
                                            } else if (6 === U.tag) {
                                              if (null === p) {
                                                var Q = U.stateNode;
                                                u
                                                  ? eV(Q)
                                                  : e$(Q, U.memoizedProps);
                                              }
                                            } else if (
                                              ((22 !== U.tag && 23 !== U.tag) ||
                                                null === U.memoizedState ||
                                                U === s) &&
                                              null !== U.child
                                            ) {
                                              (U.child.return = U),
                                                (U = U.child);
                                              continue;
                                            }
                                            if (U === s) break;
                                            for (; null === U.sibling; ) {
                                              if (
                                                null === U.return ||
                                                U.return === s
                                              )
                                                break e;
                                              p === U && (p = null),
                                                (U = U.return);
                                            }
                                            p === U && (p = null),
                                              (U.sibling.return = U.return),
                                              (U = U.sibling);
                                          }
                                      }
                                      if (L && !N && 0 != (1 & o.mode)) {
                                        nK = o;
                                        for (var X = o.child; null !== X; ) {
                                          for (o = nK = X; null !== nK; ) {
                                            var W = (s = nK).child;
                                            switch (s.tag) {
                                              case 0:
                                              case 11:
                                              case 14:
                                              case 15:
                                                Fg(4, s, s.return);
                                                break;
                                              case 1:
                                                Bg(s, s.return);
                                                var Y = s.stateNode;
                                                if (
                                                  "function" ==
                                                  typeof Y.componentWillUnmount
                                                ) {
                                                  var V = s.return;
                                                  try {
                                                    (Y.props = s.memoizedProps),
                                                      (Y.state =
                                                        s.memoizedState),
                                                      Y.componentWillUnmount();
                                                  } catch (i) {
                                                    T(s, V, i);
                                                  }
                                                }
                                                break;
                                              case 5:
                                                Bg(s, s.return);
                                                break;
                                              case 22:
                                                if (null !== s.memoizedState) {
                                                  Wg(o);
                                                  continue;
                                                }
                                            }
                                            null !== W
                                              ? ((W.return = s), (nK = W))
                                              : Wg(o);
                                          }
                                          X = X.sibling;
                                        }
                                      }
                                  }
                                switch (4102 & B) {
                                  case 2:
                                    Og(a), (a.flags &= -3);
                                    break;
                                  case 6:
                                    Og(a), (a.flags &= -3), Rg(a.alternate, a);
                                    break;
                                  case 4096:
                                    a.flags &= -4097;
                                    break;
                                  case 4100:
                                    (a.flags &= -4097), Rg(a.alternate, a);
                                    break;
                                  case 4:
                                    Rg(a.alternate, a);
                                }
                              } catch (i) {
                                T(a, a.return, i);
                              }
                              if (null !== (o = a.sibling)) {
                                (o.return = a.return), (nK = o);
                                break;
                              }
                              nK = a.return;
                            }
                        }
                      })(i, s, u),
                      ed(i.containerInfo),
                      (i.current = s),
                      (S = s),
                      (w = i),
                      (nK = S),
                      (function Yg(i, a, o) {
                        for (var s = 0 != (1 & i.mode); null !== nK; ) {
                          var u = nK,
                            p = u.child;
                          if (22 === u.tag && s) {
                            var A = null !== u.memoizedState || nJ;
                            if (!A) {
                              var B = u.alternate,
                                S =
                                  (null !== B && null !== B.memoizedState) ||
                                  nN;
                              B = nJ;
                              var w = nN;
                              if (((nJ = A), (nN = S) && !w))
                                for (nK = u; null !== nK; )
                                  (S = (A = nK).child),
                                    22 === A.tag && null !== A.memoizedState
                                      ? Zg(u)
                                      : null !== S
                                      ? ((S.return = A), (nK = S))
                                      : Zg(u);
                              for (; null !== p; )
                                (nK = p), Yg(p, a, o), (p = p.sibling);
                              (nK = u), (nJ = B), (nN = w);
                            }
                            $g(i, a, o);
                          } else
                            0 != (8772 & u.subtreeFlags) && null !== p
                              ? ((p.return = u), (nK = p))
                              : $g(i, a, o);
                        }
                      })(S, w, u),
                      tO(),
                      (n1 = L),
                      (tH = F),
                      (n0.transition = p);
                  } else i.current = s;
                  if (
                    (ru && ((ru = !1), (rc = i), (rh = u)),
                    0 === (p = i.pendingLanes) && (rs = null),
                    (function (i) {
                      if (tQ && "function" == typeof tQ.onCommitFiberRoot)
                        try {
                          tQ.onCommitFiberRoot(
                            tz,
                            i,
                            void 0,
                            128 == (128 & i.current.flags)
                          );
                        } catch (i) {}
                    })(s.stateNode, o),
                    Z(i, tJ()),
                    null !== a)
                  )
                    for (o = i.onRecoverableError, s = 0; s < a.length; s++)
                      o(a[s]);
                  if (ro) throw ((ro = !1), (i = rl), (rl = null), i);
                  0 != (1 & rh) && 0 !== i.tag && Fh(),
                    0 != (1 & (p = i.pendingLanes))
                      ? i === rm
                        ? rp++
                        : ((rp = 0), (rm = i))
                      : (rp = 0),
                    Xc();
                }
              })(i, a, o);
          } finally {
            (n0.transition = s), (tH = o);
          }
          return null;
        }
        function Fh() {
          if (null !== rc) {
            var i = Ec(rh),
              a = n0.transition,
              o = tH;
            try {
              if (((n0.transition = null), (tH = 16 > i ? 16 : i), null === rc))
                var s = !1;
              else {
                if (((i = rc), (rc = null), (rh = 0), 0 != (6 & n1)))
                  throw Error(n(331));
                var u = n1;
                for (n1 |= 4, nK = i.current; null !== nK; ) {
                  var p = nK,
                    A = p.child;
                  if (0 != (16 & nK.flags)) {
                    var B = p.deletions;
                    if (null !== B) {
                      for (var S = 0; S < B.length; S++) {
                        var w = B[S];
                        for (nK = w; null !== nK; ) {
                          var F = nK;
                          switch (F.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Fg(8, F, p);
                          }
                          var L = F.child;
                          if (null !== L) (L.return = F), (nK = L);
                          else
                            for (; null !== nK; ) {
                              var _ = (F = nK).sibling,
                                N = F.return;
                              if (
                                (!(function Lg(i) {
                                  var a = i.alternate;
                                  null !== a && ((i.alternate = null), Lg(a)),
                                    (i.child = null),
                                    (i.deletions = null),
                                    (i.sibling = null),
                                    5 === i.tag &&
                                      null !== (a = i.stateNode) &&
                                      eT(a),
                                    (i.stateNode = null),
                                    (i.return = null),
                                    (i.dependencies = null),
                                    (i.memoizedProps = null),
                                    (i.memoizedState = null),
                                    (i.pendingProps = null),
                                    (i.stateNode = null),
                                    (i.updateQueue = null);
                                })(F),
                                F === w)
                              ) {
                                nK = null;
                                break;
                              }
                              if (null !== _) {
                                (_.return = N), (nK = _);
                                break;
                              }
                              nK = N;
                            }
                        }
                      }
                      var U = p.alternate;
                      if (null !== U) {
                        var j = U.child;
                        if (null !== j) {
                          U.child = null;
                          do {
                            var Q = j.sibling;
                            (j.sibling = null), (j = Q);
                          } while (null !== j);
                        }
                      }
                      nK = p;
                    }
                  }
                  if (0 != (2064 & p.subtreeFlags) && null !== A)
                    (A.return = p), (nK = A);
                  else
                    for (; null !== nK; ) {
                      if (((p = nK), 0 != (2048 & p.flags)))
                        switch (p.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Fg(9, p, p.return);
                        }
                      var X = p.sibling;
                      if (null !== X) {
                        (X.return = p.return), (nK = X);
                        break;
                      }
                      nK = p.return;
                    }
                }
                var W = i.current;
                for (nK = W; null !== nK; ) {
                  var Y = (A = nK).child;
                  if (0 != (2064 & A.subtreeFlags) && null !== Y)
                    (Y.return = A), (nK = Y);
                  else
                    for (A = W; null !== nK; ) {
                      if (((B = nK), 0 != (2048 & B.flags)))
                        try {
                          switch (B.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Gg(9, B);
                          }
                        } catch (i) {
                          T(B, B.return, i);
                        }
                      if (B === A) {
                        nK = null;
                        break;
                      }
                      var V = B.sibling;
                      if (null !== V) {
                        (V.return = B.return), (nK = V);
                        break;
                      }
                      nK = B.return;
                    }
                }
                if (
                  ((n1 = u),
                  Xc(),
                  tQ && "function" == typeof tQ.onPostCommitFiberRoot)
                )
                  try {
                    tQ.onPostCommitFiberRoot(tz, i);
                  } catch (i) {}
                s = !0;
              }
              return s;
            } finally {
              (tH = o), (n0.transition = a);
            }
          }
          return !1;
        }
        function Uh(i, a, o) {
          (a = Af(i, (a = xf(o, a)), 1)),
            rd(i, a),
            (a = H()),
            null !== (i = Ah(i, 1)) && (Bc(i, 1, a), Z(i, a));
        }
        function T(i, a, o) {
          if (3 === i.tag) Uh(i, i, o);
          else
            for (; null !== a; ) {
              if (3 === a.tag) {
                Uh(a, i, o);
                break;
              }
              if (1 === a.tag) {
                var s = a.stateNode;
                if (
                  "function" == typeof a.type.getDerivedStateFromError ||
                  ("function" == typeof s.componentDidCatch &&
                    (null === rs || !rs.has(s)))
                ) {
                  (i = Df(a, (i = xf(o, i)), 1)),
                    rd(a, i),
                    (i = H()),
                    null !== (a = Ah(a, 1)) && (Bc(a, 1, i), Z(a, i));
                  break;
                }
              }
              a = a.return;
            }
        }
        function Gf(i, a, o) {
          var s = i.pingCache;
          null !== s && s.delete(a),
            (a = H()),
            (i.pingedLanes |= i.suspendedLanes & o),
            n9 === i &&
              (n8 & o) === o &&
              (4 === n6 ||
              (3 === n6 && (130023424 & n8) === n8 && 500 > tJ() - ri)
                ? Ih(i, 0)
                : (rt |= o)),
            Z(i, a);
        }
        function Vh(i, a) {
          0 === a &&
            (0 == (1 & i.mode)
              ? (a = 1)
              : ((a = tP), 0 == (130023424 & (tP <<= 1)) && (tP = 4194304)));
          var o = H();
          null !== (i = Ah(i, a)) && (Bc(i, a, o), Z(i, o));
        }
        function qg(i) {
          var a = i.memoizedState,
            o = 0;
          null !== a && (o = a.retryLane), Vh(i, o);
        }
        function Tg(i, a) {
          var o = 0;
          switch (i.tag) {
            case 13:
              var s = i.stateNode,
                u = i.memoizedState;
              null !== u && (o = u.retryLane);
              break;
            case 19:
              s = i.stateNode;
              break;
            default:
              throw Error(n(314));
          }
          null !== s && s.delete(a), Vh(i, o);
        }
        function Xh(i, a, o, s) {
          (this.tag = i),
            (this.key = o),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = a),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = s),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Yd(i, a, o, s) {
          return new Xh(i, a, o, s);
        }
        function ag(i) {
          return !(!(i = i.prototype) || !i.isReactComponent);
        }
        function je(i, a) {
          var o = i.alternate;
          return (
            null === o
              ? (((o = Yd(i.tag, a, i.key, i.mode)).elementType =
                  i.elementType),
                (o.type = i.type),
                (o.stateNode = i.stateNode),
                (o.alternate = i),
                (i.alternate = o))
              : ((o.pendingProps = a),
                (o.type = i.type),
                (o.flags = 0),
                (o.subtreeFlags = 0),
                (o.deletions = null)),
            (o.flags = 14680064 & i.flags),
            (o.childLanes = i.childLanes),
            (o.lanes = i.lanes),
            (o.child = i.child),
            (o.memoizedProps = i.memoizedProps),
            (o.memoizedState = i.memoizedState),
            (o.updateQueue = i.updateQueue),
            (a = i.dependencies),
            (o.dependencies =
              null === a
                ? null
                : { lanes: a.lanes, firstContext: a.firstContext }),
            (o.sibling = i.sibling),
            (o.index = i.index),
            (o.ref = i.ref),
            o
          );
        }
        function le(i, a, o, s, u, p) {
          var A = 2;
          if (((s = i), "function" == typeof i)) ag(i) && (A = 1);
          else if ("string" == typeof i) A = 5;
          else
            e: switch (i) {
              case U:
                return ne(o.children, u, p, a);
              case j:
                (A = 8), (u |= 8);
                break;
              case Q:
                return (
                  ((i = Yd(12, o, a, 2 | u)).elementType = Q), (i.lanes = p), i
                );
              case V:
                return (
                  ((i = Yd(13, o, a, u)).elementType = V), (i.lanes = p), i
                );
              case q:
                return (
                  ((i = Yd(19, o, a, u)).elementType = q), (i.lanes = p), i
                );
              case en:
                return ng(o, u, p, a);
              default:
                if ("object" == typeof i && null !== i)
                  switch (i.$$typeof) {
                    case X:
                      A = 10;
                      break e;
                    case W:
                      A = 9;
                      break e;
                    case Y:
                      A = 11;
                      break e;
                    case $:
                      A = 14;
                      break e;
                    case et:
                      (A = 16), (s = null);
                      break e;
                  }
                throw Error(n(130, null == i ? i : typeof i, ""));
            }
          return (
            ((a = Yd(A, o, a, u)).elementType = i),
            (a.type = s),
            (a.lanes = p),
            a
          );
        }
        function ne(i, a, o, s) {
          return ((i = Yd(7, i, s, a)).lanes = o), i;
        }
        function ng(i, a, o, s) {
          return (
            ((i = Yd(22, i, s, a)).elementType = en),
            (i.lanes = o),
            (i.stateNode = {}),
            i
          );
        }
        function ke(i, a, o) {
          return ((i = Yd(6, i, null, a)).lanes = o), i;
        }
        function me(i, a, o) {
          return (
            ((a = Yd(
              4,
              null !== i.children ? i.children : [],
              i.key,
              a
            )).lanes = o),
            (a.stateNode = {
              containerInfo: i.containerInfo,
              pendingChildren: null,
              implementation: i.implementation,
            }),
            a
          );
        }
        function Yh(i, a, o, s, u) {
          (this.tag = a),
            (this.containerInfo = i),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = eb),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ac(0)),
            (this.expirationTimes = Ac(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ac(0)),
            (this.identifierPrefix = s),
            (this.onRecoverableError = u),
            eS && (this.mutableSourceEagerHydrationData = null);
        }
        function Zh(i, a, o, s, u, p, A, B, S) {
          return (
            (i = new Yh(i, a, o, B, S)),
            1 === a ? ((a = 1), !0 === p && (a |= 8)) : (a = 0),
            (p = Yd(3, null, null, a)),
            (i.current = p),
            (p.stateNode = i),
            (p.memoizedState = {
              element: s,
              isDehydrated: o,
              cache: null,
              transitions: null,
            }),
            od(p),
            i
          );
        }
        function $h(i) {
          if (!i) return tw;
          i = i._reactInternals;
          e: {
            if (ya(i) !== i || 1 !== i.tag) throw Error(n(170));
            var a = i;
            do {
              switch (a.tag) {
                case 3:
                  a = a.stateNode.context;
                  break e;
                case 1:
                  if (C(a.type)) {
                    a = a.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              a = a.return;
            } while (null !== a);
            throw Error(n(171));
          }
          if (1 === i.tag) {
            var o = i.type;
            if (C(o)) return mc(i, o, a);
          }
          return a;
        }
        function ai(i) {
          var a = i._reactInternals;
          if (void 0 === a) {
            if ("function" == typeof i.render) throw Error(n(188));
            throw Error(n(268, (i = Object.keys(i).join(","))));
          }
          return null === (i = Ba(a)) ? null : i.stateNode;
        }
        function bi(i, a) {
          if (null !== (i = i.memoizedState) && null !== i.dehydrated) {
            var o = i.retryLane;
            i.retryLane = 0 !== o && o < a ? o : a;
          }
        }
        function ci(i, a) {
          bi(i, a), (i = i.alternate) && bi(i, a);
        }
        function di(i) {
          return null === (i = Ba(i)) ? null : i.stateNode;
        }
        function ei() {
          return null;
        }
        return (
          (A = function (i, a, o) {
            if (null !== i) {
              if (i.memoizedProps !== a.pendingProps || tF.current) n_ = !0;
              else {
                if (0 == (i.lanes & o) && 0 == (128 & a.flags))
                  return (
                    (n_ = !1),
                    (function (i, a, o) {
                      switch (a.tag) {
                        case 3:
                          ig(a), de();
                          break;
                        case 5:
                          xe(a);
                          break;
                        case 1:
                          C(a.type) && nc(a);
                          break;
                        case 4:
                          ve(a, a.stateNode.containerInfo);
                          break;
                        case 10:
                          gd(a, a.type._context, a.memoizedProps.value);
                          break;
                        case 13:
                          var s = a.memoizedState;
                          if (null !== s) {
                            if (null !== s.dehydrated)
                              return (
                                y(nv, 1 & nv.current), (a.flags |= 128), null
                              );
                            if (0 != (o & a.child.childLanes))
                              return mg(i, a, o);
                            return (
                              y(nv, 1 & nv.current),
                              null !== (i = Zf(i, a, o)) ? i.sibling : null
                            );
                          }
                          y(nv, 1 & nv.current);
                          break;
                        case 19:
                          if (
                            ((s = 0 != (o & a.childLanes)),
                            0 != (128 & i.flags))
                          ) {
                            if (s) return vg(i, a, o);
                            a.flags |= 128;
                          }
                          var u = a.memoizedState;
                          if (
                            (null !== u &&
                              ((u.rendering = null),
                              (u.tail = null),
                              (u.lastEffect = null)),
                            y(nv, nv.current),
                            !s)
                          )
                            return null;
                          break;
                        case 22:
                        case 23:
                          return (a.lanes = 0), dg(i, a, o);
                      }
                      return Zf(i, a, o);
                    })(i, a, o)
                  );
                n_ = 0 != (131072 & i.flags);
              }
            } else
              (n_ = !1), ns && 0 != (1048576 & a.flags) && Qd(a, t7, a.index);
            switch (((a.lanes = 0), a.tag)) {
              case 2:
                var s = a.type;
                null !== i &&
                  ((i.alternate = null), (a.alternate = null), (a.flags |= 2)),
                  (i = a.pendingProps);
                var u = jc(a, tI.current);
                jd(a, o), (u = Ke(null, a, s, i, u, o));
                var p = Pe();
                return (
                  (a.flags |= 1),
                  "object" == typeof u &&
                  null !== u &&
                  "function" == typeof u.render &&
                  void 0 === u.$$typeof
                    ? ((a.tag = 1),
                      (a.memoizedState = null),
                      (a.updateQueue = null),
                      C(s) ? ((p = !0), nc(a)) : (p = !1),
                      (a.memoizedState =
                        null !== u.state && void 0 !== u.state
                          ? u.state
                          : null),
                      od(a),
                      (u.updater = t3),
                      (a.stateNode = u),
                      (u._reactInternals = a),
                      Fd(a, s, i, o),
                      (a = hg(null, a, s, !0, p, o)))
                    : ((a.tag = 0),
                      ns && p && Rd(a),
                      R(null, a, u, o),
                      (a = a.child)),
                  a
                );
              case 16:
                s = a.elementType;
                e: {
                  switch (
                    (null !== i &&
                      ((i.alternate = null),
                      (a.alternate = null),
                      (a.flags |= 2)),
                    (i = a.pendingProps),
                    (s = (u = s._init)(s._payload)),
                    (a.type = s),
                    (u = a.tag =
                      (function (i) {
                        if ("function" == typeof i) return ag(i) ? 1 : 0;
                        if (null != i) {
                          if ((i = i.$$typeof) === Y) return 11;
                          if (i === $) return 14;
                        }
                        return 2;
                      })(s)),
                    (i = ad(s, i)),
                    u)
                  ) {
                    case 0:
                      a = cg(null, a, s, i, o);
                      break e;
                    case 1:
                      a = gg(null, a, s, i, o);
                      break e;
                    case 11:
                      a = Yf(null, a, s, i, o);
                      break e;
                    case 14:
                      a = $f(null, a, s, ad(s.type, i), o);
                      break e;
                  }
                  throw Error(n(306, s, ""));
                }
                return a;
              case 0:
                return (
                  (s = a.type),
                  (u = a.pendingProps),
                  (u = a.elementType === s ? u : ad(s, u)),
                  cg(i, a, s, u, o)
                );
              case 1:
                return (
                  (s = a.type),
                  (u = a.pendingProps),
                  (u = a.elementType === s ? u : ad(s, u)),
                  gg(i, a, s, u, o)
                );
              case 3:
                e: {
                  if ((ig(a), null === i)) throw Error(n(387));
                  (s = a.pendingProps),
                    (u = (p = a.memoizedState).element),
                    pd(i, a),
                    ud(a, s, null, o);
                  var A = a.memoizedState;
                  if (((s = A.element), eS && p.isDehydrated)) {
                    if (
                      ((p = {
                        element: s,
                        isDehydrated: !1,
                        cache: A.cache,
                        transitions: A.transitions,
                      }),
                      (a.updateQueue.baseState = p),
                      (a.memoizedState = p),
                      256 & a.flags)
                    ) {
                      a = jg(i, a, s, o, (u = Error(n(423))));
                      break e;
                    }
                    if (s !== u) {
                      a = jg(i, a, s, o, (u = Error(n(424))));
                      break e;
                    }
                    for (
                      eS &&
                        ((nl = to(a.stateNode.containerInfo)),
                        (no = a),
                        (ns = !0),
                        (nd = null),
                        (nu = !1)),
                        o = np(a, null, s, o),
                        a.child = o;
                      o;

                    )
                      (o.flags = (-3 & o.flags) | 4096), (o = o.sibling);
                  } else {
                    if ((de(), s === u)) {
                      a = Zf(i, a, o);
                      break e;
                    }
                    R(i, a, s, o);
                  }
                  a = a.child;
                }
                return a;
              case 5:
                return (
                  xe(a),
                  null === i && ae(a),
                  (s = a.type),
                  (u = a.pendingProps),
                  (p = null !== i ? i.memoizedProps : null),
                  (A = u.children),
                  eg(s, u)
                    ? (A = null)
                    : null !== p && eg(s, p) && (a.flags |= 32),
                  fg(i, a),
                  R(i, a, A, o),
                  a.child
                );
              case 6:
                return null === i && ae(a), null;
              case 13:
                return mg(i, a, o);
              case 4:
                return (
                  ve(a, a.stateNode.containerInfo),
                  (s = a.pendingProps),
                  null === i ? (a.child = nh(a, null, s, o)) : R(i, a, s, o),
                  a.child
                );
              case 11:
                return (
                  (s = a.type),
                  (u = a.pendingProps),
                  (u = a.elementType === s ? u : ad(s, u)),
                  Yf(i, a, s, u, o)
                );
              case 7:
                return R(i, a, a.pendingProps, o), a.child;
              case 8:
              case 12:
                return R(i, a, a.pendingProps.children, o), a.child;
              case 10:
                e: {
                  if (
                    ((s = a.type._context),
                    (u = a.pendingProps),
                    (p = a.memoizedProps),
                    gd(a, s, (A = u.value)),
                    null !== p)
                  ) {
                    if (tX(p.value, A)) {
                      if (p.children === u.children && !tF.current) {
                        a = Zf(i, a, o);
                        break e;
                      }
                    } else
                      for (
                        null !== (p = a.child) && (p.return = a);
                        null !== p;

                      ) {
                        var B = p.dependencies;
                        if (null !== B) {
                          A = p.child;
                          for (var S = B.firstContext; null !== S; ) {
                            if (S.context === s) {
                              if (1 === p.tag) {
                                (S = qd(-1, o & -o)).tag = 2;
                                var w = p.updateQueue;
                                if (null !== w) {
                                  var F = (w = w.shared).pending;
                                  null === F
                                    ? (S.next = S)
                                    : ((S.next = F.next), (F.next = S)),
                                    (w.pending = S);
                                }
                              }
                              (p.lanes |= o),
                                null !== (S = p.alternate) && (S.lanes |= o),
                                id(p.return, o, a),
                                (B.lanes |= o);
                              break;
                            }
                            S = S.next;
                          }
                        } else if (10 === p.tag)
                          A = p.type === a.type ? null : p.child;
                        else if (18 === p.tag) {
                          if (null === (A = p.return)) throw Error(n(341));
                          (A.lanes |= o),
                            null !== (B = A.alternate) && (B.lanes |= o),
                            id(A, o, a),
                            (A = p.sibling);
                        } else A = p.child;
                        if (null !== A) A.return = p;
                        else
                          for (A = p; null !== A; ) {
                            if (A === a) {
                              A = null;
                              break;
                            }
                            if (null !== (p = A.sibling)) {
                              (p.return = A.return), (A = p);
                              break;
                            }
                            A = A.return;
                          }
                        p = A;
                      }
                  }
                  R(i, a, u.children, o), (a = a.child);
                }
                return a;
              case 9:
                return (
                  (u = a.type),
                  (s = a.pendingProps.children),
                  jd(a, o),
                  (s = s((u = ld(u)))),
                  (a.flags |= 1),
                  R(i, a, s, o),
                  a.child
                );
              case 14:
                return (
                  (u = ad((s = a.type), a.pendingProps)),
                  (u = ad(s.type, u)),
                  $f(i, a, s, u, o)
                );
              case 15:
                return bg(i, a, a.type, a.pendingProps, o);
              case 17:
                return (
                  (s = a.type),
                  (u = a.pendingProps),
                  (u = a.elementType === s ? u : ad(s, u)),
                  null !== i &&
                    ((i.alternate = null),
                    (a.alternate = null),
                    (a.flags |= 2)),
                  (a.tag = 1),
                  C(s) ? ((i = !0), nc(a)) : (i = !1),
                  jd(a, o),
                  Dd(a, s, u),
                  Fd(a, s, u, o),
                  hg(null, a, s, !0, i, o)
                );
              case 19:
                return vg(i, a, o);
              case 22:
                return dg(i, a, o);
            }
            throw Error(n(156, a.tag));
          }),
          (B.attemptContinuousHydration = function (i) {
            13 === i.tag && (Ad(i, 134217728, H()), ci(i, 134217728));
          }),
          (B.attemptHydrationAtCurrentPriority = function (i) {
            if (13 === i.tag) {
              var a = H(),
                o = zd(i);
              Ad(i, o, a), ci(i, o);
            }
          }),
          (B.attemptSynchronousHydration = function (i) {
            switch (i.tag) {
              case 3:
                var a = i.stateNode;
                if (a.current.memoizedState.isDehydrated) {
                  var o = vc(a.pendingLanes);
                  0 !== o &&
                    (Dc(a, 1 | o), Z(a, tJ()), 0 == (6 & n1) && (sh(), Xc()));
                }
                break;
              case 13:
                var s = H();
                Oh(function () {
                  return Ad(i, 1, s);
                }),
                  ci(i, 1);
            }
          }),
          (B.batchedUpdates = function (i, a) {
            var o = n1;
            n1 |= 1;
            try {
              return i(a);
            } finally {
              0 === (n1 = o) && (sh(), tY && Xc());
            }
          }),
          (B.createComponentSelector = function (i) {
            return { $$typeof: nz, value: i };
          }),
          (B.createContainer = function (i, a, o, s, u, p, A) {
            return Zh(i, a, !1, null, o, s, u, p, A);
          }),
          (B.createHasPseudoClassSelector = function (i) {
            return { $$typeof: nQ, value: i };
          }),
          (B.createHydrationContainer = function (i, a, o, s, u, p, A, B, S) {
            return (
              ((i = Zh(o, s, !0, i, u, p, A, B, S)).context = $h(null)),
              (o = i.current),
              ((p = qd((s = H()), (u = zd(o)))).callback =
                null != a ? a : null),
              rd(o, p),
              (i.current.lanes = u),
              Bc(i, u, s),
              Z(i, s),
              i
            );
          }),
          (B.createPortal = function (i, a, o) {
            var s =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: N,
              key: null == s ? null : "" + s,
              children: i,
              containerInfo: a,
              implementation: o,
            };
          }),
          (B.createRoleSelector = function (i) {
            return { $$typeof: nX, value: i };
          }),
          (B.createTestNameSelector = function (i) {
            return { $$typeof: nW, value: i };
          }),
          (B.createTextSelector = function (i) {
            return { $$typeof: nY, value: i };
          }),
          (B.deferredUpdates = function (i) {
            var a = tH,
              o = n0.transition;
            try {
              return (n0.transition = null), (tH = 16), i();
            } finally {
              (tH = a), (n0.transition = o);
            }
          }),
          (B.discreteUpdates = function (i, a, o, s, u) {
            var p = tH,
              A = n0.transition;
            try {
              return (n0.transition = null), (tH = 1), i(a, o, s, u);
            } finally {
              (tH = p), (n0.transition = A), 0 === n1 && sh();
            }
          }),
          (B.findAllNodes = kh),
          (B.findBoundingRects = function (i, a) {
            if (!ex) throw Error(n(363));
            (a = kh(i, a)), (i = []);
            for (var o = 0; o < a.length; o++) i.push(eP(a[o]));
            for (a = i.length - 1; 0 < a; a--) {
              o = i[a];
              for (
                var s = o.x,
                  u = s + o.width,
                  p = o.y,
                  A = p + o.height,
                  B = a - 1;
                0 <= B;
                B--
              )
                if (a !== B) {
                  var S = i[B],
                    w = S.x,
                    F = w + S.width,
                    L = S.y,
                    _ = L + S.height;
                  if (s >= w && p >= L && u <= F && A <= _) {
                    i.splice(a, 1);
                    break;
                  }
                  if (s !== w || o.width !== S.width || _ < p || L > A) {
                    if (!(p !== L || o.height !== S.height || F < s || w > u)) {
                      w > s && ((S.width += w - s), (S.x = s)),
                        F < u && (S.width = u - w),
                        i.splice(a, 1);
                      break;
                    }
                  } else {
                    L > p && ((S.height += L - p), (S.y = p)),
                      _ < A && (S.height = A - L),
                      i.splice(a, 1);
                    break;
                  }
                }
            }
            return i;
          }),
          (B.findHostInstance = ai),
          (B.findHostInstanceWithNoPortals = function (i) {
            return null ===
              (i =
                null !== (i = Aa(i))
                  ? (function Da(i) {
                      if (5 === i.tag || 6 === i.tag) return i;
                      for (i = i.child; null !== i; ) {
                        if (4 !== i.tag) {
                          var a = Da(i);
                          if (null !== a) return a;
                        }
                        i = i.sibling;
                      }
                      return null;
                    })(i)
                  : null)
              ? null
              : i.stateNode;
          }),
          (B.findHostInstanceWithWarning = function (i) {
            return ai(i);
          }),
          (B.flushControlled = function (i) {
            var a = n1;
            n1 |= 1;
            var o = n0.transition,
              s = tH;
            try {
              (n0.transition = null), (tH = 1), i();
            } finally {
              (tH = s), (n0.transition = o), 0 === (n1 = a) && (sh(), Xc());
            }
          }),
          (B.flushPassiveEffects = Fh),
          (B.flushSync = Oh),
          (B.focusWithin = function (i, a) {
            if (!ex) throw Error(n(363));
            for (
              a = Array.from((a = jh((i = gh(i)), a))), i = 0;
              i < a.length;

            ) {
              var o = a[i++];
              if (!ek(o)) {
                if (5 === o.tag && e_(o.stateNode)) return !0;
                for (o = o.child; null !== o; ) a.push(o), (o = o.sibling);
              }
            }
            return !1;
          }),
          (B.getCurrentUpdatePriority = function () {
            return tH;
          }),
          (B.getFindAllNodesFailureDescription = function (i, a) {
            if (!ex) throw Error(n(363));
            var o = 0,
              s = [];
            i = [gh(i), 0];
            for (var u = 0; u < i.length; ) {
              var p = i[u++],
                A = i[u++],
                B = a[A];
              if (
                (5 !== p.tag || !ek(p)) &&
                (hh(p, B) && (s.push(ih(B)), ++A > o && (o = A)), A < a.length)
              )
                for (p = p.child; null !== p; ) i.push(p, A), (p = p.sibling);
            }
            if (o < a.length) {
              for (i = []; o < a.length; o++) i.push(ih(a[o]));
              return (
                "findAllNodes was able to match part of the selector:\n  " +
                s.join(" > ") +
                "\n\nNo matching component was found for:\n  " +
                i.join(" > ")
              );
            }
            return null;
          }),
          (B.getPublicRootInstance = function (i) {
            return (i = i.current).child
              ? 5 === i.child.tag
                ? el(i.child.stateNode)
                : i.child.stateNode
              : null;
          }),
          (B.injectIntoDevTools = function (i) {
            if (
              ((i = {
                bundleType: i.bundleType,
                version: i.version,
                rendererPackageName: i.rendererPackageName,
                rendererConfig: i.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: L.ReactCurrentDispatcher,
                findHostInstanceByFiber: di,
                findFiberByHostInstance: i.findFiberByHostInstance || ei,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.0.0-fc46dba67-20220329",
              }),
              "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            )
              i = !1;
            else {
              var a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (a.isDisabled || !a.supportsFiber) i = !0;
              else {
                try {
                  (tz = a.inject(i)), (tQ = a);
                } catch (i) {}
                i = !!a.checkDCE;
              }
            }
            return i;
          }),
          (B.isAlreadyRendering = function () {
            return !1;
          }),
          (B.observeVisibleRects = function (i, a, o, s) {
            if (!ex) throw Error(n(363));
            var u = eO((i = kh(i, a)), o, s).disconnect;
            return {
              disconnect: function () {
                u();
              },
            };
          }),
          (B.registerMutableSourceForHydration = function (i, a) {
            var o = a._getVersion;
            (o = o(a._source)),
              null == i.mutableSourceEagerHydrationData
                ? (i.mutableSourceEagerHydrationData = [a, o])
                : i.mutableSourceEagerHydrationData.push(a, o);
          }),
          (B.runWithPriority = function (i, a) {
            var o = tH;
            try {
              return (tH = i), a();
            } finally {
              tH = o;
            }
          }),
          (B.shouldError = function () {
            return null;
          }),
          (B.shouldSuspend = function () {
            return !1;
          }),
          (B.updateContainer = function (i, a, o, s) {
            var u = a.current,
              p = H(),
              A = zd(u);
            return (
              (o = $h(o)),
              null === a.context ? (a.context = o) : (a.pendingContext = o),
              ((a = qd(p, A)).payload = { element: i }),
              null !== (s = void 0 === s ? null : s) && (a.callback = s),
              rd(u, a),
              null !== (i = Ad(u, A, p)) && sd(i, u, A),
              A
            );
          }),
          B
        );
      };
    },
    2576: function (i, a, o) {
      "use strict";
      i.exports = o(6511);
    },
    6525: function (i, a, o) {
      "use strict";
      i.exports = o(7287);
    },
    621: function (i, a, o) {
      "use strict";
      var s = o(7294);
      a.Z = function (i, a) {
        var o = (0, s.useState)(null),
          u = o[0],
          p = o[1];
        return (
          (0, s.useEffect)(
            function () {
              if (i.current && "function" == typeof IntersectionObserver) {
                var o = new IntersectionObserver(function (i) {
                  p(i[0]);
                }, a);
                return (
                  o.observe(i.current),
                  function () {
                    p(null), o.disconnect();
                  }
                );
              }
              return function () {};
            },
            [i.current, a.threshold, a.root, a.rootMargin]
          ),
          u
        );
      };
    },
    6018: function (i, a, o) {
      "use strict";
      o.d(a, {
        Z: function () {
          return esm_useWindowSize;
        },
      });
      var s = o(7294),
        esm_useEffectOnce = function (i) {
          (0, s.useEffect)(i, []);
        },
        esm_useUnmount = function (i) {
          var a = (0, s.useRef)(i);
          (a.current = i),
            esm_useEffectOnce(function () {
              return function () {
                return a.current();
              };
            });
        },
        esm_useRafState = function (i) {
          var a = (0, s.useRef)(0),
            o = (0, s.useState)(i),
            u = o[0],
            p = o[1],
            A = (0, s.useCallback)(function (i) {
              cancelAnimationFrame(a.current),
                (a.current = requestAnimationFrame(function () {
                  p(i);
                }));
            }, []);
          return (
            esm_useUnmount(function () {
              cancelAnimationFrame(a.current);
            }),
            [u, A]
          );
        },
        u = "undefined" != typeof window,
        esm_useWindowSize = function (i) {
          var a = void 0 === i ? {} : i,
            o = a.initialWidth,
            p = a.initialHeight,
            A = a.onChange,
            B = esm_useRafState({
              width: u ? window.innerWidth : void 0 === o ? 1 / 0 : o,
              height: u ? window.innerHeight : void 0 === p ? 1 / 0 : p,
            }),
            S = B[0],
            w = B[1];
          return (
            (0, s.useEffect)(function () {
              if (u) {
                var handler_1 = function () {
                  var i = window.innerWidth,
                    a = window.innerHeight;
                  w({ width: i, height: a }), A && A(i, a);
                };
                return (
                  (function (i) {
                    for (var a = [], o = 1; o < arguments.length; o++)
                      a[o - 1] = arguments[o];
                    i && i.addEventListener && i.addEventListener.apply(i, a);
                  })(window, "resize", handler_1),
                  function () {
                    !(function (i) {
                      for (var a = [], o = 1; o < arguments.length; o++)
                        a[o - 1] = arguments[o];
                      i &&
                        i.removeEventListener &&
                        i.removeEventListener.apply(i, a);
                    })(window, "resize", handler_1);
                  }
                );
              }
            }, []),
            S
          );
        };
    },
    53: function (i, a) {
      "use strict";
      /**
       * @license React
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function f(i, a) {
        var o = i.length;
        for (i.push(a); 0 < o; ) {
          var s = (o - 1) >>> 1,
            u = i[s];
          if (0 < g(u, a)) (i[s] = a), (i[o] = u), (o = s);
          else break;
        }
      }
      function h(i) {
        return 0 === i.length ? null : i[0];
      }
      function k(i) {
        if (0 === i.length) return null;
        var a = i[0],
          o = i.pop();
        if (o !== a) {
          i[0] = o;
          for (var s = 0, u = i.length, p = u >>> 1; s < p; ) {
            var A = 2 * (s + 1) - 1,
              B = i[A],
              S = A + 1,
              w = i[S];
            if (0 > g(B, o))
              S < u && 0 > g(w, B)
                ? ((i[s] = w), (i[S] = o), (s = S))
                : ((i[s] = B), (i[A] = o), (s = A));
            else if (S < u && 0 > g(w, o)) (i[s] = w), (i[S] = o), (s = S);
            else break;
          }
        }
        return a;
      }
      function g(i, a) {
        var o = i.sortIndex - a.sortIndex;
        return 0 !== o ? o : i.id - a.id;
      }
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var o,
          s = performance;
        a.unstable_now = function () {
          return s.now();
        };
      } else {
        var u = Date,
          p = u.now();
        a.unstable_now = function () {
          return u.now() - p;
        };
      }
      var A = [],
        B = [],
        S = 1,
        w = null,
        F = 3,
        L = !1,
        _ = !1,
        N = !1,
        U = "function" == typeof setTimeout ? setTimeout : null,
        j = "function" == typeof clearTimeout ? clearTimeout : null,
        Q = "undefined" != typeof setImmediate ? setImmediate : null;
      function G(i) {
        for (var a = h(B); null !== a; ) {
          if (null === a.callback) k(B);
          else if (a.startTime <= i)
            k(B), (a.sortIndex = a.expirationTime), f(A, a);
          else break;
          a = h(B);
        }
      }
      function H(i) {
        if (((N = !1), G(i), !_)) {
          if (null !== h(A)) (_ = !0), I(J);
          else {
            var a = h(B);
            null !== a && K(H, a.startTime - i);
          }
        }
      }
      function J(i, o) {
        (_ = !1), N && ((N = !1), j(Y), (Y = -1)), (L = !0);
        var s = F;
        try {
          for (
            G(o), w = h(A);
            null !== w && (!(w.expirationTime > o) || (i && !M()));

          ) {
            var u = w.callback;
            if ("function" == typeof u) {
              (w.callback = null), (F = w.priorityLevel);
              var p = u(w.expirationTime <= o);
              (o = a.unstable_now()),
                "function" == typeof p ? (w.callback = p) : w === h(A) && k(A),
                G(o);
            } else k(A);
            w = h(A);
          }
          if (null !== w) var S = !0;
          else {
            var U = h(B);
            null !== U && K(H, U.startTime - o), (S = !1);
          }
          return S;
        } finally {
          (w = null), (F = s), (L = !1);
        }
      }
      "undefined" != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var X = !1,
        W = null,
        Y = -1,
        V = 5,
        q = -1;
      function M() {
        return !(a.unstable_now() - q < V);
      }
      function R() {
        if (null !== W) {
          var i = a.unstable_now();
          q = i;
          var s = !0;
          try {
            s = W(!0, i);
          } finally {
            s ? o() : ((X = !1), (W = null));
          }
        } else X = !1;
      }
      if ("function" == typeof Q)
        o = function () {
          Q(R);
        };
      else if ("undefined" != typeof MessageChannel) {
        var $ = new MessageChannel(),
          et = $.port2;
        ($.port1.onmessage = R),
          (o = function () {
            et.postMessage(null);
          });
      } else
        o = function () {
          U(R, 0);
        };
      function I(i) {
        (W = i), X || ((X = !0), o());
      }
      function K(i, o) {
        Y = U(function () {
          i(a.unstable_now());
        }, o);
      }
      (a.unstable_IdlePriority = 5),
        (a.unstable_ImmediatePriority = 1),
        (a.unstable_LowPriority = 4),
        (a.unstable_NormalPriority = 3),
        (a.unstable_Profiling = null),
        (a.unstable_UserBlockingPriority = 2),
        (a.unstable_cancelCallback = function (i) {
          i.callback = null;
        }),
        (a.unstable_continueExecution = function () {
          _ || L || ((_ = !0), I(J));
        }),
        (a.unstable_forceFrameRate = function (i) {
          0 > i || 125 < i
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (V = 0 < i ? Math.floor(1e3 / i) : 5);
        }),
        (a.unstable_getCurrentPriorityLevel = function () {
          return F;
        }),
        (a.unstable_getFirstCallbackNode = function () {
          return h(A);
        }),
        (a.unstable_next = function (i) {
          switch (F) {
            case 1:
            case 2:
            case 3:
              var a = 3;
              break;
            default:
              a = F;
          }
          var o = F;
          F = a;
          try {
            return i();
          } finally {
            F = o;
          }
        }),
        (a.unstable_pauseExecution = function () {}),
        (a.unstable_requestPaint = function () {}),
        (a.unstable_runWithPriority = function (i, a) {
          switch (i) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              i = 3;
          }
          var o = F;
          F = i;
          try {
            return a();
          } finally {
            F = o;
          }
        }),
        (a.unstable_scheduleCallback = function (i, o, s) {
          var u = a.unstable_now();
          switch (
            ((s =
              "object" == typeof s &&
              null !== s &&
              "number" == typeof (s = s.delay) &&
              0 < s
                ? u + s
                : u),
            i)
          ) {
            case 1:
              var p = -1;
              break;
            case 2:
              p = 250;
              break;
            case 5:
              p = 1073741823;
              break;
            case 4:
              p = 1e4;
              break;
            default:
              p = 5e3;
          }
          return (
            (p = s + p),
            (i = {
              id: S++,
              callback: o,
              priorityLevel: i,
              startTime: s,
              expirationTime: p,
              sortIndex: -1,
            }),
            s > u
              ? ((i.sortIndex = s),
                f(B, i),
                null === h(A) &&
                  i === h(B) &&
                  (N ? (j(Y), (Y = -1)) : (N = !0), K(H, s - u)))
              : ((i.sortIndex = p), f(A, i), _ || L || ((_ = !0), I(J))),
            i
          );
        }),
        (a.unstable_shouldYield = M),
        (a.unstable_wrapCallback = function (i) {
          var a = F;
          return function () {
            var o = F;
            F = a;
            try {
              return i.apply(this, arguments);
            } finally {
              F = o;
            }
          };
        });
    },
    3840: function (i, a, o) {
      "use strict";
      i.exports = o(53);
    },
    2172: function (i, a, o) {
      "use strict";
      function t(i, a, o) {
        return Math.max(i, Math.min(a, o));
      }
      o.d(a, {
        Z: function () {
          return Lenis;
        },
      });
      let Animate = class Animate {
        advance(i) {
          var a, o, s;
          if (!this.isRunning) return;
          let u = !1;
          if (this.lerp)
            (this.value =
              ((a = this.value),
              (o = this.to),
              (1 - (s = 1 - Math.exp(-(60 * this.lerp) * i))) * a + s * o)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (u = !0));
          else {
            this.currentTime += i;
            let a = t(0, this.currentTime / this.duration, 1);
            u = a >= 1;
            let o = u ? 1 : this.easing(a);
            this.value = this.from + (this.to - this.from) * o;
          }
          this.onUpdate?.(this.value, u), u && this.stop();
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          i,
          a,
          {
            lerp: o = 0.1,
            duration: s = 1,
            easing: u = (i) => i,
            onStart: p,
            onUpdate: A,
          }
        ) {
          (this.from = this.value = i),
            (this.to = a),
            (this.lerp = o),
            (this.duration = s),
            (this.easing = u),
            (this.currentTime = 0),
            (this.isRunning = !0),
            p?.(),
            (this.onUpdate = A);
        }
      };
      let Dimensions = class Dimensions {
        constructor({
          wrapper: i,
          content: a,
          autoResize: o = !0,
          debounce: s = 250,
        } = {}) {
          var u;
          let p;
          (this.wrapper = i),
            (this.content = a),
            o &&
              ((this.debouncedResize =
                ((u = this.resize),
                function () {
                  let i = arguments,
                    a = this;
                  clearTimeout(p),
                    (p = setTimeout(function () {
                      u.apply(a, i);
                    }, s));
                })),
              this.wrapper === window
                ? window.addEventListener("resize", this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize();
        }
        destroy() {
          this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            window.removeEventListener("resize", this.debouncedResize, !1);
        }
        resize = () => {
          this.onWrapperResize(), this.onContentResize();
        };
        onWrapperResize = () => {
          this.wrapper === window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      };
      let Emitter = class Emitter {
        constructor() {
          this.events = {};
        }
        emit(i, ...a) {
          let o = this.events[i] || [];
          for (let i = 0, s = o.length; i < s; i++) o[i](...a);
        }
        on(i, a) {
          return (
            this.events[i]?.push(a) || (this.events[i] = [a]),
            () => {
              this.events[i] = this.events[i]?.filter((i) => a !== i);
            }
          );
        }
        off(i, a) {
          this.events[i] = this.events[i]?.filter((i) => a !== i);
        }
        destroy() {
          this.events = {};
        }
      };
      let s = 100 / 6;
      let VirtualScroll = class VirtualScroll {
        constructor(i, { wheelMultiplier: a = 1, touchMultiplier: o = 1 }) {
          (this.element = i),
            (this.wheelMultiplier = a),
            (this.touchMultiplier = o),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new Emitter()),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(i, a) {
          return this.emitter.on(i, a);
        }
        destroy() {
          this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        onTouchStart = (i) => {
          let { clientX: a, clientY: o } = i.targetTouches
            ? i.targetTouches[0]
            : i;
          (this.touchStart.x = a),
            (this.touchStart.y = o),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: i });
        };
        onTouchMove = (i) => {
          let { clientX: a, clientY: o } = i.targetTouches
              ? i.targetTouches[0]
              : i,
            s = -(a - this.touchStart.x) * this.touchMultiplier,
            u = -(o - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = a),
            (this.touchStart.y = o),
            (this.lastDelta = { x: s, y: u }),
            this.emitter.emit("scroll", { deltaX: s, deltaY: u, event: i });
        };
        onTouchEnd = (i) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: i,
          });
        };
        onWheel = (i) => {
          let { deltaX: a, deltaY: o, deltaMode: u } = i;
          (a *= 1 === u ? s : 2 === u ? this.windowWidth : 1),
            (o *= 1 === u ? s : 2 === u ? this.windowHeight : 1),
            (a *= this.wheelMultiplier),
            (o *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: a, deltaY: o, event: i });
        };
        onWindowResize = () => {
          (this.windowWidth = window.innerWidth),
            (this.windowHeight = window.innerHeight);
        };
      };
      let Lenis = class Lenis {
        constructor({
          wrapper: i = window,
          content: a = document.documentElement,
          wheelEventsTarget: o = i,
          eventsTarget: s = o,
          smoothWheel: u = !0,
          syncTouch: p = !1,
          syncTouchLerp: A = 0.075,
          touchInertiaMultiplier: B = 35,
          duration: S,
          easing: w = (i) => Math.min(1, 1.001 - Math.pow(2, -10 * i)),
          lerp: F = !S && 0.1,
          infinite: L = !1,
          orientation: _ = "vertical",
          gestureOrientation: N = "vertical",
          touchMultiplier: U = 1,
          wheelMultiplier: j = 1,
          autoResize: Q = !0,
          __experimental__naiveDimensions: X = !1,
        } = {}) {
          (this.__isSmooth = !1),
            (this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: i, deltaY: a, event: o }) => {
              if (o.ctrlKey) return;
              let s = o.type.includes("touch"),
                u = o.type.includes("wheel");
              if (
                this.options.syncTouch &&
                s &&
                "touchstart" === o.type &&
                !this.isStopped &&
                !this.isLocked
              )
                return void this.reset();
              let p = 0 === i && 0 === a,
                A =
                  ("vertical" === this.options.gestureOrientation && 0 === a) ||
                  ("horizontal" === this.options.gestureOrientation && 0 === i);
              if (p || A) return;
              let B = o.composedPath();
              if (
                (B = B.slice(0, B.indexOf(this.rootElement))).find((i) => {
                  var a, o, p, A, B;
                  return (
                    (null === (a = i.hasAttribute) || void 0 === a
                      ? void 0
                      : a.call(i, "data-lenis-prevent")) ||
                    (s &&
                      (null === (o = i.hasAttribute) || void 0 === o
                        ? void 0
                        : o.call(i, "data-lenis-prevent-touch"))) ||
                    (u &&
                      (null === (p = i.hasAttribute) || void 0 === p
                        ? void 0
                        : p.call(i, "data-lenis-prevent-wheel"))) ||
                    ((null === (A = i.classList) || void 0 === A
                      ? void 0
                      : A.contains("lenis")) &&
                      !(null === (B = i.classList) || void 0 === B
                        ? void 0
                        : B.contains("lenis-stopped")))
                  );
                })
              )
                return;
              if (this.isStopped || this.isLocked)
                return void o.preventDefault();
              if (
                ((this.isSmooth =
                  (this.options.syncTouch && s) ||
                  (this.options.smoothWheel && u)),
                !this.isSmooth)
              )
                return (this.isScrolling = !1), void this.animate.stop();
              o.preventDefault();
              let S = a;
              "both" === this.options.gestureOrientation
                ? (S = Math.abs(a) > Math.abs(i) ? a : i)
                : "horizontal" === this.options.gestureOrientation && (S = i);
              let w = s && this.options.syncTouch,
                F = s && "touchend" === o.type && Math.abs(S) > 5;
              F && (S = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + S,
                  Object.assign(
                    { programmatic: !1 },
                    w
                      ? { lerp: F ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                );
            }),
            (this.onNativeScroll = () => {
              if (!this.__preventNextScrollEvent && !this.isScrolling) {
                let i = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.velocity = 0),
                  (this.direction = Math.sign(this.animatedScroll - i)),
                  this.emit();
              }
            }),
            (window.lenisVersion = "1.0.42"),
            (i !== document.documentElement && i !== document.body) ||
              (i = window),
            (this.options = {
              wrapper: i,
              content: a,
              wheelEventsTarget: o,
              eventsTarget: s,
              smoothWheel: u,
              syncTouch: p,
              syncTouchLerp: A,
              touchInertiaMultiplier: B,
              duration: S,
              easing: w,
              lerp: F,
              infinite: L,
              gestureOrientation: N,
              orientation: _,
              touchMultiplier: U,
              wheelMultiplier: j,
              autoResize: Q,
              __experimental__naiveDimensions: X,
            }),
            (this.animate = new Animate()),
            (this.emitter = new Emitter()),
            (this.dimensions = new Dimensions({
              wrapper: i,
              content: a,
              autoResize: Q,
            })),
            this.toggleClassName("lenis", !0),
            (this.velocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isSmooth = p || u),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              !1
            ),
            (this.virtualScroll = new VirtualScroll(s, {
              touchMultiplier: U,
              wheelMultiplier: j,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              !1
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClassName("lenis", !1),
            this.toggleClassName("lenis-smooth", !1),
            this.toggleClassName("lenis-scrolling", !1),
            this.toggleClassName("lenis-stopped", !1),
            this.toggleClassName("lenis-locked", !1);
        }
        on(i, a) {
          return this.emitter.on(i, a);
        }
        off(i, a) {
          return this.emitter.off(i, a);
        }
        setScroll(i) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = i)
            : (this.rootElement.scrollTop = i);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            this.animate.stop();
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped ||
            ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(i) {
          let a = i - (this.time || i);
          (this.time = i), this.animate.advance(0.001 * a);
        }
        scrollTo(
          i,
          {
            offset: a = 0,
            immediate: o = !1,
            lock: s = !1,
            duration: u = this.options.duration,
            easing: p = this.options.easing,
            lerp: A = !u && this.options.lerp,
            onComplete: B,
            force: S = !1,
            programmatic: w = !0,
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || S) {
            if (["top", "left", "start"].includes(i)) i = 0;
            else if (["bottom", "right", "end"].includes(i)) i = this.limit;
            else {
              let o;
              if (
                ("string" == typeof i
                  ? (o = document.querySelector(i))
                  : (null == i ? void 0 : i.nodeType) && (o = i),
                o)
              ) {
                if (this.options.wrapper !== window) {
                  let i = this.options.wrapper.getBoundingClientRect();
                  a -= this.isHorizontal ? i.left : i.top;
                }
                let s = o.getBoundingClientRect();
                i = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof i) {
              if (
                ((i += a),
                (i = Math.round(i)),
                this.options.infinite
                  ? w && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (i = t(0, i, this.limit)),
                o)
              )
                return (
                  (this.animatedScroll = this.targetScroll = i),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (null == B || B(this))
                );
              if (!w) {
                if (i === this.targetScroll) return;
                this.targetScroll = i;
              }
              this.animate.fromTo(this.animatedScroll, i, {
                duration: u,
                easing: p,
                lerp: A,
                onStart: () => {
                  s && (this.isLocked = !0), (this.isScrolling = !0);
                },
                onUpdate: (i, a) => {
                  (this.isScrolling = !0),
                    (this.velocity = i - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = i),
                    this.setScroll(this.scroll),
                    w && (this.targetScroll = i),
                    a || this.emit(),
                    a &&
                      (this.reset(),
                      this.emit(),
                      null == B || B(this),
                      (this.__preventNextScrollEvent = !0),
                      requestAnimationFrame(() => {
                        delete this.__preventNextScrollEvent;
                      }));
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          var i;
          return this.options.infinite
            ? ((this.animatedScroll % (i = this.limit)) + i) % i
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(i) {
          this.__isSmooth !== i &&
            ((this.__isSmooth = i), this.toggleClassName("lenis-smooth", i));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(i) {
          this.__isScrolling !== i &&
            ((this.__isScrolling = i),
            this.toggleClassName("lenis-scrolling", i));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(i) {
          this.__isStopped !== i &&
            ((this.__isStopped = i), this.toggleClassName("lenis-stopped", i));
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(i) {
          this.__isLocked !== i &&
            ((this.__isLocked = i), this.toggleClassName("lenis-locked", i));
        }
        get className() {
          let i = "lenis";
          return (
            this.isStopped && (i += " lenis-stopped"),
            this.isLocked && (i += " lenis-locked"),
            this.isScrolling && (i += " lenis-scrolling"),
            this.isSmooth && (i += " lenis-smooth"),
            i
          );
        }
        toggleClassName(i, a) {
          this.rootElement.classList.toggle(i, a),
            this.emitter.emit("className change", this);
        }
      };
    },
    9883: function (i, a, o) {
      "use strict";
      var s = {};
      !(function main(i, a, o, s) {
        var u,
          p,
          A,
          B,
          S,
          w,
          F,
          L,
          _,
          N,
          U,
          j = !!(
            i.Worker &&
            i.Blob &&
            i.Promise &&
            i.OffscreenCanvas &&
            i.OffscreenCanvasRenderingContext2D &&
            i.HTMLCanvasElement &&
            i.HTMLCanvasElement.prototype.transferControlToOffscreen &&
            i.URL &&
            i.URL.createObjectURL
          ),
          Q = "function" == typeof Path2D && "function" == typeof DOMMatrix;
        function noop() {}
        function promise(o) {
          var s = a.exports.Promise,
            u = void 0 !== s ? s : i.Promise;
          return "function" == typeof u ? new u(o) : (o(noop, noop), null);
        }
        var X =
            ((u = (function () {
              if (!i.OffscreenCanvas) return !1;
              var a = new OffscreenCanvas(1, 1),
                o = a.getContext("2d");
              o.fillRect(0, 0, 1, 1);
              var s = a.transferToImageBitmap();
              try {
                o.createPattern(s, "no-repeat");
              } catch (i) {
                return !1;
              }
              return !0;
            })()),
            (p = new Map()),
            {
              transform: function (i) {
                if (u) return i;
                if (p.has(i)) return p.get(i);
                var a = new OffscreenCanvas(i.width, i.height);
                return a.getContext("2d").drawImage(i, 0, 0), p.set(i, a), a;
              },
              clear: function () {
                p.clear();
              },
            }),
          W =
            ((S = Math.floor(1e3 / 60)),
            (w = {}),
            (F = 0),
            "function" == typeof requestAnimationFrame &&
            "function" == typeof cancelAnimationFrame
              ? ((A = function (i) {
                  var a = Math.random();
                  return (
                    (w[a] = requestAnimationFrame(function onFrame(o) {
                      F === o || F + S - 1 < o
                        ? ((F = o), delete w[a], i())
                        : (w[a] = requestAnimationFrame(onFrame));
                    })),
                    a
                  );
                }),
                (B = function (i) {
                  w[i] && cancelAnimationFrame(w[i]);
                }))
              : ((A = function (i) {
                  return setTimeout(i, S);
                }),
                (B = function (i) {
                  return clearTimeout(i);
                })),
            { frame: A, cancel: B }),
          Y =
            ((N = {}),
            function () {
              if (L) return L;
              if (!o && j) {
                var i = [
                  "var CONFETTI, SIZE = {}, module = {};",
                  "(" + main.toString() + ")(this, module, true, SIZE);",
                  "onmessage = function(msg) {",
                  "  if (msg.data.options) {",
                  "    CONFETTI(msg.data.options).then(function () {",
                  "      if (msg.data.callback) {",
                  "        postMessage({ callback: msg.data.callback });",
                  "      }",
                  "    });",
                  "  } else if (msg.data.reset) {",
                  "    CONFETTI && CONFETTI.reset();",
                  "  } else if (msg.data.resize) {",
                  "    SIZE.width = msg.data.resize.width;",
                  "    SIZE.height = msg.data.resize.height;",
                  "  } else if (msg.data.canvas) {",
                  "    SIZE.width = msg.data.canvas.width;",
                  "    SIZE.height = msg.data.canvas.height;",
                  "    CONFETTI = module.exports.create(msg.data.canvas);",
                  "  }",
                  "}",
                ].join("\n");
                try {
                  L = new Worker(URL.createObjectURL(new Blob([i])));
                } catch (i) {
                  return (
                    "function" == typeof console.warn &&
                      console.warn("\uD83C\uDF8A Could not load worker", i),
                    null
                  );
                }
                !(function (i) {
                  function execute(a, o) {
                    i.postMessage({ options: a || {}, callback: o });
                  }
                  (i.init = function (a) {
                    var o = a.transferControlToOffscreen();
                    i.postMessage({ canvas: o }, [o]);
                  }),
                    (i.fire = function (a, o, s) {
                      if (_) return execute(a, null), _;
                      var u = Math.random().toString(36).slice(2);
                      return (_ = promise(function (o) {
                        function workerDone(a) {
                          a.data.callback === u &&
                            (delete N[u],
                            i.removeEventListener("message", workerDone),
                            (_ = null),
                            X.clear(),
                            s(),
                            o());
                        }
                        i.addEventListener("message", workerDone),
                          execute(a, u),
                          (N[u] = workerDone.bind(null, {
                            data: { callback: u },
                          }));
                      }));
                    }),
                    (i.reset = function () {
                      for (var a in (i.postMessage({ reset: !0 }), N))
                        N[a](), delete N[a];
                    });
                })(L);
              }
              return L;
            }),
          V = {
            particleCount: 50,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: 0.9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            x: 0.5,
            y: 0.5,
            shapes: ["square", "circle"],
            zIndex: 100,
            colors: [
              "#26ccff",
              "#a25afd",
              "#ff5e7e",
              "#88ff5a",
              "#fcff42",
              "#ffa62d",
              "#ff36ff",
            ],
            disableForReducedMotion: !1,
            scalar: 1,
          };
        function prop(i, a, o) {
          var s;
          return (s = i && null != i[a] ? i[a] : V[a]), o ? o(s) : s;
        }
        function onlyPositiveInt(i) {
          return i < 0 ? 0 : Math.floor(i);
        }
        function toDecimal(i) {
          return parseInt(i, 16);
        }
        function colorsToRgb(i) {
          return i.map(hexToRgb);
        }
        function hexToRgb(i) {
          var a = String(i).replace(/[^0-9a-f]/gi, "");
          return (
            a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]),
            {
              r: toDecimal(a.substring(0, 2)),
              g: toDecimal(a.substring(2, 4)),
              b: toDecimal(a.substring(4, 6)),
            }
          );
        }
        function setCanvasWindowSize(i) {
          (i.width = document.documentElement.clientWidth),
            (i.height = document.documentElement.clientHeight);
        }
        function setCanvasRectSize(i) {
          var a = i.getBoundingClientRect();
          (i.width = a.width), (i.height = a.height);
        }
        function confettiCannon(a, u) {
          var p,
            A = !a,
            B = !!prop(u || {}, "resize"),
            S = !1,
            w = prop(u, "disableForReducedMotion", Boolean),
            F = j && prop(u || {}, "useWorker") ? Y() : null,
            L = A ? setCanvasWindowSize : setCanvasRectSize,
            _ = !!a && !!F && !!a.__confetti_initialized,
            N =
              "function" == typeof matchMedia &&
              matchMedia("(prefers-reduced-motion)").matches;
          function fire(u) {
            var U,
              j = w || prop(u, "disableForReducedMotion", Boolean),
              Y = prop(u, "zIndex", Number);
            if (j && N)
              return promise(function (i) {
                i();
              });
            A && p
              ? (a = p.canvas)
              : A &&
                !a &&
                (((U = document.createElement("canvas")).style.position =
                  "fixed"),
                (U.style.top = "0px"),
                (U.style.left = "0px"),
                (U.style.pointerEvents = "none"),
                (U.style.zIndex = Y),
                (a = U),
                document.body.appendChild(a)),
              B && !_ && L(a);
            var V = { width: a.width, height: a.height };
            function onResize() {
              if (F) {
                var i = {
                  getBoundingClientRect: function () {
                    if (!A) return a.getBoundingClientRect();
                  },
                };
                L(i),
                  F.postMessage({
                    resize: { width: i.width, height: i.height },
                  });
                return;
              }
              V.width = V.height = null;
            }
            function done() {
              (p = null),
                B && ((S = !1), i.removeEventListener("resize", onResize)),
                A &&
                  a &&
                  (document.body.contains(a) && document.body.removeChild(a),
                  (a = null),
                  (_ = !1));
            }
            return (F && !_ && F.init(a),
            (_ = !0),
            F && (a.__confetti_initialized = !0),
            B && !S && ((S = !0), i.addEventListener("resize", onResize, !1)),
            F)
              ? F.fire(u, V, done)
              : (function (i, u, A) {
                  for (
                    var B,
                      S,
                      w,
                      F,
                      _,
                      N,
                      U,
                      j = prop(i, "particleCount", onlyPositiveInt),
                      Y = prop(i, "angle", Number),
                      V = prop(i, "spread", Number),
                      q = prop(i, "startVelocity", Number),
                      $ = prop(i, "decay", Number),
                      et = prop(i, "gravity", Number),
                      en = prop(i, "drift", Number),
                      er = prop(i, "colors", colorsToRgb),
                      ea = prop(i, "ticks", Number),
                      eo = prop(i, "shapes"),
                      el = prop(i, "scalar"),
                      es = !!prop(i, "flat"),
                      eu =
                        (((B = prop(i, "origin", Object)).x = prop(
                          B,
                          "x",
                          Number
                        )),
                        (B.y = prop(B, "y", Number)),
                        B),
                      ec = j,
                      ed = [],
                      eh = a.width * eu.x,
                      ep = a.height * eu.y;
                    ec--;

                  )
                    ed.push(
                      (function (i) {
                        var a = i.angle * (Math.PI / 180),
                          o = i.spread * (Math.PI / 180);
                        return {
                          x: i.x,
                          y: i.y,
                          wobble: 10 * Math.random(),
                          wobbleSpeed: Math.min(
                            0.11,
                            0.1 * Math.random() + 0.05
                          ),
                          velocity:
                            0.5 * i.startVelocity +
                            Math.random() * i.startVelocity,
                          angle2D: -a + (0.5 * o - Math.random() * o),
                          tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI,
                          color: i.color,
                          shape: i.shape,
                          tick: 0,
                          totalTicks: i.ticks,
                          decay: i.decay,
                          drift: i.drift,
                          random: Math.random() + 2,
                          tiltSin: 0,
                          tiltCos: 0,
                          wobbleX: 0,
                          wobbleY: 0,
                          gravity: 3 * i.gravity,
                          ovalScalar: 0.6,
                          scalar: i.scalar,
                          flat: i.flat,
                        };
                      })({
                        x: eh,
                        y: ep,
                        angle: Y,
                        spread: V,
                        startVelocity: q,
                        color: er[ec % er.length],
                        shape:
                          eo[Math.floor(Math.random() * (eo.length - 0)) + 0],
                        ticks: ea,
                        decay: $,
                        gravity: et,
                        drift: en,
                        scalar: el,
                        flat: es,
                      })
                    );
                  return p
                    ? p.addFettis(ed)
                    : ((S = a),
                      (_ = ed.slice()),
                      (N = S.getContext("2d")),
                      (U = promise(function (i) {
                        function onDone() {
                          (w = F = null),
                            N.clearRect(0, 0, u.width, u.height),
                            X.clear(),
                            A(),
                            i();
                        }
                        (w = W.frame(function update() {
                          o &&
                            !(u.width === s.width && u.height === s.height) &&
                            ((u.width = S.width = s.width),
                            (u.height = S.height = s.height)),
                            u.width ||
                              u.height ||
                              (L(S),
                              (u.width = S.width),
                              (u.height = S.height)),
                            N.clearRect(0, 0, u.width, u.height),
                            (_ = _.filter(function (i) {
                              return (function (i, a) {
                                (a.x +=
                                  Math.cos(a.angle2D) * a.velocity + a.drift),
                                  (a.y +=
                                    Math.sin(a.angle2D) * a.velocity +
                                    a.gravity),
                                  (a.velocity *= a.decay),
                                  a.flat
                                    ? ((a.wobble = 0),
                                      (a.wobbleX = a.x + 10 * a.scalar),
                                      (a.wobbleY = a.y + 10 * a.scalar),
                                      (a.tiltSin = 0),
                                      (a.tiltCos = 0),
                                      (a.random = 1))
                                    : ((a.wobble += a.wobbleSpeed),
                                      (a.wobbleX =
                                        a.x +
                                        10 * a.scalar * Math.cos(a.wobble)),
                                      (a.wobbleY =
                                        a.y +
                                        10 * a.scalar * Math.sin(a.wobble)),
                                      (a.tiltAngle += 0.1),
                                      (a.tiltSin = Math.sin(a.tiltAngle)),
                                      (a.tiltCos = Math.cos(a.tiltAngle)),
                                      (a.random = Math.random() + 2));
                                var o,
                                  s,
                                  u,
                                  p,
                                  A,
                                  B,
                                  S,
                                  w,
                                  F,
                                  L,
                                  _,
                                  N,
                                  U,
                                  j,
                                  W,
                                  Y = a.tick++ / a.totalTicks,
                                  V = a.x + a.random * a.tiltCos,
                                  q = a.y + a.random * a.tiltSin,
                                  $ = a.wobbleX + a.random * a.tiltCos,
                                  et = a.wobbleY + a.random * a.tiltSin;
                                if (
                                  ((i.fillStyle =
                                    "rgba(" +
                                    a.color.r +
                                    ", " +
                                    a.color.g +
                                    ", " +
                                    a.color.b +
                                    ", " +
                                    (1 - Y) +
                                    ")"),
                                  i.beginPath(),
                                  Q &&
                                    "path" === a.shape.type &&
                                    "string" == typeof a.shape.path &&
                                    Array.isArray(a.shape.matrix))
                                )
                                  i.fill(
                                    ((o = a.shape.path),
                                    (s = a.shape.matrix),
                                    (u = a.x),
                                    (p = a.y),
                                    (A = 0.1 * Math.abs($ - V)),
                                    (B = 0.1 * Math.abs(et - q)),
                                    (S = (Math.PI / 10) * a.wobble),
                                    (w = new Path2D(o)),
                                    (F = new Path2D()).addPath(
                                      w,
                                      new DOMMatrix(s)
                                    ),
                                    (L = new Path2D()).addPath(
                                      F,
                                      new DOMMatrix([
                                        Math.cos(S) * A,
                                        Math.sin(S) * A,
                                        -Math.sin(S) * B,
                                        Math.cos(S) * B,
                                        u,
                                        p,
                                      ])
                                    ),
                                    L)
                                  );
                                else if ("bitmap" === a.shape.type) {
                                  var en = (Math.PI / 10) * a.wobble,
                                    er = 0.1 * Math.abs($ - V),
                                    ea = 0.1 * Math.abs(et - q),
                                    eo = a.shape.bitmap.width * a.scalar,
                                    el = a.shape.bitmap.height * a.scalar,
                                    es = new DOMMatrix([
                                      Math.cos(en) * er,
                                      Math.sin(en) * er,
                                      -Math.sin(en) * ea,
                                      Math.cos(en) * ea,
                                      a.x,
                                      a.y,
                                    ]);
                                  es.multiplySelf(
                                    new DOMMatrix(a.shape.matrix)
                                  );
                                  var eu = i.createPattern(
                                    X.transform(a.shape.bitmap),
                                    "no-repeat"
                                  );
                                  eu.setTransform(es),
                                    (i.globalAlpha = 1 - Y),
                                    (i.fillStyle = eu),
                                    i.fillRect(
                                      a.x - eo / 2,
                                      a.y - el / 2,
                                      eo,
                                      el
                                    ),
                                    (i.globalAlpha = 1);
                                } else if ("circle" === a.shape)
                                  i.ellipse
                                    ? i.ellipse(
                                        a.x,
                                        a.y,
                                        Math.abs($ - V) * a.ovalScalar,
                                        Math.abs(et - q) * a.ovalScalar,
                                        (Math.PI / 10) * a.wobble,
                                        0,
                                        2 * Math.PI
                                      )
                                    : ((_ = a.x),
                                      (N = a.y),
                                      (U = Math.abs($ - V) * a.ovalScalar),
                                      (j = Math.abs(et - q) * a.ovalScalar),
                                      (W = (Math.PI / 10) * a.wobble),
                                      i.save(),
                                      i.translate(_, N),
                                      i.rotate(W),
                                      i.scale(U, j),
                                      i.arc(0, 0, 1, 0, 2 * Math.PI, void 0),
                                      i.restore());
                                else if ("star" === a.shape)
                                  for (
                                    var ec = (Math.PI / 2) * 3,
                                      ed = 4 * a.scalar,
                                      eh = 8 * a.scalar,
                                      ep = a.x,
                                      em = a.y,
                                      eA = 5,
                                      eg = Math.PI / 5;
                                    eA--;

                                  )
                                    (ep = a.x + Math.cos(ec) * eh),
                                      (em = a.y + Math.sin(ec) * eh),
                                      i.lineTo(ep, em),
                                      (ec += eg),
                                      (ep = a.x + Math.cos(ec) * ed),
                                      (em = a.y + Math.sin(ec) * ed),
                                      i.lineTo(ep, em),
                                      (ec += eg);
                                else
                                  i.moveTo(Math.floor(a.x), Math.floor(a.y)),
                                    i.lineTo(
                                      Math.floor(a.wobbleX),
                                      Math.floor(q)
                                    ),
                                    i.lineTo(Math.floor($), Math.floor(et)),
                                    i.lineTo(
                                      Math.floor(V),
                                      Math.floor(a.wobbleY)
                                    );
                                return (
                                  i.closePath(), i.fill(), a.tick < a.totalTicks
                                );
                              })(N, i);
                            })).length
                              ? (w = W.frame(update))
                              : onDone();
                        })),
                          (F = onDone);
                      })),
                      (p = {
                        addFettis: function (i) {
                          return (_ = _.concat(i)), U;
                        },
                        canvas: S,
                        promise: U,
                        reset: function () {
                          w && W.cancel(w), F && F();
                        },
                      }).promise);
                })(u, V, done);
          }
          return (
            (fire.reset = function () {
              F && F.reset(), p && p.reset();
            }),
            fire
          );
        }
        function getDefaultFire() {
          return (
            U || (U = confettiCannon(null, { useWorker: !0, resize: !0 })), U
          );
        }
        (a.exports = function () {
          return getDefaultFire().apply(this, arguments);
        }),
          (a.exports.reset = function () {
            getDefaultFire().reset();
          }),
          (a.exports.create = confettiCannon),
          (a.exports.shapeFromPath = function (i) {
            if (!Q)
              throw Error("path confetti are not supported in this browser");
            "string" == typeof i ? (s = i) : ((s = i.path), (u = i.matrix));
            var a = new Path2D(s),
              o = document.createElement("canvas").getContext("2d");
            if (!u) {
              for (
                var s, u, p, A, B = 1e3, S = 1e3, w = 0, F = 0, L = 0;
                L < 1e3;
                L += 2
              )
                for (var _ = 0; _ < 1e3; _ += 2)
                  o.isPointInPath(a, L, _, "nonzero") &&
                    ((B = Math.min(B, L)),
                    (S = Math.min(S, _)),
                    (w = Math.max(w, L)),
                    (F = Math.max(F, _)));
              var N = Math.min(10 / (p = w - B), 10 / (A = F - S));
              u = [
                N,
                0,
                0,
                N,
                -Math.round(p / 2 + B) * N,
                -Math.round(A / 2 + S) * N,
              ];
            }
            return { type: "path", path: s, matrix: u };
          }),
          (a.exports.shapeFromText = function (i) {
            var a,
              o = 1,
              s = "#000000",
              u =
                '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
            "string" == typeof i
              ? (a = i)
              : ((a = i.text),
                (o = "scalar" in i ? i.scalar : o),
                (u = "fontFamily" in i ? i.fontFamily : u),
                (s = "color" in i ? i.color : s));
            var p = 10 * o,
              A = "" + p + "px " + u,
              B = new OffscreenCanvas(p, p),
              S = B.getContext("2d");
            S.font = A;
            var w = S.measureText(a),
              F = Math.ceil(w.actualBoundingBoxRight + w.actualBoundingBoxLeft),
              L = Math.ceil(
                w.actualBoundingBoxAscent + w.actualBoundingBoxDescent
              ),
              _ = w.actualBoundingBoxLeft + 2,
              N = w.actualBoundingBoxAscent + 2;
            (F += 4),
              (L += 4),
              ((S = (B = new OffscreenCanvas(F, L)).getContext("2d")).font = A),
              (S.fillStyle = s),
              S.fillText(a, _, N);
            var U = 1 / o;
            return {
              type: "bitmap",
              bitmap: B.transferToImageBitmap(),
              matrix: [U, 0, 0, U, (-F * U) / 2, (-L * U) / 2],
            };
          });
      })(
        (function () {
          return "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : this || {};
        })(),
        s,
        !1
      ),
        (a.Z = s.exports),
        s.exports.create;
    },
  },
]);
