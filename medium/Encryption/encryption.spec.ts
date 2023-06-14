const encryption= require('./encryption');

describe("encryption", () => {
    it("should encryptic a random string", async () => {
        expect(encryption.encryption(['wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny']))
        .toEqual('wmgjpnull cyjqlejgi lyhhdzbui wctlsqsbm fxeoxmsvv ovxjeirfm zadysxbhn nxkkbffpn bawobphfy');
    });
});



