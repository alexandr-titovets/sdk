"use strict";(self.webpackChunkaleo_website=self.webpackChunkaleo_website||[]).push([[529],{1529:function(n,t,r){r.a(n,(async function(n,e){try{r.r(t),r.d(t,{Address:function(){return i.kL},PrivateKey:function(){return i._q},PrivateKeyCiphertext:function(){return i.uq},RecordCiphertext:function(){return i.fW},RecordPlaintext:function(){return i.PD},Signature:function(){return i.Pc},ViewKey:function(){return i.IO},__wbg_buffer_cf65c07de34b9a08:function(){return i.Tq},__wbg_call_9495de66fdbe016b:function(){return i.CB},__wbg_call_95d1ea488d03e4e8:function(){return i.Ks},__wbg_crypto_e1d53a1d73fb10b8:function(){return i.Nk},__wbg_error_f851667af71bcfc6:function(){return i.iX},__wbg_getRandomValues_805f1c3d65988a5a:function(){return i.e},__wbg_globalThis_87cbb8506fecf3a9:function(){return i.I0},__wbg_global_c85a9259e621f3db:function(){return i.Gq},__wbg_length_27a2afe8ab42b09f:function(){return i.ge},__wbg_msCrypto_6e7d3e1f92610cbb:function(){return i.cr},__wbg_new_537b7341ce90bb31:function(){return i.Wh},__wbg_new_abda76e883ba8a5f:function(){return i.a2},__wbg_newnoargs_2b8b6bd7753c76ba:function(){return i.Ru},__wbg_newwithlength_b56c882b57805732:function(){return i.fD},__wbg_node_080f4b19d15bc1fe:function(){return i.f5},__wbg_process_038c26bf42b093f8:function(){return i.DI},__wbg_randomFillSync_6894564c2c334c42:function(){return i.ex},__wbg_require_78a3dcfbdba9cbce:function(){return i.go},__wbg_self_e7c1f827057f6584:function(){return i.Q$},__wbg_set_17499e8aa4003ebd:function(){return i.B1},__wbg_set_wasm:function(){return i.oT},__wbg_stack_658279fe44541cf6:function(){return i.KM},__wbg_subarray_7526649b91a252a6:function(){return i.cM},__wbg_versions_ab37218d2f0b24a8:function(){return i.QT},__wbg_window_a09ec664e14b1b81:function(){return i.ON},__wbindgen_is_function:function(){return i.o$},__wbindgen_is_object:function(){return i.Wl},__wbindgen_is_string:function(){return i.eY},__wbindgen_is_undefined:function(){return i.XP},__wbindgen_memory:function(){return i.oH},__wbindgen_object_clone_ref:function(){return i.m_},__wbindgen_object_drop_ref:function(){return i.ug},__wbindgen_string_new:function(){return i.h4},__wbindgen_throw:function(){return i.Or}});var _=r(7529),i=r(3975),o=n([_]);_=(o.then?(await o)():o)[0],(0,i.oT)(_),e()}catch(n){e(n)}}))},3975:function(n,t,r){let e;function _(n){e=n}r.d(t,{oT:function(){return _},kL:function(){return T},_q:function(){return O},uq:function(){return P},fW:function(){return j},PD:function(){return q},Pc:function(){return C},IO:function(){return K},h4:function(){return I},a2:function(){return S},KM:function(){return D},iX:function(){return B},ug:function(){return R},m_:function(){return W},ex:function(){return A},e:function(){return M},Nk:function(){return N},Wl:function(){return $},DI:function(){return E},QT:function(){return Q},f5:function(){return X},eY:function(){return F},cr:function(){return L},go:function(){return U},o$:function(){return V},Ru:function(){return G},Ks:function(){return H},Q$:function(){return Y},ON:function(){return z},I0:function(){return J},Gq:function(){return Z},XP:function(){return nn},CB:function(){return tn},Tq:function(){return rn},Wh:function(){return en},B1:function(){return _n},ge:function(){return on},fD:function(){return cn},cM:function(){return un},Or:function(){return an},oH:function(){return sn}}),n=r.hmd(n);let i=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let o=null;function c(){return null!==o&&0!==o.byteLength||(o=new Uint8Array(e.memory.buffer)),o}function u(n,t){return i.decode(c().subarray(n,n+t))}const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);let s=a.length;function f(n){s===a.length&&a.push(a.length+1);const t=s;return s=a[t],a[t]=n,t}function d(n){return a[n]}function b(n){const t=d(n);return function(n){n<132||(a[n]=s,s=n)}(n),t}function w(n,t){if(!(n instanceof t))throw new Error(`expected instance of ${t.name}`);return n.ptr}let g=0;function l(n,t){const r=t(1*n.length);return c().set(n,r/1),g=n.length,r}let p=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const y="function"==typeof p.encodeInto?function(n,t){return p.encodeInto(n,t)}:function(n,t){const r=p.encode(n);return t.set(r),{read:n.length,written:r.length}};function h(n,t,r){if(void 0===r){const r=p.encode(n),e=t(r.length);return c().subarray(e,e+r.length).set(r),g=r.length,e}let e=n.length,_=t(e);const i=c();let o=0;for(;o<e;o++){const t=n.charCodeAt(o);if(t>127)break;i[_+o]=t}if(o!==e){0!==o&&(n=n.slice(o)),_=r(_,e,e=o+3*n.length);const t=c().subarray(_+o,_+e);o+=y(n,t).written}return g=o,_}let k=null;function m(){return null!==k&&0!==k.byteLength||(k=new Int32Array(e.memory.buffer)),k}function v(n,t){try{return n.apply(this,t)}catch(n){e.__wbindgen_exn_store(f(n))}}function x(n,t){return c().subarray(n/1,n/1+t)}class T{static __wrap(n){const t=Object.create(T.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.__wbg_address_free(n)}static from_private_key(n){w(n,O);const t=e.address_from_private_key(n.ptr);return T.__wrap(t)}static from_view_key(n){w(n,K);const t=e.address_from_view_key(n.ptr);return T.__wrap(t)}static from_string(n){const t=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g,_=e.address_from_string(t,r);return T.__wrap(_)}to_string(){try{const r=e.__wbindgen_add_to_stack_pointer(-16);e.address_to_string(r,this.ptr);var n=m()[r/4+0],t=m()[r/4+1];return u(n,t)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,t)}}verify(n,t){const r=l(n,e.__wbindgen_malloc),_=g;return w(t,C),0!==e.address_verify(this.ptr,r,_,t.ptr)}}class O{static __wrap(n){const t=Object.create(O.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.__wbg_privatekey_free(n)}constructor(){const n=e.privatekey_new();return O.__wrap(n)}static new_encrypted(n){try{const _=e.__wbindgen_add_to_stack_pointer(-16),i=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),o=g;e.privatekey_new_encrypted(_,i,o);var t=m()[_/4+0],r=m()[_/4+1];if(m()[_/4+2])throw b(r);return P.__wrap(t)}finally{e.__wbindgen_add_to_stack_pointer(16)}}static from_seed_unchecked(n){const t=l(n,e.__wbindgen_malloc),r=g,_=e.privatekey_from_seed_unchecked(t,r);return O.__wrap(_)}static from_string(n){try{const _=e.__wbindgen_add_to_stack_pointer(-16),i=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),o=g;e.privatekey_from_string(_,i,o);var t=m()[_/4+0],r=m()[_/4+1];if(m()[_/4+2])throw b(r);return O.__wrap(t)}finally{e.__wbindgen_add_to_stack_pointer(16)}}to_string(){try{const r=e.__wbindgen_add_to_stack_pointer(-16);e.privatekey_to_string(r,this.ptr);var n=m()[r/4+0],t=m()[r/4+1];return u(n,t)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,t)}}to_view_key(){const n=e.privatekey_to_view_key(this.ptr);return K.__wrap(n)}to_address(){const n=e.privatekey_to_address(this.ptr);return T.__wrap(n)}toCiphertext(n){try{const _=e.__wbindgen_add_to_stack_pointer(-16),i=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),o=g;e.privatekey_toCiphertext(_,this.ptr,i,o);var t=m()[_/4+0],r=m()[_/4+1];if(m()[_/4+2])throw b(r);return P.__wrap(t)}finally{e.__wbindgen_add_to_stack_pointer(16)}}static fromPrivateKeyCiphertext(n,t){try{const i=e.__wbindgen_add_to_stack_pointer(-16);w(n,P);const o=h(t,e.__wbindgen_malloc,e.__wbindgen_realloc),c=g;e.privatekey_fromPrivateKeyCiphertext(i,n.ptr,o,c);var r=m()[i/4+0],_=m()[i/4+1];if(m()[i/4+2])throw b(_);return O.__wrap(r)}finally{e.__wbindgen_add_to_stack_pointer(16)}}sign(n){const t=l(n,e.__wbindgen_malloc),r=g,_=e.privatekey_sign(this.ptr,t,r);return C.__wrap(_)}}class P{static __wrap(n){const t=Object.create(P.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.__wbg_privatekeyciphertext_free(n)}static encryptPrivateKey(n,t){try{const i=e.__wbindgen_add_to_stack_pointer(-16);w(n,O);const o=h(t,e.__wbindgen_malloc,e.__wbindgen_realloc),c=g;e.privatekeyciphertext_encryptPrivateKey(i,n.ptr,o,c);var r=m()[i/4+0],_=m()[i/4+1];if(m()[i/4+2])throw b(_);return P.__wrap(r)}finally{e.__wbindgen_add_to_stack_pointer(16)}}decryptToPrivateKey(n){try{const _=e.__wbindgen_add_to_stack_pointer(-16),i=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),o=g;e.privatekeyciphertext_decryptToPrivateKey(_,this.ptr,i,o);var t=m()[_/4+0],r=m()[_/4+1];if(m()[_/4+2])throw b(r);return O.__wrap(t)}finally{e.__wbindgen_add_to_stack_pointer(16)}}}class j{static __wrap(n){const t=Object.create(j.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.__wbg_recordciphertext_free(n)}static fromString(n){try{const _=e.__wbindgen_add_to_stack_pointer(-16),i=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),o=g;e.recordciphertext_fromString(_,i,o);var t=m()[_/4+0],r=m()[_/4+1];if(m()[_/4+2])throw b(r);return j.__wrap(t)}finally{e.__wbindgen_add_to_stack_pointer(16)}}toString(){try{const r=e.__wbindgen_add_to_stack_pointer(-16);e.recordciphertext_toString(r,this.ptr);var n=m()[r/4+0],t=m()[r/4+1];return u(n,t)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,t)}}decrypt(n){try{const _=e.__wbindgen_add_to_stack_pointer(-16);w(n,K),e.recordciphertext_decrypt(_,this.ptr,n.ptr);var t=m()[_/4+0],r=m()[_/4+1];if(m()[_/4+2])throw b(r);return q.__wrap(t)}finally{e.__wbindgen_add_to_stack_pointer(16)}}isOwner(n){return w(n,K),0!==e.recordciphertext_isOwner(this.ptr,n.ptr)}}class q{static __wrap(n){const t=Object.create(q.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.__wbg_recordplaintext_free(n)}static fromString(n){try{const _=e.__wbindgen_add_to_stack_pointer(-16),i=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),o=g;e.recordplaintext_fromString(_,i,o);var t=m()[_/4+0],r=m()[_/4+1];if(m()[_/4+2])throw b(r);return q.__wrap(t)}finally{e.__wbindgen_add_to_stack_pointer(16)}}toString(){try{const r=e.__wbindgen_add_to_stack_pointer(-16);e.recordplaintext_toString(r,this.ptr);var n=m()[r/4+0],t=m()[r/4+1];return u(n,t)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,t)}}gates(){const n=e.recordplaintext_gates(this.ptr);return BigInt.asUintN(64,n)}}class C{static __wrap(n){const t=Object.create(C.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.__wbg_signature_free(n)}static sign(n,t){w(n,O);const r=l(t,e.__wbindgen_malloc),_=g,i=e.signature_sign(n.ptr,r,_);return C.__wrap(i)}verify(n,t){w(n,T);const r=l(t,e.__wbindgen_malloc),_=g;return 0!==e.signature_verify(this.ptr,n.ptr,r,_)}static from_string(n){const t=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g,_=e.signature_from_string(t,r);return C.__wrap(_)}to_string(){try{const r=e.__wbindgen_add_to_stack_pointer(-16);e.signature_to_string(r,this.ptr);var n=m()[r/4+0],t=m()[r/4+1];return u(n,t)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,t)}}}class K{static __wrap(n){const t=Object.create(K.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.__wbg_viewkey_free(n)}static from_private_key(n){w(n,O);const t=e.viewkey_from_private_key(n.ptr);return K.__wrap(t)}static from_string(n){const t=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),r=g,_=e.viewkey_from_string(t,r);return K.__wrap(_)}to_string(){try{const r=e.__wbindgen_add_to_stack_pointer(-16);e.viewkey_to_string(r,this.ptr);var n=m()[r/4+0],t=m()[r/4+1];return u(n,t)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(n,t)}}to_address(){const n=e.viewkey_to_address(this.ptr);return T.__wrap(n)}decrypt(n){try{const a=e.__wbindgen_add_to_stack_pointer(-16),s=h(n,e.__wbindgen_malloc,e.__wbindgen_realloc),f=g;e.viewkey_decrypt(a,this.ptr,s,f);var t=m()[a/4+0],r=m()[a/4+1],_=m()[a/4+2],i=m()[a/4+3],o=t,c=r;if(i)throw o=0,c=0,b(_);return u(o,c)}finally{e.__wbindgen_add_to_stack_pointer(16),e.__wbindgen_free(o,c)}}}function I(n,t){return f(u(n,t))}function S(){return f(new Error)}function D(n,t){const r=h(d(t).stack,e.__wbindgen_malloc,e.__wbindgen_realloc),_=g;m()[n/4+1]=_,m()[n/4+0]=r}function B(n,t){try{console.error(u(n,t))}finally{e.__wbindgen_free(n,t)}}function R(n){b(n)}function W(n){return f(d(n))}function A(){return v((function(n,t,r){d(n).randomFillSync(x(t,r))}),arguments)}function M(){return v((function(n,t){d(n).getRandomValues(d(t))}),arguments)}function N(n){return f(d(n).crypto)}function $(n){const t=d(n);return"object"==typeof t&&null!==t}function E(n){return f(d(n).process)}function Q(n){return f(d(n).versions)}function X(n){return f(d(n).node)}function F(n){return"string"==typeof d(n)}function L(n){return f(d(n).msCrypto)}function U(){return v((function(){return f(n.require)}),arguments)}function V(n){return"function"==typeof d(n)}function G(n,t){return f(new Function(u(n,t)))}function H(){return v((function(n,t){return f(d(n).call(d(t)))}),arguments)}function Y(){return v((function(){return f(self.self)}),arguments)}function z(){return v((function(){return f(window.window)}),arguments)}function J(){return v((function(){return f(globalThis.globalThis)}),arguments)}function Z(){return v((function(){return f(r.g.global)}),arguments)}function nn(n){return void 0===d(n)}function tn(){return v((function(n,t,r){return f(d(n).call(d(t),d(r)))}),arguments)}function rn(n){return f(d(n).buffer)}function en(n){return f(new Uint8Array(d(n)))}function _n(n,t,r){d(n).set(d(t),r>>>0)}function on(n){return d(n).length}function cn(n){return f(new Uint8Array(n>>>0))}function un(n,t,r){return f(d(n).subarray(t>>>0,r>>>0))}function an(n,t){throw new Error(u(n,t))}function sn(){return f(e.memory)}},7529:function(n,t,r){var e=r(3975);n.exports=r.v(t,n.id,"ebb9b702f04b576686e9",{"./aleo_wasm_bg.js":{__wbindgen_string_new:e.h4,__wbg_new_abda76e883ba8a5f:e.a2,__wbg_stack_658279fe44541cf6:e.KM,__wbg_error_f851667af71bcfc6:e.iX,__wbindgen_object_drop_ref:e.ug,__wbindgen_object_clone_ref:e.m_,__wbg_randomFillSync_6894564c2c334c42:e.ex,__wbg_getRandomValues_805f1c3d65988a5a:e.e,__wbg_crypto_e1d53a1d73fb10b8:e.Nk,__wbindgen_is_object:e.Wl,__wbg_process_038c26bf42b093f8:e.DI,__wbg_versions_ab37218d2f0b24a8:e.QT,__wbg_node_080f4b19d15bc1fe:e.f5,__wbindgen_is_string:e.eY,__wbg_msCrypto_6e7d3e1f92610cbb:e.cr,__wbg_require_78a3dcfbdba9cbce:e.go,__wbindgen_is_function:e.o$,__wbg_newnoargs_2b8b6bd7753c76ba:e.Ru,__wbg_call_95d1ea488d03e4e8:e.Ks,__wbg_self_e7c1f827057f6584:e.Q$,__wbg_window_a09ec664e14b1b81:e.ON,__wbg_globalThis_87cbb8506fecf3a9:e.I0,__wbg_global_c85a9259e621f3db:e.Gq,__wbindgen_is_undefined:e.XP,__wbg_call_9495de66fdbe016b:e.CB,__wbg_buffer_cf65c07de34b9a08:e.Tq,__wbg_new_537b7341ce90bb31:e.Wh,__wbg_set_17499e8aa4003ebd:e.B1,__wbg_length_27a2afe8ab42b09f:e.ge,__wbg_newwithlength_b56c882b57805732:e.fD,__wbg_subarray_7526649b91a252a6:e.cM,__wbindgen_throw:e.Or,__wbindgen_memory:e.oH}})}}]);